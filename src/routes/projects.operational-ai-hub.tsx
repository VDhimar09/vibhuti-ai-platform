import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Circle } from "lucide-react";

import { Section, Reveal } from "@/components/section";
import { GradientBlobs, LuxeChip } from "@/components/decor";
import { ProductWalkthrough } from "@/components/product-walkthrough";
import { getWalkthrough } from "@/content/walkthroughs";
import {
  operationalHub,
  operationalHubCaseStudy,
  operationalHubFeatures,
  operationalHubPhases,
  operationalHubRoadmap,
  operationalHubStack,
  operationalHubUseCases,
} from "@/content/projects";
import type { Tone } from "@/types";

export const Route = createFileRoute("/projects/operational-ai-hub")({
  head: () => ({
    meta: [
      { title: "Operational AI Hub — Case Study — Vibhuti Dhimar" },
      { name: "description", content: operationalHubCaseStudy.overview },
      { property: "og:title", content: "Operational AI Hub — Case Study — Vibhuti Dhimar" },
      { property: "og:description", content: operationalHubCaseStudy.overview },
      { property: "og:url", content: "/projects/operational-ai-hub" },
      { name: "twitter:title", content: "Operational AI Hub — Case Study" },
      { name: "twitter:description", content: operationalHubCaseStudy.overview },
    ],
    links: [{ rel: "canonical", href: "/projects/operational-ai-hub" }],
  }),
  component: OperationalHubCaseStudyPage,
});

const phaseTones: readonly Tone[] = ["rose", "lavender", "sage"];

function OperationalHubCaseStudyPage() {
  return (
    <div className="relative">
      <GradientBlobs />

      <Section className="!pb-0">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-mute transition hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> All projects
        </Link>
      </Section>

      <Section
        eyebrow={operationalHub.eyebrow}
        title={
          <>
            Operational <span className="italic gradient-text">AI Hub</span>.
          </>
        }
        subtitle={operationalHubCaseStudy.overview}
      >
        <Reveal>
          <img
            src="/images/operational-ai-hub/Screenshot 2026-07-08 192836.jpg"
            alt="Operational AI Hub — dashboard prototype"
            loading="eager"
            decoding="async"
            className="block w-full rounded-[24px] border border-border shadow-soft"
          />
        </Reveal>
      </Section>

      <Section
        eyebrow="Overview"
        title={<>The <span className="italic gradient-text">problem</span>.</>}
        className="!pt-0"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-elevated/70 p-7 backdrop-blur">
              <div className="font-display text-xs uppercase tracking-[0.2em] text-rose">The problem</div>
              <p className="mt-4 text-base leading-relaxed text-mute">{operationalHubCaseStudy.problem}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-rose/30 bg-rose/5 p-7 backdrop-blur">
              <div className="font-display text-xs uppercase tracking-[0.2em] text-rose">Research</div>
              <p className="mt-4 text-base leading-relaxed text-mute">{operationalHubCaseStudy.research}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="My role"
        title={<>Solo <span className="italic gradient-text">build</span>.</>}
        className="!pt-0"
      >
        <Reveal>
          <p className="max-w-2xl text-base leading-relaxed text-mute md:text-lg">{operationalHubCaseStudy.myRole}</p>
        </Reveal>
      </Section>

      {getWalkthrough(operationalHub.slug) && (
        <Section
          eyebrow="Screenshots"
          title={<>Inside the <span className="italic gradient-text">prototype</span>.</>}
          className="!pt-0"
        >
          <ProductWalkthrough data={getWalkthrough(operationalHub.slug)!} />
        </Section>
      )}

      <Section
        eyebrow="Key features"
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
        eyebrow="System design"
        title={<>Planned <span className="italic gradient-text">architecture</span>.</>}
        className="!pt-0"
      >
        <Reveal>
          <p className="max-w-2xl text-base leading-relaxed text-mute md:text-lg">{operationalHubCaseStudy.systemDesign}</p>
        </Reveal>
      </Section>

      <Section
        eyebrow="Technical stack"
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
        eyebrow="AI workflow"
        title={<>Designed, <span className="italic gradient-text">not yet built</span>.</>}
        className="!pt-0"
      >
        <Reveal>
          <div className="rounded-3xl border border-rose/30 bg-rose/5 p-7">
            <p className="text-base leading-relaxed text-mute">{operationalHubCaseStudy.aiWorkflow}</p>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="Engineering challenges"
        title={<>What was <span className="italic gradient-text">hard</span>.</>}
        className="!pt-0"
      >
        <ul className="grid gap-3" aria-label="Engineering challenges">
          {operationalHubCaseStudy.challenges.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <li className="rounded-2xl border border-border bg-elevated/70 p-5 text-sm leading-relaxed text-mute backdrop-blur">
                {c}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Trade-offs"
        title={<>Deliberate <span className="italic gradient-text">trade-offs</span>.</>}
        className="!pt-0"
      >
        <ul className="grid gap-3" aria-label="Trade-offs">
          {operationalHubCaseStudy.tradeoffs.map((t, i) => (
            <Reveal key={t} delay={i * 0.05}>
              <li className="rounded-2xl border border-dashed border-border bg-elevated/40 p-5 text-sm leading-relaxed text-mute backdrop-blur">
                {t}
              </li>
            </Reveal>
          ))}
        </ul>
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
        eyebrow="Lessons learned"
        title={<>What it's <span className="italic gradient-text">taught me so far</span>.</>}
        className="!pt-0"
      >
        <ul className="grid gap-3" aria-label="Lessons learned">
          {operationalHubCaseStudy.lessonsLearned.map((l, i) => (
            <Reveal key={l} delay={i * 0.05}>
              <li className="rounded-2xl border border-border bg-elevated/70 p-5 text-sm leading-relaxed text-mute backdrop-blur">
                {l}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </div>
  );
}
