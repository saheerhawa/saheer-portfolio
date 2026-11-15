import React from "react";
import { portfolioData } from "@/data/portfolio";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-28 border-b border-divider"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="pb-8 border-b border-divider mb-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-2">
                02 / Work
              </span>
              <h2
                id="projects-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              >
                {projects.heading}
              </h2>
            </div>
            <p className="text-base text-muted max-w-md font-normal">
              {projects.supportingText}
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div>
          {projects.items.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              isLast={index === projects.items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
