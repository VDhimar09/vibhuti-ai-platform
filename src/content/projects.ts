// Project catalogue. Text-only data model designed to move to a CMS/Supabase
// without touching UI components. Dashboards are referenced by ID and mounted
// by a UI-side registry (see components/mock-dashboard etc.).

import {
  ClipboardList,
  Eye,
  FileCheck2,
  FileSearch,
  KeyRound,
  ListChecks,
  MessagesSquare,
  Package,
  ShieldCheck,
  ShoppingCart,
  UserCheck,
  Warehouse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  ProjectSummary,
  RoadmapItem,
  TechStack,
} from "@/types";

export const operationalHub: ProjectSummary = {
  slug: "operational-ai-hub",
  name: "Operational AI Hub",
  eyebrow: "Project 03",
  chip: "✦ Flagship Project",
  tone: "rose",
  title: "Operational AI Hub",
  description:
    "An AI-powered, enterprise-ready operational intelligence platform that helps organisations monitor operations, identify risks, coordinate AI-assisted decisions and automate complex operational workflows.",
  longDescription:
    "Instead of simply reporting operational data, the platform provides AI-driven recommendations, explainable insights and intelligent workflow orchestration.",
  features: [],
  tags: [
    "Executive Dashboard",
    "AI Advisor",
    "Risk Monitoring",
    "Workflow Automation",
  ],
  dashboardId: "operational-hub",
  techStack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "OpenAI"],
};

export const pharmaChain: ProjectSummary = {
  slug: "pharmachain",
  name: "PharmaChain",
  eyebrow: "Flagship project",
  chip: "⭐ Flagship Project",
  tone: "lavender",
  title: "PharmaChain — AI Clinical Supply Chain Copilot",
  description:
    "An enterprise copilot for clinical supply chains, focused on AI procurement, inventory intelligence, warehouse capacity planning and an executive copilot for supply chain decisions.",
  features: [
    { icon: ShoppingCart, label: "AI Procurement" },
    { icon: Package, label: "Inventory Intelligence" },
    { icon: Warehouse, label: "Warehouse Capacity" },
    { icon: MessagesSquare, label: "Executive Copilot" },
    { icon: KeyRound, label: "JWT Authentication" },
    { icon: ShieldCheck, label: "Role-Based Access Control" },
  ],
  tags: ["React", "FastAPI", "REST APIs"],
  metrics: [
    { label: "Open POs", value: "42", tone: "lavender", bar: "70%" },
    { label: "In Transit", value: "17", tone: "lavender", bar: "45%" },
    { label: "Low Stock SKUs", value: "5", tone: "rose", bar: "20%" },
    { label: "AI Suggestions", value: "12", tone: "sage", bar: "88%" },
  ],
  dashboardId: "pharmachain",
  techStack: ["Python", "FastAPI", "React", "TypeScript", "SQLAlchemy", "PostgreSQL", "OpenAI"],
};

export const potential: ProjectSummary = {
  slug: "potential",
  name: "Potential",
  eyebrow: "Flagship project",
  chip: "⭐ Flagship Project",
  tone: "sage",
  title: "Potential — AI-Assisted Interviewing Platform",
  description:
    "Potential is an AI-assisted interviewing platform that helps interviewers collect trustworthy evidence about candidate capability.",
  longDescription:
    "Instead of making hiring decisions, Potential helps interviewers ask better questions, identify missing evidence and build explainable interview summaries — through structured evidence collection, adaptive follow-up questions and reflection reports — while keeping humans in control of every hiring decision.",
  features: [],
  tags: ["Evidence-based", "Human-in-the-loop", "Explainable"],
  dashboardId: "potential",
  techStack: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "OpenAI", "Zod", "Vite"],
  featured: true,
};

export const potentialCapabilities: readonly {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: FileSearch,
    title: "Evidence Engine",
    desc: "Extracts structured evidence from candidate responses.",
  },
  {
    icon: MessagesSquare,
    title: "Adaptive Follow-up Questions",
    desc: "Generates targeted questions when interview evidence is incomplete.",
  },
  {
    icon: FileCheck2,
    title: "Reflection Check",
    desc: "Summarises interview evidence and highlights remaining gaps.",
  },
  {
    icon: ClipboardList,
    title: "Role Planner",
    desc: "Builds interview plans from job descriptions.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    desc: "Designed around transparency, fairness and human decision-making.",
  },
  {
    icon: Eye,
    title: "Explainable Outputs",
    desc: "Every summary traces back to the evidence it was built from.",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-loop",
    desc: "Interviewers stay in control of every hiring decision, always.",
  },
  {
    icon: ListChecks,
    title: "Structured Evidence",
    desc: "Replaces gut-feel impressions with organised, comparable evidence.",
  },
] as const;

export const potentialPrinciples: readonly string[] = [
  "Evidence over impressions — collect structured evidence, not gut feel.",
  "Humans decide — Potential never scores, ranks or recommends.",
  "Transparent by design — every output traces back to observed evidence.",
  "Adaptive, not scripted — follow-up questions target real gaps in evidence.",
];

export const potentialResponsibleAI: readonly string[] = [
  "Supports interviewers — does not replace them",
  "Evidence-based, not judgment-based",
  "Transparent about what it has and hasn't observed",
  "Explainable — every output traces back to evidence",
  "No automated hiring decisions",
  "No ranking or scoring of candidates",
];

export const potentialRoadmap: readonly string[] = [
  "Complete the persistence layer with real candidates, interviews and evidence stored in a database.",
  "Support multiple interviews per candidate to build a complete evidence history over time.",
  "Introduce human evidence review and editing while keeping every AI decision transparent and explainable.",
  "Add workspaces, authentication and collaboration features for hiring teams.",
  "Build enterprise-ready capabilities such as search, audit trails and role-based access control.",
  "Continue improving interview quality through better evidence collection — not automated hiring decisions.",
];

export const potentialLessons = {
  paragraphs: [
    "Building Potential fundamentally changed how I think about AI in hiring.",
    "I began by exploring how AI could support interviews, but I realised the real opportunity wasn't automating hiring — it was helping interviewers collect better evidence. That insight became the foundation of the product.",
    "One of the biggest lessons was that strong product principles should guide every technical decision. By defining clear boundaries — such as never scoring candidates or making hiring recommendations — I found it much easier to design AI features that are transparent, explainable and genuinely useful.",
    "I also learned the importance of balancing product thinking with engineering. Building the AI workflow was only part of the challenge; creating a trustworthy, maintainable and production-ready platform requires equal focus on architecture, persistence, usability and human-centred design.",
    "Today, every feature is evaluated against one guiding question:",
  ],
  quote: "Have we collected enough trustworthy evidence to fairly understand this candidate?",
  closing:
    "That question continues to shape the direction of Potential and every product decision I make.",
} as const;

export const potentialGithubUrl = "https://github.com/VDhimar09/vibhuti-ai-platform";

export const pharmaChainGithubUrl = "https://github.com/VDhimar09/PharmaChain-AI-Clinical-Supply-Chain-Copilot";

export const pharmaChainKeyDecision =
  "PharmaChain's procurement recommendations come from a rule-based, deterministic reasoning engine rather than an LLM — every decision is traceable and auditable, which matters for regulated pharmaceutical supply chains.";

export const cogniKordRole = "Founding team member";

export const cogniKordFocusAreas: readonly string[] = [
  "Product discovery",
  "Research",
  "AI workflow orchestration",
  "Customer interviews",
  "Supply chain",
];

export const projects: readonly ProjectSummary[] = [
  potential,
  pharmaChain,
  operationalHub,
] as const;

export const operationalHubFeatures: readonly string[] = [
  "Executive Dashboard",
  "AI Operational Advisor",
  "Operational Intelligence",
  "Risk Monitoring",
  "Workflow Automation",
  "Knowledge Hub",
  "Decision Support",
  "AI Recommendations",
  "Audit Logging",
  "Enterprise Integrations",
  "Responsive UI",
];

export const operationalHubUseCases: readonly string[] = [
  "Healthcare",
  "Local Government",
  "Manufacturing",
  "Logistics",
  "Enterprise Operations",
];

export const operationalHubStack: readonly TechStack[] = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind", "Shadcn UI"] },
  { category: "Backend", items: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Redis"] },
  {
    category: "AI",
    items: [
      "OpenAI",
      "LangGraph (Planned)",
      "Model Context Protocol (Planned)",
      "LlamaIndex (Planned)",
      "AI Agents (Planned)",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "Docker",
      "Kubernetes (Planned)",
      "Azure",
      "GitHub Actions",
      "Prometheus (Planned)",
      "Grafana (Planned)",
    ],
  },
];

export const operationalHubRoadmap: readonly RoadmapItem[] = [
  { label: "Product Discovery", done: true },
  { label: "UI Prototype", done: true },
  { label: "Backend APIs", done: false },
  { label: "AI Decision Engine", done: false },
  { label: "Workflow Engine", done: false },
  { label: "Knowledge Hub", done: false },
  { label: "Agent Architecture", done: false },
  { label: "Cloud Deployment", done: false },
];

export const operationalHubPhases: readonly string[] = [
  "MVP Design",
  "UI Prototype",
  "Backend Development",
];
