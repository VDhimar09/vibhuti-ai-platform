// Contact data — split from site.ts so it can grow independently
// (and later be sourced from Supabase or environment).

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { ContactChannel } from "@/types";

export const contact = {
  email: "vibhutidhimar@live.com",
  linkedinUrl: "https://www.linkedin.com/in/vibhuti-dhimar/",
  linkedinDisplay: "linkedin.com/in/vibhuti-dhimar",
  githubUrl: "https://github.com/VDhimar09",
  githubDisplay: "github.com/VDhimar09",
  location: "Leicester, United Kingdom",
} as const;

export const contactChannels: readonly ContactChannel[] = [
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: contact.linkedinDisplay,
    href: contact.linkedinUrl,
    tone: "rose",
    external: true,
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: contact.githubDisplay,
    href: contact.githubUrl,
    tone: "lavender",
    external: true,
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    tone: "rose",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    value: contact.location,
    tone: "lavender",
  },
] as const;

export const contactCopy = {
  heading: "Let's Connect",
  intro:
    "If you're hiring for an AI or full-stack engineering role, or just want to talk about a project, I'd like to hear from you. LinkedIn is fastest for recruiters; email works well for anything longer.",
  formTitle: "Start a conversation",
  formEyebrow: "Send a message",
  successMessage: "Thanks — I'll be in touch soon.",
  errorFallback: "Something went wrong. Please email me directly.",
} as const;
