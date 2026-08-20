export type NavItem = {
  label: string;
  href: string;
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
  href?: string;
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
  location: "Jamshedpur, India",
  intro:
    "Frontend developer with nearly 4 years of experience building scalable web applications with React, Next.js, and TypeScript.",
  summary:
    "I focus on frontend architecture, reusable component systems, state management, performance, and intuitive user experiences for complex product workflows.",
  availability:
    "Open to frontend roles, product teams, and freelance opportunities.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/PandaTryingCoding" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/satyam-singh-225064220/",
    },
    { label: "Resume", href: "#" },
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

export const stats = [
  { label: "Years of experience", value: "4" },
  { label: "Core stack", value: "React, Next.js, TypeScript" },
  { label: "Focus", value: "Architecture, UX, performance" },
];

export const strengths = [
  "Designing reusable, maintainable frontend systems",
  "Shipping complex browser-based workflows from concept to production",
  "Building responsive interfaces with performance and accessibility in mind",
  "Simplifying state, data flow, and application architecture",
];

export const experiences: ExperienceItem[] = [
  {
    company: "Your Company",
    role: "Senior Frontend Developer",
    duration: "2024 - Present",
    summary:
      "Lead frontend development for product features that require scalability, maintainability, and polished user experience.",
    highlights: [
      "Owned feature delivery from requirements to production rollout.",
      "Improved component reuse and consistency across the application.",
      "Collaborated with product, design, and backend teams on complex workflows.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    company: "Mid Company",
    role: "Senior Developer",
    duration: "2024 - Present",
    summary:
      "Lead frontend development for product features that require scalability, maintainability, and polished user experience.",
    highlights: [
      "Owned feature delivery from requirements to production rollout.",
      "Improved component reuse and consistency across the application.",
      "Collaborated with product, design, and backend teams on complex workflows.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    company: "Previous Company",
    role: "Frontend Developer",
    duration: "2022 - 2024",
    summary:
      "Built responsive, data-heavy interfaces with a focus on performance, API integration, and maintainable architecture.",
    highlights: [
      "Implemented scalable state management patterns for fast-moving product teams.",
      "Worked on synchronization-heavy user flows and browser-based tools.",
      "Contributed to better performance and developer experience through frontend refactors.",
    ],
    stack: ["React", "TypeScript", "Redux", "REST APIs"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Workflow Builder",
    description:
      "A browser-based interface for managing multi-step workflows with rich interactions and data synchronization.",
    impact:
      "Reduced friction for complex operational tasks by making the UI more intuitive and resilient.",
    stack: ["React", "TypeScript", "State Management", "API Integrations"],
  },
  {
    name: "Offline-First Dashboard",
    description:
      "A dashboard experience designed to handle unstable network conditions while preserving user productivity.",
    impact:
      "Improved reliability and perceived performance for users working in inconsistent connectivity environments.",
    stack: ["Next.js", "Caching", "Sync Logic", "Progressive Enhancement"],
  },
  {
    name: "Design System Foundations",
    description:
      "A reusable component library and UI foundation for consistency, speed, and maintainability.",
    impact:
      "Enabled faster delivery across teams while reducing visual and architectural drift.",
    stack: ["Component Design", "TypeScript", "Accessibility", "Documentation"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "UI Engineering",
    items: [
      "Responsive Design",
      "Reusable Components",
      "Accessibility",
      "Design Systems",
    ],
  },
  {
    title: "State and Data",
    items: ["Redux", "Zustand", "React Query", "REST APIs", "Data Sync"],
  },
  {
    title: "Engineering Focus",
    items: [
      "Frontend Architecture",
      "Performance Optimization",
      "Offline-First UX",
      "Developer Experience",
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
