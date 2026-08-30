/**
 * Single source of truth for every piece of content on the site.
 * Nothing here may be invented — it all comes straight from the resume.
 */

export const profile = {
  name: "Gyanendra Tiwari",
  title: "Software Engineer",
  positioning:
    "Building across the stack — AI-powered product features, distributed backend systems, and the interfaces on top of them.",
  location: "Hyderabad, Telangana, India",
  email: "mrgyan432@gmail.com",
  summary:
    "Software engineer with production experience building across the stack — from AI-powered product features (RAG pipelines, multi-agent workflows) to distributed backend systems and scalable infrastructure. Comfortable owning a problem end-to-end, from architecture through deployment, at a scale of thousands of customers and millions of users.",
  personalNote: "Mountain person at heart — happiest on a trail, or deep in a system diagram.",
} as const;

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const socials: SocialLink[] = [
  { label: "Email", href: "mailto:mrgyan432@gmail.com", handle: "mrgyan432@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/noobmaster432", handle: "in/noobmaster432" },
  { label: "GitHub", href: "https://github.com/noobmaster432", handle: "noobmaster432" },
  { label: "LeetCode", href: "https://leetcode.com/noobmaster432", handle: "noobmaster432" },
];

/**
 * The PDF itself, plus Drive's server-rendered page-one thumbnail.
 * Using the thumbnail rather than Drive's /preview iframe keeps the hover
 * card to a single image — no third-party frame, script or cookies.
 */
export const resumeFile = {
  label: "Resume",
  href: "https://drive.google.com/file/d/1XJ7K6Q5R_zrfPa3kAIoRuNbdsD5xj70Q/view?usp=sharing",
  previewSrc:
    "https://drive.google.com/thumbnail?id=1XJ7K6Q5R_zrfPa3kAIoRuNbdsD5xj70Q&sz=w800",
} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Highspot",
    role: "Software Development Engineer 1",
    period: "Jul 2025 — Present",
    current: true,
    highlights: [
      "Architected multi-turn agentic AI workflows across two scopes: a per-document Content Agent for grounded Q&A, and a Marketing Agent coordinating tools, sub-agents and knowledge dossiers for marketer-facing recommendations.",
      "Drove a 39% increase in user engagement by re-platforming the Content Agent backend from Tornado to FastAPI with S2S auth, and migrating LLM traffic to Highspot's centralized LLM Gateway, enabling real-time streaming and multi-turn conversations.",
      "Re-architected the RAG pipeline with structure-aware parsing and semantic chunking across multi-format documents, improving retrieval relevance and lifting evaluation accuracy from 77% to 92%.",
      "Secured customer content delivery via a sandboxed CDN pipeline (CloudFront + Lambda@Edge) with strict CSP/CORS, replacing legacy unauthenticated origins with authenticated, isolated retrieval.",
      "Architected and deployed microservices on Kubernetes using Docker and GitOps CI/CD (GitHub Actions + Argo CD), enabling automated, version-controlled and zero-downtime releases.",
      "Enabled slide intelligence by implementing slide-level embeddings for similar-slide, along with item and slide-level analytics.",
      "Built LLM-driven pipelines for content dossiers and audio summaries (AWS Polly), enabling multi-modal content consumption.",
    ],
  },
  {
    company: "Highspot",
    role: "Software Development Engineer Intern",
    period: "Jan — Jun 2025",
    highlights: [
      "Reduced job queue processing latency, as measured by a 50% drop in processing time tracked via New Relic OTel metrics, by scaling infrastructure to c7a.2xlarge instances and increasing concurrency from 2 to 4 workers.",
      "Improved API response times, as measured by a 75% reduction in latency, by refactoring synchronous logic into background jobs and enforcing robust authorization and error handling.",
      "Developed new admin tools, rake tasks and background jobs to support and extend content ingestion and processing pipelines.",
      "Enabled content similarity search and analytics by implementing slide-level perceptual hashing and metadata extraction from XML.",
    ],
  },
  {
    company: "Scaler",
    role: "Software Development Engineer Intern",
    period: "May — Jul 2024",
    highlights: [
      "Increased visitor-to-lead conversion and user engagement, as measured by a 2.5% lift in conversion and a 5.4% increase in engagement, by revamping the Scaler landing page using Next.js and Tailwind CSS.",
      "Improved site performance, as measured by Lighthouse score gains (desktop 40 to 82, mobile 30 to 70), by implementing SSR, aggressive image optimization and caching strategies.",
      "Enabled real-time behavioral tracking and funnel optimization by instrumenting event-driven analytics using Google Tag Manager.",
    ],
  },
  {
    company: "Coforge",
    role: "Software Trainee",
    period: "May — Jul 2023",
    highlights: [
      "Reduced dashboard load time, as measured by a 10% improvement in page-load time, by engineering a Ruby on Rails and MySQL reporting tool with query optimization and pagination.",
      "Improved platform security and performance via RBAC, session management and Redis caching, enabling faster and more secure data access.",
    ],
  },
];

/**
 * Only projects with a real screenshot are listed, so every card carries one.
 * `image` is required for that reason — a project without a shot should not be
 * added here until one exists.
 */
export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  repo: string;
  image: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    name: "FilmFiesta",
    tagline: "Movie discovery platform",
    description:
      "A movie discovery experience with JWT authentication and TMDB API integration.",
    stack: ["React", "Express", "MongoDB", "Redux", "TMDB API"],
    repo: "https://github.com/noobmaster432/FilmFiesta",
    image: {
      src: "/projects/filmfiesta.webp",
      alt: "FilmFiesta home page: a full-width film banner with a rating badge, genre tags, a short synopsis and a watch-now button, above a dark navigation bar.",
    },
  },
  {
    name: "BuzzNet",
    tagline: "Social networking app",
    description:
      "A Twitter-style social platform with a live feed, posting, likes and follow suggestions.",
    stack: ["Next.js", "TypeScript", "Zustand", "Prisma", "MongoDB", "Tailwind CSS"],
    repo: "https://github.com/noobmaster432/buzznet",
    image: {
      src: "/projects/buzznet.webp",
      alt: "BuzzNet home feed on a dark background: a left sidebar with Home, Notifications and Profile plus a blue Tweet button, a centre column of posts showing comment and like counts, and a Who to follow panel on the right.",
    },
  },
  {
    name: "Nivaas",
    tagline: "Real-estate dashboard",
    description:
      "A full-stack property dashboard with CRUD, authentication and image uploads.",
    stack: ["React", "TypeScript", "Material UI", "Cloudinary", "MongoDB"],
    repo: "https://github.com/noobmaster432/nivaas",
    image: {
      src: "/projects/nivaas.webp",
      alt: "Nivaas admin dashboard on a light background: four donut-chart cards counting properties for sale and rent, customers and cities, above a total revenue bar chart and a property referrals breakdown.",
    },
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend & AI",
    skills: ["FastAPI", "RAG", "LangGraph", "Distributed Systems", "System Design"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js"],
  },
  {
    title: "Infrastructure",
    skills: ["Kubernetes", "Docker", "AWS"],
  },
];

export type Achievement = {
  value: string;
  label: string;
};

export const achievements: Achievement[] = [
  { value: "2034", label: "LeetCode rating" },
  { value: "1695", label: "CodeChef rating" },
  { value: "1458", label: "Codeforces rating" },
  { value: "1000+", label: "Problems solved" },
];

export const certification = "Postman Student Expert";

export const education = {
  degree: "B.Tech, Computer Science",
  institution: "IIIT Ranchi",
  period: "2021 — 2025",
  detail: "CGPA 8.77",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
