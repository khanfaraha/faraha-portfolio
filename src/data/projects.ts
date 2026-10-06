/**
 * Projects are grouped two ways:
 * - `category`: the label shown as a filter and on each card (standard,
 *   recruiter-facing terms: UI/UX, Web Development, Mobile App, Creative /
 *   Visual Design).
 * - `group`: which page section a project also appears in — "design" shows
 *   in the Product Design/UI-UX section, "engineering" in the Software
 *   Engineering section, "visual" only in Featured Projects.
 */
export type ProjectCategory = "UI/UX" | "Web Development" | "Mobile App" | "Creative / Visual Design";

export type ProjectGroup = "design" | "engineering" | "visual";

export interface ProjectImageData {
  /** Local path (e.g. "/images/projects/name.jpg") or a full https URL. */
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  group: ProjectGroup;
  summary: string;
  /** Key points shown in the detail view. */
  details: string[];
  tools: string[];
  contribution?: string;
  /** Cover image shown on the card. Defaults to gallery[0] if omitted. */
  image?: ProjectImageData;
  /** All images for this project, shown as a strip in the detail view. */
  gallery?: ProjectImageData[];
  links: {
    github?: string;
    behance?: string;
    demo?: string;
  };
}

const BEHANCE_THUMB = "https://mir-s3-cdn-cf.behance.net/projects/404/";

export const projects: Project[] = [
  // ---------- UI/UX ----------
    {
    slug: "e-learning-website-design",
    title: "E-Learning Website Design",
    category: "UI/UX",
    group: "design",
    summary:
      "A UI/UX design for an e-learning website, focused on clear course discovery and a clean, student-friendly layout.",
    details: [
      "Designed the UI/UX for an e-learning website end to end.",
      "Focused on clear navigation between courses, subjects, and lessons.",
      "Built a clean, modern layout suited to students and self-paced learning.",
    ],
    tools: ["Figma"],
    contribution: "UI/UX design",
    image: {
      src: `${BEHANCE_THUMB}3aa169256638233.Y3JvcCwxMDEzLDc5Myw0ODQsMA.png`,
      alt: "Preview of the E-Learning Website Design project on Behance",
    },
    links: {
      behance: "https://www.behance.net/gallery/256638233/E-Learning-Website-Design",
    },
  },
  {
    slug: "login-signup-page",
    title: "Login & Sign-Up Page",
    category: "UI/UX",
    group: "design",
    summary:
      "A clean, intuitive login and sign-up experience designed in Figma, with a focus on usability and visual hierarchy.",
    details: [
      "Designed a clean and intuitive login and sign-up experience in Figma.",
      "Created user-friendly layouts for login and registration.",
      "Focused on usability, visual hierarchy, and responsive design.",
    ],
    tools: ["Figma"],
    contribution: "UI/UX design",
    image: {
      src: `${BEHANCE_THUMB}4aad50210240035.Y3JvcCwyMDcyLDE2MjEsNDA1LDA.jpg`,
      alt: "Preview of the Login & Sign-Up Page design, published on Behance as Mobile App Signup Flow",
    },
    links: {
      behance: "https://www.behance.net/gallery/210240035/Mobile-App-Signup-fLOW",
    },
  },
  {
    slug: "food-app-design",
    title: "Food App Design",
    category: "UI/UX",
    group: "design",
    summary:
      "A food delivery app design, including key screens and user interactions, created during my UI/UX Design internship at CodeSoft.",
    details: [
      "Designed a food delivery app, including key screens and user interactions.",
      "Focused on an intuitive ordering flow from browsing to checkout.",
    ],
    tools: ["Figma"],
    contribution: "UI/UX design",
    image: {
      src: `${BEHANCE_THUMB}671217210240369.Y3JvcCwxMTk1LDkzNSwyMzksMA.jpg`,
      alt: "Preview of the Food App Design project on Behance",
    },
    links: {
      behance: "https://www.behance.net/gallery/210240369/Food-App-Design",
    },
  },

  // ---------- Web Development ----------
  {
    slug: "learning-hub",
    title: "Learning Hub",
    category: "Web Development",
    group: "engineering",
    summary:
      "An e-learning website built with React.js, with a modern, responsive interface and reusable components.",
    details: [
      "Developed an e-learning platform with a modern and responsive interface.",
      "Designed user-friendly layouts for browsing and exploring courses.",
      "Implemented reusable components for a consistent and scalable web experience.",
    ],
    tools: ["React.js", "JavaScript"],
    contribution: "Interface design and front-end development",
    image: { src: "/images/projects/learning-hub.png", alt: "Learning Hub e-learning website homepage" },
    links: {
      github: "https://github.com/khanfaraha/Learning-hub-e-commerce-website",
    },
  },
  {
    slug: "nexstyle",
    title: "NexStyle",
    category: "Web Development",
    group: "engineering",
    summary:
      "A modern full-stack e-commerce web application covering product browsing, shopping, user management, and purchasing.",
    details: [
      "Developed a modern full-stack e-commerce website.",
      "Implemented product browsing, shopping, user management, and purchasing.",
      "Designed scalable application architecture and database structure.",
    ],
    tools: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
    contribution: "Full-stack development, application architecture, and database structure",
    image: { src: "/images/projects/nexstyle.png", alt: "NexStyle e-commerce website homepage" },
    links: {
      github: "https://github.com/khanfaraha/NexStyle-Web-App",
    },
  },

  // ---------- Mobile App ----------
  {
    slug: "smart-shop",
    title: "Smart Shop",
    category: "Mobile App",
    group: "engineering",
    summary:
      "A mobile shopping app with product browsing, favourites, a cart, and account sign-up and login.",
    details: [
      "Built account creation and login screens for the app.",
      "Product browsing and favourites, with ratings and quick add-to-cart.",
      "A cart screen with quantities and an order total.",
      "A side navigation menu with a dark theme toggle.",
    ],
    tools: [],
    contribution: "App design and development",
    image: { src: "/images/projects/smartshop-5.jpeg", alt: "Smart Shop app product listing screen" },
    gallery: [
      { src: "/images/projects/smartshop-5.jpeg", alt: "Smart Shop product listing screen" },
      { src: "/images/projects/smartshop-4.jpeg", alt: "Smart Shop cart screen" },
      { src: "/images/projects/smartshop-3.jpeg", alt: "Smart Shop favourites screen" },
      { src: "/images/projects/smartshop-2.jpeg", alt: "Smart Shop login screen" },
      { src: "/images/projects/smartshop-1.jpeg", alt: "Smart Shop create account screen" },
      { src: "/images/projects/smartshop-6.jpeg", alt: "Smart Shop side navigation menu" },
    ],
    links: {
      github: "https://github.com/khanfaraha/smart_shop",
    },
  },
  {
    slug: "habit-tracker",
    title: "Habit Tracker",
    category: "Mobile App",
    group: "engineering",
    summary:
      "A cross-platform habit tracking app built with Flutter, with streak tracking, categories, and cloud sync.",
    details: [
      "Create, edit, and track daily, weekly, or monthly habits.",
      "Organize habits by category, with streaks and progress tracking.",
      "Firebase Authentication and Cloud Firestore for accounts and data sync.",
    ],
    tools: ["Flutter", "Dart", "Firebase"],
    contribution: "App design and development",
      image: { src: "/images/projects/habit-tracker.png", alt: "Habit Tracker app home screen" },
    links: {
      github: "https://github.com/khanfaraha/Habit_Tracker",
    },
  },

  // ---------- Creative / Visual Design ----------
  {
    slug: "resume-cv-design",
    title: "Resume/CV Design",
    category: "Creative / Visual Design",
    group: "visual",
    summary: "A resume and CV layout design, shared on Behance.",
    details: [],
    tools: [],
    image: {
      src: `${BEHANCE_THUMB}99d646189150849.Y3JvcCwzNjY0LDI4NjUsMCw2NDM.jpg`,
      alt: "Preview of the Resume/CV Design project on Behance",
    },
    links: { behance: "https://www.behance.net/gallery/189150849/ResumeCV-Design" },
  },
  {
    slug: "university-program-poster",
    title: "Poster Design for University Program",
    category: "Creative / Visual Design",
    group: "visual",
    summary: "A poster designed for a university program, shared on Behance.",
    details: [],
    tools: [],
    image: {
      src: `${BEHANCE_THUMB}6c07a8184855141.Y3JvcCw0MDg5LDMxOTgsMCwyNTM.jpg`,
      alt: "Preview of the Poster Design for University Program project on Behance",
    },
    links: {
      behance: "https://www.behance.net/gallery/184855141/Poster-Design-For-University-Program",
    },
  },
  {
    slug: "travel-social-post",
    title: "Travel Social Media Post Design",
    category: "Creative / Visual Design",
    group: "visual",
    summary: "A social media post design with a travel theme, shared on Behance.",
    details: [],
    tools: [],
    image: {
      src: `${BEHANCE_THUMB}7cc89d201704583.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.jpg`,
      alt: "Preview of the Travel Social Media Post Design project on Behance",
    },
    links: {
      behance: "https://www.behance.net/gallery/201704583/Travel-social-media-post-design",
    },
  },
  {
    slug: "furniture-social-media-post",
    title: "Furniture Social Media Post Design",
    category: "Creative / Visual Design",
    group: "visual",
    summary:
      "A series of social media post designs for furniture and home décor, built to showcase pieces with clean, lifestyle-led visuals.",
    details: [
      "Designed a set of furniture-themed social media posts for Instagram and Facebook.",
      "Balanced product photography with clean typography and brand colours.",
    ],
    tools: [],
    image: {
      src: `${BEHANCE_THUMB}05a767184686633.Y3JvcCwzMDAwLDIzNDYsMCwzMjY.jpg`,
      alt: "Furniture social media post design, variant 1",
    },
    gallery: [
      { src: `${BEHANCE_THUMB}05a767184686633.Y3JvcCwzMDAwLDIzNDYsMCwzMjY.jpg`, alt: "Furniture social media post design, variant 1" },
      { src: `${BEHANCE_THUMB}583a9c184677453.Y3JvcCwzMDAwLDIzNDYsMCwzMjY.jpg`, alt: "Furniture social media post design, variant 2" },
      { src: `${BEHANCE_THUMB}a48dc4184355671.Y3JvcCwyODAwLDIxOTAsMCwzMDQ.jpg`, alt: "Furniture social media post design, variant 3" },
      { src: `${BEHANCE_THUMB}09279c202381895.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.jpg`, alt: "Furniture social media post design, variant 4" },
    ],
    links: { behance: "https://www.behance.net/gallery/184686633/Furniture-Social-Media-Post" },
  },
  {
    slug: "food-social-media-post",
    title: "Food Social Media Post",
    category: "Creative / Visual Design",
    group: "visual",
    summary:
      "A social media post design created for a food brand, focused on appetizing visuals and clear, easy-to-read typography.",
    details: [
      "Designed a food-themed social media post for Instagram and Facebook.",
      "Used warm colours and bold type to highlight the dish.",
    ],
    tools: [],
    image: {
      src: `${BEHANCE_THUMB}0f62f4201699415.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.jpg`,
      alt: "Food social media post design",
    },
    gallery: [
      { src: `${BEHANCE_THUMB}0f62f4201699415.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.jpg`, alt: "Food social media post design" },
    ],
    links: { behance: "https://www.behance.net/gallery/201699415/Food-social-media-post" },
  },
  {
    slug: "themed-social-media-posts",
    title: "Modern Social Media Post Design",
    category: "Creative / Visual Design",
    group: "visual",
    summary:
      "A collection of social media post designs spanning different brand themes, from food promotions to corporate messaging.",
    details: [
      "Designed a set of themed social media posts, including food and business promotions.",
      "Kept a consistent grid and type system while adapting colour and imagery to each theme.",
    ],
    tools: [],
    image: {
      src: `${BEHANCE_THUMB}e0e85e208352111.Y3JvcCwxNzY5LDEzODQsMjY3LDA.jpg`,
      alt: "Themed social media post design, variant 1",
    },
    gallery: [
      { src: `${BEHANCE_THUMB}e0e85e208352111.Y3JvcCwxNzY5LDEzODQsMjY3LDA.jpg`, alt: "Themed social media post design, variant 1" },
      { src: `${BEHANCE_THUMB}3c6fc2188470367.Y3JvcCwzOTk5LDMxMjgsMCw0MzU.jpg`, alt: "Themed social media post design, variant 2" },
      { src: `${BEHANCE_THUMB}31a7bb183876941.Y3JvcCwxODgxLDE0NzIsNTk2LDA.jpg`, alt: "Themed social media post design, variant 3" },
    ],
    links: { behance: "https://www.behance.net/gallery/208352111/Social-Media-Post-Design" },
  },
  {
    slug: "corporate-social-media-post",
    title: "Corporate Social Media Post Design",
    category: "Creative / Visual Design",
    group: "visual",
    summary:
      "A series of corporate social media post designs created for brand promotion and professional communication.",
    details: [
      "Designed a set of corporate social media posts for brand promotion.",
      "Used a clean, professional layout suited to a corporate audience.",
    ],
    tools: [],
    image: {
      src: `${BEHANCE_THUMB}256c69183553381.Y3JvcCwzNjAwLDI4MTUsMCwxNzg.jpg`,
      alt: "Corporate social media post design, variant 1",
    },
    gallery: [
      { src: `${BEHANCE_THUMB}256c69183553381.Y3JvcCwzNjAwLDI4MTUsMCwxNzg.jpg`, alt: "Corporate social media post design, variant 1" },
      { src: `${BEHANCE_THUMB}03e920183549043.Y3JvcCwzNjAwLDI4MTUsMCwxODc.jpg`, alt: "Corporate social media post design, variant 2" },
      { src: `${BEHANCE_THUMB}8d72f9183503691.Y3JvcCwxNjAwLDEyNTEsMCwxMQ.jpg`, alt: "Corporate social media post design, variant 3" },
    ],
    links: { behance: "https://www.behance.net/gallery/183553381/Corporate-Social-Media-Post" },
  },
];

export const featuredCategories: ProjectCategory[] = ["UI/UX", "Web Development", "Mobile App", "Creative / Visual Design"];
