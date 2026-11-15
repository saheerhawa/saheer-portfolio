import React from "react";
import Education from "./Education";
import Skills from "./Skills";

export default function EducationAndSkills() {
  return (
    <section
      id="skills"
      aria-labelledby="education-skills-heading"
      className="py-20 md:py-28 border-b border-divider"
    >
      <div className="editorial-container">
        <h2 id="education-skills-heading" className="sr-only">
          Education and Skills
        </h2>
        <Education />
        <Skills />
      </div>
    </section>
  );
}
