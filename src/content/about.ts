// About / journey content.

import {
  Brain,
  Briefcase,
  Building2,
  GraduationCap,
  Rocket,
  Stethoscope,
} from "lucide-react";
import type { Stat, TimelineEntry } from "@/types";

export const aboutStats: readonly Stat[] = [
  { k: "10+", v: "Healthcare & Operations", sub: "years experience", tone: "rose" },
  { k: "Enterprise", v: "AI Platforms", sub: "production-grade", tone: "lavender" },
  { k: "2+", v: "Flagship AI Projects", sub: "shipped end-to-end", tone: "sage" },
  { k: "Full Stack", v: "Python · React · FastAPI", sub: "human-centred AI", tone: "rose" },
];

export const aboutTimeline: readonly TimelineEntry[] = [
  { id: "junior-dev", icon: GraduationCap, title: "Junior Software Developer", desc: "Started with the fundamentals — clean code, testing, disciplined delivery." },
  { id: "nhs-ops", icon: Stethoscope, title: "~10 Years NHS Operations", desc: "Real operational complexity: coordination, resilience, decisions under pressure." },
  { id: "full-stack", icon: Briefcase, title: "Full-Stack Software Engineering", desc: "Modern systems with Python, React and cloud-native tooling." },
  { id: "ai-startups", icon: Rocket, title: "AI Startups", desc: "Shipping AI-first products end-to-end for enterprise customers." },
  { id: "enterprise-ai", icon: Building2, title: "Enterprise AI Engineering", desc: "Architecting AI platforms for regulated, mission-critical environments." },
  { id: "ai-platforms", icon: Brain, title: "Building AI Platforms", desc: "Operational intelligence, workflow automation, explainable decision support." },
];

export const aboutToolkit: readonly string[] = [
  "Enterprise AI",
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

/* ---------- Tech stack ---------- */

export interface TechCategory {
  category: string;
  tone: "rose" | "lavender" | "sage";
  items: readonly string[];
}

export const techStack: readonly TechCategory[] = [
  {
    category: "AI Engineering",
    tone: "rose",
    items: [
      "OpenAI API",
      "AI Agents",
      "Prompt Engineering",
      "AI Workflow Orchestration",
      "Rule-Based AI",
      "Explainable AI",
      "Intent Classification",
    ],
  },
  {
    category: "Product Engineering",
    tone: "sage",
    items: [
      "Clean Architecture",
      "Repository Pattern",
      "Dependency Injection",
      "API Design",
      "Testing",
      "Debugging",
      "Agile Development",
    ],
  },
  {
    category: "Backend",
    tone: "rose",
    items: ["Python", "FastAPI", "REST APIs", "SQLAlchemy", "Alembic", "Pydantic", "PostgreSQL", "MySQL"],
  },
  {
    category: "Frontend",
    tone: "lavender",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Cloud & DevOps",
    tone: "lavender",
    items: ["Docker", "Git", "GitHub", "Azure DevOps", "Ubuntu (WSL)"],
  },
];

export const learningStack: readonly TechCategory[] = [
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
