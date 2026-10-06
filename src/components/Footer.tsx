import { site } from "@/data/site";
import { SocialLinks } from "./ui/SocialLinks";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 text-sm text-dim sm:flex-row sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
