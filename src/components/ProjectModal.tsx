"use client";

import { useEffect, useRef, useState } from "react";
import type { Project, ProjectImageData } from "@/data/projects";
import { ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./ui/Icons";
import { ProjectImage } from "./ui/ProjectImage";
import { Tag } from "./ui/Tag";
import { cn } from "@/lib/cn";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function imagesFor(project: Project): ProjectImageData[] {
  if (project.gallery && project.gallery.length > 0) return project.gallery;
  if (project.image) return [project.image];
  return [];
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      dialog.showModal();
    } else if (!project && dialog.open) {
      dialog.close();
    }

    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  if (!project) {
    return (
      <dialog
        ref={dialogRef}
        onClose={onClose}
        className="m-auto w-[min(94vw,52rem)] max-h-[92vh] overflow-y-auto rounded-2xl border border-white/10 bg-navy-900 p-0 text-white shadow-glow backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      />
    );
  }

  const images = imagesFor(project);
  const activeImage = images[activeIndex];

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="m-auto w-[min(94vw,52rem)] max-h-[92vh] overflow-y-auto rounded-2xl border border-white/10 bg-navy-900 p-0 text-white shadow-glow backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-navy-950/80 text-white backdrop-blur transition-colors hover:border-accent/60"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="relative h-56 bg-navy-800 sm:h-72">
          <ProjectImage
            key={activeImage?.src ?? "placeholder"}
            image={activeImage}
            title={project.title}
            fit="contain"
            sizes="(min-width: 832px) 832px, 94vw"
          />

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index - 1 + images.length) % images.length)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-navy-950/80 text-white backdrop-blur transition-colors hover:border-accent/60"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index + 1) % images.length)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-navy-950/80 text-white backdrop-blur transition-colors hover:border-accent/60"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </>
          ) : null}
        </div>

        {images.length > 1 ? (
          <div className="flex gap-2 overflow-x-auto border-b border-white/10 bg-navy-950/40 p-3">
            {images.map((img, index) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1} of ${images.length}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={cn(
                  "relative h-14 w-14 shrink-0 overflow-hidden rounded-md border transition-colors",
                  index === activeIndex ? "border-accent" : "border-white/10 hover:border-white/30",
                )}
              >
                <ProjectImage image={img} title={project.title} sizes="56px" />
              </button>
            ))}
          </div>
        ) : null}

        <div className="space-y-7 p-6 sm:p-8">
          <div>
            <p className="text-sm font-medium text-accent">{project.category}</p>
            <h3
              id="project-modal-title"
              className="mt-1 font-display text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {project.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted">{project.summary}</p>
          </div>

          {project.details.length > 0 ? (
            <div>
              <h4 className="font-display text-base font-semibold">What this project covers</h4>
              <ul className="mt-3 space-y-2 text-base leading-relaxed text-muted">
                {project.details.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.contribution ? (
            <div>
              <h4 className="font-display text-base font-semibold">My contribution</h4>
              <p className="mt-2 text-base text-muted">{project.contribution}</p>
            </div>
          ) : null}

          {project.tools.length > 0 ? (
            <div>
              <h4 className="font-display text-base font-semibold">Tools and technologies</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li key={tool}>
                    <Tag>{tool}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3 pt-1">
            {project.links.behance ? (
              <a href={project.links.behance} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View on Behance <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            ) : null}
            {project.links.github ? (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View on GitHub <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            ) : null}
            {project.links.demo ? (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Live demo <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </dialog>
  );
}
