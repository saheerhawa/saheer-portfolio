import React from "react";
import { portfolioData, SkillCategory } from "@/data/portfolio";

function SkillGroup({ category }: { category: SkillCategory }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
        {category.title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="inline-block px-3 py-1.5 text-xs sm:text-sm font-medium tracking-tight text-foreground bg-subtle/80 border border-divider hover:border-olive/50 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <div className="pt-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4 lg:col-span-3">
          <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-2">
            Technical Profile
          </span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
            Skills &amp; Interests
          </h3>
        </div>

        <div className="md:col-span-8 lg:col-span-9 max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            <SkillGroup category={skillCategories.webDevelopment} />
            <SkillGroup category={skillCategories.programmingAndDatabases} />
            <SkillGroup category={skillCategories.developmentTools} />
            <SkillGroup category={skillCategories.interestsAndLearning} />
          </div>
        </div>
      </div>
    </div>
  );
}

