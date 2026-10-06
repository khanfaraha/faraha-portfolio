"use client";

import { useEffect, useState } from "react";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/cn";
import { CloseIcon, MenuIcon } from "./ui/Icons";

const SECTION_IDS = [
  "home",
  "about",
  "experience",
  "projects",
  "design",
  "development",
  "skills",
  "leadership",
  "education",
  "contact",
];

const NAV_ALIAS: Record<string, string> = {
  leadership: "skills",
  education: "skills",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const targets = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(NAV_ALIAS[entry.target.id] ?? entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        scrolled || open
          ? "border-white/10 bg-navy-950/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          aria-label={`${site.name}, back to top`}
          className="flex items-center gap-3 font-display text-base font-semibold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-lg border border-accent/40 bg-navy-900 text-sm text-accent"
          >
            FK
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 after:absolute after:inset-x-3 after:bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300",
                    isActive
                      ? "text-white after:scale-x-100"
                      : "text-muted after:scale-x-0 hover:text-white",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-accent/50 lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <div id="mobile-menu" className={cn("lg:hidden", open ? "block" : "hidden")}>
        <ul className="mx-auto max-w-6xl space-y-1 px-5 pb-5 sm:px-8">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex min-h-[48px] items-center rounded-xl px-4 text-base font-medium transition-colors",
                    isActive ? "bg-white/[0.07] text-white" : "text-muted hover:bg-white/[0.04] hover:text-white",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
