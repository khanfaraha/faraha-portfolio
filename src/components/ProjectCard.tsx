import type { Project } from "@/data/projects";
import { ArrowUpRightIcon } from "./ui/Icons";
import { ProjectImage } from "./ui/ProjectImage";
import { Tag } from "./ui/Tag";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const linkClass =
  "relative z-10 inline-flex items-center gap-1 rounded text-sm text-muted transition-colors hover:text-white";

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { title, category, summary, tools, links } = project;
  const cover = project.image ?? project.gallery?.[0];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow has-[:focus-visible]:border-accent/60">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-800">
        <ProjectImage
          image={cover}
          title={title}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
          className="transition duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy-950/85 px-3 py-1 text-xs font-medium text-accent-soft backdrop-blur">
          {category}
        </span>
        {project.gallery && project.gallery.length > 1 ? (
          <span className="absolute bottom-3 right-3 rounded-full bg-navy-950/85 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
            {project.gallery.length} images
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold leading-snug">
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-haspopup="dialog"
            className="text-left after:absolute after:inset-0 after:content-['']"
          >
            {title}
          </button>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>

        {tools.length > 0 ? (
          <ul aria-label="Tools and technologies" className="mt-4 flex flex-wrap gap-1.5">
            {tools.slice(0, 5).map((tool) => (
              <li key={tool}>
                <Tag>{tool}</Tag>
              </li>
            ))}
            {tools.length > 5 ? (
              <li>
                <Tag>{`+${tools.length - 5} more`}</Tag>
              </li>
            ) : null}
          </ul>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
          <span className="text-sm font-medium text-accent transition-transform duration-200 group-hover:translate-x-0.5">
            View details
          </span>
          {links.github ? (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub (opens in a new tab)`}
              className={linkClass}
            >
              GitHub <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          ) : null}
          {links.behance ? (
            <a
              href={links.behance}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on Behance (opens in a new tab)`}
              className={linkClass}
            >
              Behance <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          ) : null}
          {links.demo ? (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo (opens in a new tab)`}
              className={linkClass}
            >
              Live demo <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
