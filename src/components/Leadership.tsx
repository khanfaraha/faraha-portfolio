import { site } from "@/data/site";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

const responsibilities = [
  {
    title: "Leading the team",
    text: "Lead the Product Design team as Deputy Project Lead, coordinating projects and design work.",
  },
  {
    title: "Mentoring and training",
    text: "Train and interview Product Design team members, and mentor designers on the team.",
  },
  {
    title: "Review and feedback",
    text: "Review the team's work and provide feedback.",
  },
  {
    title: "Cross-team collaboration",
    text: "Work with other teams to solve design challenges and improve workflows.",
  },
];

export function Leadership() {
  return (
    <Section id="leadership" className="bg-navy-900/40">
      <SectionHeading
        id="leadership"
        title="Leadership"
        description="Leading a design team is part of my current role, alongside hands-on product design."
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <Reveal>
          <div className="h-full rounded-2xl border border-accent/30 bg-gradient-to-br from-navy-800 to-navy-950 p-6 shadow-glow sm:p-8">
            <p className="text-sm text-dim">Current role</p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{site.currentRole}</h3>
            <p className="mt-2 text-base text-accent-soft">{site.currentCompany}</p>
            <p className="mt-4 text-sm text-muted">Nov 2024 – Present</p>
          </div>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2">
          {responsibilities.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 70} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-accent/40">
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
