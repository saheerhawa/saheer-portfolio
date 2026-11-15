import React from "react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28 border-b border-divider"
    >
      <div className="editorial-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Section Indicator / Label */}
          <div className="md:col-span-4 lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-2">
              01 / Profile
            </span>
            <h2
              id="about-heading"
              className="text-2xl md:text-3xl font-bold tracking-tight text-foreground"
            >
              {about.heading}
            </h2>
          </div>

          {/* Editorial Content */}
          <div className="md:col-span-8 lg:col-span-9 max-w-2xl space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed font-normal">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-foreground/85">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

