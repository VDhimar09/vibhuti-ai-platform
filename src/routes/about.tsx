import { createFileRoute } from "@tanstack/react-router";

import { Section, Reveal } from "@/components/section";
import { GradientBlobs, LuxeChip, Sparkle } from "@/components/decor";
import { TechBadgeList } from "@/components/tech-badge";
import {
  aboutStats,
  aboutTimeline,
  aboutToolkit,
  learningStack,
  learningIntro,
  techStack,
} from "@/content/about";
import type { TimelineEntry, Tone } from "@/types";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vibhuti Dhimar" },
      {
        name: "description",
        content:
          "From nearly a decade in NHS operations to building enterprise AI platforms — a journey grounded in real operational complexity.",
      },
      { property: "og:title", content: "About — Vibhuti Dhimar" },
      {
        property: "og:description",
        content: "From NHS operations to enterprise AI platforms — a journey grounded in real operational complexity.",
      },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: "About — Vibhuti Dhimar" },
      {
        name: "twitter:description",
        content: "From NHS operations to enterprise AI platforms.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const toolkitTones: readonly Tone[] = ["rose", "lavender", "sage"];

function About() {
  return (
    <div className="relative">
      <GradientBlobs />

      <Section
        eyebrow="About"
        title={
          <>
            A decade of operations. <br />
            <span className="italic gradient-text">A future built on AI.</span>
          </>
        }
        subtitle="I build AI-powered products that help people make better decisions. My work combines AI engineering, full-stack development and product thinking to create practical, responsible AI solutions."
      />

      <Section className="!pt-0">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-elevated to-blush/15 p-7 transition hover:-translate-y-1 hover:shadow-luxe">
                <Sparkle className="absolute right-4 top-4 opacity-40" size={12} delay={i * 0.3} />
                <div className="font-display text-4xl text-ink">{s.k}</div>
                <div className="mt-3 text-sm text-mute">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Tech Stack"
        title={<>Core <span className="italic gradient-text">technologies</span>.</>}
        subtitle="The stack I reach for when building enterprise-grade AI products end-to-end."
        className="!pt-0"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-border bg-gradient-to-br from-elevated to-blush/10 p-7 backdrop-blur transition hover:-translate-y-1 hover:shadow-luxe">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-xs uppercase tracking-[0.2em] text-mute">
                    {group.category}
                  </h3>
                  <LuxeChip tone={group.tone}>{group.items.length}</LuxeChip>
                </div>
                <TechBadgeList items={group.items} ariaLabel={`${group.category} technologies`} />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Currently Learning"
        title={<>Always <span className="italic gradient-text">growing</span>.</>}
        className="!pt-0"
      >
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-mute md:text-lg">
          {learningIntro}
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learningStack.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-dashed border-lavender/40 bg-gradient-to-br from-lavender/5 to-blush/5 p-7 backdrop-blur transition hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-xs uppercase tracking-[0.2em] text-mute">
                    {group.category}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-lavender/40 bg-lavender/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-violet/80">
                    Learning
                  </span>
                </div>
                <TechBadgeList
                  items={group.items}
                  variant="learning"
                  ariaLabel={`Currently learning — ${group.category}`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>



      <Section
        eyebrow="Journey"
        title={<>From NHS wards to <span className="italic gradient-text">AI platforms</span>.</>}
      >
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-rose via-blush to-lavender md:left-1/2"
          />
          <ol className="space-y-10">
            {aboutTimeline.map((t, i) => {
              const Icon = t.icon;
              const left = i % 2 === 0;
              return (
                <Reveal key={t.id} delay={i * 0.05}>
                  <li
                    className={`relative flex items-start gap-6 md:grid md:grid-cols-2 md:gap-14 ${
                      left ? "" : "md:[&>*:first-child]:col-start-2"
                    }`}
                  >
                    <div className={`hidden md:block ${left ? "md:text-right md:pr-14" : "md:pl-14 md:order-2"}`}>
                      <TimelineCard entry={t} />
                    </div>
                    <div className="md:hidden flex-1 pl-16 relative">
                      <div className="absolute left-1 top-2 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-rose to-violet text-white shadow-soft">
                        <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                      </div>
                      <TimelineCard entry={t} />
                    </div>
                    <div className="absolute left-1/2 top-4 hidden -translate-x-1/2 md:block">
                      <div
                        className="grid h-12 w-12 place-items-center rounded-2xl border-4 border-background bg-gradient-to-br from-rose via-blush to-lavender text-white shadow-luxe"
                        aria-hidden
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Section>

      <Section eyebrow="Toolkit" title={<>Tools I <span className="italic gradient-text">build with</span>.</>}>
        <div className="flex flex-wrap gap-2.5">
          {aboutToolkit.map((c, i) => (
            <LuxeChip key={c} tone={toolkitTones[i % toolkitTones.length]}>
              {c}
            </LuxeChip>
          ))}
        </div>
      </Section>
    </div>
  );
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="inline-block max-w-md rounded-2xl border border-border bg-elevated/80 p-6 backdrop-blur transition hover:shadow-luxe">
      <h3 className="font-display text-xl text-ink">{entry.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mute">{entry.desc}</p>
    </div>
  );
}
