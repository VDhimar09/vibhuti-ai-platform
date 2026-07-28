// Brand + navigation + site-level SEO constants.
// Pure data — no React imports. Safe to swap for a CMS/Supabase source later.

import type { Brand, NavLink } from "@/types";

export const brand: Brand = {
  name: "Vibhuti Dhimar",
  firstName: "Vibhuti",
  lastName: "Dhimar",
  role: "AI Software Engineer & Product Engineer",
  tagline:
    "Thanks for visiting. I'm always happy to talk about AI engineering, product work, or opportunities to build software that helps people make better decisions.",
  location: "Leicester, United Kingdom",
  quote: "AI that supports the decision — the person still makes it.",
  availableFor: "Open to AI Software Engineer & Forward Deployed Engineer opportunities",
};

export const navLinks: readonly NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export const siteSeo = {
  title: "Vibhuti Dhimar — AI Software Engineer & Product Engineer",
  description:
    "AI Software Engineer with a decade in healthcare operations. I build full-stack AI products — React, TypeScript, Python, FastAPI — with a strong product and responsible-AI focus.",
  ogDescription:
    "Full-stack AI products built with React, TypeScript, Python and FastAPI — designed around evidence, explainability and keeping humans in control.",
  themeColor: "#FFFDFC",
} as const;
