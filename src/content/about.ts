// About / journey content.

import {
  Brain,
  Briefcase,
  Building2,
  GraduationCap,
  Rocket,
  Stethoscope,
} from "lucide-react";
import type { SkillGroup, Stat, TimelineEntry } from "@/types";

export const aboutStats: readonly Stat[] = [
  { k: "10+", v: "Healthcare & Operations", sub: "years of operational experience", tone: "rose" },
  { k: "2+", v: "AI Products Built", sub: "designed and shipped end-to-end", tone: "lavender" },
  { k: "Full Stack", v: "React · Python · FastAPI", sub: "front end to backend to AI", tone: "sage" },
  { k: "Responsible AI", v: "By Design", sub: "evidence-based, human-in-the-loop", tone: "rose" },
];

export const aboutTimeline: readonly TimelineEntry[] = [
  { id: "junior-dev", icon: GraduationCap, title: "Junior Software Developer", desc: "Started with the fundamentals — clean code, testing, disciplined delivery." },
  { id: "nhs-ops", icon: Stethoscope, title: "~10 Years NHS Operations", desc: "Real operational complexity: coordination, resilience, decisions under pressure." },
  { id: "full-stack", icon: Briefcase, title: "Full-Stack Software Engineering", desc: "Modern systems with Python, React and cloud-native tooling." },
  { id: "ai-startups", icon: Rocket, title: "AI Startup — CogniKord", desc: "Founding Product & Research Associate — product discovery and research on the founding team of an early-stage AI company." },
  { id: "enterprise-ai", icon: Building2, title: "AI Product Engineering", desc: "Designing and building AI systems with production-minded engineering practices." },
  { id: "ai-platforms", icon: Brain, title: "Building AI Systems", desc: "Operational intelligence, workflow automation, explainable decision support." },
];

export const aboutToolkit: readonly string[] = [
  "AI Product Engineering",
  "Full Stack",
  "Python",
  "React",
  "TypeScript",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Azure",
  "OpenAI",
];

/* ---------- Skills (grouped) ---------- */

export const skills: readonly SkillGroup[] = [
  {
    category: "AI Engineering",
    tone: "rose",
    items: ["OpenAI APIs", "Structured Outputs", "Prompt Engineering", "RAG", "AI Orchestration", "Evidence Extraction", "Responsible AI"],
  },
  {
    category: "Frontend",
    tone: "lavender",
    items: ["React", "TypeScript", "TanStack Router", "TanStack Start", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend & APIs",
    tone: "sage",
    items: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "REST APIs", "Authentication"],
  },
  {
    category: "Production",
    tone: "rose",
    items: ["Docker", "GitHub Actions", "CI/CD", "Testing", "Logging", "Observability", "RBAC"],
  },
];

/* ---------- Achievements ---------- */

export const achievements: readonly string[] = [
  "Built multiple full-stack AI applications",
  "Designed enterprise AI workflows",
  "Developed AI copilots using OpenAI",
  "Built production-ready FastAPI APIs",
  "Implemented authentication and role-based access control",
];

/* ---------- Currently building ---------- */

export const currentlyBuilding = {
  items: ["Potential", "PharmaChain"] as readonly string[],
  note: "Exploring MCP, AI agents and enterprise AI workflows.",
} as const;

/* ---------- About intro + social proof ---------- */

export const aboutIntro =
  "I spent over a decade in healthcare operations before moving into software engineering. That background shaped how I think about building products: start with the operational problem, then design software — increasingly AI-powered — that actually solves it. I work full-stack, from React interfaces to FastAPI backends to the AI workflows in between, and I'm still learning something new most weeks.";

export const workedAcross: readonly string[] = ["NHS", "CogniKord AI"];

export const learningStack: readonly SkillGroup[] = [
  {
    category: "Modern Web",
    tone: "lavender",
    items: ["Next.js", "Supabase", "Server Components"],
  },
  {
    category: "AI Engineering",
    tone: "rose",
    items: [
      "LangGraph",
      "Model Context Protocol (MCP)",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases (pgvector)",
    ],
  },
  {
    category: "Cloud",
    tone: "sage",
    items: ["Microsoft Azure", "Azure AI Foundry", "Azure Functions", "Azure Storage"],
  },
  {
    category: "Testing & DevOps",
    tone: "lavender",
    items: ["Playwright", "Vitest", "GitHub Actions", "CI/CD Pipelines"],
  },
  {
    category: "Infrastructure",
    tone: "rose",
    items: ["Kubernetes", "Terraform"],
  },
];

export const learningIntro =
  "I enjoy continuously learning modern technologies and building real-world projects to expand my software engineering and AI expertise.";
