import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 500) {
    for (const [storedKey, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(storedKey);
    }
  }
  return recent.length > MAX_REQUESTS;
}

function fail(status: number, message: string, errors?: Record<string, string>) {
  return NextResponse.json({ ok: false, message, errors }, { status });
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return fail(429, "Too many messages in a short time. Please wait a few minutes and try again.");
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return fail(400, "The request could not be read. Please try again.");
  }

  const data = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;

  if (typeof data.company === "string" && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const { values, errors } = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return fail(400, "Please fix the highlighted fields and try again.", errors);
  }

  const formId = process.env.FORMSPREE_FORM_ID;
  if (!formId) {
    console.error("Contact form: FORMSPREE_FORM_ID is not set.");
    return fail(500, "The contact form is not available right now.");
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        subject: `Portfolio message: ${values.subject}`,
        message: values.message,
        _replyto: values.email,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("Contact form: Formspree rejected the request.", response.status, detail);
      return fail(502, "Your message could not be delivered. Please try again shortly.");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form: could not reach Formspree.", error);
    return fail(502, "Your message could not be delivered. Please try again shortly.");
  }
}
