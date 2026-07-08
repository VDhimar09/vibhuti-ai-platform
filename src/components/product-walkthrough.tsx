import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

import { Reveal } from "@/components/section";
import { TechBadgeList } from "@/components/tech-badge";
import type { ProjectWalkthrough } from "@/content/walkthroughs";

/**
 * Premium product-walkthrough gallery for a project.
 * - Hero screenshot with prev/next controls
 * - Thumbnail strip navigation
 * - Full-screen lightbox on click
 * - Keyboard navigation (arrows, escape)
 * - Lazy-loaded, responsive images
 */
export function ProductWalkthrough({ data }: { data: ProjectWalkthrough }) {
  const { shots } = data;
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const count = shots.length;
  const active = shots[index];

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, go]);

  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-[40px] border border-border bg-gradient-to-br from-elevated to-blush/10 p-6 shadow-luxe md:p-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mute">
              Product walkthrough
            </div>
            <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">
              {data.subtitle}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute md:text-base">
              {data.description}
            </p>
          </div>
        </div>

        {data.techStack.length > 0 && (
          <div className="mb-8">
            <TechBadgeList items={data.techStack} ariaLabel={`${data.subtitle} technologies`} />
          </div>
        )}

        {/* Hero screenshot */}
        <div className="group relative overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
          <AnimatePresence mode="wait">
            <motion.button
              key={active.src}
              type="button"
              onClick={() => setLightbox(true)}
              initial={{ opacity: 0, scale: 1.01 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative block w-full cursor-zoom-in"
              aria-label={`Open ${active.title} full-screen`}
            >
              <img
                src={active.src}
                alt={active.alt}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
              <span className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-widest text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                <Expand className="h-3 w-3" aria-hidden /> Expand
              </span>
            </motion.button>
          </AnimatePresence>

          {/* Prev / Next */}
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-white/90 p-2.5 shadow-soft backdrop-blur transition hover:-translate-y-1/2 hover:scale-105 hover:bg-white md:left-5"
              >
                <ChevronLeft className="h-4 w-4 text-ink" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-white/90 p-2.5 shadow-soft backdrop-blur transition hover:-translate-y-1/2 hover:scale-105 hover:bg-white md:right-5"
              >
                <ChevronRight className="h-4 w-4 text-ink" aria-hidden />
              </button>
            </>
          )}
        </div>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`caption-${active.src}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-6 grid gap-4 rounded-3xl border border-border bg-elevated/60 p-6 backdrop-blur md:grid-cols-[auto_1fr] md:items-start md:gap-8"
          >
            <div className="flex items-center gap-3 md:flex-col md:items-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-rose/15 to-lavender/15 px-3 py-1 font-mono text-[11px] tracking-widest text-ink">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
              <h4 className="font-display text-xl text-ink md:text-2xl">{active.title}</h4>
            </div>
            <div className="min-w-0 space-y-2">
              <p className="text-sm leading-relaxed text-ink/85 md:text-base">{active.feature}</p>
              <p className="text-sm leading-relaxed text-mute md:text-base">
                <span className="font-medium text-ink/70">Business value —</span> {active.value}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Thumbnails */}
        <div
          role="tablist"
          aria-label="Screenshot thumbnails"
          className="mt-6 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]"
        >
          {shots.map((s, i) => {
            const isActive = i === index;
            return (
              <button
                key={s.src}
                role="tab"
                aria-selected={isActive}
                aria-label={`Show ${s.title}`}
                type="button"
                onClick={() => setIndex(i)}
                className={`group relative shrink-0 overflow-hidden rounded-2xl border transition ${
                  isActive
                    ? "border-rose/50 shadow-luxe ring-2 ring-rose/30"
                    : "border-border opacity-70 hover:opacity-100"
                }`}
                style={{ width: 168 }}
              >
                <img
                  src={s.src}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  decoding="async"
                  className="block h-24 w-full object-cover object-left-top"
                />
                <span className="block truncate bg-white/95 px-3 py-1.5 text-left text-[11px] font-medium text-ink">
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md md:p-10"
            onClick={() => setLightbox(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} — full screen`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(false);
              }}
              aria-label="Close full-screen view"
              className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 p-2.5 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  aria-label="Previous screenshot"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-8"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  aria-label="Next screenshot"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-8"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden />
                </button>
              </>
            )}

            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative flex max-h-full max-w-6xl flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-luxe"
              />
              <figcaption className="mx-auto max-w-3xl text-center text-white/90">
                <div className="font-display text-lg md:text-xl">{active.title}</div>
                <p className="mt-1 text-sm text-white/70">{active.feature}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}
