import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { ArrowUpRightIcon } from "./ui/Icons";
import { ProjectImage } from "./ui/ProjectImage";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";
import { Tag } from "./ui/Tag";

const lead = projects.find((project) => project.slug === "login-signup-page");

const panels = [
  {
    title: "At Staff Asia",
    items: [
      "Designing UI/UX and digital products for intuitive user experiences",
      "Designing video-based EdTech courses with modern design tools",
      "Competitor and market research for product growth",
    ],
  },
  {
    title: "At CodeSoft",
    items: [
      "Login and sign-up interfaces built around usability and user flow",
      "A food delivery app, including key screens and user interactions",
      "Responsive, user-friendly website interfaces",
    ],
  },
];

const practice = [
  "User-centered design",
  "Design thinking",
  "User research",
  "Wireframing",
  "Prototyping",
  "Responsive design",
  "Visual design",
];

export function ProductDesign() {
  return (
    <Section id="design" className="bg-navy-900/40">
      <SectionHeading
        id="design"
        title="Product design and UI/UX"
        description="User-focused interfaces and digital products, from wireframes and prototypes to responsive layouts."
      />

      {lead ? (
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative flex min-h-[20rem] items-center justify-center p-6 sm:p-10">
              <div aria-hidden="true" className="bg-grid-sm absolute inset-0 opacity-60" />
              <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-xl border border-white/15 bg-navy-900 shadow-glow">
                <ProjectImage
                  image={lead.image}
                  title={lead.title}
                  sizes="(min-width: 1024px) 448px, 90vw"
                  fit="contain"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-sm font-medium text-accent">{lead.category}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {lead.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">{lead.summary}</p>

              <ul className="mt-5 space-y-2 text-base text-muted">
                {lead.details.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <ul aria-label="Tools" className="mt-5 flex flex-wrap gap-2">
                {lead.tools.map((tool) => (
                  <li key={tool}>
                    <Tag>{tool}</Tag>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {lead.links.behance ? (
                  <a href={lead.links.behance} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    View on Behance <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                ) : null}
                <a
                  href={site.socials.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  All design work <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ) : null}

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {panels.map((panel, index) => (
          <Reveal key={panel.title} delay={index * 70}>
            <section className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-display text-lg font-semibold">{panel.title}</h3>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted">
                {panel.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}

        <Reveal delay={140}>
          <section className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-display text-lg font-semibold">Design practice</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {practice.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>
    </Section>
  );
}
