import { createFileRoute } from "@tanstack/react-router";
import { Section, Reveal } from "@/components/section";
import { GradientBlobs, LuxeChip } from "@/components/decor";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Vibhuti Dhimar" },
      { name: "description", content: "Notes on enterprise AI, operational intelligence, FastAPI and building production AI platforms." },
      { property: "og:title", content: "Journal — Vibhuti Dhimar" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const topics = ["Enterprise AI", "Operational AI", "Building AI Platforms", "FastAPI", "Python", "React", "Healthcare AI", "AI Engineering"];

const posts = [
  { title: "Designing Explainable AI for Enterprise Operations", tag: "Enterprise AI", date: "Coming soon", excerpt: "Why explainability isn't a feature — it's a prerequisite for AI adoption in regulated industries." },
  { title: "From Reports to Recommendations: The Operational AI Shift", tag: "Operational AI", date: "Coming soon", excerpt: "How AI-driven recommendations change the economics of operational decision-making." },
  { title: "Structuring FastAPI Services for AI Platforms", tag: "FastAPI", date: "Coming soon", excerpt: "A pragmatic architecture for scalable, testable AI service backends." },
  { title: "The Agentic AI Stack for Enterprise Workflows", tag: "AI Engineering", date: "Coming soon", excerpt: "LangGraph, MCP, and the emerging pattern for durable AI agents." },
  { title: "10 Years in NHS Operations, Now Building AI for Them", tag: "Healthcare AI", date: "Coming soon", excerpt: "What frontline operations taught me about designing AI systems clinicians actually use." },
  { title: "Human-in-the-Loop AI: Getting the Interface Right", tag: "Enterprise AI", date: "Coming soon", excerpt: "The UI patterns that make or break AI decision-support tools." },
];

function Blog() {
  return (
    <div className="relative">
      <GradientBlobs />
      <Section
        eyebrow="Journal"
        title={<>Notes on <span className="italic gradient-text">building AI platforms</span>.</>}
        subtitle="Deep dives on enterprise AI architecture, operational intelligence and the engineering behind it."
      />

      <Section className="!pt-0">
        <div className="mb-10 flex flex-wrap gap-2.5">
          {topics.map((t, i) => <LuxeChip key={t} tone={i % 3 === 0 ? "rose" : i % 3 === 1 ? "lavender" : "sage"}>{t}</LuxeChip>)}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-elevated to-blush/10 p-7 backdrop-blur transition hover:-translate-y-1.5 hover:border-rose/40 hover:shadow-luxe">
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-rose/20 to-lavender/20 blur-2xl opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-rose/8 px-2.5 py-0.5 text-rose">{p.tag}</span>
                  <span className="italic text-mute">{p.date}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl leading-snug text-ink">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{p.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-rose">
                  Read <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
