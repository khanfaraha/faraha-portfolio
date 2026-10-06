/**
 * Core profile data. Everything here comes from the CV or the profile URLs
 * supplied by the owner. Edit this file to update the site.
 */
export const site = {
  name: "Faraha Ulfath Khan",
  role: "Product Designer",
  headline: "Product Designer crafting thoughtful digital experiences with a foundation in software engineering.",
  currentRole: "Deputy Project Lead, Product Design",
  currentCompany: "Staff Asia",
  intro:
    "I design intuitive, user-centered digital experiences that balance usability, clarity, and visual quality. With a background in software engineering, I understand both how products should work and how they are built.",
  email: "farahakhan518@gmail.com",
  location: "Sylhet, Bangladesh",
  /** Set to null to show the initials placeholder instead. */
  profileImage: "/images/profile.png" as string | null,
  socials: {
    github: "https://github.com/khanfaraha",
    behance: "https://www.behance.net/fkvect",
    linkedin: "https://www.linkedin.com/in/fkvect/",
  },
};

export const siteUrl: string =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "design", label: "Design" },
  { id: "development", label: "Development" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
