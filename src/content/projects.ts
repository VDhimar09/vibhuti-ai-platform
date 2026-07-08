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
  chip: "✦ Warehouse Intelligence",
  tone: "sage",
  title: "ShiftPing — Intelligent warehouse job monitoring",
  description:
    "An intelligent warehouse job monitoring platform with automated notifications — so operations teams stay ahead of shift-critical events without watching dashboards.",
  features: [
    { icon: Truck, label: "Job Monitoring" },
    { icon: Package, label: "Automated Alerts" },
    { icon: Warehouse, label: "Shift Coordination" },
    { icon: ShoppingCart, label: "Ops Visibility" },
  ],
  tags: ["React", "Node.js", "Realtime Notifications"],
  metrics: [
    { label: "Active jobs", value: "24", tone: "sage" },
    { label: "Pending alerts", value: "6", tone: "rose" },
    { label: "Shift coverage", value: "92%", tone: "lavender" },
    { label: "Avg response", value: "3m", tone: "ink" },
  ],
  dashboardId: "shiftping",
  techStack: ["Python", "FastAPI", "Playwright", "PostgreSQL", "APScheduler"],
};

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
