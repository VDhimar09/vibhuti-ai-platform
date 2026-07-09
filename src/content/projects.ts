// Project catalogue. Text-only data model designed to move to a CMS/Supabase
// without touching UI components. Dashboards are referenced by ID and mounted
// by a UI-side registry (see components/mock-dashboard etc.).

import {
  Package,
  ShoppingCart,
  Truck,
  Warehouse,
} from "lucide-react";
import type {
  ProjectSummary,
  RoadmapItem,
  TechStack,
} from "@/types";

export const operationalHub: ProjectSummary = {
  slug: "operational-ai-hub",
  name: "Operational AI Hub",
  eyebrow: "Featured platform",
  chip: "✦ Flagship Project",
  tone: "rose",
  title: "Operational AI Hub",
  description:
    "An AI-powered enterprise operational intelligence platform that helps organisations monitor operations, identify risks, coordinate AI-assisted decisions and automate complex operational workflows.",
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
  featured: true,
};

export const pharmaChain: ProjectSummary = {
  slug: "pharmachain",
  name: "PharmaChain",
  eyebrow: "Project 02",
  chip: "✦ Enterprise Copilot",
  tone: "lavender",
  title: "PharmaChain — AI Clinical Supply Chain Copilot",
  description:
    "An enterprise copilot for clinical supply chains — combining AI procurement, intelligent warehousing, and end-to-end shipment visibility with a modern REST API foundation.",
  features: [
    { icon: ShoppingCart, label: "AI Procurement" },
    { icon: Package, label: "Inventory" },
    { icon: Warehouse, label: "Warehouse Intelligence" },
    { icon: Truck, label: "Shipment Management" },
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

export const shiftPing: ProjectSummary = {
  slug: "shiftping",
  name: "ShiftPing",
  eyebrow: "Project 03",
  chip: "🚧 In Development",
  tone: "sage",
  title: "ShiftPing — AI-Powered Warehouse Job Monitoring Platform",
  description:
    "ShiftPing is an intelligent job monitoring platform designed to help warehouse workers discover new shift opportunities faster.",
  longDescription:
    "The platform continuously monitors warehouse job listings, matches vacancies against user preferences and sends instant notifications when suitable shifts become available.",
  features: [
    { icon: Truck, label: "Automated Job Monitoring" },
    { icon: Package, label: "Instant Notifications" },
    { icon: Warehouse, label: "Smart Job Matching" },
    { icon: ShoppingCart, label: "Saved Preferences" },
  ],
  tags: ["Warehouse", "Automation", "Notifications"],
  metrics: [
    { label: "Active jobs", value: "24", tone: "sage" },
    { label: "Pending alerts", value: "6", tone: "rose" },
    { label: "Shift coverage", value: "92%", tone: "lavender" },
    { label: "Avg response", value: "3m", tone: "ink" },
  ],
  dashboardId: "shiftping",
  techStack: ["Python", "FastAPI", "PostgreSQL", "Playwright", "APScheduler", "Docker"],
};

export const shiftPingFeatures: readonly {
  title: string;
  desc: string;
}[] = [
  {
    title: "Automated Job Monitoring",
    desc: "Continuously checks supported warehouse job listings.",
  },
  {
    title: "Smart Job Matching",
    desc: "Matches jobs using location, shift type, contract type and preferred working hours.",
  },
  {
    title: "Instant Notifications",
    desc: "Sends alerts when new matching jobs are detected.",
  },
  {
    title: "Saved Preferences",
    desc: "Allows users to configure locations, working hours and warehouse preferences.",
  },
  {
    title: "Real-time Monitoring",
    desc: "Background monitoring with scheduled updates.",
  },
  {
    title: "Future AI Recommendations",
    desc: "Recommend suitable jobs based on previous applications and user behaviour.",
  },
] as const;

export const shiftPingStack: readonly TechStack[] = [
  { category: "Frontend", items: ["React", "TypeScript"] },
  { category: "Backend", items: ["Python", "FastAPI"] },
  { category: "Database", items: ["PostgreSQL"] },
  { category: "Automation", items: ["Playwright", "APScheduler"] },
  { category: "Notifications", items: ["Email", "Telegram"] },
  { category: "Deployment", items: ["Docker", "GitHub"] },
];

export const shiftPingTech: readonly string[] = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Playwright",
  "APScheduler",
  "Docker",
  "GitHub",
  "REST APIs",
];

export const shiftPingRoadmap: readonly RoadmapItem[] = [
  { label: "Research completed", done: true },
  { label: "Architecture designed", done: true },
  { label: "MVP planning", done: true },
  { label: "User authentication", done: false },
  { label: "Job monitoring engine", done: false },
  { label: "Notification service", done: false },
  { label: "Dashboard", done: false },
  { label: "AI recommendations", done: false },
  { label: "Production deployment", done: false },
];

export const shiftPingGithubUrl = "https://github.com/VDhimar09";

export const projects: readonly ProjectSummary[] = [
  operationalHub,
  pharmaChain,
  shiftPing,
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
