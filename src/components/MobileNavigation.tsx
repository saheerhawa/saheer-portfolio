"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileNavigation({
  isOpen,
  onClose,
  navItems,
}: MobileNavigationProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      firstFocusableRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-[60] flex flex-col md:hidden"
      style={{ backgroundColor: "#F7F6F0" }}
    >
      {/* Top bar inside mobile overlay */}
      <div className="editorial-container flex items-center justify-between h-20 border-b border-divider">
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Saheer Hawa
        </span>
        <button
          ref={firstFocusableRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2.5 -mr-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground hover:text-olive transition-colors rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive"
        >
          <X className="w-6 h-6 stroke-[1.75]" />
        </button>
      </div>

      {/* Navigation links */}
      <nav
        aria-label="Mobile Navigation"
        className="editorial-container flex-1 flex flex-col justify-center py-12 gap-6"
      >
        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            onClick={onClose}
            className="text-2xl font-medium tracking-tight text-foreground hover:text-olive transition-colors py-3 min-h-[48px] border-b border-divider/50 flex items-center justify-between group focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive"
          >
            <span>{item.name}</span>
            <span className="text-xs font-mono text-muted group-hover:text-olive transition-colors">
              0{index + 1}
            </span>
          </a>
        ))}
      </nav>

      {/* Bottom info inside overlay */}
      <div className="editorial-container py-8 border-t border-divider text-xs text-muted">
        <p className="font-mono uppercase tracking-wider text-[11px]">
          BSc Computer Science · ICS College, Khed
        </p>
      </div>
    </div>
  );
}
