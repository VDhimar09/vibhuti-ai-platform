import { createFileRoute } from "@tanstack/react-router";
import { Section, Reveal } from "@/components/section";
import { GradientBlobs, LuxeChip, Sparkle } from "@/components/decor";
import {
  BookOpen,
  Coffee,
  Rocket,
  Telescope,
  Cloud,
  Compass,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/engineering")({
  head: () => ({
    meta: [
      { title: "Engineering — Vibhuti Dhimar" },
      { name: "description", content: "Currently building, exploring and reaching toward — an evolving map of enterprise AI engineering." },
      { property: "og:title", content: "Engineering — Vibhuti Dhimar" },
      { property: "og:url", content: "/engineering" },
    ],
    links: [{ rel: "canonical", href: "/engineering" }],
  }),
  component: Engineering,
});

const experience = [
  { org: "NHS", role: "Operational Leadership", period: "~10 years", desc: "Delivering resilient operations in high-stakes healthcare environments." },
  { org: "AI Startups", role: "AI Software Engineer", period: "Recent", desc: "AI features for clinical operations and workflow automation." },
  { org: "AI Engineering", role: "Platform Builder", period: "Recent", desc: "Data pipelines, LLM integrations, evaluation, observability." },
  { org: "Personal AI Projects", role: "Founder / Builder", period: "Ongoing", desc: "Shipping enterprise-grade AI platforms end-to-end." },
];

const roadmapCards = [
  {
    title: "Currently Building",
    subtitle: "Where the work is happening today.",
    icons: [BookOpen, Coffee],
    tone: "rose" as const,
    items: ["FastAPI", "PostgreSQL", "React", "TypeScript", "Docker", "Repository Pattern", "REST APIs"],
    note: "Notebook open. Coffee refilled. Shipping.",
  },
  {
    title: "Currently Exploring",
    subtitle: "The frontier I'm mapping right now.",
    icons: [Telescope, Cloud],
    tone: "lavender" as const,
    items: ["LangGraph", "Model Context Protocol", "AI Agents", "AI Evaluations", "Knowledge Graphs", "Vector Databases", "OpenTelemetry", "Kubernetes", "Azure AI", "LLM Observability"],
    note: "Reading, prototyping, taking notes.",
  },
  {
    title: "Next Milestones",
    subtitle: "The horizon I'm building toward.",
    icons: [Rocket, Compass],
    tone: "sage" as const,
    items: ["Enterprise AI Platforms", "Operational Intelligence", "AI Governance", "Human-in-the-Loop AI", "Explainable AI", "Agentic AI", "Cloud-Native Systems"],
    note: "Blueprints drawn. Stars aligned.",
  },
];

const toneMap = {
  rose: {
    grad: "from-rose/15 via-blush/10 to-transparent",
    iconBg: "from-rose to-blush",
    text: "text-rose",
  },
  lavender: {
    grad: "from-lavender/15 via-blush/10 to-transparent",
    iconBg: "from-lavender to-violet",
    text: "text-violet",
  },
  sage: {
    grad: "from-sage/15 via-blush/10 to-transparent",
    iconBg: "from-sage to-lavender",
    text: "text-sage",
  },
} as const;

function Engineering() {
  return (
    <div className="relative">
      <GradientBlobs />
      <Section
        eyebrow="Engineering"
        title={<>The engineering <span className="italic gradient-text">journey</span>.</>}
        subtitle="What I'm building today, what I'm exploring next, and where I'm heading — an evolving map, not a fixed résumé."
      />

      <Section eyebrow="Experience" title={<>A working <span className="italic gradient-text">timeline</span>.</>} className="!pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {experience.map((e, i) => (
            <Reveal key={e.org} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-border bg-gradient-to-br from-elevated to-blush/10 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-rose/40 hover:shadow-luxe">
                <div className="flex items-start justify-between">
                  <div className="font-display text-2xl text-ink">{e.org}</div>
                  <span className="text-xs uppercase tracking-widest text-mute">{e.period}</span>
                </div>
                <div className="mt-1 text-sm italic text-rose">{e.role}</div>
                <p className="mt-4 text-sm leading-relaxed text-mute">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Roadmap" title={<>Currently building, exploring & <span className="italic gradient-text">reaching for</span>.</>} className="!pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {roadmapCards.map((c, i) => {
            const tone = toneMap[c.tone];
            const [IconA, IconB] = c.icons;
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className={`group relative h-full overflow-hidden rounded-[32px] border border-border bg-gradient-to-br ${tone.grad} p-8 transition hover:-translate-y-1.5 hover:shadow-luxe`}>
                  <Sparkle className="absolute right-5 top-5 opacity-60" size={14} delay={i * 0.4} />
                  <div className="flex items-center gap-2">
                    <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${tone.iconBg} text-white shadow-soft`}>
                      <IconA className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <div className={`grid h-10 w-10 place-items-center rounded-2xl border border-border bg-elevated ${tone.text}`}>
                      <IconB className="h-4 w-4" strokeWidth={1.6} />
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-3xl leading-tight text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm italic text-mute">{c.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.items.map((item) => (
                      <span key={item} className="rounded-full border border-border bg-elevated/80 px-3 py-1 text-xs text-ink/85">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className={`mt-7 flex items-center gap-2 text-xs italic ${tone.text}`}>
                    <Sparkles className="h-3.5 w-3.5" /> {c.note}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Signals" title={<>Engineering <span className="italic gradient-text">activity</span>.</>} className="!pt-0">
        <ContributionGrid />
      </Section>

      <Section className="!pt-0">
        <div className="flex flex-wrap gap-2.5">
          {["Agentic AI", "Cloud-Native", "Observability", "Explainable AI", "Human-in-the-loop", "Governance"].map((t, i) => (
            <LuxeChip key={t} tone={i % 3 === 0 ? "rose" : i % 3 === 1 ? "lavender" : "sage"}>{t}</LuxeChip>
          ))}
        </div>
      </Section>
    </div>
  );
}

function ContributionGrid() {
  const weeks = 26;
  const days = 7;
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const r = seed / 233280;
    return r < 0.35 ? 0 : r < 0.6 ? 1 : r < 0.8 ? 2 : r < 0.93 ? 3 : 4;
  });
  const bg = [
    "bg-blush/25",
    "bg-blush/60",
    "bg-rose/50",
    "bg-lavender/70",
    "bg-gradient-to-br from-rose to-violet",
  ];
  return (
    <div className="rounded-3xl border border-border bg-gradient-to-br from-elevated to-blush/10 p-7 backdrop-blur">
      <div className="mb-5 flex items-center justify-between text-xs text-mute">
        <span className="italic">Last 6 months</span>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          {bg.map((c, i) => <span key={i} className={`h-3 w-3 rounded-sm ${c}`} />)}
          <span>More</span>
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto">
        {cells.map((v, i) => (
          <div key={i} className={`h-3 w-3 rounded-[3px] ${bg[v]} transition hover:scale-125`} />
        ))}
      </div>
    </div>
  );
}
