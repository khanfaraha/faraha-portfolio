import { skillColumns } from "@/data/skills";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";
import { Tag } from "./ui/Tag";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        id="skills"
        title="Skills"
        description="Design, development, and the professional skills I use to lead and collaborate."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {skillColumns.map((column, index) => (
          <Reveal key={column.id} delay={index * 80}>
            <section className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">{column.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{column.description}</p>

              <div className="mt-6 space-y-6">
                {column.groups.map((group) => (
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
            </section>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
