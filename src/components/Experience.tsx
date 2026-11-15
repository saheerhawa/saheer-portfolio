import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Award, Briefcase } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;
  const { internship, hackathon } = experience;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 md:py-28 border-b border-divider"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-2">
            03 / Trajectory
          </span>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            {experience.heading}
          </h2>
        </div>

        {/* Two-Column Grid: Internship & Hackathon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Internship Card / Column */}
          <div className="lg:col-span-7 border border-divider bg-surface/40 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 text-olive font-mono text-xs uppercase tracking-wider">
              <Briefcase className="w-4 h-4 stroke-[1.75]" />
              <span>Internship Experience</span>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  {internship.role}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {internship.period}
                  {internship.year ? ` ${internship.year}` : ""}
                </span>
              </div>
              <p className="text-sm font-medium text-olive">
                {internship.organization}
              </p>
            </div>

            <div className="thin-divider" />

            <div className="space-y-4">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted block mb-1">
                  Primary Contribution
                </span>
                <p className="text-sm sm:text-base text-foreground font-medium">
                  {internship.knownContribution}
                </p>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted block mb-1">
                  Summary
                </span>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-normal">
                  {internship.description}
                </p>
              </div>
            </div>
          </div>

          {/* Hackathon Achievement Column */}
          <div className="lg:col-span-5 border border-divider bg-surface/40 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-olive font-mono text-xs uppercase tracking-wider">
                <Award className="w-4 h-4 stroke-[1.75]" />
                <span>Hackathon Achievement</span>
              </div>

              <div>
                <span className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight block mb-2">
                  {hackathon.achievement}
                </span>
                <h3 className="text-lg font-semibold text-foreground tracking-tight mb-1">
                  {hackathon.event}
                </h3>
                <p className="text-xs font-mono text-muted uppercase tracking-wider">
                  {hackathon.location}
                </p>
              </div>

              <div className="thin-divider" />

              <blockquote className="text-sm sm:text-base text-foreground/85 leading-relaxed font-normal pl-4 border-l-2 border-olive italic">
                &ldquo;{hackathon.framing}&rdquo;
              </blockquote>
            </div>

            <div className="pt-4 border-t border-divider/60 text-xs text-muted font-mono">
              Team competitive event
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

