import React from "react";
import { ArrowUpRight, Github, Lock, CheckCircle2, Clock } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectItemProps {
  project: Project;
  isLast?: boolean;
}

export default function ProjectItem({ project, isLast = false }: ProjectItemProps) {
  return (
    <article
      aria-labelledby={`project-${project.id}-title`}
      className={`py-12 md:py-16 ${!isLast ? "border-b border-divider" : ""}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Number, Title, Context, Description */}
        <div className="lg:col-span-7 space-y-6">
          {/* Project Number & Context Tag */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm md:text-base font-medium text-olive">
              / {project.number}
            </span>
            <span className="h-3 w-[1px] bg-divider" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              {project.context}
            </span>
          </div>

          {/* Title */}
          <h3
            id={`project-${project.id}-title`}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Project Metadata Table / Key Facts */}
          <div className="border border-divider bg-surface/60 p-4 sm:p-5 space-y-3">
            {project.context && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-xs sm:text-sm">
                <span className="font-mono text-muted uppercase tracking-wider text-[11px] sm:text-xs">
                  Context
                </span>
                <span className="sm:col-span-2 text-foreground font-medium">
                  {project.context}
                </span>
              </div>
            )}

            {project.projectType && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-xs sm:text-sm pt-2 border-t border-divider/60">
                <span className="font-mono text-muted uppercase tracking-wider text-[11px] sm:text-xs">
                  Project Type
                </span>
                <span className="sm:col-span-2 text-foreground font-medium">
                  {project.projectType}
                </span>
              </div>
            )}

            {project.contribution && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-xs sm:text-sm pt-2 border-t border-divider/60">
                <span className="font-mono text-muted uppercase tracking-wider text-[11px] sm:text-xs">
                  {project.id === "gymcore" ? "My Contribution" : "Contribution"}
                </span>
                <span className="sm:col-span-2 text-foreground font-medium">
                  {project.contribution}
                </span>
              </div>
            )}

            {project.backendAttribution && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-xs sm:text-sm pt-2 border-t border-divider/60">
                <span className="font-mono text-muted uppercase tracking-wider text-[11px] sm:text-xs">
                  Backend
                </span>
                <span className="sm:col-span-2 text-foreground font-medium">
                  {project.backendAttribution}
                </span>
              </div>
            )}

            {project.status && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-xs sm:text-sm pt-2 border-t border-divider/60">
                <span className="font-mono text-muted uppercase tracking-wider text-[11px] sm:text-xs">
                  Status
                </span>
                <span className="sm:col-span-2 text-foreground font-medium flex items-center gap-1.5">
                  {project.status.toLowerCase().includes("plan") ? (
                    <Clock className="w-3.5 h-3.5 text-olive shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-olive shrink-0" />
                  )}
                  <span>{project.status}</span>
                </span>
              </div>
            )}
          </div>

          {/* Detailed Contribution Description */}
          {project.contributionDescription && (
            <p className="text-sm text-foreground/85 leading-relaxed pl-3.5 border-l-2 border-olive/70 font-normal">
              {project.contributionDescription}
            </p>
          )}

          {/* Action Links / Notes */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] bg-olive text-white text-xs sm:text-sm font-medium tracking-tight hover:bg-olive-hover transition-colors rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive"
              >
                <Github className="w-4 h-4" />
                <span>{project.repositoryLabel || "View Repository"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] border border-divider text-xs text-muted font-mono bg-subtle/40">
                <Lock className="w-3.5 h-3.5 text-muted shrink-0" />
                <span>Internal project / Proprietary organization asset</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Technologies & Technical Details */}
        <div className="lg:col-span-5 space-y-6 lg:pl-6 lg:border-l lg:border-divider">
          {/* Implemented Technologies */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
              {project.id === "gymcore" ? "Frontend Technologies Used" : "Technologies Used"}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-foreground bg-subtle border border-divider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Development Tools */}
          {project.developmentTools && project.developmentTools.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
                Development Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.developmentTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs font-mono text-foreground/80 bg-background border border-divider"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Planned Backend & Database Integration (Clearly separated for GYMCORE) */}
          {project.plannedIntegration && (
            <div className="p-4 bg-olive-light/40 border border-olive/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-olive-dark font-medium">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>{project.plannedIntegration.label}</span>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed">
                Future architecture roadmap (not currently connected in the frontend implementation):
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.plannedIntegration.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono text-foreground/85 bg-background border border-olive/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Architectural Notes */}
          {project.notes && (
            <p className="text-xs text-muted leading-relaxed font-sans italic">
              {project.notes}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
