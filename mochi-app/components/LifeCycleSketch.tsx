"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────────
   Timing

   Each stage "draws itself" over a DRAW_DURATION window.
   Stages are staggered STAGE_GAP apart (start-to-start).
   Connectors begin CONN_OFFSET after the preceding stage starts,
   which is after it finishes drawing.

   Stage start delays:
     S1  t = 0
     S2  t = 0.7
     S3  t = 1.4
     S4  t = 2.1
     S5  t = 2.8

   Connector start delays:
     C1→2  t = 0 + 0.65 + 0.1  = 0.75  (after S1 finishes + tiny gap)
     C2→3  t = 0.7 + 0.65 + 0.1 = 1.45
     C3→4  t = 1.4 + 0.65 + 0.1 = 2.15
     C4→5  t = 2.1 + 0.65 + 0.1 = 2.85

   Pulse starts after S5 finishes:
     t = 2.8 + 0.65 + 0.15 = 3.6
───────────────────────────────────────────────────────────────────────────── */
const DRAW_DURATION = 0.65;
const SD = [0, 0.7, 1.4, 2.1, 2.8] as const; // stage start delays (0.7s apart)
const LD = [0.75, 1.45, 2.15, 2.85] as const; // connector line delays
const PULSE_DELAY = 3.6;

/* Shared easing — same cubic-bezier as the rest of the codebase */
const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

/* ─────────────────────────────────────────────────────────────────────────────
   Shared stroke props — apply to every motion.path
───────────────────────────────────────────────────────────────────────────── */
const PRI = { stroke: "#2D6A4F", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
const SEC = { stroke: "#2D6A4F", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none", opacity: 0.5 };

/* ─────────────────────────────────────────────────────────────────────────────
   Helper: a motion.path that draws itself via pathLength 0→1
   Optionally fades in a fill wash after drawing completes.
───────────────────────────────────────────────────────────────────────────── */
interface DrawnPathProps {
  d: string;
  delay: number;
  duration?: number;
  inView: boolean;
  strokeProps?: React.SVGProps<SVGPathElement>;
  /** If provided, renders a second path with this fill at ~5% opacity after drawing */
  washFill?: string;
}

function DrawnPath({ d, delay, duration = DRAW_DURATION, inView, strokeProps, washFill }: DrawnPathProps) {
  const merged = { ...PRI, ...strokeProps };
  return (
    <>
      {/* Faint wash fill — rendered below the stroke */}
      {washFill && (
        <motion.path
          d={d}
          fill={washFill}
          stroke="none"
          initial={{ fillOpacity: 0 }}
          animate={inView ? { fillOpacity: 0.05 } : { fillOpacity: 0 }}
          transition={{ duration: 0.4, delay: delay + duration * 0.8, ease }}
        />
      )}
      {/* Stroke path that draws itself */}
      <motion.path
        d={d}
        {...(merged as React.ComponentProps<typeof motion.path>)}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: merged.opacity ?? 1 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration, delay, ease },
          opacity: { duration: 0.01, delay },
        }}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Helper: drawn line (motion.path version of a straight line)
   Using path instead of line so pathLength works correctly everywhere.
───────────────────────────────────────────────────────────────────────────── */
interface DrawnLineProps {
  x1: number; y1: number; x2: number; y2: number;
  delay: number;
  duration?: number;
  inView: boolean;
  strokeProps?: Partial<typeof SEC>;
}

function DrawnLine({ x1, y1, x2, y2, delay, duration = DRAW_DURATION * 0.4, inView, strokeProps }: DrawnLineProps) {
  const d = `M${x1} ${y1} L${x2} ${y2}`;
  const merged = { ...PRI, ...strokeProps };
  return (
    <motion.path
      d={d}
      {...(merged as React.ComponentProps<typeof motion.path>)}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={inView ? { pathLength: 1, opacity: merged.opacity ?? 1 } : { pathLength: 0, opacity: 0 }}
      transition={{
        pathLength: { duration, delay, ease },
        opacity: { duration: 0.01, delay },
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Stage 1 — Soybean plant
   Coordinate space: 80×100 local, stage translated to global position.

   Elements drawn in sequence:
     1. Soil dashed line (horizon)             delay + 0
     2. Root lines below soil                  delay + 0.06
     3. Stem (slightly curved)                 delay + 0.12
     4. Left leaf (kidney-bean closed path)    delay + 0.22
     5. Right leaf                             delay + 0.32
     6. Bud circle at tip                      delay + 0.42
───────────────────────────────────────────────────────────────────────────── */
function SketchSoybean({ inView }: { inView: boolean }) {
  const d0 = SD[0];
  return (
    <g>
      {/* Soil horizon — dashed, drawn as a path with strokeDasharray via style */}
      <motion.path
        d="M8 74 Q24 73 40 74 Q56 73 72 74"
        {...SEC}
        style={{ strokeDasharray: "3 4" }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
        transition={{ pathLength: { duration: 0.28, delay: d0, ease }, opacity: { duration: 0.01, delay: d0 } }}
      />

      {/* Root 1 */}
      <DrawnPath d="M38 74 C36 80 32 84 30 88" delay={d0 + 0.06} duration={0.14} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1.5 }} />
      {/* Root 2 */}
      <DrawnPath d="M42 74 C44 80 46 83 50 86" delay={d0 + 0.09} duration={0.14} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1.5 }} />
      {/* Root 3 short */}
      <DrawnPath d="M40 74 L40 82" delay={d0 + 0.07} duration={0.1} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1.5 }} />

      {/* Stem — slightly curved to feel hand-drawn */}
      <DrawnPath d="M40 74 C39 66 40 56 40 44" delay={d0 + 0.12} duration={0.22} inView={inView}
        strokeProps={PRI} />

      {/* Left leaf — slightly asymmetric kidney shape */}
      <DrawnPath
        d="M39 58 C32 52 18 52 17 61 C16 69 28 70 36 65 C38 63 40 60 39 58 Z"
        delay={d0 + 0.22} duration={0.24} inView={inView}
        strokeProps={PRI} washFill="#2D6A4F"
      />
      {/* Left leaf midrib */}
      <DrawnPath d="M39 58 C30 62 22 63 17 61" delay={d0 + 0.3} duration={0.14} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1 }} />

      {/* Right leaf — slightly different curvature */}
      <DrawnPath
        d="M41 56 C48 48 62 50 63 59 C64 67 52 68 44 63 C42 61 40 58 41 56 Z"
        delay={d0 + 0.32} duration={0.24} inView={inView}
        strokeProps={PRI} washFill="#2D6A4F"
      />
      {/* Right leaf midrib */}
      <DrawnPath d="M41 56 C50 60 58 62 63 59" delay={d0 + 0.4} duration={0.14} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1 }} />

      {/* Bud at tip — small elongated oval */}
      <DrawnPath
        d="M40 44 C37 40 37 36 40 34 C43 36 43 40 40 44 Z"
        delay={d0 + 0.44} duration={0.16} inView={inView}
        strokeProps={PRI} washFill="#2D6A4F"
      />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Stage 2 — Tofu factory
   Elements:
     1. Building outline (slightly imperfect — path, not rect)  delay + 0
     2. Pitched roof line                                        delay + 0.12
     3. Chimney (slightly tilted rect path)                     delay + 0.18
     4. Window                                                  delay + 0.26
     5. Smoke lines (2–3 curves)                                delay + 0.32
     6. Byproduct arrow                                         delay + 0.44
───────────────────────────────────────────────────────────────────────────── */
function SketchFactory({ inView }: { inView: boolean }) {
  const d0 = SD[1];
  return (
    <g>
      {/* Building body — slightly imperfect rectangle via path */}
      <DrawnPath
        d="M12 84 L12 50 L68 49 L69 84 Z"
        delay={d0} duration={0.3} inView={inView}
        strokeProps={PRI} washFill="#2D6A4F"
      />

      {/* Roof line — pitched triangle */}
      <DrawnPath
        d="M8 50 L40 34 L72 49"
        delay={d0 + 0.12} duration={0.2} inView={inView}
        strokeProps={PRI}
      />

      {/* Chimney — slightly tilted, drawn as path */}
      <DrawnPath
        d="M53 34 L54 22 L62 22 L61 34"
        delay={d0 + 0.18} duration={0.16} inView={inView}
        strokeProps={{ ...PRI, strokeWidth: 2 }}
      />

      {/* Smoke curve 1 */}
      <DrawnPath
        d="M56 22 C54 17 58 13 56 8"
        delay={d0 + 0.32} duration={0.14} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1.5 }}
      />
      {/* Smoke curve 2 */}
      <DrawnPath
        d="M60 20 C62 15 58 11 62 7"
        delay={d0 + 0.36} duration={0.14} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1.5 }}
      />
      {/* Smoke curl 3 */}
      <DrawnPath
        d="M58 19 C56 16 60 13 57 9"
        delay={d0 + 0.39} duration={0.12} inView={inView}
        strokeProps={{ stroke: "#2D6A4F", strokeWidth: 1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none", opacity: 0.35 }}
      />

      {/* Window */}
      <DrawnPath
        d="M22 58 L22 68 L36 68 L36 58 Z"
        delay={d0 + 0.26} duration={0.2} inView={inView}
        strokeProps={SEC}
      />
      {/* Window cross */}
      <DrawnLine x1={22} y1={63} x2={36} y2={63} delay={d0 + 0.34} inView={inView} strokeProps={{ ...SEC, opacity: 0.35 }} />
      <DrawnLine x1={29} y1={58} x2={29} y2={68} delay={d0 + 0.35} inView={inView} strokeProps={{ ...SEC, opacity: 0.35 }} />

      {/* Door */}
      <DrawnPath
        d="M46 84 L46 68 Q54 68 54 68 L54 84"
        delay={d0 + 0.28} duration={0.18} inView={inView}
        strokeProps={SEC}
      />

      {/* Byproduct arrow exiting right */}
      <DrawnPath
        d="M69 64 L76 64"
        delay={d0 + 0.44} duration={0.1} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1.5 }}
      />
      <DrawnPath
        d="M73 60 L77 64 L73 68"
        delay={d0 + 0.46} duration={0.1} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1.5 }}
      />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Stage 3 — mochi bag
   Elements:
     1. Bag outer shape (rounded rect via path)        delay + 0
     2. Top seal / fold line                           delay + 0.16
     3. Pinch crease marks at top corners              delay + 0.22
     4. Hatching lines for shadow depth (right side)   delay + 0.28
     5. "mochi" text (SVG text, fade in)               delay + 0.4
───────────────────────────────────────────────────────────────────────────── */
function SketchBag({ inView }: { inView: boolean }) {
  const d0 = SD[2];
  // Bag outer: slightly rounded corners, pinched top to suggest a pouch
  const bagOuter = "M28 90 C20 90 16 86 16 78 L16 46 C18 40 22 36 28 35 L52 35 C58 36 62 40 64 46 L64 78 C64 86 60 90 52 90 Z";
  const sealLine = "M16 48 C24 45 32 44 40 44 C48 44 56 45 64 48";
  return (
    <g>
      {/* Bag outer */}
      <DrawnPath d={bagOuter} delay={d0} duration={0.32} inView={inView}
        strokeProps={PRI} washFill="#2D6A4F" />

      {/* Fold / seal line */}
      <DrawnPath d={sealLine} delay={d0 + 0.16} duration={0.18} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1.5 }} />

      {/* Pinch crease left */}
      <DrawnPath d="M18 44 C20 40 22 38 24 36" delay={d0 + 0.22} duration={0.1} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1 }} />
      {/* Pinch crease right */}
      <DrawnPath d="M62 44 C60 40 58 38 56 36" delay={d0 + 0.24} duration={0.1} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1 }} />

      {/* Hatching lines — shadow on right side, 3 short parallel diagonals */}
      <DrawnPath d="M57 56 L63 62" delay={d0 + 0.28} duration={0.08} inView={inView}
        strokeProps={{ stroke: "#2D6A4F", strokeWidth: 1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none", opacity: 0.3 }} />
      <DrawnPath d="M58 63 L63 68" delay={d0 + 0.3} duration={0.08} inView={inView}
        strokeProps={{ stroke: "#2D6A4F", strokeWidth: 1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none", opacity: 0.3 }} />
      <DrawnPath d="M59 70 L63 74" delay={d0 + 0.32} duration={0.07} inView={inView}
        strokeProps={{ stroke: "#2D6A4F", strokeWidth: 1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none", opacity: 0.3 }} />

      {/* Small leaf mark on bag face */}
      <DrawnPath d="M36 72 C34 68 28 68 29 73 C30 77 36 76 36 72 Z"
        delay={d0 + 0.36} duration={0.14} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1 }} />

      {/* "mochi" — Inter Light text, fades in after bag draws */}
      <motion.text
        x="40" y="61"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Inter, -apple-system, sans-serif"
        fontWeight="300"
        fontSize="9"
        letterSpacing="1.8"
        fill="#2D6A4F"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.75 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: d0 + 0.4, ease }}
      >
        mochi
      </motion.text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Stage 4 — Cat, sketch / continuous-line style
   Elements drawn sequentially:
     1. Head circle                                 delay + 0
     2. Left ear triangle                           delay + 0.1
     3. Right ear triangle                          delay + 0.13
     4. Body oval                                   delay + 0.18
     5. Tail arc                                    delay + 0.3
     6. Left eye stroke                             delay + 0.38
     7. Right eye stroke                            delay + 0.4
     8. Nose small mark                             delay + 0.42
     9. Whiskers — 3 each side                     delay + 0.44
───────────────────────────────────────────────────────────────────────────── */
function SketchCat({ inView }: { inView: boolean }) {
  const d0 = SD[3];
  return (
    <g>
      {/* Head */}
      <DrawnPath d="M34 56 C34 42 46 36 50 38 C56 40 60 46 58 56 C56 64 34 64 34 56 Z"
        delay={d0} duration={0.26} inView={inView} strokeProps={PRI} washFill="#2D6A4F" />

      {/* Left ear */}
      <DrawnPath d="M36 42 L32 28 L44 40"
        delay={d0 + 0.1} duration={0.12} inView={inView} strokeProps={PRI} />
      {/* Left ear inner mark */}
      <DrawnPath d="M37 41 L34 31 L42 40"
        delay={d0 + 0.14} duration={0.1} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1 }} />

      {/* Right ear */}
      <DrawnPath d="M56 42 L62 28 L50 40"
        delay={d0 + 0.13} duration={0.12} inView={inView} strokeProps={PRI} />
      {/* Right ear inner mark */}
      <DrawnPath d="M55 41 L60 31 L51 40"
        delay={d0 + 0.16} duration={0.1} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1 }} />

      {/* Body */}
      <DrawnPath d="M30 76 C26 64 30 58 34 56 C38 54 54 54 58 56 C64 60 64 72 58 80 C52 86 34 86 30 80 C28 78 30 78 30 76 Z"
        delay={d0 + 0.18} duration={0.28} inView={inView} strokeProps={PRI} washFill="#2D6A4F" />

      {/* Tail — curves out from right side of body */}
      <DrawnPath d="M58 78 C68 78 74 68 70 60 C66 52 60 56 62 62"
        delay={d0 + 0.3} duration={0.2} inView={inView}
        strokeProps={{ ...PRI, strokeWidth: 2 }} />

      {/* Left eye — almond curved stroke */}
      <DrawnPath d="M40 52 C41 50 43 50 44 52"
        delay={d0 + 0.38} duration={0.1} inView={inView} strokeProps={{ ...PRI, strokeWidth: 1.5 }} />
      {/* Left eye lower */}
      <DrawnPath d="M40 52 C41 53.5 43 53.5 44 52"
        delay={d0 + 0.39} duration={0.1} inView={inView} strokeProps={{ ...SEC, strokeWidth: 1.5 }} />

      {/* Right eye */}
      <DrawnPath d="M48 52 C49 50 51 50 52 52"
        delay={d0 + 0.4} duration={0.1} inView={inView} strokeProps={{ ...PRI, strokeWidth: 1.5 }} />
      {/* Right eye lower */}
      <DrawnPath d="M48 52 C49 53.5 51 53.5 52 52"
        delay={d0 + 0.41} duration={0.1} inView={inView} strokeProps={{ ...SEC, strokeWidth: 1.5 }} />

      {/* Nose */}
      <DrawnPath d="M45 57 C46 56 47 56 48 57 C47 58 46 58 45 57 Z"
        delay={d0 + 0.42} duration={0.1} inView={inView}
        strokeProps={{ ...PRI, strokeWidth: 1.5 }} washFill="#2D6A4F" />

      {/* Whiskers left — 3 lines */}
      <DrawnLine x1={34} y1={58} x2={22} y2={56} delay={d0 + 0.44} inView={inView}
        strokeProps={{ stroke: "#2D6A4F", strokeWidth: 1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none", opacity: 0.5 }} />
      <DrawnLine x1={34} y1={60} x2={21} y2={60} delay={d0 + 0.46} inView={inView}
        strokeProps={{ stroke: "#2D6A4F", strokeWidth: 1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none", opacity: 0.5 }} />
      <DrawnLine x1={34} y1={62} x2={22} y2={64} delay={d0 + 0.48} inView={inView}
        strokeProps={{ stroke: "#2D6A4F", strokeWidth: 1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none", opacity: 0.5 }} />

      {/* Whiskers right */}
      <DrawnLine x1={58} y1={58} x2={70} y2={56} delay={d0 + 0.45} inView={inView}
        strokeProps={{ stroke: "#2D6A4F", strokeWidth: 1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none", opacity: 0.5 }} />
      <DrawnLine x1={58} y1={60} x2={71} y2={60} delay={d0 + 0.47} inView={inView}
        strokeProps={{ stroke: "#2D6A4F", strokeWidth: 1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none", opacity: 0.5 }} />
      <DrawnLine x1={58} y1={62} x2={70} y2={64} delay={d0 + 0.49} inView={inView}
        strokeProps={{ stroke: "#2D6A4F", strokeWidth: 1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none", opacity: 0.5 }} />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Stage 5 — Back to earth
   Same soil horizon as stage 1, seed below soil, root, stem, sprout.
   After drawing: pulse is a motion.circle that loops pathLength 0→1 + opacity loop.
───────────────────────────────────────────────────────────────────────────── */
function SketchEarth({ inView }: { inView: boolean }) {
  const d0 = SD[4];
  return (
    <g>
      {/* Pulsing circle — drawn circle expanding, loops after stage finishes */}
      <motion.circle
        cx="40" cy="56" r="30"
        stroke="#2D6A4F"
        strokeWidth="1"
        fill="none"
        style={{ originX: "40px", originY: "56px", strokeDasharray: "3 4" }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          inView
            ? {
                pathLength: [0, 1, 1],
                opacity: [0, 0.2, 0],
                scale: [1, 1, 1.4],
              }
            : { pathLength: 0, opacity: 0, scale: 1 }
        }
        transition={{
          duration: 2.0,
          delay: PULSE_DELAY,
          repeat: Infinity,
          ease: "easeOut",
          times: [0, 0.45, 1],
        }}
      />

      {/* Soil horizon */}
      <motion.path
        d="M8 74 Q24 73 40 74 Q56 73 72 74"
        {...SEC}
        style={{ strokeDasharray: "3 4" }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
        transition={{ pathLength: { duration: 0.28, delay: d0, ease }, opacity: { duration: 0.01, delay: d0 } }}
      />

      {/* Soil mound — gentle arc */}
      <DrawnPath d="M12 82 Q26 72 40 72 Q54 72 68 82"
        delay={d0 + 0.04} duration={0.18} inView={inView}
        strokeProps={{ ...PRI, strokeWidth: 2 }} washFill="#2D6A4F" />

      {/* Seed below soil — small oval */}
      <DrawnPath d="M40 82 C37 82 35 85 35 88 C35 91 37 93 40 93 C43 93 45 91 45 88 C45 85 43 82 40 82 Z"
        delay={d0 + 0.08} duration={0.16} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1.5 }} washFill="#2D6A4F" />

      {/* Root from seed */}
      <DrawnPath d="M40 93 C38 97 36 100 34 102"
        delay={d0 + 0.14} duration={0.1} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1.5 }} />
      <DrawnPath d="M40 93 C42 97 44 99 46 101"
        delay={d0 + 0.15} duration={0.1} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1.5 }} />

      {/* Stem up from soil */}
      <DrawnPath d="M40 72 C39 64 40 54 40 44"
        delay={d0 + 0.18} duration={0.22} inView={inView}
        strokeProps={PRI} />

      {/* Left leaf */}
      <DrawnPath
        d="M39 58 C30 50 16 52 17 61 C18 69 30 69 38 63 C39 61 40 59 39 58 Z"
        delay={d0 + 0.28} duration={0.24} inView={inView}
        strokeProps={PRI} washFill="#2D6A4F"
      />
      <DrawnPath d="M39 58 C28 62 20 63 17 61" delay={d0 + 0.36} duration={0.14} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1 }} />

      {/* Right leaf — higher, differentiates from Stage 1 */}
      <DrawnPath
        d="M41 54 C50 46 64 48 63 57 C62 65 50 66 43 61 C41 59 40 56 41 54 Z"
        delay={d0 + 0.36} duration={0.24} inView={inView}
        strokeProps={PRI} washFill="#2D6A4F"
      />
      <DrawnPath d="M41 54 C52 58 60 60 63 57" delay={d0 + 0.44} duration={0.14} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1 }} />

      {/* Small side leaf — unique to S5 */}
      <DrawnPath
        d="M40 47 C34 41 28 43 30 49 C32 54 39 51 40 48 Z"
        delay={d0 + 0.46} duration={0.16} inView={inView}
        strokeProps={{ ...SEC, strokeWidth: 1.5 }} washFill="#2D6A4F"
      />

      {/* Bud */}
      <DrawnPath d="M40 44 C37 40 37 36 40 34 C43 36 43 40 40 44 Z"
        delay={d0 + 0.5} duration={0.14} inView={inView}
        strokeProps={PRI} washFill="#2D6A4F" />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Sketch connector — a gently curved / wavy path between stages
   Uses a single quadratic bezier with a slight vertical arc.
───────────────────────────────────────────────────────────────────────────── */
interface SketchConnectorProps {
  x1: number;
  x2: number;
  y: number;
  index: number;
  inView: boolean;
}

function SketchConnector({ x1, x2, y, index, inView }: SketchConnectorProps) {
  // Mid-point X, arc control point offset — alternates above/below for variety
  const mid = (x1 + x2) / 2;
  const arc = index % 2 === 0 ? -8 : 8;
  const d = `M${x1} ${y} Q${mid} ${y + arc} ${x2} ${y}`;
  return (
    <motion.path
      d={d}
      stroke="#2D6A4F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      style={{ strokeDasharray: "3 7" }}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={inView ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0 }}
      transition={{
        pathLength: { duration: 0.5, delay: LD[index], ease },
        opacity: { duration: 0.01, delay: LD[index] },
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Hand-drawn return arc — connects Stage 5 back toward Stage 1
   A rough dashed arc path drawn beneath the diagram at low opacity,
   replacing the background halo from LifeCycle.tsx.
   Uses a large SVG arc segment from near CX[4] to near CX[0],
   curving below the diagram floor to suggest the cycle closing.
───────────────────────────────────────────────────────────────────────────── */
function ReturnArc({ inView }: { inView: boolean }) {
  // Rough hand-drawn arc: start near bottom of stage 5, sweep under, end near stage 1
  // Uses a cubic bezier rather than the perfect SVG arc command
  const d = "M740 210 C740 260 580 290 410 290 C240 290 80 260 80 210";
  return (
    <motion.path
      d={d}
      stroke="#2D6A4F"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      style={{ strokeDasharray: "4 8" }}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={inView ? { pathLength: 1, opacity: 0.15 } : { pathLength: 0, opacity: 0 }}
      transition={{
        pathLength: { duration: 1.4, delay: PULSE_DELAY - 0.2, ease: "easeInOut" },
        opacity: { duration: 0.2, delay: PULSE_DELAY - 0.2 },
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Layout constants — identical to LifeCycle.tsx for direct comparability
───────────────────────────────────────────────────────────────────────────── */
const CX = [80, 240, 420, 580, 740] as const;
const CONNECTOR_Y = 135;
const ICON_TRANSLATE_Y = 28;

const LABELS: [number, string][] = [
  [CX[0], "soybean plant"],
  [CX[1], "tofu byproduct"],
  [CX[2], "cat litter"],
  [CX[3], "happy cat"],
  [CX[4], "back to earth"],
];

/* ─────────────────────────────────────────────────────────────────────────────
   LifeCycleSketch — exported default
───────────────────────────────────────────────────────────────────────────── */
export default function LifeCycleSketch() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-bg-surface py-28 px-5"
      aria-labelledby="lifecycle-sketch-heading"
    >
      <div className="mx-auto" style={{ maxWidth: "980px" }}>

        {/* ── Section copy ── */}
        <div className="mb-14">
          <p className="text-caption font-normal text-text-secondary uppercase tracking-widest mb-6">
            the full circle
          </p>
          <h2
            id="lifecycle-sketch-heading"
            className="text-h2 md:text-h1 font-semibold text-text-primary tracking-tight mb-4"
          >
            from the earth. back to the earth.
          </h2>
          <p className="text-body-lg text-text-secondary max-w-xl leading-relaxed">
            every bag of mochi starts as a soybean and ends as compost. nothing wasted.
          </p>
        </div>

        {/* ── Diagram wrapper — card with contained scroll on mobile ── */}
        <div
          ref={ref}
          className="rounded-2xl bg-white border border-gray-100 overflow-x-auto"
          role="img"
          aria-label="Lifecycle diagram: soybean plant to tofu byproduct to mochi cat litter to happy cat to back to earth"
        >
          <svg
            viewBox="0 0 900 310"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            style={{ minWidth: "560px" }}
            aria-hidden="true"
          >

            {/* ── Return arc (drawn last, below diagram) ── */}
            <ReturnArc inView={inView} />

            {/* ── Sketch connectors ── */}
            {CX.slice(0, 4).map((cx, i) => (
              <SketchConnector
                key={i}
                x1={cx + 46}
                x2={CX[i + 1] - 46}
                y={CONNECTOR_Y}
                index={i}
                inView={inView}
              />
            ))}

            {/* ── Stage 1 — Soybean ── */}
            <g transform={`translate(${CX[0] - 40}, ${ICON_TRANSLATE_Y})`}>
              <SketchSoybean inView={inView} />
            </g>

            {/* ── Stage 2 — Factory ── */}
            <g transform={`translate(${CX[1] - 40}, ${ICON_TRANSLATE_Y})`}>
              <SketchFactory inView={inView} />
            </g>

            {/* ── Stage 3 — Bag ── */}
            <g transform={`translate(${CX[2] - 40}, ${ICON_TRANSLATE_Y})`}>
              <SketchBag inView={inView} />
            </g>

            {/* ── Stage 4 — Cat ── */}
            <g transform={`translate(${CX[3] - 40}, ${ICON_TRANSLATE_Y})`}>
              <SketchCat inView={inView} />
            </g>

            {/* ── Stage 5 — Back to earth ── */}
            <g transform={`translate(${CX[4] - 40}, ${ICON_TRANSLATE_Y})`}>
              <SketchEarth inView={inView} />
            </g>

            {/* ── Labels ── */}
            {LABELS.map(([cx, label], i) => (
              <motion.text
                key={label}
                x={cx}
                y="266"
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
                  delay: SD[i] + DRAW_DURATION,
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
