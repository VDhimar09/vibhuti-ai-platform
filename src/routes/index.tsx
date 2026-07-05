import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Brain,
  Cloud,
  Activity,
  BarChart3,
  Workflow,
  Sparkles,
  Heart,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Section, Reveal } from "@/components/section";
import { GradientBlobs, Sparkle, CurvedDivider, LuxeChip, OrbitRing } from "@/components/decor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibhuti Dhimar — Building AI Platforms for Intelligent Operations" },
      { name: "description", content: "I design enterprise AI platforms that transform operational complexity into intelligent decisions — helping organisations become more resilient, efficient and future-ready." },
      { property: "og:title", content: "Vibhuti Dhimar — Building AI Platforms for Intelligent Operations" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const floatingNodes = [
  { label: "AI", icon: Brain, x: "6%", y: "16%", delay: 0, tone: "rose" as const },
  { label: "Cloud", icon: Cloud, x: "84%", y: "12%", delay: 0.6, tone: "lavender" as const },
  { label: "Operations", icon: Activity, x: "4%", y: "74%", delay: 1.2, tone: "sage" as const },
  { label: "Analytics", icon: BarChart3, x: "86%", y: "70%", delay: 1.8, tone: "rose" as const },
  { label: "Automation", icon: Workflow, x: "50%", y: "4%", delay: 2.4, tone: "lavender" as const },
];

function Home() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden pt-8 pb-32 md:pt-16 md:pb-40">
        <GradientBlobs variant="hero" />

        {/* sparkles scattered */}
        <Sparkle className="absolute left-[12%] top-40 text-rose" size={18} delay={0} />
        <Sparkle className="absolute right-[16%] top-52 text-lavender" size={14} delay={1.2} />
        <Sparkle className="absolute left-[22%] bottom-40 text-blush" size={20} delay={2.1} />
        <Sparkle className="absolute right-[24%] bottom-60 text-violet" size={12} delay={0.6} />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-rose/20 bg-elevated/70 px-4 py-1.5 text-xs font-medium text-mute backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rose" />
              </span>
              Available for enterprise AI engagements
            </div>

            <h1 className="font-display text-[42px] leading-[1.02] tracking-tight text-ink md:text-[76px] lg:text-[88px]">
              Building AI Platforms
              <br />
              for{" "}
              <span className="relative inline-block">
                <span className="italic gradient-text animate-shimmer bg-gradient-to-r from-rose via-blush to-lavender bg-clip-text text-transparent">
                  Intelligent
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M2 5 Q 100 -2 198 5" stroke="url(#u1)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="u1" x1="0" x2="1">
                      <stop offset="0" stopColor="#F24C8D" />
                      <stop offset="1" stopColor="#C084FC" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              Operations.
            </h1>

            <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-mute md:text-lg">
              I design enterprise AI platforms that transform operational complexity into
              intelligent decisions, helping organisations become more resilient, efficient
              and future-ready.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-rose to-violet px-6 py-3.5 text-sm font-medium text-white shadow-luxe transition hover:shadow-glow hover:brightness-110"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated/80 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur transition hover:-translate-y-0.5 hover:border-rose/40 hover:shadow-soft"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-lavender/50 hover:bg-lavender/5"
              >
                Let's Connect
              </Link>
            </div>
          </motion.div>

          {/* Floating dashboard scene */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative mt-24 h-[440px] md:h-[520px]"
          >
            {/* Orbit ring */}
            <OrbitRing className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-rose/25 md:h-[620px] md:w-[620px] animate-drift" />

            {/* Center card */}
            <div className="absolute left-1/2 top-1/2 h-auto w-[300px] -translate-x-1/2 -translate-y-1/2 md:w-[380px]">
              <MockDashboard />
            </div>

            {floatingNodes.map((n, i) => {
              const Icon = n.icon;
              const toneStyles = {
                rose: "from-rose/20 to-blush/20 text-rose border-rose/30",
                lavender: "from-lavender/20 to-violet/15 text-violet border-lavender/30",
                sage: "from-sage/20 to-blush/10 text-sage border-sage/30",
              } as const;
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{ left: n.x, top: n.y }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: n.delay * 0.25 + 0.7, duration: 0.7 }}
                >
                  <div className="animate-float" style={{ animationDelay: `${n.delay}s` }}>
                    <div className={`flex items-center gap-2 rounded-2xl border bg-gradient-to-br ${toneStyles[n.tone]} px-4 py-2.5 shadow-soft backdrop-blur`}>
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                      <span className="text-xs font-medium">{n.label}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CurvedDivider />

      {/* ============== STATS ============== */}
      <Section
        eyebrow="By the numbers"
        title={<>A decade of operations, <span className="italic gradient-text">now in AI</span>.</>}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "10+", v: "Healthcare & Operations", sub: "years experience", tone: "rose" },
            { k: "Enterprise", v: "AI Platforms", sub: "production-grade", tone: "lavender" },
            { k: "2+", v: "Flagship AI Projects", sub: "shipped end-to-end", tone: "sage" },
            { k: "Full Stack", v: "Python · React · FastAPI", sub: "human-centred AI", tone: "rose" },
          ].map((s, i) => {
            const tones = {
              rose: "from-rose/12 via-blush/8 to-transparent",
              lavender: "from-lavender/12 via-blush/8 to-transparent",
              sage: "from-sage/12 via-blush/8 to-transparent",
            } as const;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`group relative h-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${tones[s.tone as keyof typeof tones]} p-7 transition hover:-translate-y-1 hover:shadow-luxe`}>
                  <div className="absolute right-4 top-4 opacity-40 transition group-hover:rotate-12">
                    <Sparkle size={14} delay={i * 0.4} />
                  </div>
                  <div className="font-display text-4xl leading-none text-ink md:text-5xl">
                    {s.k}
                  </div>
                  <div className="mt-4 font-display text-lg italic text-ink/80">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-mute">{s.sub}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ============== FEATURED PROJECT TEASER ============== */}
      <Section
        eyebrow="Featured platform"
        title={<>Operational <span className="italic gradient-text">AI Hub</span>.</>}
        subtitle="AI-powered enterprise operational intelligence — monitor operations, identify risks, coordinate AI-assisted decisions and automate complex operational workflows."
      >
        <Reveal>
          <div className="group relative overflow-hidden rounded-[36px] border border-border bg-gradient-to-br from-rose/5 via-elevated to-lavender/5 p-2 shadow-luxe">
            <div className="rounded-[30px] bg-elevated p-8 md:p-14">
              <div className="grid gap-10 md:grid-cols-2 md:gap-14">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {["Executive Dashboard", "AI Advisor", "Risk Monitoring", "Workflow Automation"].map((c, i) => (
                      <LuxeChip key={c} tone={i % 2 === 0 ? "rose" : "lavender"}>{c}</LuxeChip>
                    ))}
                  </div>
                  <p className="mt-7 text-base leading-relaxed text-mute md:text-lg">
                    Instead of simply reporting operational data, the platform delivers
                    AI-driven recommendations, explainable insights and intelligent workflow
                    orchestration.
                  </p>
                  <Link
                    to="/projects"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-rose hover:gap-3 transition-all"
                  >
                    See full case study <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative">
                  <MockDashboard />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ============== DESIGN PHILOSOPHY ============== */}
      <section className="relative overflow-hidden py-32 md:py-40">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-blush)_40%,transparent),transparent_65%)] blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-elevated/70 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-mute backdrop-blur">
            <Heart className="h-3 w-3 text-rose" /> Design Philosophy
          </div>
          <Reveal>
            <p className="font-display text-3xl leading-[1.2] tracking-tight text-ink md:text-5xl">
              I believe AI should{" "}
              <span className="italic gradient-text">augment human decision-making</span>
              <br className="hidden md:block" /> — not replace it.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-mute md:text-lg">
              Every platform I build combines enterprise software engineering, explainable
              AI and human-centred design — to create intelligent systems that people trust.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Explainable", desc: "Decisions with reasoning, not black boxes.", tone: "rose" },
              { icon: Users, title: "Human-centred", desc: "Built with the people who will actually use it.", tone: "lavender" },
              { icon: Sparkles, title: "Enterprise-grade", desc: "Resilient, observable, production quality.", tone: "sage" },
            ].map((c, i) => {
              const Icon = c.icon;
              const tones = {
                rose: "from-rose/15 to-blush/10 text-rose",
                lavender: "from-lavender/15 to-blush/10 text-violet",
                sage: "from-sage/15 to-blush/10 text-sage",
              } as const;
              return (
                <Reveal key={c.title} delay={0.2 + i * 0.08}>
                  <div className="h-full rounded-3xl border border-border bg-elevated/80 p-7 text-left backdrop-blur transition hover:-translate-y-1 hover:shadow-luxe">
                    <div className={`inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${tones[c.tone as keyof typeof tones]}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <div className="mt-5 font-display text-2xl text-ink">{c.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{c.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <Section className="!py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-border bg-gradient-to-br from-rose/10 via-elevated to-lavender/10 p-12 text-center shadow-luxe md:p-20">
            <Sparkle className="absolute left-10 top-10 text-rose" size={16} />
            <Sparkle className="absolute right-14 top-16 text-lavender" size={12} delay={1} />
            <Sparkle className="absolute bottom-10 left-1/3 text-blush" size={18} delay={2} />
            <h3 className="mx-auto max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Building an enterprise AI platform?
            </h3>
            <p className="mx-auto mt-5 max-w-xl text-base text-mute md:text-lg">
              Let's design something that people trust — and that ships.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-rose to-violet px-7 py-3.5 text-sm font-medium text-white shadow-luxe transition hover:brightness-110"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

export function MockDashboard({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  return (
    <div className={`relative aspect-[4/3.2] w-full overflow-hidden rounded-3xl border shadow-luxe ${
      isDark
        ? "border-ink/10 bg-[#1a1524] text-white/90"
        : "border-border bg-elevated text-ink"
    }`}>
      <div className={`flex items-center gap-1.5 border-b px-4 py-3 ${isDark ? "border-white/10" : "border-border"}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-blush/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-lavender/80" />
        <span className={`ml-3 text-[10px] font-mono ${isDark ? "text-white/50" : "text-mute"}`}>
          operational-ai-hub
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2.5 p-4">
        {[
          { l: "Ops Health", v: "94%", c: "text-sage" },
          { l: "Active Flows", v: "128", c: "text-lavender" },
          { l: "Risks", v: "3", c: "text-rose" },
        ].map((k) => (
          <div
            key={k.l}
            className={`rounded-xl border p-3 ${
              isDark ? "border-white/10 bg-white/[0.04]" : "border-border bg-surface/70"
            }`}
          >
            <div className={`text-[9px] uppercase tracking-widest ${isDark ? "text-white/50" : "text-mute"}`}>{k.l}</div>
            <div className={`font-display text-2xl ${k.c}`}>{k.v}</div>
          </div>
        ))}
      </div>
      <div className={`mx-4 rounded-xl border p-4 ${isDark ? "border-white/10 bg-white/[0.04]" : "border-border bg-surface/70"}`}>
        <div className={`mb-3 text-[9px] uppercase tracking-widest ${isDark ? "text-white/50" : "text-mute"}`}>
          Weekly signals
        </div>
        <div className="flex h-16 items-end gap-1.5">
          {[40, 55, 30, 70, 45, 80, 60, 90, 55, 75, 65, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-rose via-blush to-lavender"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className={`m-4 mt-3 flex items-center gap-2 rounded-xl border px-3 py-2.5 ${
        isDark
          ? "border-rose/30 bg-rose/10"
          : "border-rose/30 bg-rose/8"
      }`}>
        <Sparkles className="h-3.5 w-3.5 text-rose" />
        <span className={`text-[10px] ${isDark ? "text-white/80" : "text-ink/80"}`}>
          AI: shift capacity 12% to route B for 8% throughput gain
        </span>
      </div>
    </div>
  );
}
