"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-nav backdrop-blur-xl bg-white/85 transition-all duration-250 ${
        scrolled ? "border-b border-gray-200" : "border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-full items-center justify-between px-5"
        style={{ maxWidth: "980px" }}
        aria-label="Main navigation"
      >
        {/* Wordmark — "mochi" SVG + tagline to the right */}
        <a
          href="/"
          className="flex flex-row items-center gap-1.5 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          aria-label="mochi — go to homepage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 60"
            className="h-6 w-auto"
            aria-hidden="true"
          >
            <text
              x="160" y="48"
              fontFamily="'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
              fontWeight="300"
              fontSize="52"
              letterSpacing="10"
              fill="#2D6A4F"
              textAnchor="middle"
            >mochi</text>
          </svg>
          <span className="text-[9px] font-light tracking-[0.2em] text-text-secondary uppercase border-l border-gray-200 pl-2">
            from bean to box.
          </span>
        </a>

        {/* CTA — terracotta, smaller */}
        <a
          href="#shop"
          className="inline-flex items-center justify-center h-7 px-4 rounded-full bg-terra text-white text-xs font-medium tracking-wide whitespace-nowrap transition-colors duration-250 hover:bg-terra-hover focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra"
          aria-label="Shop mochi cat litter"
        >
          shop now
        </a>
      </nav>
    </header>
  );
}
