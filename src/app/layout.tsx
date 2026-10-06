import type { Metadata, Viewport } from "next";
import { Figtree, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site, siteUrl } from "@/data/site";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const title = `${site.name} | ${site.role}`;
const description =
  "Portfolio of Faraha Ulfath Khan, a Product Designer and Deputy Project Lead at Staff Asia with a software engineering background. UI/UX, digital product design, and web and mobile development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "Faraha Ulfath Khan",
    "Product Designer",
    "UI/UX Designer",
    "Digital product design",
    "Product design lead",
    "Software Engineering",
    "Figma",
    "React.js",
    "Flutter",
    "Sylhet",
    "Bangladesh",
  ],
  authors: [{ name: site.name, url: site.socials.linkedin }],
  creator: site.name,
  openGraph: {
    type: "website",
    title,
    description,
    siteName: site.name,
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#060A14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <a
          href="#main"
          className="sr-only rounded-full bg-accent px-5 py-2.5 font-medium text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
        >
          Skip to content
        </a>

        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="bg-grid absolute inset-0" />
          <div
            className="orb animate-drift -left-[10%] top-[-10%] h-[60vmax] w-[60vmax]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(59,130,246,0.16), rgba(59,130,246,0) 70%)",
            }}
          />
          <div
            className="orb animate-drift -right-[15%] top-[35%] h-[50vmax] w-[50vmax]"
            style={{
              animationDelay: "-12s",
              background:
                "radial-gradient(closest-side, rgba(92,200,255,0.10), rgba(92,200,255,0) 70%)",
            }}
          />
        </div>

        <Navbar />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
