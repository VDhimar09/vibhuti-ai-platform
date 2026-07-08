import type { ProjectMetric, ProjectDashboardId } from "@/types";

/**
 * Small mock product panels shown alongside ProjectCards.
 * They're purely presentational; metrics come from content data.
 */

function toneClass(tone: ProjectMetric["tone"]): string {
  switch (tone) {
    case "rose":
      return "text-rose";
    case "lavender":
      return "text-lavender";
    case "sage":
      return "text-sage";
    default:
      return "text-ink";
  }
}

export function BarMetricsPanel({
  title,
  accentTone,
  metrics,
}: {
  title: string;
  accentTone: "lavender" | "rose" | "sage";
  metrics: readonly ProjectMetric[];
}) {
  const titleColor =
    accentTone === "lavender" ? "text-violet" : accentTone === "sage" ? "text-sage" : "text-rose";
  return (
    <div className="rounded-3xl border border-border bg-white p-7 shadow-soft">
      <div className="flex items-center justify-between">
        <div className={`font-display text-xs uppercase tracking-[0.2em] ${titleColor}`}>
          {title}
        </div>
        <div className="flex gap-1" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-lavender/50" />
          <span className="h-2 w-2 rounded-full bg-blush/70" />
          <span className="h-2 w-2 rounded-full bg-rose/50" />
        </div>
      </div>
      <div className="mt-6 space-y-5">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="flex justify-between text-xs">
              <span className="text-mute">{m.label}</span>
              <span className="font-medium text-ink font-mono">{m.value}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-blush/30">
              <div
                className="h-full rounded-full bg-gradient-to-r from-lavender via-blush to-rose"
                style={{ width: m.bar ?? "50%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StackedMetricsPanel({
  title,
  metrics,
}: {
  title: string;
  metrics: readonly ProjectMetric[];
}) {
  return (
    <div className="rounded-3xl border border-border bg-white p-7 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="font-display text-xs uppercase tracking-[0.2em] text-sage">
          {title}
        </div>
        <div className="flex gap-1" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-sage/60" />
          <span className="h-2 w-2 rounded-full bg-blush/70" />
          <span className="h-2 w-2 rounded-full bg-lavender/50" />
        </div>
      </div>
      <div className="mt-6 space-y-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-4 py-3"
          >
            <span className="text-xs uppercase tracking-widest text-mute">{m.label}</span>
            <span className={`font-display text-2xl ${toneClass(m.tone)}`}>{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Renders the correct dashboard mock for a given project id. This is the
 * single registry that maps content data → UI. Adding a new project only
 * requires an entry here.
 */
export function ProjectDashboard({
  id,
  title,
  metrics,
}: {
  id: ProjectDashboardId;
  title: string;
  metrics?: readonly ProjectMetric[];
}) {
  if (id === "pharmachain") {
    return <BarMetricsPanel title={title} accentTone="lavender" metrics={metrics ?? []} />;
  }
  if (id === "shiftping") {
    return <StackedMetricsPanel title={title} metrics={metrics ?? []} />;
  }
  return null;
}
