import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Section, Reveal } from "@/components/section";
import { GradientBlobs, LuxeChip } from "@/components/decor";
import { FeaturedProjectHero } from "@/components/featured-project";
import {
  cogniKordFocusAreas,
  cogniKordRole,
  operationalHub,
  operationalHubCaseStudy,
  pharmaChain,
  pharmaChainCaseStudy,
  potential,
  potentialCaseStudy,
} from "@/content/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vibhuti Dhimar" },
      {
        name: "description",
        content:
          "Selected AI product work — Potential, PharmaChain and Operational AI Hub. Full case studies covering problem, architecture, AI workflow and trade-offs.",
      },
      { property: "og:title", content: "Projects — Vibhuti Dhimar" },
      {
        property: "og:description",
        content:
          "AI product work spanning responsible hiring evidence, clinical supply chains and operational intelligence.",
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
        subtitle="Potential is the flagship — a responsible-AI hiring platform I designed and built solo. Below it, PharmaChain and an in-progress operational intelligence platform. Each has a full case study: problem, architecture, AI workflow and trade-offs."
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
        <CaseStudyLink to="/projects/potential" role={potentialCaseStudy.myRole} tone="sage" />
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
        <CaseStudyLink
          to="/projects/pharmachain"
          role={pharmaChainCaseStudy.myRole}
          tone="lavender"
        />
      </Section>

      {/* ---------------- Operational AI Hub ---------------- */}

      <Section className="!pt-0">
        <FeaturedProjectHero
          project={operationalHub}
          heading={
            <>
              Operational <br />
              <span className="italic gradient-text">AI Hub</span>
            </>
          }
          media={
            <img
              src="/images/operational-ai-hub/Screenshot 2026-07-08 192836.jpg"
              alt="Operational AI Hub — dashboard prototype"
              loading="lazy"
              decoding="async"
              className="block w-full rounded-[24px] border border-border shadow-soft"
            />
          }
        />
        <CaseStudyLink
          to="/projects/operational-ai-hub"
          role={operationalHubCaseStudy.myRole}
          tone="rose"
        />
      </Section>

      {/* ---------------- CogniKord (experience, not a project) ---------------- */}

      <Section
        eyebrow="Founding Product & Research Associate"
        title={
          <>
            Cogni<span className="italic gradient-text">Kord</span> AI.
          </>
        }
        subtitle="I was part of the founding team at CogniKord AI as Founding Product & Research Associate, contributing across product discovery, customer interviews and AI workflow orchestration."
      >
        <Reveal>
          <div className="rounded-3xl border border-border bg-elevated/70 p-7 backdrop-blur">
            <div className="font-display text-xs uppercase tracking-[0.2em] text-mute">
              {cogniKordRole}
            </div>
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

      <Section className="!pt-0">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-rose to-violet px-7 py-3.5 text-sm font-medium text-white shadow-luxe transition hover:brightness-110"
        >
          Discuss a project{" "}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
        </Link>
      </Section>
    </div>
  );
}

function CaseStudyLink({
  to,
  role,
  tone,
}: {
  to: "/projects/potential" | "/projects/pharmachain" | "/projects/operational-ai-hub";
  role: string;
  tone: "rose" | "lavender" | "sage";
}) {
  return (
    <Reveal delay={0.1}>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-elevated/60 p-6 backdrop-blur md:px-8">
        <p className="max-w-xl text-sm leading-relaxed text-mute">
          <span className="font-medium text-ink/80">My role — </span>
          {role}
        </p>
        <Link
          to={to}
          className={`group inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-all hover:gap-3 ${
            tone === "sage" ? "text-sage" : tone === "lavender" ? "text-violet" : "text-rose"
          }`}
        >
          Read the full case study <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </Reveal>
  );
}
