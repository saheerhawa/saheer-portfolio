import React from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact } = portfolioData;

  return (
    <footer className="w-full bg-background py-10 md:py-14">
      <div className="editorial-container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Identity & Copyright */}
          <div>
            <p className="text-sm font-semibold text-foreground tracking-tight">
              Saheer Hawa
            </p>
            <p className="text-xs text-muted font-mono mt-1">
              &copy; {currentYear} · Designed with restrained editorial clarity
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6">
            {contact.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted hover:text-foreground transition-colors inline-flex items-center gap-1 min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3 h-3 text-muted/70" />
              </a>
            ))}
            <a
              href="#top"
              className="text-xs font-mono text-olive hover:underline ml-2 min-h-[44px] inline-flex items-center"
              aria-label="Back to top"
            >
              ↑ Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
