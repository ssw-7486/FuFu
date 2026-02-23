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
        {/* Wordmark */}
        <a
          href="/"
          className="text-brand-primary font-light tracking-widest text-xl leading-none focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          aria-label="mochi — go to homepage"
          style={{ fontWeight: 300 }}
        >
          mochi
        </a>

        {/* CTA */}
        <a
          href="#shop"
          className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-brand-primary text-white text-sm font-medium tracking-wide transition-colors duration-250 hover:bg-brand-hover focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          aria-label="Shop mochi cat litter"
        >
          Shop now
        </a>
      </nav>
    </header>
  );
}
