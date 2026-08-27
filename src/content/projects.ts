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
  ProjectCaseStudy,
  ProjectSummary,
  RoadmapItem,
  TechStack,
} from "@/types";

export const operationalHub: ProjectSummary = {
  slug: "operational-ai-hub",
  name: "Operational AI Hub",
  eyebrow: "Project 03",
  chip: "◐ In Progress",
  tone: "rose",
  title: "Operational AI Hub",
  description:
    "An operational intelligence platform I'm designing and building to help organisations monitor operations, identify risk and coordinate AI-assisted decisions. Currently a UI prototype — backend and AI decision engine are next.",
  longDescription:
    "The idea: instead of just reporting operational data, give teams AI-generated recommendations and explainable insights alongside it. The UI prototype explores that; the backend and decision engine are still ahead.",
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
    "An enterprise AI platform for clinical supply-chain operations — bringing AI-powered procurement, inventory intelligence and warehouse capacity planning into one dashboard with explainable decisions, JWT authentication and role-based access control.",
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
  title: "Potential — Evidence-first AI for fairer hiring",
  description:
    "Potential helps interviewers collect better evidence about candidate capability. It doesn't decide who to hire — it helps interviewers ask better questions, identify evidence gaps and keep a defensible record of what was actually discussed.",
  longDescription:
    "Built around the principle that AI should support human judgment, not replace it. Potential uses structured evidence extraction, adaptive follow-up questions and explainable outputs to help interviewers make fairer, more consistent hiring decisions.",
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

export const potentialGithubUrl = "https://github.com/VDhimar09/potential";

export const pharmaChainGithubUrl = "https://github.com/VDhimar09/PharmaChain-AI-Clinical-Supply-Chain-Copilot";

export const pharmaChainKeyDecision =
  "PharmaChain's procurement recommendations come from a rule-based, deterministic reasoning engine rather than an LLM — every decision is traceable and auditable, which matters for regulated pharmaceutical supply chains.";

export const cogniKordRole = "Founding Product & Research Associate";

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

/* ---------- Case studies (full project detail pages) ---------- */

export const potentialCaseStudy: ProjectCaseStudy = {
  slug: "potential",
  overview:
    "Potential is an AI-assisted interviewing platform that helps interviewers collect trustworthy evidence about candidate capability. It doesn't score, rank or recommend — it helps interviewers ask better questions and keep a defensible record of what was actually said.",
  problem:
    "Potential started as a personal project, built while I was going through interviews myself and noticing how much of the process comes down to impressions rather than evidence. It's easy for an interviewer to lose track of what they still need to ask, and hard for a panel to compare notes without a consistent, defensible record of what was actually covered.",
  research:
    "I looked at how structured, evidence-based interviewing is meant to work in hiring practice — the gap between that theory and how interviews actually run in practice was the starting point. That gap, more than any particular AI capability, shaped the product: the job was to help interviewers collect better evidence, not to automate the judgement itself.",
  systemDesign:
    "Potential is a single TanStack Start application — React on the frontend, with server-side functions handling the AI calls rather than a separate backend service. OpenAI produces structured outputs validated with Zod schemas at every step, so evidence extraction and follow-up questions stay grounded in a defined schema rather than free-form text.",
  aiWorkflow:
    "During an interview, transcript segments are sent to OpenAI against a Zod-validated schema that extracts evidence per competency. A gap-analysis step compares captured evidence to the competencies the role requires and generates adaptive follow-up questions only where evidence is genuinely missing. At the end, a reflection step produces a structured evidence report and highlights remaining gaps — it never outputs a hire/reject recommendation.",
  myRole:
    "I designed and built Potential end-to-end, solo — product decisions, UI, the evidence-extraction and follow-up AI workflow, and the reporting experience.",
  keyFeatures: [
    "Evidence engine that extracts structured evidence from responses",
    "Adaptive follow-up questions when evidence is incomplete",
    "Reflection check that summarises evidence and flags gaps",
    "Role planner that builds interview plans from job descriptions",
    "Explainable outputs — every summary traces back to observed evidence",
  ],
  challenges: [
    "Keeping AI-generated follow-up questions relevant and non-repetitive without hard-coding a script.",
    "Designing Zod schemas that OpenAI reliably conforms to across varied, messy interview transcripts.",
    "Deciding what Potential should explicitly refuse to do — no scoring, no ranking, no recommendations — and holding that line in the prompts and the UI, not just the copy.",
  ],
  tradeoffs: [
    "Chose evidence collection over automated scoring, even though scoring would make for a flashier demo — it's the less impressive but more responsible choice.",
    "No persistence layer yet: the current build works with an active interview session rather than a full candidate database, a deliberate scope cut to get the AI workflow right first.",
  ],
  lessonsLearned: [
    "The real opportunity wasn't automating hiring decisions — it was helping interviewers collect better evidence.",
    "Strong product principles (never score, never rank, never recommend) made the AI feature design easier, not harder.",
    "Building a trustworthy, maintainable platform takes as much attention to architecture and persistence as it does to the AI workflow itself.",
  ],
  futureImprovements: [...potentialRoadmap],
};

export const pharmaChainCaseStudy: ProjectCaseStudy = {
  slug: "pharmachain",
  overview:
    "PharmaChain is an enterprise copilot for clinical supply chains — bringing inventory, warehouse capacity and procurement into one dashboard, with an AI copilot that reasons over that data to support faster, explainable decisions.",
  problem:
    "Clinical supply chains span inventory, warehouse capacity and procurement decisions that are often tracked separately, making it hard to see the full picture or act before a stock-out or capacity problem becomes urgent.",
  research:
    "I looked at how pharmaceutical and clinical supply teams typically track this today — usually across separate systems or spreadsheets — and at what regulated environments require of any automated recommendation: it has to be explainable and auditable, not just plausible. That requirement shaped the core architecture decision below.",
  systemDesign:
    "A React frontend talks to a FastAPI backend backed by PostgreSQL. Business logic for procurement, inventory and warehouse capacity sits in its own service layer, separate from the conversational copilot, so the reasoning behind a recommendation stays inspectable independent of the chat interface.",
  aiWorkflow:
    "Procurement recommendations come from a rule-based, deterministic reasoning engine rather than an LLM — every recommendation is traceable and auditable, which matters for a regulated pharmaceutical supply chain. OpenAI powers the Executive Copilot layer on top: a natural-language interface that lets stakeholders ask questions and get answers grounded in that same underlying data and reasoning, with a visible reasoning timeline and confidence score rather than an opaque chat response.",
  myRole:
    "I designed and built PharmaChain end-to-end, solo — the data model, FastAPI backend, procurement reasoning engine, authentication and access control, and the React dashboard and copilot interface.",
  keyFeatures: [
    "AI procurement recommendations with confidence scores and reasoning timeline",
    "Inventory intelligence with expiry monitoring",
    "Warehouse capacity forecasting",
    "Executive copilot — natural-language Q&A over operational data",
    "JWT authentication",
    "Role-based access control",
  ],
  challenges: [
    "Balancing an approachable natural-language interface with the requirement that every underlying recommendation stay deterministic and auditable, not just plausible-sounding.",
    "Modelling warehouse capacity and cold-chain constraints in a way the procurement engine could reason over reliably.",
    "Implementing JWT authentication and role-based access control correctly across procurement, inventory and executive-level views.",
  ],
  tradeoffs: [
    pharmaChainKeyDecision,
    "Prioritised a deterministic core over an LLM-driven one for procurement logic — slower to build than prompting a model directly, but the right call for a regulated domain.",
  ],
  lessonsLearned: [
    "Regulated domains change the calculus for AI: explainability and auditability aren't nice-to-haves, they're the requirement.",
    "A natural-language interface is only as trustworthy as the reasoning underneath it — the copilot's value comes from what it's connected to, not the chat UI.",
  ],
  futureImprovements: [
    "Add persistence-backed multi-tenant deployments for multiple organisations.",
    "Deepen supplier-reliability data and bring it into the procurement reasoning engine.",
    "Add automated alerting when AI confidence scores drop below a set threshold.",
  ],
};

export const operationalHubCaseStudy: ProjectCaseStudy = {
  slug: "operational-ai-hub",
  overview:
    "Operational AI Hub is an early-stage concept for enterprise operational intelligence — a platform to help organisations monitor operations, identify risk and coordinate AI-assisted decisions. It's currently at UI-prototype stage; the backend and AI decision engine are the next phase.",
  problem:
    "Organisations running complex operations — healthcare, logistics, local government — often monitor them through a mix of dashboards, spreadsheets and manual escalation, with no single place to see risk and coordinate a response.",
  research:
    "Product discovery focused on how operational and risk data is currently surfaced to decision-makers across a few different sectors, and where the gaps were between reporting (what happened) and decision support (what to do next). That research shaped the initial UI prototype.",
  systemDesign:
    "The planned architecture is a React/TypeScript frontend on a FastAPI + PostgreSQL backend, with Redis for caching and Docker for deployment. The UI prototype is built against this design, but the backend, AI decision engine and workflow engine are not yet implemented — see Future Improvements.",
  aiWorkflow:
    "The intended AI workflow — specialised agents collaborating across operations, risk assessment and recovery planning, grounded in a searchable knowledge hub — is designed but not built. The current prototype demonstrates the interface for that workflow (dashboard, AI agent views, analytics, knowledge hub) ahead of the FastAPI backend and decision engine that would power it.",
  myRole:
    "I led product discovery and designed and built the UI prototype, solo. Backend and AI-engine implementation is the next phase of the project.",
  keyFeatures: [
    "Executive dashboard concept for operational overview",
    "AI agent views for risk monitoring and recovery planning",
    "Analytics views for operational performance",
    "Knowledge hub concept grounding decisions in policies and playbooks",
  ],
  challenges: [
    "Scoping an ambitious platform down to a UI prototype that still demonstrates the core idea clearly, without overbuilding before validating the concept.",
    "Designing a data model general enough to work across healthcare, logistics and local-government use cases.",
  ],
  tradeoffs: [
    "Built the UI prototype before the backend, deliberately, to validate the product concept and workflows before committing to a full data model and AI architecture.",
  ],
  lessonsLearned: [
    "Prototyping the interface first made it much easier to reason about what the backend and AI engine actually need to support.",
  ],
  futureImprovements: [...operationalHubRoadmap.filter((r) => !r.done).map((r) => r.label)],
};
