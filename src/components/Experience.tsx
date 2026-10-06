import { experience } from "@/data/experience";
import { cn } from "@/lib/cn";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";
import { Tag } from "./ui/Tag";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        id="experience"
        title="Experience"
        description="Leading design initiatives, supporting creative teams, and designing intuitive digital experiences and engaging content for e-learning and digital products."
      />

      <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-10">
        {experience.map((item, index) => (
          <li key={`${item.company}-${item.role}`} className="relative">
            <span
              aria-hidden="true"
              className={cn(
                "absolute -left-[31px] top-7 h-3 w-3 rounded-full ring-4 ring-navy-950 sm:-left-[47px]",
                item.primary ? "bg-accent" : "bg-navy-700",
              )}
            />
            <Reveal delay={index * 60}>
              <article
                className={cn(
                  "rounded-2xl border p-6 sm:p-8",
                  item.primary
                    ? "glass border-accent/30 shadow-glow"
                    : "border-white/10 bg-white/[0.03]",
                )}
              >
                <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">{item.company}</h3>
                    <p className={cn("mt-1 text-base", item.primary ? "text-accent-soft" : "text-muted")}>
                      {item.role}
                    </p>
                  </div>
                  <p className="text-sm text-dim sm:shrink-0">{item.period}</p>
                </header>

                <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-muted">
                  {item.highlights.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {item.focus ? (
                  <ul aria-label="Focus areas" className="mt-6 flex flex-wrap gap-2">
                    {item.focus.map((tag) => (
                      <li key={tag}>
                        <Tag>{tag}</Tag>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
