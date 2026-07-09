// Walkthrough galleries per project. Purely data — the UI reads this via
// the ProductWalkthrough component. Ready to migrate to Supabase / a CMS.

export interface WalkthroughShot {
  src: string;
  alt: string;
  title: string;
  feature: string;
  value: string;
}

export interface ProjectWalkthrough {
  projectSlug: string;
  subtitle: string;
  description: string;
  techStack: readonly string[];
  shots: readonly WalkthroughShot[];
}

export const walkthroughs: readonly ProjectWalkthrough[] = [
  {
    projectSlug: "operational-ai-hub",
    subtitle: "AI-Powered Operational Intelligence Platform",
    description:
      "An enterprise AI platform designed to monitor operational events, coordinate specialised AI agents, automate workflows and provide explainable decision support for complex organisations.",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "OpenAI", "Docker", "Azure"],
    shots: [
      {
        src: "/images/operational-ai-hub/Screenshot 2026-07-08 192836.jpg",
        alt: "Operational AI Hub — Dashboard",
        title: "Dashboard",
        feature: "Real-time operational overview with AI-generated recommendations and executive KPIs.",
        value: "Gives leadership a single glass-pane view of organisational health and priority actions.",
      },
      {
        src: "/images/operational-ai-hub/Screenshot 2026-07-08 192931.jpg",
        alt: "Operational AI Hub — AI Agents",
        title: "AI Agents",
        feature: "Multiple specialised AI agents collaborate across operations, risk assessment, recovery planning and communications.",
        value: "Extends operational capacity without adding headcount, coordinating decisions 24/7.",
      },
      {
        src: "/images/operational-ai-hub/Screenshot 2026-07-08 193001.jpg",
        alt: "Operational AI Hub — Analytics",
        title: "Analytics",
        feature: "Executive dashboards measuring operational performance, AI effectiveness and organisational health.",
        value: "Turns operational telemetry into board-ready insight and accountability.",
      },
      {
        src: "/images/operational-ai-hub/Screenshot 2026-07-08 193017.jpg",
        alt: "Operational AI Hub — Knowledge Hub",
        title: "Knowledge Hub",
        feature: "Searchable operational knowledge base containing policies, playbooks and AI-ready documentation.",
        value: "Grounds every AI decision in trusted institutional knowledge — no hallucinations, full traceability.",
      },
    ],
  },
  {
    projectSlug: "pharmachain",
    subtitle: "AI Clinical Supply Chain Copilot",
    description:
      "A full-stack AI application that helps pharmaceutical organisations manage inventory, warehouse capacity, shipments and AI-assisted procurement decisions.",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "SQLAlchemy", "OpenAI", "Docker"],
    shots: [
      {
        src: "/images/pharmachain/Screenshot 2026-07-08 174049.jpg",
        alt: "PharmaChain — Dashboard",
        title: "Dashboard",
        feature: "Real-time visibility into clinical supply chain operations, inventory, warehouse utilisation and procurement priorities.",
        value: "Prevents costly stock-outs and supply disruptions across clinical trial sites.",
      },
      {
        src: "/images/pharmachain/Screenshot 2026-07-08 174122.jpg",
        alt: "PharmaChain — Inventory",
        title: "Inventory",
        feature: "Track medicines, vaccines and clinical supplies with expiry monitoring and AI stock recommendations.",
        value: "Reduces waste from expired stock while safeguarding availability of critical medicines.",
      },
      {
        src: "/images/pharmachain/Screenshot 2026-07-08 174142.jpg",
        alt: "PharmaChain — Warehouse Capacity",
        title: "Warehouse Capacity",
        feature: "Monitor warehouse occupancy and forecast future storage capacity using AI-assisted planning.",
        value: "Avoids detention fees and cold-chain overflow by planning capacity weeks in advance.",
      },
      {
        src: "/images/pharmachain/Screenshot 2026-07-08 174228.jpg",
        alt: "PharmaChain — AI Procurement",
        title: "AI Procurement",
        feature: "An AI procurement assistant that evaluates inventory, warehouse capacity, supplier reliability and cold-chain requirements.",
        value: "Compresses procurement cycles from days to minutes with defensible reasoning.",
      },
      {
        src: "/images/pharmachain/Screenshot 2026-07-08 174243.jpg",
        alt: "PharmaChain — Procurement Decision",
        title: "Procurement Decision",
        feature: "Explainable procurement decisions with confidence scores, reasoning timeline and tool execution evidence.",
        value: "Meets GxP, HIPAA and GDPR audit requirements with fully traceable AI decisions.",
      },
      {
        src: "/images/pharmachain/Screenshot 2026-07-08 174318.jpg",
        alt: "PharmaChain — Executive Copilot",
        title: "Executive Copilot",
        feature: "Natural language interface enabling operational teams to ask questions and receive explainable, evidence-based answers.",
        value: "Puts operational intelligence in the hands of any stakeholder without technical training.",
      },
    ],
  },
] as const;

export function getWalkthrough(slug: string): ProjectWalkthrough | undefined {
  return walkthroughs.find((w) => w.projectSlug === slug);
}
