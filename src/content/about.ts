import { Brain, Briefcase, GraduationCap, Rocket, Stethoscope } from "lucide-react";
import type { SkillGroup, Stat, TimelineEntry } from "@/types";

export const aboutStats: readonly Stat[] = [
  { k: "10+", v: "Healthcare & operations", sub: "years of operational experience", tone: "rose" },
  { k: "2", v: "Core AI products", sub: "detailed engineering case studies", tone: "lavender" },
  { k: "Full stack", v: "React · Python · FastAPI", sub: "interface to API to AI workflow", tone: "sage" },
  { k: "Evidence-first", v: "Human control", sub: "grounded and inspectable AI", tone: "rose" },
];

export const aboutTimeline: readonly TimelineEntry[] = [
  { id: "junior-dev", icon: GraduationCap, title: "Junior Software Developer Intern", desc: "2011 – 2012. Early foundation in clean code, testing and disciplined delivery." },
  { id: "nhs", icon: Stethoscope, title: "Operations & Service Coordinator — Leicestershire Partnership NHS Trust", desc: "Nov 2015 – Jul 2025. Healthcare operations, multidisciplinary teams, confidential patient data, GDPR, complex workflows and stakeholder understanding." },
  { id: "symplicare", icon: Briefcase, title: "Software Engineer — SympliCare AI", desc: "Jun 2025 – Dec 2025. React, TypeScript, Python, FastAPI, REST APIs, PostgreSQL and digital-health workflows." },
  { id: "cognikord", icon: Rocket, title: "Founding Engineer — CogniKord AI", desc: "Jan 2026 – Jul 2026. Technical architecture, customer discovery, workflow automation and deterministic business logic for manufacturing and logistics workflows." },
  { id: "ai", icon: Brain, title: "AI Software Engineering", desc: "Building grounded, observable and human-in-the-loop AI systems." },
];

export const aboutToolkit = ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "RAG", "Docker", "OpenTelemetry"] as const;

export const skills: readonly SkillGroup[] = [
  { category: "AI & GenAI", tone: "rose", items: ["OpenAI Responses API", "Structured Outputs", "RAG", "Embeddings", "Semantic Search", "Citation Validation", "AI Evaluation", "Guardrails", "Human-in-the-loop Design", "LangGraph (early-stage scaffolding)"] },
  { category: "Languages & frontend", tone: "lavender", items: ["Python", "TypeScript", "JavaScript", "React", "Next.js", "TanStack Start", "TanStack Router", "TanStack Query", "Tailwind CSS"] },
  { category: "Backend & data", tone: "sage", items: ["FastAPI", "REST APIs", "OpenAPI/Swagger", "SQLAlchemy", "Pydantic", "Alembic", "Prisma", "APScheduler", "PostgreSQL", "pgvector", "MySQL"] },
  { category: "Reliability & security", tone: "rose", items: ["Pytest", "Vitest", "Unit & Integration Testing", "API Testing", "Docker", "Docker Compose", "GitHub Actions", "JWT", "RBAC", "bcrypt", "Audit Logging", "OpenTelemetry", "Prometheus", "Grafana"] },
];

export const achievements = ["Built two end-to-end AI engineering projects", "Built FastAPI APIs and React/TypeScript applications", "Implemented evidence-grounded AI workflows", "Applied authentication, RBAC, audit logging and observability", "Used deterministic testing and validation around AI features"] as const;

export const currentlyBuilding = {
  items: ["Potential", "PharmaChain"] as readonly string[],
  note: "Extending grounded document evidence and reliability controls in PharmaChain, and continuing Potential's interview-session persistence work. LangGraph remains early-stage scaffolding.",
} as const;

export const aboutIntro = "I spent over a decade in healthcare operations before moving into software engineering. That background shaped how I build: begin with the operational problem, then create software — increasingly AI-powered — that keeps people informed and in control. I work across React interfaces, FastAPI services and the AI workflows between them.";
export const workedAcross = ["Leicestershire Partnership NHS Trust", "SympliCare AI", "CogniKord AI"] as const;
export const learningStack: readonly SkillGroup[] = [
  { category: "AI engineering", tone: "rose", items: ["LangGraph (early-stage scaffolding)", "Model Context Protocol", "Retrieval-Augmented Generation", "Vector databases"] },
  { category: "Modern web", tone: "lavender", items: ["Next.js", "TanStack ecosystem", "Server Components"] },
  { category: "Cloud & delivery", tone: "sage", items: ["Cloud deployment", "CI/CD", "Observability"] },
];
export const learningIntro = "I keep learning through practical implementation, while clearly separating current production-minded experience from technology I am still exploring.";
