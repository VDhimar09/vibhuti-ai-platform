import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { CurvedDivider } from "./decor";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-transparent via-surface/60 to-blush/20">
      <CurvedDivider />
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-rose via-blush to-lavender text-white shadow-soft">
                <Sparkles className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <span className="font-display text-lg tracking-tight text-ink">
                Vibhuti <span className="italic text-rose">Dhimar</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-mute">
              Designing AI platforms that transform operational complexity into intelligent
              decisions — for organisations that want to be more resilient, efficient and
              future-ready.
            </p>
            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-elevated/70 px-3 py-1 text-xs text-mute">
              <MapPin className="h-3.5 w-3.5 text-rose" /> Leicester, United Kingdom
            </div>
          </div>

          <div>
            <div className="mb-4 font-display text-sm italic text-mute">Explore</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-ink/70 hover:text-rose">About</Link></li>
              <li><Link to="/projects" className="text-ink/70 hover:text-rose">Projects</Link></li>
              <li><Link to="/engineering" className="text-ink/70 hover:text-rose">Engineering</Link></li>
              <li><Link to="/blog" className="text-ink/70 hover:text-rose">Journal</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 font-display text-sm italic text-mute">Elsewhere</div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://linkedin.com" className="inline-flex items-center gap-2 text-ink/70 hover:text-rose">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" className="inline-flex items-center gap-2 text-ink/70 hover:text-rose">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li>
                <a href="mailto:hello@vibhuti.dev" className="inline-flex items-center gap-2 text-ink/70 hover:text-rose">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-mute md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Vibhuti Dhimar — Crafted with intention.</span>
          <span className="font-display italic">"AI that augments, never replaces."</span>
        </div>
      </div>
    </footer>
  );
}
