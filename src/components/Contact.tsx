import React from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { contact, personal } = portfolioData;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32 border-b border-divider"
    >
      <div className="editorial-container">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-wider text-muted block mb-3">
            04 / Connect
          </span>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
          >
            {contact.heading}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed font-normal mb-10 max-w-2xl">
            {contact.description}
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Optional Email Button (conditionally rendered only if provided) */}
            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] bg-olive text-white text-sm font-medium tracking-tight hover:bg-olive-hover transition-colors rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive"
              >
                <Mail className="w-4 h-4 stroke-[1.75]" />
                <span>Email ({personal.email})</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {/* GitHub Link */}
            <a
              href="https://github.com/saheerhawa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 min-h-[44px] bg-transparent border border-divider text-foreground text-sm font-medium tracking-tight hover:border-olive hover:text-olive transition-colors rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/saheer-hawa-b077173bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 min-h-[44px] bg-transparent border border-divider text-foreground text-sm font-medium tracking-tight hover:border-olive hover:text-olive transition-colors rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
