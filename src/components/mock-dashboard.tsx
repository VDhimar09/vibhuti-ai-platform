import { Sparkles } from "lucide-react";

/**
 * Small mock product screenshot used across the home and projects pages.
 * Purely presentational — no data props are wired to real state.
 */
export function MockDashboard({
  variant = "dark",
  label = "operational-ai-hub",
}: {
  variant?: "dark" | "light";
  label?: string;
}) {
  const isDark = variant === "dark";
  return (
    <div
      role="img"
      aria-label={`${label} product preview`}
      className={`relative aspect-[4/3.2] w-full overflow-hidden rounded-3xl border shadow-luxe ${
        isDark
          ? "border-ink/10 bg-[#1a1524] text-white/90"
          : "border-border bg-elevated text-ink"
      }`}
    >
      <div className={`flex items-center gap-1.5 border-b px-4 py-3 ${isDark ? "border-white/10" : "border-border"}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-blush/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-lavender/80" />
        <span className={`ml-3 text-[10px] font-mono ${isDark ? "text-white/50" : "text-mute"}`}>
          {label}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2.5 p-4">
        {[
          { l: "Ops Health", v: "94%", c: "text-sage" },
          { l: "Active Flows", v: "128", c: "text-lavender" },
          { l: "Risks", v: "3", c: "text-rose" },
        ].map((k) => (
          <div
            key={k.l}
            className={`rounded-xl border p-3 ${
              isDark ? "border-white/10 bg-white/[0.04]" : "border-border bg-surface/70"
            }`}
          >
            <div className={`text-[9px] uppercase tracking-widest ${isDark ? "text-white/50" : "text-mute"}`}>{k.l}</div>
            <div className={`font-display text-2xl ${k.c}`}>{k.v}</div>
          </div>
        ))}
      </div>
      <div className={`mx-4 rounded-xl border p-4 ${isDark ? "border-white/10 bg-white/[0.04]" : "border-border bg-surface/70"}`}>
        <div className={`mb-3 text-[9px] uppercase tracking-widest ${isDark ? "text-white/50" : "text-mute"}`}>
          Weekly signals
        </div>
        <div className="flex h-16 items-end gap-1.5">
          {[40, 55, 30, 70, 45, 80, 60, 90, 55, 75, 65, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-rose via-blush to-lavender"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div
        className={`m-4 mt-3 flex items-center gap-2 rounded-xl border px-3 py-2.5 ${
          isDark ? "border-rose/30 bg-rose/10" : "border-rose/30 bg-rose/8"
        }`}
      >
        <Sparkles className="h-3.5 w-3.5 text-rose" aria-hidden />
        <span className={`text-[10px] ${isDark ? "text-white/80" : "text-ink/80"}`}>
          AI: shift capacity 12% to route B for 8% throughput gain
        </span>
      </div>
    </div>
  );
}
