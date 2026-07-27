import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  ClipboardList,
  FileCheck2,
  FileSearch,
  Github,
  MessagesSquare,
  Quote,
  Sparkles,
} from "lucide-react";

import { Section, Reveal } from "@/components/section";
import { GradientBlobs, LuxeChip } from "@/components/decor";
import { FeaturedProjectHero } from "@/components/featured-project";
import { ProductWalkthrough } from "@/components/product-walkthrough";
import { getWalkthrough } from "@/content/walkthroughs";
import {
  operationalHub,
  operationalHubFeatures,
  operationalHubPhases,
  operationalHubRoadmap,
  operationalHubStack,
  operationalHubUseCases,
  cogniKordFocusAreas,
  cogniKordRole,
  pharmaChain,
  pharmaChainGithubUrl,
  pharmaChainKeyDecision,
  potential,
  potentialCapabilities,
  potentialGithubUrl,
  potentialLessons,
  potentialPrinciples,
  potentialResponsibleAI,
  potentialRoadmap,
} from "@/content/projects";
import { TechBadgeList } from "@/components/tech-badge";
import type { Tone } from "@/types";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vibhuti Dhimar" },
      {
        name: "description",
        content:
          "Selected AI product work — Potential, PharmaChain and Operational AI Hub. Production-quality systems for decision support, operations and clinical supply chains.",
      },
      { property: "og:title", content: "Projects — Vibhuti Dhimar" },
      {
        property: "og:description",
        content:
          "AI product work spanning responsible hiring evidence, clinical supply chains and enterprise operational intelligence.",
      },
      { property: "og:url", content: "/projects" },
      { name: "twitter:title", content: "Projects — Vibhuti Dhimar" },
      {
        name: "twitter:description",
        content: "Selected AI product work, built end-to-end.",
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
            AI products, <br />
            <span className="italic gradient-text">built end-to-end</span>.
          </>
        }
        subtitle="From a responsible hiring platform to enterprise operational intelligence — production-quality systems designed to be trusted by the humans who use them."
      />

      {/* ---------------- Potential (flagship) ---------------- */}

      <Section className="!pt-0">
        <FeaturedProjectHero
          project={potential}
          heading={
            <>
              Meet <br />
              <span className="italic gradient-text">Potential</span>
            </>
          }
          media={
            <img
              src="/images/potential/home.jpg"
              alt="Potential — workspace home"
              loading="eager"
              decoding="async"
              className="block w-full rounded-[24px] border border-border shadow-soft"
            />
          }
        />
      </Section>

      <Section
        eyebrow="Overview"
        title={<>Evidence, <span className="italic gradient-text">not judgement</span>.</>}
        className="!pt-0"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-elevated/70 p-7 backdrop-blur">
              <div className="font-display text-xs uppercase tracking-[0.2em] text-rose">The problem</div>
              <p className="mt-4 text-base leading-relaxed text-mute">
                Potential started as a personal project — built while going through interviews
                myself and noticing how much of the process comes down to impressions rather than
                evidence. It's easy for an interviewer to lose track of what they still need to
                ask, and hard for a panel to compare notes without a consistent, defensible record
                of what was actually said.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-sage/30 bg-sage/5 p-7 backdrop-blur">
              <div className="font-display text-xs uppercase tracking-[0.2em] text-sage">The approach</div>
              <p className="mt-4 text-base leading-relaxed text-mute">
                Potential listens for evidence as the interview happens, tracks which competencies
                are covered, and suggests adaptive follow-up questions when evidence is missing.
                Afterwards it produces a structured evidence report and reflection check — while
                the final decision always stays with the interviewer.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <div className="mt-5 rounded-3xl border border-dashed border-border bg-elevated/40 p-7 backdrop-blur">
            <div className="font-display text-xs uppercase tracking-[0.2em] text-mute">What Potential doesn't do</div>
            <p className="mt-4 text-base leading-relaxed text-mute">
              Potential does not make hiring decisions, rank or score candidates, recommend hire or
              reject, replace interviewers, or give candidates interview answers. It exists to help
              interviewers collect trustworthy evidence — nothing more.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="Capabilities"
        title={<>Key <span className="italic gradient-text">capabilities</span>.</>}
        className="!pt-0"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {potentialCapabilities.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="h-full rounded-3xl border border-border bg-elevated/70 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-sage/40 hover:shadow-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-sage/15 to-blush/15 text-sage">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.7} aria-hidden />
                  </span>
                  <div className="mt-4 text-sm font-medium text-ink">{f.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Architecture"
        title={<>How it <span className="italic gradient-text">fits together</span>.</>}
        className="!pt-0"
      >
        <Reveal>
          <div className="rounded-[32px] border border-border bg-gradient-to-br from-elevated to-blush/10 p-8 backdrop-blur md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              {[
                { icon: ClipboardList, label: "Role Planner" },
                { icon: MessagesSquare, label: "Live Interview" },
                { icon: FileSearch, label: "Evidence Engine" },
                { icon: MessagesSquare, label: "Adaptive Follow-ups" },
                { icon: FileCheck2, label: "Reflection Check" },
              ].map((step, i, arr) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-3">
                    <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-elevated px-4 py-3 shadow-soft">
                      <Icon className="h-4 w-4 text-sage" strokeWidth={1.7} aria-hidden />
                      <span className="text-sm font-medium text-ink">{step.label}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-mute/50" aria-hidden />
                    )}
                  </div>
                );
              })}
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mute">
              A React + TanStack Start frontend drives the interview experience; OpenAI produces
              structured outputs validated with Zod at every step, so evidence extraction and
              follow-up questions stay grounded in a defined schema rather than free-form text.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="Product principles"
        title={<>Principles <span className="italic gradient-text">over features</span>.</>}
        className="!pt-0"
      >
        <ul className="grid gap-3 sm:grid-cols-2" aria-label="Potential product principles">
          {potentialPrinciples.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <li className="flex items-start gap-3 rounded-2xl border border-border bg-elevated/70 p-5 backdrop-blur">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sage" strokeWidth={1.7} aria-hidden />
                <span className="text-sm leading-relaxed text-ink/90">{p}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Responsible AI"
        title={<>Designed to <span className="italic gradient-text">support, not replace</span>.</>}
        className="!pt-0"
      >
        <ul className="grid gap-3 sm:grid-cols-2" aria-label="Potential responsible AI principles">
          {potentialResponsibleAI.map((r, i) => (
            <Reveal key={r} delay={i * 0.04}>
              <li className="flex items-center gap-3 rounded-2xl border border-sage/30 bg-sage/5 p-5">
                <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-sage" strokeWidth={1.8} aria-hidden />
                <span className="text-sm font-medium text-ink">{r}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {getWalkthrough(potential.slug) && (
        <Section
          eyebrow="Screenshots"
          title={<>Inside <span className="italic gradient-text">Potential</span>.</>}
          className="!pt-0"
        >
          <ProductWalkthrough data={getWalkthrough(potential.slug)!} />
        </Section>
      )}

      <Section
        eyebrow="Technology"
        title={<>The <span className="italic gradient-text">stack</span>.</>}
        className="!pt-0"
      >
        <TechBadgeList items={potential.techStack ?? []} ariaLabel="Potential technologies" />
      </Section>

      <Section
        eyebrow="Future roadmap"
        title={<>What's <span className="italic gradient-text">next</span>.</>}
        className="!pt-0"
      >
        <ol className="grid gap-3 md:grid-cols-2">
          {potentialRoadmap.map((item, i) => (
            <Reveal key={item} delay={i * 0.04}>
              <li className="flex items-start gap-3 rounded-2xl border border-border bg-elevated p-5">
                <Circle className="mt-0.5 h-4 w-4 shrink-0 text-mute/50" strokeWidth={1.6} aria-hidden />
                <span className="text-sm leading-relaxed text-mute">{item}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Lessons learned"
        title={<>What building it <span className="italic gradient-text">taught me</span>.</>}
        className="!pt-0"
      >
        <Reveal>
          <div className="space-y-4 rounded-[32px] border border-border bg-gradient-to-br from-elevated to-blush/10 p-8 backdrop-blur md:p-10">
            {potentialLessons.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-mute">
                {p}
              </p>
            ))}
            <blockquote className="relative rounded-2xl border border-sage/30 bg-sage/5 p-6 pl-12">
              <Quote className="absolute left-5 top-6 h-5 w-5 text-sage/60" aria-hidden />
              <p className="font-display text-lg italic leading-snug text-ink md:text-xl">
                "{potentialLessons.quote}"
              </p>
            </blockquote>
            <p className="text-base leading-relaxed text-mute">{potentialLessons.closing}</p>
          </div>
        </Reveal>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <a
            href={potentialGithubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-6 py-3.5 text-sm font-medium text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-sage/40 hover:shadow-luxe"
          >
            <Github className="h-4 w-4" strokeWidth={1.6} aria-hidden />
            View on GitHub
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
          </a>
        </Reveal>
      </Section>

      {/* ---------------- PharmaChain ---------------- */}

      <Section className="!pt-0">
        <FeaturedProjectHero
          project={pharmaChain}
          heading={
            <>
              Pharma<span className="italic gradient-text">Chain</span>
            </>
          }
          media={
            <img
              src="/images/pharmachain/Screenshot 2026-07-08 174049.jpg"
              alt="PharmaChain — dashboard"
              loading="lazy"
              decoding="async"
              className="block w-full rounded-[24px] border border-border shadow-soft"
            />
          }
        />
      </Section>

      <Section
        eyebrow="Capabilities"
        title={<>Key <span className="italic gradient-text">features</span>.</>}
        className="!pt-0"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pharmaChain.features.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.04}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-elevated/70 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-lavender/40 hover:shadow-soft">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-lavender/15 to-blush/15 text-violet">
                  <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                </span>
                <span className="text-sm font-medium text-ink">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Key AI decisions"
        title={<>Explainable by <span className="italic gradient-text">design</span>.</>}
        className="!pt-0"
      >
        <Reveal>
          <div className="rounded-3xl border border-lavender/30 bg-lavender/5 p-7">
            <p className="text-base leading-relaxed text-mute">{pharmaChainKeyDecision}</p>
          </div>
        </Reveal>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <a
            href={pharmaChainGithubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-6 py-3.5 text-sm font-medium text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-lavender/40 hover:shadow-luxe"
          >
            <Github className="h-4 w-4" strokeWidth={1.6} aria-hidden />
            View on GitHub
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
          </a>
        </Reveal>
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

      {/* ---------------- CogniKord ---------------- */}

      <Section
        eyebrow="Founding team member"
        title={<>Cogni<span className="italic gradient-text">Kord</span> AI.</>}
        subtitle="I was part of the founding team at CogniKord AI — not the founder — contributing across product discovery and research."
      >
        <Reveal>
          <div className="rounded-3xl border border-border bg-elevated/70 p-7 backdrop-blur">
            <div className="font-display text-xs uppercase tracking-[0.2em] text-mute">{cogniKordRole}</div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {cogniKordFocusAreas.map((area) => (
                <LuxeChip key={area} tone="lavender">
                  {area}
                </LuxeChip>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- Operational AI Hub ---------------- */}

      <Section
        eyebrow={operationalHub.eyebrow}
        title={<>Operational <span className="italic gradient-text">AI Hub</span>.</>}
        subtitle="AI-powered enterprise operational intelligence — monitor operations, identify risks, coordinate AI-assisted decisions and automate complex operational workflows."
      >
        <FeaturedProjectHero
          project={operationalHub}
          heading={
            <>
              Operational <br />
              <span className="italic gradient-text">AI Hub</span>
            </>
          }
        />
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
