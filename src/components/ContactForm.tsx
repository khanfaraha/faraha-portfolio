"use client";

import { useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { site } from "@/data/site";
import { LIMITS, validateContact, type ContactField, type ContactValues, type FieldErrors } from "@/lib/validate";
import { cn } from "@/lib/cn";
import { AlertIcon, CheckIcon, SpinnerIcon } from "./ui/Icons";

type Status = "idle" | "submitting" | "success" | "error";

const emptyValues: ContactValues = { name: "", email: "", subject: "", message: "" };
const fieldOrder: ContactField[] = ["name", "email", "subject", "message"];

const inputClass =
  "w-full rounded-xl border bg-navy-950/70 px-4 py-3 text-base text-white placeholder:text-dim transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40";

interface ApiResponse {
  ok?: boolean;
  message?: string;
  errors?: FieldErrors;
}

export function ContactForm() {
  const uid = useId();
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const fieldId = (field: ContactField) => `${uid}-${field}`;

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const field = event.target.name as ContactField;
    const value = event.target.value;
    setValues((previous) => ({ ...previous, [field]: value }));
    if (errors[field]) {
      setErrors((previous) => ({ ...previous, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const { values: cleaned, errors: found } = validateContact(values);
    setErrors(found);

    const firstInvalid = fieldOrder.find((field) => found[field]);
    if (firstInvalid) {
      setStatus("idle");
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...cleaned, company: honeypotRef.current?.value ?? "" }),
      });
      const data = (await response.json().catch(() => null)) as ApiResponse | null;

      if (response.ok && data?.ok) {
        setValues(emptyValues);
        setErrors({});
        setStatus("success");
        return;
      }

      if (data?.errors) setErrors(data.errors);
      setServerMessage(data?.message ?? "Your message could not be sent.");
      setStatus("error");
    } catch {
      setServerMessage("The connection failed. Check your internet connection and try again.");
      setStatus("error");
    }
  }

  function renderField(
    field: ContactField,
    label: string,
    options: { type?: string; autoComplete?: string; multiline?: boolean },
  ) {
    const id = fieldId(field);
    const errorId = `${id}-error`;
    const error = errors[field];
    const shared = {
      id,
      name: field,
      value: values[field],
      onChange: handleChange,
      required: true,
      "aria-required": true as const,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? errorId : undefined,
      maxLength: LIMITS[field],
      disabled: status === "submitting",
      className: cn(inputClass, error ? "border-red-400/70" : "border-white/15"),
    };

    return (
      <div>
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-white">
          {label} <span aria-hidden="true" className="text-accent">*</span>
        </label>
        {options.multiline ? (
          <textarea {...shared} rows={6} className={cn(shared.className, "resize-y")} />
        ) : (
          <input {...shared} type={options.type ?? "text"} autoComplete={options.autoComplete} />
        )}
        {error ? (
          <p id={errorId} className="mt-2 text-sm text-red-300">
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent text-ink">
          <CheckIcon className="h-6 w-6" />
        </span>
        <p className="mt-5 font-display text-xl font-semibold">Message sent</p>
        <p className="mt-2 text-base text-muted">
          Thanks for reaching out! Your message has been sent successfully.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-secondary mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {renderField("name", "Name", { autoComplete: "name" })}
        {renderField("email", "Email", { type: "email", autoComplete: "email" })}
      </div>
      {renderField("subject", "Subject", {})}
      {renderField("message", "Message", { multiline: true })}

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input ref={honeypotRef} type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div aria-live="polite">
        {status === "error" ? (
          <div
            role="alert"
            className="flex gap-3 rounded-xl border border-red-400/40 bg-red-400/[0.08] p-4 text-sm text-red-200"
          >
            <AlertIcon className="mt-0.5 h-5 w-5 shrink-0" />
            <p>
              {serverMessage} You can also email me directly at{" "}
              <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-2">
                {site.email}
              </a>
              .
            </p>
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <SpinnerIcon className="h-5 w-5" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
