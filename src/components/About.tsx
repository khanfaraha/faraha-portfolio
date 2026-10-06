import { site } from "@/data/site";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";
import { Tag } from "./ui/Tag";

const facts = [
  { label: "Current role", value: `${site.currentRole}, ${site.currentCompany}` },
  { label: "Education", value: "BSc in Software Engineering, Metropolitan University" },
  { label: "Based in", value: site.location },
];

const strengths = [
  "Product design",
  "UI/UX",
  "Digital product design",
  "Software engineering background",
  "Leadership and mentoring",
  "Collaboration",
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading id="about" title="About me" />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal className="max-w-xl space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I&apos;m a Product Designer focused on creating intuitive UI/UX, user-centered products, and engaging digital experiences across different products and brands. My work spans user research, wireframing, prototyping, interaction design, and responsive interfaces.
          </p>
          <p>
            I hold a BSc in Software Engineering with hands-on knowledge of HTML, CSS, JavaScript, React.js, Tailwind CSS, C, and C++. This technical background helps me understand how digital products are built and bridge the gap between design and development.
          </p>
          <p>
            Alongside product design, I have experience leading and mentoring creative teams, reviewing design work, and solving design challenges. I enjoy turning complex ideas into simple, functional, and meaningful experiences for users.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <dl className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
            {facts.map((fact) => (
              <div key={fact.label} className="px-6 py-5">
                <dt className="text-sm text-dim">{fact.label}</dt>
                <dd className="mt-1 text-base text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <h3 className="sr-only">Areas of focus</h3>
        <ul className="flex flex-wrap gap-2.5">
          {strengths.map((item) => (
            <li key={item}>
              <Tag className="px-3.5 py-1.5 text-sm">{item}</Tag>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
