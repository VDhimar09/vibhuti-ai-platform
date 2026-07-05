import { createFileRoute } from "@tanstack/react-router";
import { Section, Reveal } from "@/components/section";
import { GradientBlobs, LuxeChip, Sparkle } from "@/components/decor";
import { Briefcase, Building2, GraduationCap, Rocket, Stethoscope, Brain } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vibhuti Dhimar" },
      { name: "description", content: "From nearly a decade in NHS operations to building enterprise AI platforms — a journey grounded in real operational complexity." },
      { property: "og:title", content: "About — Vibhuti Dhimar" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { icon: GraduationCap, title: "Junior Software Developer", desc: "Started with the fundamentals — clean code, testing, disciplined delivery." },
  { icon: Stethoscope, title: "~10 Years NHS Operations", desc: "Real operational complexity: coordination, resilience, decisions under pressure." },
  { icon: Briefcase, title: "Full-Stack Software Engineering", desc: "Modern systems with Python, React and cloud-native tooling." },
  { icon: Rocket, title: "AI Startups", desc: "Shipping AI-first products end-to-end for enterprise customers." },
  { icon: Building2, title: "Enterprise AI Engineering", desc: "Architecting AI platforms for regulated, mission-critical environments." },
  { icon: Brain, title: "Building AI Platforms", desc: "Operational intelligence, workflow automation, explainable decision support." },
];

function About() {
  return (
    <div className="relative">
      <GradientBlobs />
      <Section
        eyebrow="About"
        title={<>A decade of operations. <br /><span className="italic gradient-text">A future built on AI.</span></>}
        subtitle="I bridge the gap between operational reality and enterprise-grade AI systems — because I've lived on both sides."
      />

      <Section className="!pt-0">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "10+", v: "Healthcare & Operations" },
            { k: "Enterprise", v: "AI Platforms" },
            { k: "2+", v: "Flagship AI Projects" },
            { k: "Full Stack", v: "Python · React · FastAPI" },
          ].map((s, i) => (
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

      <Section eyebrow="Journey" title={<>From NHS wards to <span className="italic gradient-text">AI platforms</span>.</>}>
        <div className="relative">
          <div aria-hidden className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-rose via-blush to-lavender md:left-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => {
              const Icon = t.icon;
              const left = i % 2 === 0;
              return (
                <Reveal key={i} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 md:grid md:grid-cols-2 md:gap-14 ${left ? "" : "md:[&>*:first-child]:col-start-2"}`}>
                    <div className={`hidden md:block ${left ? "md:text-right md:pr-14" : "md:pl-14 md:order-2"}`}>
                      <TimelineCard t={t} align={left ? "right" : "left"} />
                    </div>
                    <div className="md:hidden flex-1 pl-16 relative">
                      <div className="absolute left-1 top-2 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-rose to-violet text-white shadow-soft">
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </div>
                      <TimelineCard t={t} />
                    </div>
                    <div className="absolute left-1/2 top-4 hidden -translate-x-1/2 md:block">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border-4 border-background bg-gradient-to-br from-rose via-blush to-lavender text-white shadow-luxe">
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <Section eyebrow="Toolkit" title={<>Tools I <span className="italic gradient-text">build with</span>.</>}>
        <div className="flex flex-wrap gap-2.5">
          {["Enterprise AI", "Full Stack", "Python", "React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "Azure", "OpenAI"].map((c, i) => (
            <LuxeChip key={c} tone={i % 3 === 0 ? "rose" : i % 3 === 1 ? "lavender" : "sage"}>{c}</LuxeChip>
          ))}
        </div>
      </Section>
    </div>
  );
}

function TimelineCard({ t, align }: { t: { title: string; desc: string }; align?: "left" | "right" }) {
  return (
    <div className={`inline-block max-w-md rounded-2xl border border-border bg-elevated/80 p-6 backdrop-blur transition hover:shadow-luxe ${align === "right" ? "" : ""}`}>
      <div className="font-display text-xl text-ink">{t.title}</div>
      <div className="mt-2 text-sm leading-relaxed text-mute">{t.desc}</div>
    </div>
  );
}
