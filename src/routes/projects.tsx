import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Circle } from "lucide-react";

import { Section, Reveal } from "@/components/section";
import { GradientBlobs, LuxeChip } from "@/components/decor";
import { FeaturedProjectHero } from "@/components/featured-project";
import { ProjectCard } from "@/components/project-card";
import { ProductWalkthrough } from "@/components/product-walkthrough";
import { getWalkthrough } from "@/content/walkthroughs";
import {
  operationalHub,
  operationalHubFeatures,
  operationalHubPhases,
  operationalHubRoadmap,
  operationalHubStack,
  operationalHubUseCases,
  pharmaChain,
  shiftPing,
} from "@/content/projects";
import type { Tone } from "@/types";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vibhuti Dhimar" },
      {
        name: "description",
        content:
          "Flagship enterprise AI platforms — Operational AI Hub, PharmaChain and ShiftPing. Production-quality systems for operations, workflows and decision intelligence.",
      },
      { property: "og:title", content: "Projects — Vibhuti Dhimar" },
      {
        property: "og:description",
        content:
          "Enterprise AI platforms for operational intelligence, clinical supply chains and warehouse operations.",
      },
      { property: "og:url", content: "/projects" },
      { name: "twitter:title", content: "Projects — Vibhuti Dhimar" },
      {
        name: "twitter:description",
        content: "Selected enterprise AI platforms built end-to-end.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const phaseTones: readonly Tone[] = ["rose", "lavender", "sage"];

function Projects() {
  return (
    <div className="relative">
      <GradientBlobs />
      <Section
        eyebrow="Selected work"
        title={
          <>
            Enterprise AI platforms, <br />
            <span className="italic gradient-text">built end-to-end</span>.
          </>
        }
        subtitle="Production-quality systems for operations, workflows and decision intelligence — designed to be trusted by the humans who use them."
      />

      <Section className="!pt-0">
        <FeaturedProjectHero project={operationalHub} />
      </Section>

      {getWalkthrough(operationalHub.slug) && (
        <Section
          eyebrow="Product walkthrough"
          title={<>Inside the <span className="italic gradient-text">Operational AI Hub</span>.</>}
          className="!pt-0"
        >
          <ProductWalkthrough data={getWalkthrough(operationalHub.slug)!} />
        </Section>
      )}

      <Section
        eyebrow="Capabilities"
        title={<>Key <span className="italic gradient-text">features</span>.</>}
        className="!pt-0"
      >
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="Operational AI Hub features">
          {operationalHubFeatures.map((f, i) => (
            <Reveal key={f} delay={i * 0.03}>
              <li className="flex items-center gap-3 rounded-2xl border border-border bg-elevated/70 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-rose/40 hover:shadow-soft">
                <span
                  aria-hidden
                  className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-rose/20 to-lavender/20"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-rose to-lavender" />
                </span>
                <span className="text-sm font-medium text-ink">{f}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Use cases"
        title={<>Where it <span className="italic gradient-text">fits</span>.</>}
        className="!pt-0"
      >
        <div className="flex flex-wrap gap-2.5">
          {operationalHubUseCases.map((u, i) => (
            <LuxeChip key={u} tone={i % 2 === 0 ? "rose" : "lavender"}>
              {u}
            </LuxeChip>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Technology"
        title={<>The <span className="italic gradient-text">stack</span>.</>}
        className="!pt-0"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {operationalHubStack.map((s, idx) => (
            <Reveal key={s.category} delay={idx * 0.06}>
              <div className="h-full rounded-3xl border border-border bg-gradient-to-br from-elevated to-blush/10 p-7 backdrop-blur transition hover:-translate-y-1 hover:shadow-luxe">
                <div className="font-display text-xs uppercase tracking-[0.2em] text-rose">
                  {s.category}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {s.items.map((i) => (
                    <li key={i} className="text-sm text-ink/85">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Status"
        title={<>Project <span className="italic gradient-text">roadmap</span>.</>}
        className="!pt-0"
      >
        <div className="rounded-[32px] border border-border bg-gradient-to-br from-elevated to-blush/10 p-8 backdrop-blur md:p-10">
          <div className="mb-8 flex flex-wrap items-center gap-2.5 text-sm">
            <span className="text-mute">Current phase:</span>
            {operationalHubPhases.map((p, i) => (
              <LuxeChip key={p} tone={phaseTones[i % phaseTones.length]}>
                {p}
              </LuxeChip>
            ))}
          </div>
          <ol className="grid gap-3 md:grid-cols-2">
            {operationalHubRoadmap.map((r) => (
              <li
                key={r.label}
                className={`flex items-center gap-3 rounded-2xl border p-5 transition ${
                  r.done ? "border-sage/30 bg-sage/5" : "border-border bg-elevated"
                }`}
              >
                {r.done ? (
                  <CheckCircle2 className="h-5 w-5 text-sage" strokeWidth={1.8} aria-label="Complete" />
                ) : (
                  <Circle className="h-5 w-5 text-mute/50" strokeWidth={1.5} aria-label="Not yet started" />
                )}
                <span className={`text-sm ${r.done ? "text-ink font-medium" : "text-mute"}`}>
                  {r.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section
        eyebrow={pharmaChain.eyebrow}
        title={<>Pharma<span className="italic gradient-text">Chain</span> — AI Clinical Supply Chain Copilot.</>}
      >
        <ProjectCard project={pharmaChain} dashboardTitle="Enterprise Dashboard" animatedBorder />
      </Section>

      {getWalkthrough(pharmaChain.slug) && (
        <Section
          eyebrow="Product walkthrough"
          title={<>Inside <span className="italic gradient-text">PharmaChain</span>.</>}
          className="!pt-0"
        >
          <ProductWalkthrough data={getWalkthrough(pharmaChain.slug)!} />
        </Section>
      )}

      <Section
        eyebrow={shiftPing.eyebrow}
        title={<>Shift<span className="italic gradient-text">Ping</span> — Intelligent warehouse job monitoring.</>}
      >
        <ProjectCard project={shiftPing} dashboardTitle="Shift Console" />
      </Section>

      <Section className="!pt-0">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-rose to-violet px-7 py-3.5 text-sm font-medium text-white shadow-luxe transition hover:brightness-110"
        >
          Discuss a project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
        </Link>
      </Section>
    </div>
  );
}
