import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { CurvedDivider } from "./decor";
import { brand } from "@/content/site";
import { contact } from "@/content/contact";
import { navLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-transparent via-surface/60 to-blush/20">
      <CurvedDivider />
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-2.5" aria-label={`${brand.name} — home`}>
              <span
                aria-hidden
                className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-rose via-blush to-lavender text-white shadow-soft"
              >
                <Sparkles className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <span className="font-display text-lg tracking-tight text-ink">
                {brand.firstName} <span className="italic text-rose">{brand.lastName}</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-mute">{brand.tagline}</p>
            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-elevated/70 px-3 py-1 text-xs text-mute">
              <MapPin className="h-3.5 w-3.5 text-rose" aria-hidden /> {contact.location}
            </div>
          </div>

          <nav aria-label="Footer">
            <div className="mb-4 font-display text-sm italic text-mute">Explore</div>
            <ul className="space-y-2.5 text-sm">
              {navLinks
                .filter((l) => l.to !== "/")
                .map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-ink/70 hover:text-rose">
                      {l.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <div>
            <div className="mb-4 font-display text-sm italic text-mute">Elsewhere</div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink/70 hover:text-rose"
                >
                  <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink/70 hover:text-rose"
                >
                  <Github className="h-4 w-4" aria-hidden /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-ink/70 hover:text-rose"
                >
                  <Mail className="h-4 w-4" aria-hidden /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-mute md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {brand.name} — Crafted with intention.</span>
          <span className="font-display italic">"{brand.quote}"</span>
        </div>
      </div>
    </footer>
  );
}
