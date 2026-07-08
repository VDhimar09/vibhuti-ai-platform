import { Reveal } from "@/components/section";
import { LuxeChip } from "@/components/decor";
import { ProjectDashboard } from "@/components/project-dashboards";
import { TechBadgeList } from "@/components/tech-badge";
import type { ProjectSummary, Tone } from "@/types";

const toneAccent: Record<Tone, string> = {
  rose: "from-rose/8 via-elevated to-blush/12",
  lavender: "from-lavender/8 via-elevated to-blush/12",
  sage: "from-sage/8 via-elevated to-blush/10",
};

const featureIconTone: Record<Tone, string> = {
  rose: "from-rose/15 to-blush/15 text-rose",
  lavender: "from-lavender/15 to-blush/15 text-violet",
  sage: "from-sage/15 to-blush/15 text-sage",
};

const featureHover: Record<Tone, string> = {
  rose: "hover:border-rose/40",
  lavender: "hover:border-lavender/40",
  sage: "hover:border-sage/40",
};

/**
 * Reusable project showcase card used for non-featured projects.
 * Featured projects use `<FeaturedProjectHero />`.
 */
export function ProjectCard({
  project,
  dashboardTitle,
  animatedBorder = false,
}: {
  project: ProjectSummary;
  dashboardTitle: string;
  animatedBorder?: boolean;
}) {
  const shell = animatedBorder
    ? "group relative overflow-hidden rounded-[40px] p-[1.5px] shadow-luxe"
    : `group relative overflow-hidden rounded-[40px] border border-border bg-gradient-to-br ${toneAccent[project.tone]} p-2 shadow-luxe`;

  return (
    <Reveal>
      <div className={shell}>
        {animatedBorder && (
          <div
            aria-hidden
            className="absolute inset-0 rounded-[40px] bg-[conic-gradient(from_120deg,var(--color-lavender),var(--color-blush),var(--color-rose),var(--color-lavender))] opacity-70 animate-shimmer"
          />
        )}
        <div className="relative grid gap-12 rounded-[38px] bg-elevated p-8 md:grid-cols-[1fr_1.1fr] md:p-14">
          <div>
            <LuxeChip tone={project.tone}>{project.chip}</LuxeChip>
            <p className="mt-6 text-base leading-relaxed text-mute md:text-lg">
              {project.description}
            </p>

            {project.features.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-3">
                {project.features.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-3 rounded-2xl border border-border bg-surface/60 p-4 transition hover:-translate-y-0.5 ${featureHover[project.tone]}`}
                  >
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${featureIconTone[project.tone]}`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-ink">{label}</span>
                  </div>
                ))}
              </div>
            )}

            {project.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <LuxeChip key={tag} tone={project.tone}>
                    {tag}
                  </LuxeChip>
                ))}
              </div>
            )}

            {project.techStack && project.techStack.length > 0 && (
              <div className="mt-6">
                <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mute">
                  Built with
                </div>
                <TechBadgeList items={project.techStack} ariaLabel={`${project.name} technologies`} />
              </div>
            )}
          </div>

          <ProjectDashboard
            id={project.dashboardId}
            title={dashboardTitle}
            metrics={project.metrics}
          />
        </div>
      </div>
    </Reveal>
  );
}
