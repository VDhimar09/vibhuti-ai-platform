import { Reveal } from "@/components/section";
import { LuxeChip, Sparkle } from "@/components/decor";
import { MockDashboard } from "@/components/mock-dashboard";
import { TechBadgeList } from "@/components/tech-badge";
import type { ProjectSummary } from "@/types";

/**
 * The featured / flagship project hero — bigger, more editorial than a
 * ProjectCard. Currently used for the Operational AI Hub.
 */
export function FeaturedProjectHero({ project }: { project: ProjectSummary }) {
  return (
    <Reveal>
      <div className="group relative overflow-hidden rounded-[40px] border border-border bg-gradient-to-br from-rose/8 via-elevated to-blush/12 p-2 shadow-luxe">
        <div className="relative rounded-[32px] bg-elevated p-8 md:p-14">
          <Sparkle className="absolute right-10 top-10 text-rose" size={14} />
          <div className="grid gap-12 md:grid-cols-[1.05fr_1fr] md:items-center">
            <div>
              <LuxeChip tone={project.tone}>{project.chip}</LuxeChip>
              <h2 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-6xl">
                Operational <br />
                <span className="italic gradient-text">AI Hub</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-mute md:text-lg">
                {project.description}
              </p>
              {project.longDescription && (
                <p className="mt-4 text-base leading-relaxed text-mute">
                  {project.longDescription}
                </p>
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
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-rose/30 via-lavender/20 to-transparent blur-3xl"
              />
              <MockDashboard variant="dark" label={project.slug} />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
