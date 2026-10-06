import Image from "next/image";
import { site } from "@/data/site";
import { SocialLinks } from "./ui/SocialLinks";

const handle = "absolute h-2.5 w-2.5 border border-accent bg-navy-950";

function ProfileFrame() {
  return (
    <div
      className="animate-hero-in relative mx-auto w-full max-w-[19rem] py-8 sm:max-w-sm lg:max-w-md"
      style={{ animationDelay: "220ms" }}
    >
      <span className="absolute left-0 top-0 text-xs font-medium text-accent">{site.role}</span>

      <div className="relative aspect-[4/5] rounded-sm border border-accent/50 p-2.5">
        <span aria-hidden="true" className={`${handle} -left-[5px] -top-[5px]`} />
        <span aria-hidden="true" className={`${handle} -right-[5px] -top-[5px]`} />
        <span aria-hidden="true" className={`${handle} -bottom-[5px] -left-[5px]`} />
        <span aria-hidden="true" className={`${handle} -bottom-[5px] -right-[5px]`} />

        <div className="relative h-full w-full overflow-hidden rounded-[2px] bg-navy-800">
          {site.profileImage ? (
            <Image
              src={site.profileImage}
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
              className="object-cover"
            />
          ) : (
            <div
              role="img"
              aria-label={`Profile photo placeholder for ${site.name}`}
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950"
            >
              <div aria-hidden="true" className="bg-grid-sm absolute inset-0 opacity-60" />
              <span
                aria-hidden="true"
                className="relative font-display text-7xl font-semibold tracking-tight text-white/20 sm:text-8xl"
              >
                FK
              </span>
            </div>
          )}
        </div>
      </div>

      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-accent-strong px-2.5 py-1 text-xs font-medium text-white">
        BSc in Software Engineering
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] scroll-mt-0 items-center pb-16 pt-28 lg:pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p
            className="animate-hero-in glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm text-muted"
            style={{ animationDelay: "40ms" }}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.currentRole} at {site.currentCompany}
          </p>

          <h1
            id="hero-title"
            className="animate-hero-in mt-7 font-display text-[clamp(2.6rem,7.5vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
            style={{ animationDelay: "100ms" }}
          >
            {site.name}
          </h1>

          <p
            className="animate-hero-in mt-5 max-w-xl font-display text-xl font-medium leading-snug text-accent-soft sm:text-2xl"
            style={{ animationDelay: "160ms" }}
          >
            {site.headline}
          </p>

          <p
            className="animate-hero-in mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "220ms" }}
          >
            {site.intro}
          </p>

          <div
            className="animate-hero-in mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "280ms" }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Let&apos;s Connect
            </a>
          </div>

          <div className="animate-hero-in mt-9" style={{ animationDelay: "340ms" }}>
            <SocialLinks />
          </div>
        </div>

        <ProfileFrame />
      </div>
    </section>
  );
}
