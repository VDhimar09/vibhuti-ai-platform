import type { ReactNode } from "react";

/* ---------- Blob / background decor ---------- */

export function GradientBlobs({ variant = "default" }: { variant?: "default" | "soft" | "hero" }) {
  if (variant === "hero") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-rose)_35%,transparent),transparent_65%)] blur-3xl animate-drift" />
        <div className="absolute top-20 -right-32 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-lavender)_40%,transparent),transparent_65%)] blur-3xl animate-drift" style={{ animationDelay: "-6s" }} />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-blush)_45%,transparent),transparent_70%)] blur-3xl animate-drift" style={{ animationDelay: "-10s" }} />
      </div>
    );
  }
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-blush)_40%,transparent),transparent_70%)] blur-3xl animate-drift" />
      <div className="absolute bottom-0 -left-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-lavender)_30%,transparent),transparent_70%)] blur-3xl animate-drift" style={{ animationDelay: "-8s" }} />
    </div>
  );
}

/* ---------- Sparkle ---------- */

export function Sparkle({
  className = "",
  size = 14,
  delay = 0,
}: { className?: string; size?: number; delay?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`animate-sparkle ${className}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden
    >
      <path
        d="M12 1.5 13.6 8.6 20.5 10.2 13.6 11.8 12 18.9 10.4 11.8 3.5 10.2 10.4 8.6Z"
        fill="url(#spg)"
      />
      <defs>
        <linearGradient id="spg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F24C8D" />
          <stop offset="1" stopColor="#C084FC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ---------- Curved divider ---------- */

export function CurvedDivider() {
  return (
    <div aria-hidden className="relative mx-auto my-6 h-16 max-w-7xl px-6">
      <svg viewBox="0 0 1200 60" className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="cd" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#F24C8D" stopOpacity="0" />
            <stop offset="0.5" stopColor="#F24C8D" stopOpacity="0.55" />
            <stop offset="1" stopColor="#C084FC" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,30 C300,60 500,0 800,30 C1000,50 1100,20 1200,30"
          fill="none"
          stroke="url(#cd)"
          strokeWidth="1.5"
        />
      </svg>
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose animate-pulse-soft" />
      <div className="absolute left-[40%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-lavender/80 animate-pulse-soft" style={{ animationDelay: "0.6s" }} />
      <div className="absolute left-[60%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-blush animate-pulse-soft" style={{ animationDelay: "1.1s" }} />
    </div>
  );
}

/* ---------- Orbit ring ---------- */

export function OrbitRing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <circle cx="60" cy="60" r="38" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.25" strokeDasharray="2 4" />
      <circle cx="60" cy="8" r="3" fill="currentColor" />
      <circle cx="98" cy="60" r="2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/* ---------- Chip ---------- */

export function LuxeChip({ children, tone = "rose" }: { children: ReactNode; tone?: "rose" | "lavender" | "sage" }) {
  const tones = {
    rose: "border-rose/30 bg-rose/8 text-rose",
    lavender: "border-lavender/30 bg-lavender/10 text-violet",
    sage: "border-sage/30 bg-sage/10 text-sage",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
