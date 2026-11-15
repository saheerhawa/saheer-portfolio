import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="pt-16 pb-20 md:pt-28 md:pb-32 border-b border-divider"
    >
      <div className="editorial-container">
        {/* Introductory Label */}
        <div className="mb-6 md:mb-8">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-wider uppercase text-olive font-mono">
            {hero.introLabel}
          </span>
        </div>

        {/* Main Heading */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl mb-8 md:mb-10"
        >
          {hero.headingLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-10 md:mb-12 font-normal">
          {hero.supportingText}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          {/* Primary CTA - Restrained rectangular olive button */}
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] bg-olive text-white text-sm font-medium tracking-tight hover:bg-olive-hover transition-colors rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
          >
            <span>{hero.primaryCta.text}</span>
            <ArrowDown className="w-4 h-4 stroke-[2]" aria-hidden="true" />
          </a>

          {/* Secondary CTA - Restrained border button */}
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] bg-transparent border border-divider text-foreground text-sm font-medium tracking-tight hover:border-olive hover:text-olive transition-colors rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
          >
            <span>{hero.secondaryCta.text}</span>
            <ArrowUpRight className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
