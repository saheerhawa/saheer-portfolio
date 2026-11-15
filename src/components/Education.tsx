import React from "react";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <div className="py-12 border-b border-divider">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4 lg:col-span-3">
          <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-2">
            Academic Background
          </span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
            Education
          </h3>
        </div>

        <div className="md:col-span-8 lg:col-span-9 max-w-2xl">
          <div className="border-l-2 border-olive pl-6 py-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h4 className="text-lg md:text-xl font-semibold text-foreground tracking-tight">
                {education.degree}
              </h4>
              <span className="font-mono text-xs uppercase tracking-wider text-olive font-medium">
                {education.academicLevel}
              </span>
            </div>
            <p className="text-muted text-base">
              {education.institution}
            </p>

            {/* Conditionally rendered optional fields */}
            {education.graduationDate && (
              <p className="text-xs text-muted mt-2 font-mono">
                Expected Completion: {education.graduationDate}
              </p>
            )}
            {education.scores && (
              <p className="text-xs text-muted mt-1 font-mono">
                Academic Score: {education.scores}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
