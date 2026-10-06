export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SkillColumn {
  id: "design" | "development" | "professional";
  title: string;
  description: string;
  groups: SkillGroup[];
}

/** Only skills supported by the CV, public profiles, or the GitHub repositories themselves. */
export const skillColumns: SkillColumn[] = [
  {
    id: "design",
    title: "Design",
    description: "Product and interface design, plus the tools I use every day.",
    groups: [
      {
        title: "Product and UX",
        items: [
          "UI/UX design",
          "Product design",
          "Design thinking",
          "User research",
          "Wireframing",
          "Prototyping",
          "Responsive web design",
          "Visual design",
        ],
      },
      {
        title: "Tools",
        items: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva", "CapCut", "MS Office"],
      },
      {
        title: "Video and content",
        items: [
          "Short-form video",
          "Social media video",
          "Promotional video",
          "Digital content design",
        ],
      },
    ],
  },
  {
    id: "development",
    title: "Development",
    description: "The languages and stack behind my web and mobile projects.",
    groups: [
      { title: "Languages", items: ["C", "C++", "JavaScript", "Python"] },
      { title: "Web", items: ["HTML", "CSS", "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"] },
      { title: "Mobile", items: ["Flutter", "Dart", "Firebase"] },
    ],
  },
  {
    id: "professional",
    title: "Professional",
    description: "How I lead, coordinate, and work with other teams.",
    groups: [
      {
        title: "Leadership",
        items: [
          "Team management",
          "Mentoring and training",
          "Project coordination",
          "Design review and feedback",
        ],
      },
      {
        title: "Working style",
        items: ["Problem solving", "Cross-team collaboration"],
      },
    ],
  },
];
