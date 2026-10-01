import {
  ClipboardList, FileCheck2, FileSearch, KeyRound, ListChecks, MessagesSquare,
  Package, ShieldCheck, ShoppingCart, UserCheck, Warehouse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ProjectCaseStudy, ProjectSummary } from "@/types";

export const pharmaChain: ProjectSummary = {
  slug: "pharmachain", name: "PharmaChain", eyebrow: "AI engineering case study", chip: "Flagship project", tone: "lavender",
  title: "PharmaChain — AI Clinical Supply Chain Copilot",
  description: "A full-stack clinical supply-chain copilot combining deterministic planning, grounded document retrieval and production-minded reliability controls.",
  features: [
    { icon: ShoppingCart, label: "Rule-based planner" }, { icon: Package, label: "Inventory tools" },
    { icon: Warehouse, label: "Warehouse & shipment tools" }, { icon: MessagesSquare, label: "Grounded copilot" },
    { icon: KeyRound, label: "JWT + refresh auth" }, { icon: ShieldCheck, label: "Five-role RBAC" },
    { icon: ShoppingCart, label: "AI Procurement" }, { icon: Package, label: "Inventory Intelligence" },
    { icon: Warehouse, label: "Warehouse Capacity" }, { icon: MessagesSquare, label: "Executive Copilot" },
  ],
  tags: ["Python", "FastAPI", "React", "RAG"], dashboardId: "pharmachain",
  techStack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "SQLAlchemy", "Pydantic", "Alembic", "OpenAI API", "Sentence Transformers", "React", "TypeScript", "Docker", "GitHub Actions", "OpenTelemetry", "Prometheus", "Grafana", "Amazon S3"],
};

export const potential: ProjectSummary = {
  slug: "potential", name: "Potential", eyebrow: "AI engineering case study", chip: "Evidence-first AI", tone: "sage",
  title: "Potential — Evidence Intelligence for Fairer Hiring",
  description: "An AI-assisted interviewing workspace that helps people collect, review and report on evidence without scoring or making hiring decisions.",
  longDescription: "Structured outputs, validation and human evidence review keep the product focused on traceable evidence rather than automated judgement.",
  features: [], tags: ["React", "TypeScript", "Structured Outputs", "Human-in-the-loop"], dashboardId: "potential",
  techStack: ["React", "TypeScript", "TanStack Start", "TanStack Router", "TanStack Query", "Tailwind CSS", "Vite", "Prisma", "PostgreSQL", "OpenAI Responses API", "Structured Outputs", "Zod", "Zustand", "Vitest", "GitHub Actions"], featured: true,
};

export const potentialCapabilities: readonly { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: FileSearch, title: "Evidence extraction", desc: "Extracts structured, quoted evidence from interview responses." },
  { icon: ListChecks, title: "Evidence gaps", desc: "Identifies competency evidence that still needs exploration." },
  { icon: MessagesSquare, title: "Adaptive follow-ups", desc: "Creates targeted follow-up questions around genuine gaps." },
  { icon: ClipboardList, title: "Role planning", desc: "Builds competency-focused interview plans from role context." },
  { icon: FileCheck2, title: "Deterministic reports", desc: "Composes reports from reviewed evidence rather than an opaque summary." },
  { icon: UserCheck, title: "Human evidence review", desc: "Reviewers can accept, edit, remove, restore and annotate evidence." },
];

export const potentialPrinciples = [
  "Evidence over impressions — capture what was said, including exact quotes.",
  "Humans decide — Potential never scores, ranks or recommends candidates.",
  "Traceability — evidence links back to interview questions, responses and turns.",
  "Validation first — server-side AI calls use Structured Outputs and Zod schemas.",
] as const;

export const potentialResponsibleAI = [
  "Supports human judgement; it does not make hiring decisions.", "No automated candidate scoring or ranking.",
  "Exact quotes and interview-turn linkage make evidence inspectable.", "Human reviewers control the evidence used in reports.",
] as const;

export const potentialRoadmap = [
  "Continue interview-session persistence work across the React workspace and PostgreSQL/Prisma layer.",
  "Extend collaborative review while preserving evidence traceability and human control.",
] as const;

export const potentialLessons = {
  paragraphs: [
    "Potential is designed around a simple boundary: AI can help organise evidence, but people remain responsible for judgement.",
    "That boundary shaped the architecture — structured outputs, validation, evidence traceability, human review and deterministic report composition all support an inspectable workflow.",
  ],
  quote: "Have we collected enough trustworthy evidence to fairly understand this candidate?",
  closing: "The product is deliberately evidence-first rather than decision-automating.",
} as const;

export const potentialGithubUrl = "https://github.com/VDhimar09/potential";
export const pharmaChainGithubUrl = "https://github.com/VDhimar09/PharmaChain-AI-Clinical-Supply-Chain-Copilot";
export const projects: readonly ProjectSummary[] = [potential, pharmaChain] as const;

export const pharmaChainCaseStudy: ProjectCaseStudy = {
  slug: "pharmachain",
  overview: "PharmaChain is an AI clinical supply-chain copilot. It pairs an explainable, rule-based planner with tool traces and validated document evidence so users can inspect how an answer or recommendation was assembled.",
  problem: "Inventory, warehouse, shipment and procurement work can be fragmented across operational systems. The product explores a copilot that brings those concerns together without treating a fluent model response as a source of truth.",
  research: "The architecture starts from a regulated-domain requirement: recommendations must be inspectable. That drove a deterministic planner, a named tool registry, visible traces, and server-side checks that reject fabricated or unmatched citations.",
  systemDesign: "React and TypeScript call a FastAPI API. PostgreSQL, SQLAlchemy, Pydantic and Alembic support the application data layer; pgvector supports retrieval. Documents are chunked and embedded using either OpenAI or local Sentence Transformers, with storage abstracted between local files and Amazon S3.",
  aiWorkflow: "Intent detection routes a request to a rule-based planner and registered inventory, warehouse, shipment or procurement tools. The copilot returns supporting evidence and tool traces. PDF ingestion, chunking and pgvector retrieval ground document answers; server-side citation validation prevents unmatched citations from being presented as evidence.",
  myRole: "I designed and built the project end-to-end: FastAPI services, the deterministic reasoning and tool layer, RAG pipeline, authentication and access control, and the React/TypeScript interface.",
  keyFeatures: ["Explainable reasoning engine with intent detection, planner and tool registry", "Tool traces and supporting evidence for inventory, warehouse, shipment and procurement queries", "PDF ingestion, chunking, embeddings and pgvector retrieval", "Switchable OpenAI and local Sentence Transformer embeddings", "JWT access/refresh authentication, bcrypt, five-role permission-based RBAC and audit logging", "320+ Pytest tests, GitHub Actions, Docker validation and Docker Compose", "Privacy-aware OpenTelemetry, Prometheus and Grafana instrumentation", "Local/S3 document storage abstraction with mocked S3 tests"],
  challenges: ["Making natural-language interaction useful while preserving a deterministic, inspectable operational core.", "Validating citations on the server so unsupported retrieval claims are not surfaced as evidence.", "Keeping document storage portable between local development and S3-backed environments.", "Modelling warehouse capacity and cold-chain constraints so the procurement engine can reason over them reliably.", "Implementing JWT authentication and role-based access control across procurement, inventory and executive views."],
  tradeoffs: ["The planner is rule-based rather than an LLM decision-maker, trading a broader free-form surface for explainability and auditability.", "Embedding providers are switchable so local Sentence Transformers remain available alongside OpenAI embeddings."],
  lessonsLearned: ["Grounded AI needs controls around the model, retrieval and the presentation of evidence.", "Observability, tests and access controls are part of the product architecture, not deployment afterthoughts.", "A natural-language interface is only as trustworthy as the deterministic reasoning and data beneath it; the copilot's value comes from what it can inspect, not the chat UI alone."],
  futureImprovements: ["Continue extending the tool and evidence surface without weakening citation validation.", "Evolve deployment and operational monitoring from the existing Docker and telemetry foundations."],
};

export const potentialCaseStudy: ProjectCaseStudy = {
  slug: "potential",
  overview: "Potential is evidence intelligence for fairer hiring: an AI-assisted interview workspace that helps people gather, inspect and report on evidence while preserving human judgement.",
  problem: "Interviews can drift toward impressions and incomplete notes. Potential helps an interviewer see what evidence exists, what is missing and which question could usefully follow — without making a decision about a candidate.",
  research: "The product is deliberately bounded around evidence, not automated judgement. Exact quotes and linkage to interview question, response and turn are treated as product requirements, enabling people to review what supports a report.",
  systemDesign: "Potential is a single TanStack Start application using React and server-side functions for OpenAI Responses API calls, rather than a separate backend service. Structured Outputs and Zod validate AI responses. PostgreSQL/Prisma persistence and the React interview workspace are in progress; Zustand manages client-side workspace state.",
  aiWorkflow: "Responses move through four implemented capabilities: evidence extraction, evidence-gap analysis, adaptive follow-up questions and role/competency planning. Outputs are validated, reviewed by a human, then used in deterministic report composition — never in a hire/reject or candidate-score decision.",
  myRole: "I designed and built Potential end-to-end, including the evidence-first product boundaries, interview workspace, server-side AI workflow and reporting experience.",
  keyFeatures: ["OpenAI Responses API Structured Outputs validated with Zod", "Server-side calls with injected fake OpenAI clients for deterministic tests", "132 passing Vitest tests, GitHub Actions and gated real-model evaluations", "Exact-quote evidence traceability across interview question, response and turn", "Human evidence review: accept, edit, remove, restore and add notes", "Deterministic report composition", "React interview workspace and Zustand state management", "PostgreSQL/Prisma interview-session persistence in progress"],
  challenges: ["Confining AI output to a schema while keeping follow-up questions useful and contextual.", "Keeping evidence review human-controlled while preserving traceability through edits.", "Testing AI workflows deterministically without turning ordinary CI into a real-model dependency."],
  tradeoffs: ["Potential favours inspectable evidence collection over automated scoring, ranking or recommendations.", "Persistence is still in progress; this is stated explicitly rather than implying a completed session database."],
  lessonsLearned: ["Human-in-the-loop design has to be present in data flows and UI controls, not only product copy.", "Structured outputs, validation and deterministic tests make AI features easier to reason about."],
  futureImprovements: [...potentialRoadmap],
};
