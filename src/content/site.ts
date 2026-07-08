// Brand + navigation + site-level SEO constants.
// Pure data — no React imports. Safe to swap for a CMS/Supabase source later.

import type { Brand, NavLink } from "@/types";

export const brand: Brand = {
  name: "Vibhuti Dhimar",
  firstName: "Vibhuti",
  lastName: "Dhimar",
  role: "AI Software Engineer & Platform Builder",
  tagline:
    "Designing AI platforms that transform operational complexity into intelligent decisions — for organisations that want to be more resilient, efficient and future-ready.",
  location: "Leicester, United Kingdom",
  quote: "AI that augments, never replaces.",
  availableFor: "Available for enterprise AI engagements",
};

export const navLinks: readonly NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export const siteSeo = {
  title: "Vibhuti Dhimar — AI Software Engineer & Platform Builder",
  description:
    "I design enterprise AI platforms that transform operational complexity into intelligent decisions — helping organisations become more resilient, efficient and future-ready.",
  ogDescription:
    "Enterprise AI platforms for operational intelligence, workflow automation and human-centred decision support.",
  themeColor: "#FFFDFC",
} as const;
