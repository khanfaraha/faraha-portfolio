import { site } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { MailIcon, PinIcon } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SocialLinks } from "./ui/SocialLinks";

export function Contact() {
  return (
    <Section id="contact" className="pb-24 sm:pb-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <h2
            id="contact-title"
            className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted">
            Have a project, opportunity, or idea in mind? Let&apos;s connect.
          </p>

          <ul className="mt-8 space-y-4 text-base">
            <li className="flex items-center gap-3">
              <MailIcon className="h-5 w-5 shrink-0 text-accent" />
              <a
                href={`mailto:${site.email}`}
                className="break-all text-white underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <PinIcon className="h-5 w-5 shrink-0 text-accent" />
              <span>{site.location}</span>
            </li>
          </ul>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass relative rounded-3xl p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
