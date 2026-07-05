import { createFileRoute } from "@tanstack/react-router";
import { Section, Reveal } from "@/components/section";
import { GradientBlobs, Sparkle } from "@/components/decor";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vibhuti Dhimar" },
      { name: "description", content: "Let's talk about enterprise AI engagements, platform partnerships and applied AI research." },
      { property: "og:title", content: "Contact — Vibhuti Dhimar" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const channels = [
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vibhutidhimar", href: "https://linkedin.com", tone: "rose" },
  { icon: Github, label: "GitHub", value: "github.com/vibhutidhimar", href: "https://github.com", tone: "lavender" },
  { icon: Mail, label: "Email", value: "hello@vibhuti.dev", href: "mailto:hello@vibhuti.dev", tone: "rose" },
  { icon: MapPin, label: "Location", value: "Leicester, United Kingdom", tone: "lavender" },
];

function Contact() {
  return (
    <div className="relative">
      <GradientBlobs />
      <Section
        eyebrow="Contact"
        title={<>Let's build something <br /><span className="italic gradient-text">enterprise-grade</span>.</>}
        subtitle="Open to conversations about enterprise AI engagements, platform partnerships and applied AI research."
      />

      <Section className="!pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {channels.map((c, i) => {
            const Icon = c.icon;
            const tones = {
              rose: "from-rose to-blush",
              lavender: "from-lavender to-violet",
            } as const;
            const inner = (
              <div className="group flex items-start gap-5 rounded-3xl border border-border bg-gradient-to-br from-elevated to-blush/10 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-rose/40 hover:shadow-luxe">
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${tones[c.tone as keyof typeof tones]} text-white shadow-soft`}>
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-mute">{c.label}</div>
                  <div className="mt-1 font-display text-xl text-ink">{c.value}</div>
                </div>
                {c.href && <ArrowUpRight className="h-4 w-4 text-mute transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-rose" />}
              </div>
            );
            return (
              <Reveal key={c.label} delay={i * 0.06}>
                {c.href ? <a href={c.href}>{inner}</a> : inner}
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-border bg-gradient-to-br from-rose/10 via-elevated to-lavender/12 p-12 text-center shadow-luxe md:p-20">
            <Sparkle className="absolute left-10 top-10 text-rose" size={16} />
            <Sparkle className="absolute right-14 top-16 text-lavender" size={12} delay={1} />
            <Sparkle className="absolute bottom-14 left-1/3 text-blush" size={18} delay={2} />
            <h3 className="mx-auto max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Building an <span className="italic gradient-text">enterprise AI platform</span>?
            </h3>
            <p className="mx-auto mt-5 max-w-xl text-mute md:text-lg">
              I help teams architect, design and ship production-quality AI systems — from
              operational intelligence to workflow automation.
            </p>
            <a
              href="mailto:hello@vibhuti.dev"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-rose to-violet px-7 py-3.5 text-sm font-medium text-white shadow-luxe transition hover:brightness-110"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
