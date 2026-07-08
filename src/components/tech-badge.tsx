import type { ReactNode } from "react";

/**
 * Small neutral technology badge — matches the site's soft luxe aesthetic
 * without competing with the tonal LuxeChip used for editorial tags.
 */
export function TechBadge({
  children,
  variant = "solid",
}: {
  children: ReactNode;
  variant?: "solid" | "learning";
}) {
  if (variant === "learning") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-lavender/40 bg-lavender/5 px-3 py-1 text-xs font-medium text-violet/80">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-lavender/70" />
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-elevated/80 px-3 py-1 text-xs font-medium text-ink/85 backdrop-blur transition hover:-translate-y-0.5 hover:border-rose/30 hover:text-ink">
      {children}
    </span>
  );
}

export function TechBadgeList({
  items,
  variant = "solid",
  ariaLabel,
}: {
  items: readonly string[];
  variant?: "solid" | "learning";
  ariaLabel?: string;
}) {
  return (
    <ul aria-label={ariaLabel} className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t}>
          <TechBadge variant={variant}>{t}</TechBadge>
        </li>
      ))}
    </ul>
  );
}
