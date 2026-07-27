import type { ProjectMetric, ProjectDashboardId } from "@/types";

/**
 * Small mock product panels shown alongside ProjectCards.
 * They're purely presentational; metrics come from content data.
 */

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
  return null;
}
