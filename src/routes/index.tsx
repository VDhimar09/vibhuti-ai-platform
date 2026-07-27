import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  Cloud,
  Code2,
  Lightbulb,
  Rocket,
  Server,
  Stethoscope,
  User,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Section, Reveal } from "@/components/section";
import { GradientBlobs, LuxeChip, OrbitRing, Sparkle, CurvedDivider } from "@/components/decor";
import { MockDashboard } from "@/components/mock-dashboard";
import { brand, siteSeo } from "@/content/site";
import { potential } from "@/content/projects";
import type { Stat, Tone } from "@/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteSeo.title },
      { name: "description", content: siteSeo.description },
      { property: "og:title", content: siteSeo.title },
      { property: "og:description", content: siteSeo.ogDescription },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: siteSeo.title },
      { name: "twitter:description", content: siteSeo.ogDescription },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: brand.name,
          jobTitle: brand.role,
          description: siteSeo.description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Leicester",
            addressCountry: "United Kingdom",
          },
        }),
      },
    ],
  }),
  component: Home,
});

/* ---------- Data local to this page's presentation ---------- */

type FloatingNode = {
  label: string;
  icon: LucideIcon;
  x: string;
  y: string;
  delay: number;
  tone: Tone;
};

const floatingNodes: readonly FloatingNode[] = [
  { label: "AI", icon: Brain, x: "6%", y: "16%", delay: 0, tone: "rose" },
  { label: "Cloud", icon: Cloud, x: "84%", y: "12%", delay: 0.6, tone: "lavender" },
  { label: "Operations", icon: Activity, x: "4%", y: "74%", delay: 1.2, tone: "sage" },
  { label: "Analytics", icon: BarChart3, x: "86%", y: "70%", delay: 1.8, tone: "rose" },
  { label: "Automation", icon: Workflow, x: "50%", y: "4%", delay: 2.4, tone: "lavender" },
];

const homeStats: readonly Stat[] = [
  { k: "10+", v: "Healthcare & Operations", sub: "years experience", tone: "rose" },
  { k: "Enterprise", v: "AI Platforms", sub: "production-grade", tone: "lavender" },
  { k: "2+", v: "Flagship AI Projects", sub: "shipped end-to-end", tone: "sage" },
  { k: "Full Stack", v: "Python · React · FastAPI", sub: "human-centred AI", tone: "rose" },
];

const whyMe = [
  { icon: Building2, title: "Enterprise AI", desc: "Building AI products with production-minded architecture.", tone: "rose" as const },
  { icon: Lightbulb, title: "Product Thinking", desc: "Turning user problems into practical AI solutions.", tone: "lavender" as const },
  { icon: Users, title: "Human-Centred AI", desc: "Designing AI that supports people instead of replacing them.", tone: "sage" as const },
];

type JourneyStop = { icon: LucideIcon; label: string };

const careerJourney: readonly JourneyStop[] = [
  { icon: Stethoscope, label: "Healthcare Operations" },
  { icon: Code2, label: "Software Engineering" },
  { icon: Brain, label: "AI Product Engineering" },
  { icon: Building2, label: "Enterprise AI Applications" },
];

const engineeringApproach = [
  {
    icon: Code2,
    title: "Modern Frontend",
    items: ["React", "TypeScript", "Tailwind", "Performance"],
    tone: "rose" as const,
  },
  {
    icon: Server,
    title: "Backend Systems",
    items: ["FastAPI", "Python", "REST APIs", "PostgreSQL"],
    tone: "lavender" as const,
  },
  {
    icon: Brain,
    title: "AI Engineering",
    items: ["OpenAI APIs", "Prompt Engineering", "Evidence Extraction", "Reasoning"],
    tone: "sage" as const,
  },
  {
    icon: Rocket,
    title: "Deployment",
    items: ["GitHub Actions", "Vercel", "Render", "Docker"],
    tone: "rose" as const,
  },
];

/* ---------- Component ---------- */

function Home() {
  return (
    <>
      <HeroSection />
      <WhyMeSection />
      <CurvedDivider />
      <StatsSection />
      <CareerJourneySection />
      <FeaturedTeaser />
      <EngineeringApproachSection />
      <CtaSection />
    </>
  );
}

/* ---------- Sections ---------- */

const nodeToneStyles: Record<Tone, string> = {
  rose: "from-rose/20 to-blush/20 text-rose border-rose/30",
  lavender: "from-lavender/20 to-violet/15 text-violet border-lavender/30",
  sage: "from-sage/20 to-blush/10 text-sage border-sage/30",
};

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-32 md:pt-16 md:pb-40" aria-labelledby="hero-heading">
      <GradientBlobs variant="hero" />

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
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose" />
            </span>
            {brand.availableFor}
          </div>

          <h1
            id="hero-heading"
            className="font-display text-[42px] leading-[1.02] tracking-tight text-ink md:text-[76px] lg:text-[88px]"
          >
            {brand.name}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-display text-2xl leading-tight text-ink md:text-4xl">
            AI Software Engineer building{" "}
            <span className="italic gradient-text">intelligent products</span> that keep humans in
            control.
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-mute md:text-lg">
            I'm an AI Software Engineer with a background in healthcare operations, building
            enterprise AI applications using React, TypeScript, Python and FastAPI. My work focuses
            on AI systems that augment human decision-making through explainable workflows rather
            than replacing people.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-rose to-violet px-6 py-3.5 text-sm font-medium text-white shadow-luxe transition hover:shadow-glow hover:brightness-110"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated/80 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur transition hover:-translate-y-0.5 hover:border-rose/40 hover:shadow-soft"
            >
              <User className="h-4 w-4" aria-hidden /> Get in Touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative mt-24 h-[440px] md:h-[520px]"
        >
          <OrbitRing className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-rose/25 md:h-[620px] md:w-[620px] animate-drift" />

          <div className="absolute left-1/2 top-1/2 h-auto w-[300px] -translate-x-1/2 -translate-y-1/2 md:w-[380px]">
            <MockDashboard />
          </div>

          {floatingNodes.map((n, i) => {
            const Icon = n.icon;
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: n.x, top: n.y }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: n.delay * 0.25 + 0.7, duration: 0.7 }}
                aria-hidden
              >
                <div className="animate-float" style={{ animationDelay: `${n.delay}s` }}>
                  <div
                    className={`flex items-center gap-2 rounded-2xl border bg-gradient-to-br ${nodeToneStyles[n.tone]} px-4 py-2.5 shadow-soft backdrop-blur`}
                  >
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
  );
}

const statToneStyles: Record<Tone, string> = {
  rose: "from-rose/12 via-blush/8 to-transparent",
  lavender: "from-lavender/12 via-blush/8 to-transparent",
  sage: "from-sage/12 via-blush/8 to-transparent",
};

function StatsSection() {
  return (
    <Section
      eyebrow="By the numbers"
      title={<>A decade of operations, <span className="italic gradient-text">now in AI</span>.</>}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {homeStats.map((s, i) => (
          <Reveal key={s.v} delay={i * 0.08}>
            <div
              className={`group relative h-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${statToneStyles[s.tone]} p-7 transition hover:-translate-y-1 hover:shadow-luxe`}
            >
              <div className="absolute right-4 top-4 opacity-40 transition group-hover:rotate-12">
                <Sparkle size={14} delay={i * 0.4} />
              </div>
              <div className="font-display text-4xl leading-none text-ink md:text-5xl">{s.k}</div>
              <div className="mt-4 font-display text-lg italic text-ink/80">{s.v}</div>
              {s.sub && <div className="mt-1 text-xs uppercase tracking-widest text-mute">{s.sub}</div>}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FeaturedTeaser() {
  return (
    <Section
      eyebrow={potential.eyebrow}
      title={<>Introducing <span className="italic gradient-text">Potential</span>.</>}
      subtitle="Helping organisations make fairer and more confident hiring decisions — through structured evidence collection, adaptive follow-up questions and explainable reflection reports."
    >
      <Reveal>
        <div className="group relative overflow-hidden rounded-[36px] border border-sage/30 bg-gradient-to-br from-sage/6 via-elevated to-lavender/5 p-2 shadow-luxe">
          <div className="rounded-[30px] bg-elevated p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-2 md:gap-14 md:items-center">
              <div>
                <div className="flex flex-wrap gap-2">
                  {potential.tags.map((c, i) => (
                    <LuxeChip key={c} tone={i % 2 === 0 ? "sage" : "lavender"}>
                      {c}
                    </LuxeChip>
                  ))}
                </div>
                <p className="mt-7 text-base leading-relaxed text-mute md:text-lg">
                  {potential.longDescription}
                </p>
                <Link
                  to="/projects"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-rose hover:gap-3 transition-all"
                >
                  See full case study <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-soft">
                <img
                  src="/images/potential/home.jpg"
                  alt="Potential — workspace home"
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

const whyMeTones = {
  rose: "from-rose/15 to-blush/10 text-rose",
  lavender: "from-lavender/15 to-blush/10 text-violet",
  sage: "from-sage/15 to-blush/10 text-sage",
} as const;

function WhyMeSection() {
  return (
    <Section
      eyebrow="Why me"
      title={<>What I <span className="italic gradient-text">bring</span>.</>}
      className="!pt-0"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {whyMe.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-elevated/80 p-7 backdrop-blur transition hover:-translate-y-1 hover:shadow-luxe">
                <div
                  className={`inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${whyMeTones[c.tone]}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                </div>
                <div className="mt-5 font-display text-2xl text-ink">{c.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-mute">{c.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function CareerJourneySection() {
  return (
    <Section
      eyebrow="Career journey"
      title={<>From operations <span className="italic gradient-text">to AI engineering</span>.</>}
    >
      <div className="flex flex-wrap items-center gap-3">
        {careerJourney.map((stop, i, arr) => {
          const Icon = stop.icon;
          return (
            <Reveal key={stop.label} delay={i * 0.08}>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-elevated px-4 py-3 shadow-soft">
                  <Icon className="h-4 w-4 text-rose" strokeWidth={1.7} aria-hidden />
                  <span className="text-sm font-medium text-ink">{stop.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-mute/50" aria-hidden />
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function EngineeringApproachSection() {
  return (
    <Section
      eyebrow="Engineering approach"
      title={<>Engineering <span className="italic gradient-text">approach</span>.</>}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {engineeringApproach.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.title} delay={i * 0.06}>
              <div
                className={`h-full rounded-3xl border border-border bg-gradient-to-br p-7 backdrop-blur transition hover:-translate-y-1 hover:shadow-luxe ${statToneStyles[c.tone]}`}
              >
                <div
                  className={`inline-grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${whyMeTones[c.tone]}`}
                >
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.6} aria-hidden />
                </div>
                <div className="mt-5 font-display text-lg text-ink">{c.title}</div>
                <ul className="mt-3 space-y-1.5">
                  {c.items.map((item) => (
                    <li key={item} className="text-sm text-mute">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function CtaSection() {
  return (
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
            Start a conversation <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
