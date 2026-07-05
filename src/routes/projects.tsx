import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Reveal } from "@/components/section";
import { GradientBlobs, LuxeChip, Sparkle } from "@/components/decor";
import { MockDashboard } from "./index";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  Package,
  ShoppingCart,
  Truck,
  Warehouse,
} from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vibhuti Dhimar" },
      { name: "description", content: "Flagship enterprise AI platforms — Operational AI Hub and PharmaChain. Production-quality systems for operations, workflows and decision intelligence." },
      { property: "og:title", content: "Projects — Vibhuti Dhimar" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const roadmap = [
  { label: "Product Discovery", done: true },
  { label: "UI Prototype", done: true },
  { label: "Backend APIs", done: false },
  { label: "AI Decision Engine", done: false },
  { label: "Workflow Engine", done: false },
  { label: "Knowledge Hub", done: false },
  { label: "Agent Architecture", done: false },
  { label: "Cloud Deployment", done: false },
];

const features = [
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

const useCases = ["Healthcare", "Local Government", "Manufacturing", "Logistics", "Enterprise Operations"];

const stack = {
  Frontend: ["React", "TypeScript", "Tailwind", "Shadcn UI"],
  Backend: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Redis"],
  AI: ["OpenAI", "LangGraph (Planned)", "Model Context Protocol (Planned)", "LlamaIndex (Planned)", "AI Agents (Planned)"],
  Infrastructure: ["Docker", "Kubernetes (Planned)", "Azure", "GitHub Actions", "Prometheus (Planned)", "Grafana (Planned)"],
};

function Projects() {
  return (
    <div className="relative">
      <GradientBlobs />
      <Section
        eyebrow="Selected work"
        title={<>Enterprise AI platforms, <br /><span className="italic gradient-text">built end-to-end</span>.</>}
        subtitle="Production-quality systems for operations, workflows and decision intelligence — designed to be trusted by the humans who use them."
      />

      {/* ============== FEATURED — Operational AI Hub ============== */}
      <Section className="!pt-0">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[40px] border border-border bg-gradient-to-br from-rose/8 via-elevated to-blush/12 p-2 shadow-luxe">
            <div className="relative rounded-[32px] bg-elevated p-8 md:p-14">
              <Sparkle className="absolute right-10 top-10 text-rose" size={14} />
              <div className="grid gap-12 md:grid-cols-[1.05fr_1fr] md:items-center">
                <div>
                  <LuxeChip tone="rose">✦ Flagship Project</LuxeChip>
                  <h2 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-6xl">
                    Operational <br />
                    <span className="italic gradient-text">AI Hub</span>
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-mute md:text-lg">
                    An AI-powered enterprise operational intelligence platform that helps
                    organisations monitor operations, identify risks, coordinate AI-assisted
                    decisions and automate complex operational workflows.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-mute">
                    Instead of simply reporting operational data, the platform provides
                    AI-driven recommendations, explainable insights and intelligent workflow
                    orchestration.
                  </p>
                </div>
                <div className="relative">
                  <div aria-hidden className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-rose/30 via-lavender/20 to-transparent blur-3xl" />
                  <MockDashboard variant="dark" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="Capabilities" title={<>Key <span className="italic gradient-text">features</span>.</>} className="!pt-0">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f} delay={i * 0.03}>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-elevated/70 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-rose/40 hover:shadow-soft">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-rose/20 to-lavender/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-rose to-lavender" />
                </span>
                <span className="text-sm font-medium text-ink">{f}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Use cases" title={<>Where it <span className="italic gradient-text">fits</span>.</>} className="!pt-0">
        <div className="flex flex-wrap gap-2.5">
          {useCases.map((u, i) => <LuxeChip key={u} tone={i % 2 === 0 ? "rose" : "lavender"}>{u}</LuxeChip>)}
        </div>
      </Section>

      <Section eyebrow="Technology" title={<>The <span className="italic gradient-text">stack</span>.</>} className="!pt-0">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(stack).map(([k, items], idx) => (
            <Reveal key={k} delay={idx * 0.06}>
              <div className="h-full rounded-3xl border border-border bg-gradient-to-br from-elevated to-blush/10 p-7 backdrop-blur transition hover:-translate-y-1 hover:shadow-luxe">
                <div className="font-display text-xs uppercase tracking-[0.2em] text-rose">{k}</div>
                <ul className="mt-4 space-y-2.5">
                  {items.map((i) => (
                    <li key={i} className="text-sm text-ink/85">{i}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Status" title={<>Project <span className="italic gradient-text">roadmap</span>.</>} className="!pt-0">
        <div className="rounded-[32px] border border-border bg-gradient-to-br from-elevated to-blush/10 p-8 backdrop-blur md:p-10">
          <div className="mb-8 flex flex-wrap items-center gap-2.5 text-sm">
            <span className="text-mute">Current phase:</span>
            <LuxeChip tone="rose">MVP Design</LuxeChip>
            <LuxeChip tone="lavender">UI Prototype</LuxeChip>
            <LuxeChip tone="sage">Backend Development</LuxeChip>
          </div>
          <ol className="grid gap-3 md:grid-cols-2">
            {roadmap.map((r, i) => (
              <li key={i} className={`flex items-center gap-3 rounded-2xl border p-5 transition ${
                r.done
                  ? "border-sage/30 bg-sage/5"
                  : "border-border bg-elevated"
              }`}>
                {r.done ? (
                  <CheckCircle2 className="h-5 w-5 text-sage" strokeWidth={1.8} />
                ) : (
                  <Circle className="h-5 w-5 text-mute/50" strokeWidth={1.5} />
                )}
                <span className={`text-sm ${r.done ? "text-ink font-medium" : "text-mute"}`}>{r.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ============== PharmaChain ============== */}
      <Section
        eyebrow="Project 02"
        title={<>Pharma<span className="italic gradient-text">Chain</span> — AI Clinical Supply Chain Copilot.</>}
      >
        <Reveal>
          <div className="group relative overflow-hidden rounded-[40px] p-[1.5px] shadow-luxe">
            {/* Animated gradient border */}
            <div aria-hidden className="absolute inset-0 rounded-[40px] bg-[conic-gradient(from_120deg,var(--color-lavender),var(--color-blush),var(--color-rose),var(--color-lavender))] opacity-70 animate-shimmer" />
            <div className="relative grid gap-12 rounded-[38px] bg-elevated p-8 md:grid-cols-[1fr_1.1fr] md:p-14">
              <div>
                <LuxeChip tone="lavender">✦ Enterprise Copilot</LuxeChip>
                <p className="mt-6 text-base leading-relaxed text-mute md:text-lg">
                  An enterprise copilot for clinical supply chains — combining AI procurement,
                  intelligent warehousing, and end-to-end shipment visibility with a modern
                  REST API foundation.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    { icon: ShoppingCart, label: "AI Procurement" },
                    { icon: Package, label: "Inventory" },
                    { icon: Warehouse, label: "Warehouse Intelligence" },
                    { icon: Truck, label: "Shipment Management" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 rounded-2xl border border-border bg-surface/60 p-4 transition hover:-translate-y-0.5 hover:border-lavender/40">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-lavender/15 to-blush/15 text-violet">
                        <Icon className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <span className="text-sm font-medium text-ink">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["React", "FastAPI", "REST APIs"].map((c) => <LuxeChip key={c} tone="lavender">{c}</LuxeChip>)}
                </div>
              </div>
              <div className="rounded-3xl border border-border bg-white p-7 shadow-soft">
                <div className="flex items-center justify-between">
                  <div className="font-display text-xs uppercase tracking-[0.2em] text-violet">Enterprise Dashboard</div>
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-lavender/50" />
                    <span className="h-2 w-2 rounded-full bg-blush/70" />
                    <span className="h-2 w-2 rounded-full bg-rose/50" />
                  </div>
                </div>
                <div className="mt-6 space-y-5">
                  {[
                    { l: "Open POs", v: "42", w: "70%" },
                    { l: "In Transit", v: "17", w: "45%" },
                    { l: "Low Stock SKUs", v: "5", w: "20%" },
                    { l: "AI Suggestions", v: "12", w: "88%" },
                  ].map((r) => (
                    <div key={r.l}>
                      <div className="flex justify-between text-xs">
                        <span className="text-mute">{r.l}</span>
                        <span className="font-medium text-ink font-mono">{r.v}</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-blush/30">
                        <div className="h-full rounded-full bg-gradient-to-r from-lavender via-blush to-rose" style={{ width: r.w }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="!pt-0">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-rose to-violet px-7 py-3.5 text-sm font-medium text-white shadow-luxe transition hover:brightness-110"
        >
          Discuss a project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </Section>
    </div>
  );
}
