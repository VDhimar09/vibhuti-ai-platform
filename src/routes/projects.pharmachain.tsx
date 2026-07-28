import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Bot, Circle, Code2, Cpu, Database, Github, Server } from "lucide-react";

import { Section, Reveal } from "@/components/section";
import { GradientBlobs } from "@/components/decor";
import { ProductWalkthrough } from "@/components/product-walkthrough";
import { getWalkthrough } from "@/content/walkthroughs";
import { TechBadgeList } from "@/components/tech-badge";
import {
  pharmaChain,
  pharmaChainCaseStudy,
  pharmaChainGithubUrl,
} from "@/content/projects";

export const Route = createFileRoute("/projects/pharmachain")({
  head: () => ({
    meta: [
      { title: "PharmaChain — Case Study — Vibhuti Dhimar" },
      { name: "description", content: pharmaChainCaseStudy.overview },
      { property: "og:title", content: "PharmaChain — Case Study — Vibhuti Dhimar" },
      { property: "og:description", content: pharmaChainCaseStudy.overview },
      { property: "og:url", content: "/projects/pharmachain" },
      { name: "twitter:title", content: "PharmaChain — Case Study" },
      { name: "twitter:description", content: pharmaChainCaseStudy.overview },
    ],
    links: [{ rel: "canonical", href: "/projects/pharmachain" }],
  }),
  component: PharmaChainCaseStudyPage,
});

function PharmaChainCaseStudyPage() {
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
        eyebrow={pharmaChain.eyebrow}
        title={
          <>
            Pharma<span className="italic gradient-text">Chain</span>.
          </>
        }
        subtitle={pharmaChainCaseStudy.overview}
      >
        <Reveal>
          <img
            src="/images/pharmachain/Screenshot 2026-07-08 174049.jpg"
            alt="PharmaChain — dashboard"
            loading="eager"
            decoding="async"
            className="block w-full rounded-[24px] border border-border shadow-soft"
          />
        </Reveal>
      </Section>

      <Section
        eyebrow="Overview"
        title={<>Visibility, <span className="italic gradient-text">then action</span>.</>}
        className="!pt-0"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-elevated/70 p-7 backdrop-blur">
              <div className="font-display text-xs uppercase tracking-[0.2em] text-rose">The problem</div>
              <p className="mt-4 text-base leading-relaxed text-mute">{pharmaChainCaseStudy.problem}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-lavender/30 bg-lavender/5 p-7 backdrop-blur">
              <div className="font-display text-xs uppercase tracking-[0.2em] text-violet">Research</div>
              <p className="mt-4 text-base leading-relaxed text-mute">{pharmaChainCaseStudy.research}</p>
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
          <p className="max-w-2xl text-base leading-relaxed text-mute md:text-lg">{pharmaChainCaseStudy.myRole}</p>
        </Reveal>
      </Section>

      <Section
        eyebrow="Key features"
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
        eyebrow="System design"
        title={<>How it's <span className="italic gradient-text">architected</span>.</>}
        className="!pt-0"
      >
        <Reveal>
          <div className="rounded-[32px] border border-border bg-gradient-to-br from-elevated to-blush/10 p-8 backdrop-blur md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              {[
                { icon: Code2, label: "React" },
                { icon: Server, label: "FastAPI" },
                { icon: Cpu, label: "Business Logic" },
                { icon: Database, label: "PostgreSQL" },
                { icon: Bot, label: "AI Procurement Agent" },
              ].map((step, i, arr) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-3">
                    <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-elevated px-4 py-3 shadow-soft">
                      <Icon className="h-4 w-4 text-violet" strokeWidth={1.7} aria-hidden />
                      <span className="text-sm font-medium text-ink">{step.label}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-mute/50" aria-hidden />
                    )}
                  </div>
                );
              })}
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mute">{pharmaChainCaseStudy.systemDesign}</p>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="AI workflow"
        title={<>Explainable by <span className="italic gradient-text">design</span>.</>}
        className="!pt-0"
      >
        <Reveal>
          <div className="rounded-3xl border border-lavender/30 bg-lavender/5 p-7">
            <p className="text-base leading-relaxed text-mute">{pharmaChainCaseStudy.aiWorkflow}</p>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="Engineering challenges"
        title={<>What was <span className="italic gradient-text">hard</span>.</>}
        className="!pt-0"
      >
        <ul className="grid gap-3" aria-label="Engineering challenges">
          {pharmaChainCaseStudy.challenges.map((c, i) => (
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
          {pharmaChainCaseStudy.tradeoffs.map((t, i) => (
            <Reveal key={t} delay={i * 0.05}>
              <li className="rounded-2xl border border-dashed border-border bg-elevated/40 p-5 text-sm leading-relaxed text-mute backdrop-blur">
                {t}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {getWalkthrough(pharmaChain.slug) && (
        <Section
          eyebrow="Screenshots"
          title={<>Inside <span className="italic gradient-text">PharmaChain</span>.</>}
          className="!pt-0"
        >
          <ProductWalkthrough data={getWalkthrough(pharmaChain.slug)!} />
        </Section>
      )}

      <Section
        eyebrow="Technical stack"
        title={<>The <span className="italic gradient-text">stack</span>.</>}
        className="!pt-0"
      >
        <TechBadgeList items={pharmaChain.techStack ?? []} ariaLabel="PharmaChain technologies" />
      </Section>

      <Section
        eyebrow="Future improvements"
        title={<>What's <span className="italic gradient-text">next</span>.</>}
        className="!pt-0"
      >
        <ol className="grid gap-3 md:grid-cols-2">
          {pharmaChainCaseStudy.futureImprovements.map((item, i) => (
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
        <ul className="grid gap-3" aria-label="Lessons learned">
          {pharmaChainCaseStudy.lessonsLearned.map((l, i) => (
            <Reveal key={l} delay={i * 0.05}>
              <li className="rounded-2xl border border-border bg-elevated/70 p-5 text-sm leading-relaxed text-mute backdrop-blur">
                {l}
              </li>
            </Reveal>
          ))}
        </ul>
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
    </div>
  );
}
