import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { skillColumns } from "@/data/skills";
import { ArrowUpRightIcon, GitHubIcon } from "./ui/Icons";
import { ProjectImage } from "./ui/ProjectImage";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";
import { Tag } from "./ui/Tag";

const engineeringProjects = projects.filter((project) => project.group === "engineering");
const stack = skillColumns.find((column) => column.id === "development");

export function SoftwareEngineering() {
  return (
    <Section id="development">
      <SectionHeading
        id="development"
        title="Software engineering"
        description="A BSc in Software Engineering and hands-on development across web and mobile: React.js interfaces, a full-stack e-commerce app, and Flutter mobile apps."
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <Reveal>
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold">Technologies</h3>
            <div className="mt-5 space-y-6">
              {stack?.groups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-sm text-dim">{group.title}</h4>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Tag>{item}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="space-y-6">
          {engineeringProjects.map((project, index) => {
            const cover = project.image ?? project.gallery?.[0];
            return (
              <Reveal key={project.slug} delay={index * 80}>
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-accent/40 hover:shadow-glow">
                  {cover ? (
                    <div className="relative aspect-[16/9] overflow-hidden bg-navy-800">
                      <ProjectImage
                        image={cover}
                        title={project.title}
                        sizes="(min-width: 1024px) 640px, 92vw"
                      />
                    </div>
                  ) : null}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-accent">{project.category}</p>
                        <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">{project.title}</h3>
                      </div>
                      {project.links.github ? (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} repository on GitHub (opens in a new tab)`}
                          className="btn-secondary min-h-[44px] px-5 py-2 text-sm"
                        >
                          <GitHubIcon className="h-4 w-4" />
                          Repository
                        </a>
                      ) : null}
                    </div>

                    <p className="mt-4 text-base leading-relaxed text-muted">{project.summary}</p>

                    <h4 className="mt-6 font-display text-base font-semibold">Key functionality</h4>
                    <ul className="mt-3 space-y-2 text-base leading-relaxed text-muted">
                      {project.details.map((line) => (
                        <li key={line} className="flex gap-3">
                          <span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>

                    {project.tools.length > 0 ? (
                      <ul aria-label="Technologies used" className="mt-6 flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <li key={tool}>
                            <Tag>{tool}</Tag>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {project.links.demo ? (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-white"
                      >
                        Live demo <ArrowUpRightIcon className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}

          <Reveal>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-white"
            >
              More repositories on GitHub <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
