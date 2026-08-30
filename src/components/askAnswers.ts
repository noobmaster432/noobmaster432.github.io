import { profile } from "@/data/resume";

export type Ask = {
  id: string;
  question: string;
  answer: string;
};

/**
 * Scripted responses. Every claim below restates something already on the
 * resume — nothing here is generated, and nothing new is asserted.
 */
export const asks: Ask[] = [
  {
    id: "shipped",
    question: "What have you shipped?",
    answer:
      "At Highspot I re-platformed a core backend service to FastAPI with real-time streaming, which drove a 39% increase in user engagement. I redesigned a content retrieval pipeline that lifted evaluation accuracy from 77% to 92%, and built the multi-turn AI-assisted Q&A behind Content Agent and Marketing Agent. Those microservices run on Kubernetes with GitOps CI/CD.",
  },
  {
    id: "stack",
    question: "What's your stack?",
    answer:
      "Python, TypeScript and JavaScript day to day. FastAPI, RAG and LangGraph on the backend and AI side, React and Next.js on the front end, and Kubernetes, Docker and AWS underneath.",
  },
  {
    id: "earlier",
    question: "What did you do before?",
    answer:
      "As an intern at Highspot I cut job queue latency by 50% and improved API response times by 75%. At Scaler I increased conversion by 2.5% and engagement by 5.4%, and lifted Lighthouse scores from 40 to 82 on desktop and 30 to 70 on mobile. At Coforge I reduced dashboard load time by 10% and hardened the platform with RBAC and Redis caching.",
  },
  {
    id: "side",
    question: "Built anything outside work?",
    answer:
      "FilmFiesta, a movie discovery platform with JWT auth and TMDB API integration. BuzzNet, a Twitter-style social app with a live feed built on Next.js, Prisma and MongoDB. Nivaas, a full-stack real-estate dashboard with CRUD, authentication and image uploads.",
  },
  {
    id: "reach",
    question: "How do I reach you?",
    answer: `Email ${profile.email}, or find me on LinkedIn, GitHub and LeetCode — the links are right alongside this panel.`,
  },
];
