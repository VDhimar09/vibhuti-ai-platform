import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { brand, navLinks } from "@/content/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass-luxe border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="group flex items-center gap-2.5" aria-label={`${brand.name} — home`}>
          <span
            aria-hidden
            className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-rose via-blush to-lavender text-white shadow-soft transition group-hover:scale-105"
          >
            <Sparkles className="h-4 w-4" strokeWidth={1.8} />
          </span>
          <span className="hidden font-display text-lg tracking-tight text-ink sm:inline">
            {brand.firstName} <span className="italic text-rose">{brand.lastName}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 rounded-full border border-border bg-elevated/70 p-1 backdrop-blur md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-1.5 text-sm text-mute transition hover:text-ink"
              activeProps={{
                className:
                  "!bg-gradient-to-br !from-rose/10 !to-lavender/10 !text-ink font-medium",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-gradient-to-br from-ink to-ink/80 px-5 py-2.5 text-sm font-medium text-white shadow-soft transition hover:shadow-luxe md:inline-flex"
          >
            Let's talk
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-elevated/70 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary mobile" className="border-t border-border/50 glass-luxe md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-ink hover:bg-rose/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
