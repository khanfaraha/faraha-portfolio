"use client";

import { useState } from "react";
import { featuredCategories, projects, type Project, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/cn";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = [
  "All",
  ...featuredCategories.filter((category) => projects.some((project) => project.category === category)),
];

export function FeaturedProjects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        title="Featured projects"
        description="A curated selection of product design, digital experiences, and creative work. Explore each project to see the process, approach, and final outcome."
      />

      <Reveal>
        <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2.5">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={cn(
                "min-h-[44px] rounded-full border px-4 text-sm font-medium transition-colors duration-200",
                filter === item
                  ? "border-accent bg-accent text-ink"
                  : "border-white/15 bg-white/[0.03] text-muted hover:border-accent/50 hover:text-white",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </Reveal>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} onOpen={setSelected} />
          </li>
        ))}
      </ul>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
