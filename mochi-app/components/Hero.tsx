"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ─────────────────────────────────────────────
   Framer Motion variants
───────────────────────────────────────────── */
const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

const bandVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.4, ease: "easeOut" },
  },
};

/* ─────────────────────────────────────────────
   Animated cat scene — flat SVG illustration
   Paths and animations are preserved exactly.
   Only the outer wrapper className is updated
   to work inside the new cream band.
───────────────────────────────────────────── */
function CatScene() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-sm sm:max-w-md md:max-w-lg"
        role="img"
        aria-label="Illustrated cats playing"
      >
        {/* ── Sitting cat (left) — line-drawing style ── */}
        <g>
          {/* Tail — slow lazy swish, thin stroke */}
          <motion.path
            d="M148 310 C120 320 100 340 115 358 C128 372 150 362 152 345"
            stroke="#2D6A4F"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            animate={{
              d: [
                "M148 310 C120 320 100 340 115 358 C128 372 150 362 152 345",
                "M148 310 C115 315 90 332 100 354 C112 376 148 370 152 350",
                "M148 310 C128 316 116 333 122 355 C132 376 156 366 155 348",
                "M148 310 C120 320 100 340 115 358 C128 372 150 362 152 345",
              ],
            }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Body — outline + 5% wash */}
          <ellipse cx="170" cy="290" rx="42" ry="50" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="2" />

          {/* Head — outline + 5% wash */}
          <ellipse cx="170" cy="230" rx="34" ry="30" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="2" />

          {/* Left ear */}
          <polygon points="148,215 140,190 162,208" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Right ear */}
          <polygon points="192,215 200,190 178,208" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="1.5" strokeLinejoin="round" />

          {/* Eyes — squint arcs (happy/calm) */}
          <path d="M156 226 Q160 222 164 226" stroke="#2D6A4F" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M176 226 Q180 222 184 226" stroke="#2D6A4F" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <ellipse cx="170" cy="237" rx="2.5" ry="2" fill="#2D6A4F" fillOpacity="0.4" />
          {/* Mouth */}
          <path
            d="M168 239 Q170 243 172 239"
            stroke="#2D6A4F"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Front paws — outline ellipses */}
          <ellipse cx="152" cy="336" rx="14" ry="10" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="1.5" />
          <ellipse cx="188" cy="336" rx="14" ry="10" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="1.5" />

          {/* Toe dividers — short strokes */}
          <line x1="146" y1="333" x2="146" y2="340" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <line x1="152" y1="334" x2="152" y2="341" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <line x1="158" y1="333" x2="158" y2="340" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <line x1="182" y1="333" x2="182" y2="340" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <line x1="188" y1="334" x2="188" y2="341" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <line x1="194" y1="333" x2="194" y2="340" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

          {/* Whiskers */}
          <line x1="140" y1="235" x2="162" y2="238" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          <line x1="140" y1="239" x2="162" y2="240" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
          <line x1="178" y1="238" x2="200" y2="235" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          <line x1="178" y1="240" x2="200" y2="239" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

          {/* Batting paw — right arm reaching */}
          <motion.g
            animate={{ rotate: [-12, 12, -12] }}
            style={{ originX: "195px", originY: "285px" }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ellipse cx="212" cy="272" rx="13" ry="10" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="1.5" />
            <line x1="206" y1="270" x2="206" y2="277" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            <line x1="212" y1="271" x2="212" y2="279" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            <line x1="218" y1="270" x2="218" y2="277" stroke="#2D6A4F" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          </motion.g>
        </g>

        {/* ── Tiny bouncing ball — lighter, outline style ── */}
        <motion.g
          animate={{ y: [-6, 6, -6], x: [0, 4, -2, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="248" cy="258" r="8" fill="#74C69D" fillOpacity="0.55" stroke="#2D6A4F" strokeWidth="1.5" />
        </motion.g>

        {/* ── Playful cat (right, smaller, curled) — line-drawing style ── */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          {/* Curled tail — thin stroke */}
          <motion.path
            d="M310 330 C340 310 360 325 350 345 C342 360 322 354 320 340"
            stroke="#2D6A4F"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            animate={{
              d: [
                "M310 330 C340 310 360 325 350 345 C342 360 322 354 320 340",
                "M310 330 C346 306 372 318 360 342 C350 364 322 358 320 342",
                "M310 330 C336 312 356 328 348 348 C340 364 320 356 318 340",
                "M310 330 C340 310 360 325 350 345 C342 360 322 354 320 340",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />

          {/* Body — outline + 5% wash */}
          <ellipse cx="300" cy="308" rx="36" ry="42" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="2" />

          {/* Head — outline + 5% wash */}
          <ellipse cx="295" cy="255" rx="28" ry="26" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="2" />

          {/* Ears */}
          <polygon points="278,243 270,220 292,238" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="312,243 320,220 298,238" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="1.5" strokeLinejoin="round" />

          {/* Eyes — squinting/happy arcs */}
          <path d="M284 253 Q287 249 290 253" stroke="#2D6A4F" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M300 253 Q303 249 306 253" stroke="#2D6A4F" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <ellipse cx="295" cy="261" rx="2" ry="1.5" fill="#2D6A4F" fillOpacity="0.4" />

          {/* Front paws tucked — outline */}
          <ellipse cx="282" cy="346" rx="12" ry="8" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="1.5" />
          <ellipse cx="314" cy="346" rx="12" ry="8" fill="#2D6A4F" fillOpacity="0.05" stroke="#2D6A4F" strokeWidth="1.5" />
        </motion.g>

        {/* ── Floating sparkle particles — softened ── */}
        <motion.circle
          cx="230" cy="200" r="3"
          fill="#2D6A4F" opacity="0.25"
          animate={{ y: [-60, 0], opacity: [0, 0.25, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0 }}
        />
        <motion.circle
          cx="260" cy="220" r="2"
          fill="#2D6A4F" opacity="0.2"
          animate={{ y: [-50, 0], opacity: [0, 0.2, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
        />
        <motion.circle
          cx="200" cy="230" r="2.5"
          fill="#74C69D" opacity="0.3"
          animate={{ y: [-55, 0], opacity: [0, 0.3, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 1.3 }}
        />
        <motion.circle
          cx="340" cy="210" r="2"
          fill="#2D6A4F" opacity="0.2"
          animate={{ y: [-45, 0], opacity: [0, 0.2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
        />
        <motion.rect
          x="280" y="195" width="4" height="4"
          fill="#74C69D" opacity="0.25" rx="1"
          animate={{ y: [-50, 0], opacity: [0, 0.25, 0], rotate: [0, 45, 90] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 1.8 }}
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Hero section
───────────────────────────────────────────── */
export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative pt-nav overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Content container — two-column desktop, stacked mobile ── */}
      <div className="w-full max-w-content mx-auto px-5 pt-16 pb-12 flex flex-col md:flex-row md:items-center gap-10 md:gap-12">

        {/* ── Text column — left-aligned ── */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={textItem}
            className="text-xs text-text-secondary uppercase tracking-widest mb-4"
          >
            no clay
            <span className="mx-2 text-soft-sage" aria-hidden="true">·</span>
            no silica dust
            <span className="mx-2 text-soft-sage" aria-hidden="true">·</span>
            no synthetic fragrance
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={textItem}
            className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.04em] text-text-primary mb-5"
          >
            clean litter,<br />finally.
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={textItem}
            className="text-base sm:text-body-lg text-text-secondary leading-relaxed max-w-[400px] mb-8"
          >
            Tofu-derived, dust-free, and biodegradable — built for cats you actually care about.
          </motion.p>

          {/* CTA group */}
          <motion.div
            variants={textItem}
            className="flex flex-row items-center gap-4"
          >
            <a
              href="#shop"
              className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-terra text-white text-sm font-medium tracking-wide hover:bg-terra-hover transition-colors duration-250 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra"
              aria-label="Try mochi — shop now"
            >
              try mochi
            </a>
            <a
              href="#why-tofu"
              className="text-sm font-medium text-brand-primary hover:underline underline-offset-4 transition-all duration-250 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              how it works &rarr;
            </a>
          </motion.div>
        </motion.div>

        {/* ── Cat illustration card — right column ── */}
        <motion.div
          className="flex-1 bg-cream rounded-2xl flex items-end justify-center h-[280px] sm:h-[320px] md:h-[400px] overflow-hidden"
          variants={bandVariant}
          initial="hidden"
          animate="visible"
        >
          {/* Negative margin pulls cats up from bottom of card */}
          <div className="w-full mb-[-20px]">
            <CatScene />
          </div>
        </motion.div>

      </div>

      {/* ── Scroll indicator ── */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <ChevronDown
          size={20}
          strokeWidth={1.5}
          className="text-text-secondary animate-bounce-slow"
        />
      </div>
    </section>
  );
}
