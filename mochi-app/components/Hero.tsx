"use client";

import { motion, type Variants } from "framer-motion";

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

const sceneVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.6, ease: "easeOut" },
  },
};

/* ─────────────────────────────────────────────
   Animated cat scene — flat SVG illustration
───────────────────────────────────────────── */
function CatScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none" aria-hidden="true">
      <svg
        viewBox="0 0 440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-sm md:max-w-md lg:max-w-lg"
        role="img"
        aria-label="Illustrated cats playing"
      >
        {/* ── Sitting cat (left) ── */}
        <g>
          {/* Tail — slow lazy swish */}
          <motion.path
            d="M148 310 C120 320 100 340 115 358 C128 372 150 362 152 345"
            stroke="#2D6A4F"
            strokeWidth="10"
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

          {/* Body */}
          <ellipse cx="170" cy="290" rx="42" ry="50" fill="#2D6A4F" />

          {/* Head */}
          <ellipse cx="170" cy="230" rx="34" ry="30" fill="#2D6A4F" />

          {/* Left ear */}
          <polygon points="148,215 140,190 162,208" fill="#2D6A4F" />
          {/* Left ear inner */}
          <polygon points="150,212 144,194 160,208" fill="#F5F5F7" opacity="0.6" />

          {/* Right ear */}
          <polygon points="192,215 200,190 178,208" fill="#2D6A4F" />
          {/* Right ear inner */}
          <polygon points="190,212 196,194 180,208" fill="#F5F5F7" opacity="0.6" />

          {/* Eyes */}
          <ellipse cx="160" cy="228" rx="5" ry="5.5" fill="#F5F5F7" />
          <ellipse cx="180" cy="228" rx="5" ry="5.5" fill="#F5F5F7" />
          <circle cx="161" cy="229" r="2.5" fill="#1D1D1F" />
          <circle cx="181" cy="229" r="2.5" fill="#1D1D1F" />
          <circle cx="162" cy="228" r="1" fill="white" />
          <circle cx="182" cy="228" r="1" fill="white" />

          {/* Nose + mouth */}
          <ellipse cx="170" cy="240" rx="2.5" ry="2" fill="#F5F5F7" opacity="0.8" />
          <path d="M168 242 Q170 246 172 242" stroke="#F5F5F7" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />

          {/* Front paws */}
          <ellipse cx="152" cy="336" rx="14" ry="10" fill="#2D6A4F" />
          <ellipse cx="188" cy="336" rx="14" ry="10" fill="#2D6A4F" />

          {/* Toes */}
          <ellipse cx="146" cy="339" rx="4" ry="3" fill="#1E4D38" />
          <ellipse cx="152" cy="341" rx="4" ry="3" fill="#1E4D38" />
          <ellipse cx="158" cy="339" rx="4" ry="3" fill="#1E4D38" />
          <ellipse cx="182" cy="339" rx="4" ry="3" fill="#1E4D38" />
          <ellipse cx="188" cy="341" rx="4" ry="3" fill="#1E4D38" />
          <ellipse cx="194" cy="339" rx="4" ry="3" fill="#1E4D38" />

          {/* Whiskers */}
          <line x1="140" y1="237" x2="162" y2="240" stroke="#F5F5F7" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
          <line x1="140" y1="241" x2="162" y2="242" stroke="#F5F5F7" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <line x1="178" y1="240" x2="200" y2="237" stroke="#F5F5F7" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
          <line x1="178" y1="242" x2="200" y2="241" stroke="#F5F5F7" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

          {/* Batting paw — right arm reaching */}
          <motion.g
            animate={{ rotate: [-12, 12, -12] }}
            style={{ originX: "195px", originY: "285px" }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ellipse cx="212" cy="272" rx="13" ry="10" fill="#2D6A4F" />
            <ellipse cx="206" cy="276" rx="4" ry="3" fill="#1E4D38" />
            <ellipse cx="212" cy="279" rx="4" ry="3" fill="#1E4D38" />
            <ellipse cx="218" cy="276" rx="4" ry="3" fill="#1E4D38" />
          </motion.g>
        </g>

        {/* ── Tiny bouncing ball ── */}
        <motion.g
          animate={{ y: [-6, 6, -6], x: [0, 4, -2, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="248" cy="258" r="10" fill="#74C69D" />
          <circle cx="245" cy="254" r="3" fill="white" opacity="0.4" />
        </motion.g>

        {/* ── Playful cat (right, smaller, curled) ── */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          {/* Curled tail — wider sweep, offset timing from left cat */}
          <motion.path
            d="M310 330 C340 310 360 325 350 345 C342 360 322 354 320 340"
            stroke="#2D6A4F"
            strokeWidth="9"
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

          {/* Body */}
          <ellipse cx="300" cy="308" rx="36" ry="42" fill="#2D6A4F" />

          {/* Head */}
          <ellipse cx="295" cy="255" rx="28" ry="26" fill="#2D6A4F" />

          {/* Ears */}
          <polygon points="278,243 270,220 292,238" fill="#2D6A4F" />
          <polygon points="280,240 274,222 290,236" fill="#F5F5F7" opacity="0.55" />
          <polygon points="312,243 320,220 298,238" fill="#2D6A4F" />
          <polygon points="310,240 316,222 300,236" fill="#F5F5F7" opacity="0.55" />

          {/* Eyes — squinting/happy */}
          <path d="M284 253 Q287 249 290 253" stroke="#F5F5F7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M300 253 Q303 249 306 253" stroke="#F5F5F7" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <ellipse cx="295" cy="262" rx="2" ry="1.5" fill="#F5F5F7" opacity="0.8" />

          {/* Front paws tucked */}
          <ellipse cx="282" cy="346" rx="12" ry="8" fill="#2D6A4F" />
          <ellipse cx="314" cy="346" rx="12" ry="8" fill="#2D6A4F" />
        </motion.g>

        {/* ── Floating sparkle particles ── */}
        {/* Particle 1 */}
        <motion.circle
          cx="230"
          cy="200"
          r="3"
          fill="#74C69D"
          opacity="0.7"
          animate={{ y: [-60, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0 }}
        />
        {/* Particle 2 */}
        <motion.circle
          cx="260"
          cy="220"
          r="2"
          fill="#2D6A4F"
          opacity="0.5"
          animate={{ y: [-50, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
        />
        {/* Particle 3 */}
        <motion.circle
          cx="200"
          cy="230"
          r="2.5"
          fill="#74C69D"
          opacity="0.6"
          animate={{ y: [-55, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 1.3 }}
        />
        {/* Particle 4 */}
        <motion.circle
          cx="340"
          cy="210"
          r="2"
          fill="#2D6A4F"
          opacity="0.4"
          animate={{ y: [-45, 0], opacity: [0, 0.4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
        />
        {/* Particle 5 — small diamond sparkle */}
        <motion.rect
          x="280"
          y="195"
          width="4"
          height="4"
          fill="#74C69D"
          opacity="0.5"
          rx="1"
          animate={{ y: [-50, 0], opacity: [0, 0.5, 0], rotate: [0, 45, 90] }}
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
  return (
    <section
      className="flex items-center pt-nav min-h-[80vh] md:min-h-[75vh]"
      aria-label="Hero"
    >
      <div
        className="w-full mx-auto px-5 py-12 md:py-16"
        style={{ maxWidth: "980px" }}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-8 lg:gap-16">

          {/* ── Text column ── */}
          <motion.div
            className="flex-1 flex flex-col items-start"
            variants={textContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.p
              variants={textItem}
              className="text-caption font-normal text-text-secondary uppercase tracking-widest mb-5"
            >
              plant-based cat litter
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={textItem}
              className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.08] tracking-[-0.04em] text-text-primary mb-5"
            >
              clean by nature.
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={textItem}
              className="text-body-lg text-text-secondary mb-10 max-w-[380px] leading-relaxed"
            >
              made from tofu. soft on cats. easy on earth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={textItem}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#shop"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-brand-primary text-white text-sm font-medium tracking-wide transition-colors duration-250 hover:bg-brand-hover focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                aria-label="Try mochi — shop now"
              >
                try mochi
              </a>
              <a
                href="#why-tofu"
                className="text-sm font-medium text-brand-primary underline underline-offset-4 decoration-transparent hover:decoration-brand-primary transition-all duration-250 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                learn how it&apos;s made &rarr;
              </a>
            </motion.div>
          </motion.div>

          {/* ── Cat animation column ── */}
          <motion.div
            className="flex-1 h-56 sm:h-64 md:h-[380px] lg:h-[420px]"
            variants={sceneVariant}
            initial="hidden"
            animate="visible"
          >
            <CatScene />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
