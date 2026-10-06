export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  focus?: string[];
  primary?: boolean;
}

/** Titles, companies and dates follow the CV exactly. */
export const experience: ExperienceItem[] = [
  {
    company: "Staff Asia",
    role: "Deputy Project Lead, Product Design",
    period: "Nov 2024 – Present",
    primary: true,
    highlights: [
      "Design UI/UX and digital products for intuitive user experiences.",
      "Design video-based EdTech courses using modern design tools.",
      "Lead and mentor the team, reviewing work and providing feedback.",
      "Conduct competitor and market research for product growth.",
      "Create social media designs and digital content for international brands across different markets.",
      "Develop visual content for global clients, including brands from Saudi Arabia, Germany, and other international markets.",
      "Adapt social media content and visual communication for different languages, audiences, and cultural contexts.",
      "Collaborate across teams to solve design challenges and improve workflows.",
    ],
    focus: [
      "UI/UX",
      "Digital products",
      "EdTech course design",
      "Team leadership",
      "Mentoring and training",
      "Design review",
      "Market research",
      "Cross-team collaboration",
    ],
  },
  {
    company: "CodeSoft",
    role: "UI/UX Design Intern",
    period: "Sep 2024 – Oct 2024",
    highlights: [
      "Designed intuitive Login & Sign-Up interfaces with a focus on usability and user flow.",
      "Designed a food delivery app, including key screens and user interactions.",
      "Designed responsive and user-friendly website interfaces.",
    ],
  },
  {
    company: "Adobe Stock",
    role: "Digital Content Designer",
    period: "Dec 2022 – Present",
    highlights: [
      "Create and publish illustrations, templates, vectors, and social media designs.",
      "Develop AI-generated visuals based on seasonal and trending niches.",
      "Optimize creative assets for stock marketplace standards and discoverability.",
      "Research trends and niches to create commercially relevant visual content.",
    ],
  },
  {
    company: "Magnific",
    role: "Visual Content Designer",
    period: "Oct 2023 – Present",
    highlights: [
      "Create and publish illustrations, templates, vectors, and digital assets.",
      "Research trends and niches to create relevant, marketable content.",
    ],
  },
];
