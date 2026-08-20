import { isBlogEnabled } from "@/lib/features";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  target?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  impact: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  readTime: string;
  content: string[];
};

export const siteConfig = {
  name: "Satyam Singh",
  role: "Frontend Developer",
  email: "satyamjsr999@gmail.com",
  phone: "+918969833349",
  location: "Jamshedpur, India",
  intro:
    "Frontend developer with nearly 4 years of experience building scalable web applications with React, Next.js, and TypeScript.",
  summary:
    "I enjoy building interfaces people actually want to use ~ clear, reliable, and thoughtfully put together. From early ideas to shipping in production, I care about the craft of frontend as much as the tech behind it.",
  availability:
    "Open to frontend roles, product teams, and freelance opportunities.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/PandaTryingCoding" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/satyam-singh-225064220/",
    },
    { label: "Resume", href: "/resume.pdf", target: "_blank" },
  ],
};

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function getNavItems(): NavItem[] {
  return navItems.filter((item) => item.label !== "Blog" || isBlogEnabled());
}

export const stats = [
  { label: "Years of experience", value: "4" },
  {
    label: "Core stack",
    value: "React, Next.js, TypeScript, HTML, CSS",
  },
  { label: "Education", value: "B.Tech CSE, SRM · 9.26 GPA" },
];

export const strengths = [
  "Taking rough product ideas and turning them into polished screens people can actually use",
  "Building shared UI pieces so teams can ship faster without reinventing the same thing",
  "Making apps feel steady and reliable, even when the network or the user’s session isn’t perfect",
  "Working closely with design and product so the final experience feels intentional, not just functional",
];

export const experiences: ExperienceItem[] = [
  {
    company: "koolio.ai",
    role: "Frontend Developer",
    duration: "Nov 2024 – Jun 2026 · Remote, India",
    summary:
      "Led frontend work on Koolio’s audio product UI — refactoring a prototype into a production beta, shipping reusable systems, publishing workflows, and offline-first editor persistence.",
    highlights: [
      "Led a React and TypeScript refactor of the UI from internal prototype to production beta, shipping 8 screens to 500+ beta users and authoring a reusable component library adopted by 8 engineers that cut new-screen build time by 80% (15 days to 3 days).",
      "Prototyped and co-developed an RSS-based publishing workflow with the backend team so creators could distribute audiobooks and podcasts to YouTube, Apple Podcasts, and Spotify.",
      "Built an interactive React + WaveSurfer.js product demo embedded on the marketing site, helping convert 25% more visitors into signups through hands-on pre-registration experience.",
      "Built an offline-first persistence layer for the audio editor that saved Redux state and audio data to IndexedDB, with a liveness check to reconcile and sync trailing operations after session timeouts or unexpected closures.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Redux",
      "IndexedDB",
      "WaveSurfer.js",
      "Component Libraries",
    ],
  },
  {
    company: "MyCaptain",
    role: "Software Developer",
    duration: "Dec 2022 – Nov 2024 · Bengaluru, India",
    summary:
      "Owned product-facing frontend features across jobs, sales demos, LMS, and onboarding — improving trust, conversion, and reliability for learners and sales teams.",
    highlights: [
      "Led an in-app Jobs Board that replaced fragmented Google Form listings, centralizing job details, application rounds, and company feedback, resulting in a 2x increase in job applications.",
      "Developed a production-aligned demo app with core content flows and completion certificates for sales-led demos, contributing to a 9% increase in the likely-to-buy funnel.",
      "Collaborated with Design to revamp the LMS web app, improving visibility of live classes and projects and replacing a static notice board with an integrated course calendar, driving an 18% increase in class attendance and timely project submissions.",
      "Maintained Sentry for real-time error monitoring and performance analytics, contributing to a 16% reduction in page crashes and 99% overall uptime.",
      "Led the development of responsive trial access and project submission features, contributing to a 33% increase in student onboarding and a 14% increase in active project visibility.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Sentry", "LMS", "Product UI"],
  },
  {
    company: "HighRadius",
    role: "Summer Intern",
    duration: "Jan 2022 – Apr 2022  · Remote, India",
    summary:
      "Trained as a summer intern building an AI-enabled B2B fintech web application for predicting payment dates on pending invoices.",
    highlights: [
      "Built an AI-enabled B2B fintech web application using React, enabling users to manage pending invoices while leveraging AI-driven payment date predictions.",
      "Developed a paginated Java REST API and integrated frontend pagination to efficiently deliver invoice data, along with seamless create, update, and delete functionality within the SPA.",
    ],
    stack: ["React", "Java", "REST APIs", "Pagination", "SPA"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Mentee Web App",
    description:
      "A learning and placement platform web application maintained and evolved for end users, with a focus on seamless content and placement flows.",
    impact:
      "Delivered a polished user experience using GraphQL, Next.js, Tailwind CSS, and Ant Design for a cohesive learning/placement product surface.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Ant Design", "GraphQL"],
    liveUrl: "https://mycaptain.in/",
    githubUrl: "",
  },
  {
    name: "Airbnb Clone",
    description:
      "A full-stack short-term rental marketplace inspired by Airbnb — discover properties, book stays, pay securely, manage listings, and leave reviews.",
    impact:
      "Built as a production-style learning project with real integrations for authentication, payments, image storage, and analytics.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma",
      "Supabase",
      "Clerk",
    ],
    liveUrl: "https://air-bnb-clone-eta-six.vercel.app/",
    githubUrl: "https://github.com/PandaTryingCoding/Air-Bnb-Clone",
  },
  {
    name: "Koolio",
    description:
      "A browser-based audio product for creators. Helped take the full UI from an early prototype to a production beta, including RSS publishing so creators can share music and podcasts to platforms like YouTube, Apple Podcasts, and Spotify.",
    impact:
      "Built shared UI pieces for the team and offline save so creators don’t lose work mid-edit.",
    stack: ["React", "TypeScript", "Redux", "IndexedDB", "WaveSurfer.js"],
    liveUrl: "https://koolio.ai",
    githubUrl: "",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Context API",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "SCSS/Sass",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Apollo Client",
      "Prisma",
      "IndexedDB",
      "Redis",
    ],
  },
  {
    title: "Tools & Practices",
    items: [
      "Git",
      "GCP",
      "AWS S3",
      "Sentry",
      "Figma",
      "Responsive Design",
      "Component Architecture",
      "State Management",
      "Authentication",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-reusable-react-components",
    title: "Designing Reusable React Components for Product Teams",
    description:
      "A practical framework for building components that scale across teams and product surfaces.",
    publishedAt: "Aug 2026",
    tags: ["React", "Components", "Architecture"],
    readTime: "5 min read",
    content: [
      "Reusable components are more than shared UI. They need clear APIs, predictable behavior, and constraints that support long-term maintainability.",
      "When I design components, I start by identifying which parts should be opinionated and which should stay flexible. This keeps product teams moving quickly without creating an unbounded API surface.",
      "A strong component system balances developer experience, accessibility, and consistency. Over time, that translates into faster delivery and fewer regressions.",
    ],
  },
  {
    slug: "thinking-about-frontend-architecture",
    title: "How I Think About Frontend Architecture in Growing Applications",
    description:
      "A concise look at organizing code, state, and UI boundaries as products become more complex.",
    publishedAt: "Jul 2026",
    tags: ["Architecture", "TypeScript", "Scalability"],
    readTime: "6 min read",
    content: [
      "Frontend architecture becomes critical when product complexity starts to outgrow ad hoc patterns. Clear boundaries help teams ship faster and reason about change with less risk.",
      "I usually focus on separating domain logic, presentation, and data concerns early. That makes it easier to evolve workflows without rewriting entire features.",
      "Good architecture should simplify product development. If it increases friction without clear benefit, it probably needs to be rethought.",
    ],
  },
  {
    slug: "building-for-performance-and-ux",
    title: "Building Interfaces That Feel Fast",
    description:
      "Performance is not only a metric. It is also how quickly and confidently users can move through the product.",
    publishedAt: "Jun 2026",
    tags: ["Performance", "UX", "Next.js"],
    readTime: "4 min read",
    content: [
      "Users experience performance through motion, feedback, responsiveness, and the ability to continue their task without interruption.",
      "I prioritize efficient rendering, clear loading states, and thoughtful information hierarchy. Together, these choices improve both real and perceived performance.",
      "Fast interfaces are usually the result of many small decisions made consistently across product design and engineering.",
    ],
  },
];
