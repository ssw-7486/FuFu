"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────────
   Timing constants
   Each stage icon animates in, then its outgoing connector line draws.
   Layout:
     Stage 1 enters at delay 0
     Line 1→2  draws at delay 0.55
     Stage 2 enters at delay 0.9
     Line 2→3  draws at delay 1.45
     Stage 3 enters at delay 1.8
     Line 3→4  draws at delay 2.35
     Stage 4 enters at delay 2.7
     Line 4→5  draws at delay 3.25
     Stage 5 enters at delay 3.6
     Pulse begins at delay 4.3
───────────────────────────────────────────────────────────────────────────── */
const ICON_DURATION = 0.45;
const LINE_DURATION = 0.55;

// Delay at which each stage icon starts appearing
const stageDelay = [0, 0.9, 1.8, 2.7, 3.6];
// Delay at which each connecting line starts drawing
const lineDelay = [0.55, 1.45, 2.35, 3.25];

const PULSE_DELAY = 4.3;

/* ─────────────────────────────────────────────────────────────────────────────
   Shared easing
───────────────────────────────────────────────────────────────────────────── */
const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

/* ─────────────────────────────────────────────────────────────────────────────
   Stage icon components
   All icons use a 80×100 local coordinate space with the icon centred
   horizontally and the label area at the bottom. Each is rendered inside a
   <motion.g> that handles the entrance animation at the call site.
───────────────────────────────────────────────────────────────────────────── */

/** Stage 1 — Soybean plant: animated stem grow + leaf fan */
function StageSoybean({ inView }: { inView: boolean }) {
  return (
    <g>
      {/* Soil mound */}
      <ellipse cx="40" cy="82" rx="28" ry="8" fill="#2D6A4F" opacity="0.18" />
      <path d="M14 82 Q28 70 40 70 Q52 70 66 82" fill="#2D6A4F" opacity="0.28" />

      {/* Stem — scaleY 0→1, transform-origin bottom-center */}
      <motion.line
        x1="40" y1="70" x2="40" y2="36"
        stroke="#2D6A4F"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ originY: "70px", originX: "40px" }}
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.35, delay: stageDelay[0] + 0.05, ease }}
      />

      {/* Left leaf */}
      <motion.path
        d="M40 52 C30 44 18 46 20 56 C22 64 36 62 40 58"
        fill="#2D6A4F"
        opacity="0.9"
        initial={{ opacity: 0, rotate: -25 }}
        animate={inView ? { opacity: 0.9, rotate: 0 } : { opacity: 0, rotate: -25 }}
        style={{ originX: "40px", originY: "55px" }}
        transition={{ duration: 0.32, delay: stageDelay[0] + 0.32, ease }}
      />

      {/* Right leaf */}
      <motion.path
        d="M40 48 C50 40 62 42 60 52 C58 60 44 58 40 54"
        fill="#2D6A4F"
        opacity="0.85"
        initial={{ opacity: 0, rotate: 25 }}
        animate={inView ? { opacity: 0.85, rotate: 0 } : { opacity: 0, rotate: 25 }}
        style={{ originX: "40px", originY: "51px" }}
        transition={{ duration: 0.32, delay: stageDelay[0] + 0.4, ease }}
      />

      {/* Small top bud */}
      <motion.circle
        cx="40" cy="34" r="4"
        fill="#2D6A4F"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        style={{ originX: "40px", originY: "34px" }}
        transition={{ duration: 0.2, delay: stageDelay[0] + 0.42, ease }}
      />
    </g>
  );
}

/** Stage 2 — Tofu factory */
function StageFactory({ inView }: { inView: boolean }) {
  return (
    <g>
      {/* Main building */}
      <motion.rect
        x="12" y="48" width="56" height="36"
        rx="2"
        fill="#2D6A4F"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        style={{ originX: "40px", originY: "84px" }}
        transition={{ duration: 0.3, delay: stageDelay[1] + 0.05, ease }}
      />

      {/* Roof / upper section */}
      <motion.rect
        x="20" y="36" width="40" height="14"
        rx="2"
        fill="#1E4D38"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        style={{ originX: "40px", originY: "50px" }}
        transition={{ duration: 0.25, delay: stageDelay[1] + 0.2, ease }}
      />

      {/* Windows */}
      <motion.rect x="20" y="56" width="10" height="10" rx="1" fill="white" opacity="0.7"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 0.2, delay: stageDelay[1] + 0.3, ease }}
      />
      <motion.rect x="35" y="56" width="10" height="10" rx="1" fill="white" opacity="0.7"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 0.2, delay: stageDelay[1] + 0.34, ease }}
      />
      <motion.rect x="50" y="56" width="10" height="10" rx="1" fill="white" opacity="0.7"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 0.2, delay: stageDelay[1] + 0.38, ease }}
      />

      {/* Door */}
      <motion.rect x="33" y="68" width="14" height="16" rx="1" fill="white" opacity="0.5"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 0.2, delay: stageDelay[1] + 0.36, ease }}
      />

      {/* Chimney */}
      <motion.rect x="52" y="24" width="8" height="16" rx="1" fill="#1E4D38"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        style={{ originX: "56px", originY: "40px" }}
        transition={{ duration: 0.2, delay: stageDelay[1] + 0.22, ease }}
      />

      {/* Chimney smoke puff */}
      <motion.ellipse cx="56" cy="20" rx="6" ry="4" fill="white" opacity="0.45"
        initial={{ opacity: 0, y: 4 }}
        animate={inView ? { opacity: 0.45, y: 0 } : { opacity: 0, y: 4 }}
        transition={{ duration: 0.3, delay: stageDelay[1] + 0.38, ease }}
      />
      <motion.ellipse cx="62" cy="15" rx="4" ry="3" fill="white" opacity="0.28"
        initial={{ opacity: 0, y: 4 }}
        animate={inView ? { opacity: 0.28, y: 0 } : { opacity: 0, y: 4 }}
        transition={{ duration: 0.3, delay: stageDelay[1] + 0.44, ease }}
      />

      {/* Byproduct flow arrow — small downward chevron to the right */}
      <motion.path
        d="M68 68 L74 74 L68 80"
        stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 0.2, delay: stageDelay[1] + 0.42, ease }}
      />
    </g>
  );
}

/** Stage 3 — mochi bag */
function StageBag({ inView }: { inView: boolean }) {
  return (
    <g>
      {/* Bag body */}
      <motion.rect
        x="16" y="32" width="48" height="56"
        rx="7"
        fill="#2D6A4F"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
        style={{ originX: "40px", originY: "60px" }}
        transition={{ duration: 0.32, delay: stageDelay[2] + 0.05, ease }}
      />

      {/* Bag top fold / seal */}
      <motion.rect
        x="16" y="32" width="48" height="12"
        rx="6"
        fill="#1E4D38"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        style={{ originX: "40px", originY: "38px" }}
        transition={{ duration: 0.2, delay: stageDelay[2] + 0.2, ease }}
      />

      {/* Horizontal rib lines */}
      <motion.line x1="22" y1="56" x2="58" y2="56" stroke="white" strokeWidth="1" opacity="0.2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 0.15, delay: stageDelay[2] + 0.28, ease }}
      />
      <motion.line x1="22" y1="64" x2="58" y2="64" stroke="white" strokeWidth="1" opacity="0.2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 0.15, delay: stageDelay[2] + 0.32, ease }}
      />

      {/* "mochi" text label on bag */}
      <motion.text
        x="40" y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Inter, -apple-system, sans-serif"
        fontWeight="300"
        fontSize="9"
        letterSpacing="2"
        fill="white"
        opacity="0.9"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.9 } : { opacity: 0 }}
        transition={{ duration: 0.2, delay: stageDelay[2] + 0.3, ease }}
      >
        mochi
      </motion.text>

      {/* Small leaf icon on bag */}
      <motion.path
        d="M35 76 C33 72 29 71 30 75 C31 78 35 78 35 76 Z"
        fill="white" opacity="0.4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.4 } : { opacity: 0 }}
        transition={{ duration: 0.15, delay: stageDelay[2] + 0.36, ease }}
      />
    </g>
  );
}

/** Stage 4 — Cat silhouette */
function StageCat({ inView }: { inView: boolean }) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: ICON_DURATION, delay: stageDelay[3], ease }}
    >
      {/* Tail */}
      <path
        d="M26 82 C18 76 14 66 20 60 C24 56 30 60 28 66"
        stroke="#2D6A4F" strokeWidth="5" strokeLinecap="round" fill="none"
      />

      {/* Body */}
      <ellipse cx="42" cy="72" rx="18" ry="16" fill="#2D6A4F" />

      {/* Head */}
      <ellipse cx="48" cy="50" rx="14" ry="13" fill="#2D6A4F" />

      {/* Left ear */}
      <polygon points="37,42 33,28 45,40" fill="#2D6A4F" />
      <polygon points="38,41 35,30 44,40" fill="white" opacity="0.35" />

      {/* Right ear */}
      <polygon points="59,42 63,28 51,40" fill="#2D6A4F" />
      <polygon points="58,41 61,30 52,40" fill="white" opacity="0.35" />

      {/* Eyes */}
      <circle cx="44" cy="50" r="2.5" fill="white" opacity="0.85" />
      <circle cx="52" cy="50" r="2.5" fill="white" opacity="0.85" />

      {/* Nose */}
      <ellipse cx="48" cy="56" rx="1.5" ry="1" fill="white" opacity="0.6" />

      {/* Front paws */}
      <ellipse cx="36" cy="86" rx="6" ry="4" fill="#2D6A4F" />
      <ellipse cx="50" cy="86" rx="6" ry="4" fill="#2D6A4F" />
    </motion.g>
  );
}

/** Stage 5 — Back to earth: soil mound + sprout + looping pulse ring */
function StageEarth({ inView }: { inView: boolean }) {
  return (
    <g>
      {/* Pulse ring — looping after stage appears */}
      <motion.circle
        cx="40" cy="58" r="28"
        stroke="#2D6A4F"
        strokeWidth="1.5"
        fill="none"
        initial={{ scale: 1, opacity: 0 }}
        animate={
          inView
            ? {
                scale: [1, 1.55, 1],
                opacity: [0, 0.16, 0],
              }
            : { scale: 1, opacity: 0 }
        }
        style={{ originX: "40px", originY: "58px" }}
        transition={{
          duration: 2.2,
          delay: PULSE_DELAY,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* Soil mound */}
      <motion.path
        d="M10 88 Q25 74 40 74 Q55 74 70 88"
        fill="#2D6A4F"
        opacity="0.22"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.22 } : { opacity: 0 }}
        transition={{ duration: 0.25, delay: stageDelay[4] + 0.05, ease }}
      />
      <motion.ellipse cx="40" cy="86" rx="28" ry="8" fill="#2D6A4F" opacity="0.14"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.14 } : { opacity: 0 }}
        transition={{ duration: 0.25, delay: stageDelay[4] + 0.05, ease }}
      />

      {/* Stem */}
      <motion.line
        x1="40" y1="74" x2="40" y2="44"
        stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round"
        style={{ originX: "40px", originY: "74px" }}
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.3, delay: stageDelay[4] + 0.12, ease }}
      />

      {/* Left leaf */}
      <motion.path
        d="M40 58 C29 50 17 53 19 62 C21 70 37 67 40 62"
        fill="#2D6A4F" opacity="0.9"
        initial={{ opacity: 0, rotate: -20 }}
        animate={inView ? { opacity: 0.9, rotate: 0 } : { opacity: 0, rotate: -20 }}
        style={{ originX: "40px", originY: "60px" }}
        transition={{ duration: 0.28, delay: stageDelay[4] + 0.32, ease }}
      />

      {/* Right leaf — slightly higher to differentiate from Stage 1 */}
      <motion.path
        d="M40 53 C51 44 63 47 61 57 C59 65 43 62 40 57"
        fill="#2D6A4F" opacity="0.82"
        initial={{ opacity: 0, rotate: 20 }}
        animate={inView ? { opacity: 0.82, rotate: 0 } : { opacity: 0, rotate: 20 }}
        style={{ originX: "40px", originY: "55px" }}
        transition={{ duration: 0.28, delay: stageDelay[4] + 0.38, ease }}
      />

      {/* A second small side leaf — unique to Stage 5 */}
      <motion.path
        d="M40 46 C34 40 28 42 30 48 C32 53 39 50 40 47"
        fill="#2D6A4F" opacity="0.6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 0.22, delay: stageDelay[4] + 0.44, ease }}
      />

      {/* Bud */}
      <motion.circle cx="40" cy="42" r="4" fill="#2D6A4F"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        style={{ originX: "40px", originY: "42px" }}
        transition={{ duration: 0.2, delay: stageDelay[4] + 0.44, ease }}
      />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Connecting dotted path between stages
   `progress` is a value 0–1 that drives pathLength
───────────────────────────────────────────────────────────────────────────── */
interface ConnectorProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  index: number; // 0–3, used to pick the right delay
  inView: boolean;
}

function Connector({ x1, y1, x2, y2, index, inView }: ConnectorProps) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="#2D6A4F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="4 6"
      opacity="0.4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={
        inView
          ? { pathLength: 1, opacity: 0.4 }
          : { pathLength: 0, opacity: 0 }
      }
      transition={{
        pathLength: {
          duration: LINE_DURATION,
          delay: lineDelay[index],
          ease,
        },
        opacity: {
          duration: 0.15,
          delay: lineDelay[index],
        },
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Stage entrance wrapper (for stages 1, 2, 3, 5 — cat handles its own)
───────────────────────────────────────────────────────────────────────────── */
interface StageWrapperProps {
  delay: number;
  inView: boolean;
  children: React.ReactNode;
}

function StageEntrance({ delay, inView, children }: StageWrapperProps) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: ICON_DURATION, delay, ease }}
    >
      {children}
    </motion.g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   LifeCycle section
───────────────────────────────────────────────────────────────────────────── */

/*
  SVG layout — 900 × 280 viewBox
  Five stages spaced 160px apart, starting at x=70, so centres at:
    Stage 1: x=70
    Stage 2: x=230
    Stage 3: x=390 (also the centre at 450 — adjust to 410 to keep spacing even)
    Stage 4: x=570
    Stage 5: x=730 (last stage, keep connector from 730 back)

  Each icon is drawn in its own 80×100 local coordinate space.
  A <g transform="translate(cx - 40, labelY - 100)"> centres each icon,
  where cx is the stage centre x and icons occupy y 20–90 locally.

  Labels sit at y=238 in the SVG coordinate space (below all icons).
  Connectors run at y=140 (vertical midpoint of icon area).

  Background arc: a large circle arc behind all stages.
*/

// Stage horizontal centres
const CX = [80, 240, 420, 580, 740] as const;
// Y position of connector midline
const CONNECTOR_Y = 135;
// X of icon group: translate so local 0,0 = SVG (cx-40, 28) — icon area is 80px wide
const iconTranslateY = 28;

export default function LifeCycle() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-bg-surface py-28 px-5"
      aria-labelledby="lifecycle-heading"
    >
      <div className="mx-auto" style={{ maxWidth: "980px" }}>

        {/* ── Section copy ── */}
        <div className="mb-14">
          <p className="text-caption font-normal text-text-secondary uppercase tracking-widest mb-6">
            the full circle
          </p>
          <h2
            id="lifecycle-heading"
            className="text-h2 md:text-h1 font-semibold text-text-primary tracking-tight mb-4"
          >
            from the earth. back to the earth.
          </h2>
          <p className="text-body-lg text-text-secondary max-w-xl leading-relaxed">
            every bag of mochi starts as a soybean and ends as compost. nothing wasted.
          </p>
        </div>

        {/* ── Diagram wrapper ── */}
        {/*
          On mobile we allow horizontal scroll so the diagram stays legible.
          The SVG viewBox is fixed at 900×280; it shrinks proportionally on
          screens wider than 640px via width="100%". On narrower screens the
          min-width forces horizontal scroll rather than crushing the illustration.
        */}
        <div
          ref={ref}
          className="overflow-x-auto -mx-5 px-5 sm:overflow-visible sm:mx-0 sm:px-0"
          role="img"
          aria-label="Lifecycle diagram: soybean plant to tofu byproduct to mochi cat litter to happy cat to back to earth"
        >
          <svg
            viewBox="0 0 900 280"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            style={{ minWidth: "560px" }}
            aria-hidden="true"
          >

            {/* ── Background halo arc ── */}
            {/*
              Large circle whose centre is between stage 1 and stage 5.
              Centre x = (80 + 740) / 2 = 410, centre y = 140.
              Radius chosen so it just wraps the icon area.
            */}
            <motion.circle
              cx="410" cy="135" r="340"
              stroke="#2D6A4F"
              strokeWidth="1"
              fill="none"
              opacity="0"
              strokeDasharray="8 10"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.06 } : { opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            />

            {/* ── Connecting lines ── */}
            {CX.slice(0, 4).map((cx, i) => (
              <Connector
                key={i}
                x1={cx + 44}
                y1={CONNECTOR_Y}
                x2={CX[i + 1] - 44}
                y2={CONNECTOR_Y}
                index={i}
                inView={inView}
              />
            ))}

            {/* ── Stage 1 — Soybean ── */}
            <StageEntrance delay={stageDelay[0]} inView={inView}>
              <g transform={`translate(${CX[0] - 40}, ${iconTranslateY})`}>
                <StageSoybean inView={inView} />
              </g>
            </StageEntrance>

            {/* ── Stage 2 — Factory ── */}
            <StageEntrance delay={stageDelay[1]} inView={inView}>
              <g transform={`translate(${CX[1] - 40}, ${iconTranslateY})`}>
                <StageFactory inView={inView} />
              </g>
            </StageEntrance>

            {/* ── Stage 3 — Bag ── */}
            <StageEntrance delay={stageDelay[2]} inView={inView}>
              <g transform={`translate(${CX[2] - 40}, ${iconTranslateY})`}>
                <StageBag inView={inView} />
              </g>
            </StageEntrance>

            {/* ── Stage 4 — Cat (self-animating) ── */}
            <g transform={`translate(${CX[3] - 40}, ${iconTranslateY})`}>
              <StageCat inView={inView} />
            </g>

            {/* ── Stage 5 — Back to earth ── */}
            <StageEntrance delay={stageDelay[4]} inView={inView}>
              <g transform={`translate(${CX[4] - 40}, ${iconTranslateY})`}>
                <StageEarth inView={inView} />
              </g>
            </StageEntrance>

            {/* ── Labels ── */}
            {(
              [
                [CX[0], "soybean plant"],
                [CX[1], "tofu byproduct"],
                [CX[2], "cat litter"],
                [CX[3], "happy cat"],
                [CX[4], "back to earth"],
              ] as [number, string][]
            ).map(([cx, label], i) => (
              <motion.text
                key={label}
                x={cx}
                y="248"
                textAnchor="middle"
                fontFamily="Inter, -apple-system, sans-serif"
                fontWeight="300"
                fontSize="11"
                letterSpacing="0.06em"
                fill="#6E6E73"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: stageDelay[i] + ICON_DURATION,
                  ease,
                }}
              >
                {label}
              </motion.text>
            ))}

          </svg>
        </div>

      </div>
    </section>
  );
}
