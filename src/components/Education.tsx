import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

const entries = [
  {
    kind: "Degree",
    title: "BSc in Software Engineering",
    place: "Metropolitan University",
    meta: "CGPA 3.51, Jan 2022 – Dec 2025",
  },
  {
    kind: "Higher secondary",
    title: "Higher Secondary Certificate",
    place: "Govt. Agragami Girls High School and College, Sylhet",
    meta: "GPA 4.67, Oct 2020",
  },
  {
    kind: "Certification",
    title: "Professional Graphic Designer",
    place: "TimesIT",
    meta: "2022 – 2024",
  },
  {
    kind: "Volunteering",
    title: "Volunteer",
    place: "Hult Prize",
    meta: "Feb 2022",
  },
  {
    kind: "Leadership",
    title: "Senior Executive",
    place: "Metropolitan University Photographic Society (MUPS)",
    meta: "Apr 2022 – Dec 2023",
  },
  {
    kind: "Leadership",
    title: "Executive",
    place: "MU Robotics Club (MURC)",
    meta: "July 2022 – Dec 2023",
  },
  {
    kind: "Award",
    title: "Resume and Portfolio Contest Champion",
    place: "MU CSE Fest",
    meta: "2023",
  },
];

export function Education() {
  return (
    <Section id="education">
      <SectionHeading id="education" title="Education and recognition" />

      <ul className="grid gap-5 sm:grid-cols-2">
        {entries.map((entry, index) => (
          <li key={entry.title}>
            <Reveal delay={index * 60} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-accent">{entry.kind}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{entry.title}</h3>
                <p className="mt-1 text-base text-muted">{entry.place}</p>
                <p className="mt-3 text-sm text-dim">{entry.meta}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
