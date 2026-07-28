import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  ClipboardList,
  Code2,
  FileCheck2,
  FileSearch,
  Github,
  MessagesSquare,
  Quote,
  Server,
  Sparkles,
} from "lucide-react";

import { Section, Reveal } from "@/components/section";
import { GradientBlobs, LuxeChip } from "@/components/decor";
import { ProductWalkthrough } from "@/components/product-walkthrough";
import { getWalkthrough } from "@/content/walkthroughs";
import { TechBadgeList } from "@/components/tech-badge";
import {
  potential,
  potentialCapabilities,
  potentialCaseStudy,
  potentialGithubUrl,
  potentialLessons,
  potentialPrinciples,
  potentialResponsibleAI,
} from "@/content/projects";

export const Route = createFileRoute("/projects/potential")({
  head: () => ({
    meta: [
      { title: "Potential — Case Study — Vibhuti Dhimar" },
      { name: "description", content: potentialCaseStudy.overview },
      { property: "og:title", content: "Potential — Case Study — Vibhuti Dhimar" },
      { property: "og:description", content: potentialCaseStudy.overview },
      { property: "og:url", content: "/projects/potential" },
      { name: "twitter:title", content: "Potential — Case Study" },
      { name: "twitter:description", content: potentialCaseStudy.overview },
    ],
    links: [{ rel: "canonical", href: "/projects/potential" }],
  }),
  component: PotentialCaseStudyPage,
});

function PotentialCaseStudyPage() {
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
        eyebrow={potential.eyebrow}
        title={
          <>
            Meet <span className="italic gradient-text">Potential</span>.
          </>
        }
        subtitle={potentialCaseStudy.overview}
      >
        <Reveal>
          <img
            src="/images/potential/home.jpg"
            alt="Potential — workspace home"
            loading="eager"
            decoding="async"
            className="block w-full rounded-[24px] border border-border shadow-soft"
          />
        </Reveal>
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
              <p className="mt-4 text-base leading-relaxed text-mute">{potentialCaseStudy.problem}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-sage/30 bg-sage/5 p-7 backdrop-blur">
              <div className="font-display text-xs uppercase tracking-[0.2em] text-sage">Research</div>
              <p className="mt-4 text-base leading-relaxed text-mute">{potentialCaseStudy.research}</p>
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
        eyebrow="My role"
        title={<>Solo <span className="italic gradient-text">build</span>.</>}
        className="!pt-0"
      >
        <Reveal>
          <p className="max-w-2xl text-base leading-relaxed text-mute md:text-lg">{potentialCaseStudy.myRole}</p>
        </Reveal>
      </Section>

      <Section
        eyebrow="Key features"
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
        eyebrow="System design"
        title={<>How it's <span className="italic gradient-text">architected</span>.</>}
        className="!pt-0"
      >
        <Reveal>
          <div className="rounded-[32px] border border-border bg-gradient-to-br from-elevated to-blush/10 p-8 backdrop-blur md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              {[
                { icon: Code2, label: "React" },
                { icon: Server, label: "API" },
                { icon: FileSearch, label: "Evidence Engine" },
                { icon: ClipboardList, label: "Gap Analysis" },
                { icon: MessagesSquare, label: "Follow-up Generator" },
                { icon: FileCheck2, label: "Reflection Report" },
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
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mute">{potentialCaseStudy.systemDesign}</p>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="AI workflow"
        title={<>Structured, <span className="italic gradient-text">not free-form</span>.</>}
        className="!pt-0"
      >
        <Reveal>
          <div className="rounded-3xl border border-sage/30 bg-sage/5 p-7">
            <p className="text-base leading-relaxed text-mute">{potentialCaseStudy.aiWorkflow}</p>
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

      <Section
        eyebrow="Engineering challenges"
        title={<>What was <span className="italic gradient-text">hard</span>.</>}
        className="!pt-0"
      >
        <ul className="grid gap-3" aria-label="Engineering challenges">
          {potentialCaseStudy.challenges.map((c, i) => (
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
          {potentialCaseStudy.tradeoffs.map((t, i) => (
            <Reveal key={t} delay={i * 0.05}>
              <li className="rounded-2xl border border-dashed border-border bg-elevated/40 p-5 text-sm leading-relaxed text-mute backdrop-blur">
                {t}
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
        eyebrow="Technical stack"
        title={<>The <span className="italic gradient-text">stack</span>.</>}
        className="!pt-0"
      >
        <TechBadgeList items={potential.techStack ?? []} ariaLabel="Potential technologies" />
      </Section>

      <Section
        eyebrow="Future improvements"
        title={<>What's <span className="italic gradient-text">next</span>.</>}
        className="!pt-0"
      >
        <ol className="grid gap-3 md:grid-cols-2">
          {potentialCaseStudy.futureImprovements.map((item, i) => (
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
    </div>
  );
}
