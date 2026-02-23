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
        {/* Wordmark + tagline */}
        <a
          href="/"
          className="flex flex-col leading-none focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          aria-label="mochi — go to homepage"
        >
          <span className="text-brand-primary tracking-widest text-lg" style={{ fontWeight: 300 }}>mochi</span>
          <span className="text-text-secondary tracking-widest text-[10px] mt-0.5 hidden sm:block" style={{ fontWeight: 300 }}>from bean to box.</span>
        </a>

        {/* CTA — terracotta, smaller */}
        <a
          href="#shop"
          className="inline-flex items-center justify-center h-7 px-4 rounded-full bg-terra text-white text-xs font-medium tracking-wide transition-colors duration-250 hover:bg-terra-hover focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra"
          aria-label="Shop mochi cat litter"
        >
          shop now
        </a>
      </nav>
    </header>
  );
}
