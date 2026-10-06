import type { ComponentType, SVGProps } from "react";
import { site } from "@/data/site";
import { BehanceIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

interface SocialItem {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  external: boolean;
}

const items: SocialItem[] = [
  { label: "GitHub", href: site.socials.github, Icon: GitHubIcon, external: true },
  { label: "Behance", href: site.socials.behance, Icon: BehanceIcon, external: true },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon, external: true },
  { label: "Email", href: `mailto:${site.email}`, Icon: MailIcon, external: false },
];

export function SocialLinks() {
  return (
    <ul aria-label="Social links" className="flex flex-wrap items-center gap-3">
      {items.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={external ? `${label} (opens in a new tab)` : `Send an email to ${site.email}`}
            title={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-muted transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-white"
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
