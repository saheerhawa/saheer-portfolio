"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import MobileNavigation from "./MobileNavigation";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Skip to main content link for screen readers and keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-olive focus:text-white focus:text-sm focus:font-medium focus:shadow-md"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b border-divider transition-colors">
        <div className="editorial-container flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <a
            href="#top"
            className="text-lg md:text-xl font-bold tracking-tight text-foreground hover:text-olive transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive"
          >
            Saheer Hawa
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium tracking-tight text-muted hover:text-foreground transition-colors relative py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-olive hover:after:w-full after:transition-all after:duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open navigation menu"
            className="md:hidden p-2.5 -mr-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground hover:text-olive transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive"
          >
            <Menu className="w-6 h-6 stroke-[1.75]" />
          </button>
        </div>
      </header>

      {/* Accessible Mobile Menu Modal */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  );
}
