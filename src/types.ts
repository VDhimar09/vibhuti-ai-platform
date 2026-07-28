// Shared TypeScript interfaces / data models.
// Kept UI-agnostic so the same shapes can be returned by Supabase later.

import type { LucideIcon } from "lucide-react";

/* ---------- Site / navigation ---------- */

export type RoutePath = "/" | "/about" | "/projects" | "/contact";

export interface NavLink {
  to: RoutePath;
  label: string;
}

export interface Brand {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  location: string;
  quote: string;
  availableFor: string;
}

/* ---------- Tones (design tokens exposed to data) ---------- */

export type Tone = "rose" | "lavender" | "sage";

/* ---------- Projects ---------- */

export interface ProjectFeatureItem {
  icon: LucideIcon;
  label: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  /** semantic tone token */
  tone: Tone | "ink";
  /** optional bar percentage — string like "70%" */
  bar?: string;
}

export type ProjectDashboardId = "operational-hub" | "pharmachain" | "potential";

export interface ProjectSummary {
  slug: string;
  name: string;
  eyebrow: string;
  chip: string;
  tone: Tone;
  title: string;
  description: string;
  longDescription?: string;
  features: ProjectFeatureItem[];
  tags: string[];
  metrics?: ProjectMetric[];
  dashboardId: ProjectDashboardId;
  techStack?: readonly string[];
  featured?: boolean;
}

export interface RoadmapItem {
  label: string;
  done: boolean;
}

export interface TechStack {
  category: string;
  items: string[];
}

/** Shared shape for grouped skill/tech-stack display (About "Skills" section). */
export interface SkillGroup {
  category: string;
  tone: Tone;
  items: readonly string[];
}

/** Full project case-study content, rendered on a project's own detail route. */
export interface ProjectCaseStudy {
  slug: string;
  overview: string;
  problem: string;
  research: string;
  systemDesign: string;
  aiWorkflow: string;
  myRole: string;
  keyFeatures: readonly string[];
  challenges: readonly string[];
  tradeoffs: readonly string[];
  lessonsLearned: readonly string[];
  futureImprovements: readonly string[];
}

/* ---------- Contact ---------- */

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
  tone: Extract<Tone, "rose" | "lavender">;
  external?: boolean;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; error: string };

/* ---------- About ---------- */

export interface TimelineEntry {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Stat {
  k: string;
  v: string;
  sub?: string;
  tone: Tone;
}
