# mochi Packaging Design Spec
## Stand-Up Pouch — 3 SKU System
### Version 1.0 — February 2026

---

## Design Authority Reference

This spec is derived directly from the following source files:

- `docs/brand/MOCHI_BRAND_GUIDELINES.md` — v1.1, approved February 2026
- `mochi-app/app/globals.css` — design tokens
- `mochi-app/components/Hero.tsx` — illustration system
- `mochi-app/components/Nav.tsx` — wordmark lockup
- `docs/brand/assets/wordmark-primary.svg` — stacked wordmark asset

All colors, typography weights, copy, and illustration style in this spec map 1:1 to the approved digital brand. No new systems are introduced.

---

## Section 1 — Bag Structure

### 1.1 Panel Dimensions

All three SKUs use a flat-bottom gusset (stand-up pouch) format. Dimensions below are net print area, excluding bleed and seal margins.

| SKU | Front Panel | Back Panel | Side Gusset (each) |
|---|---|---|---|
| 5 lb | 9" W × 13" H | 9" W × 11.5" H | 2.5" W × 13" H |
| 10 lb | 11" W × 16" H | 11" W × 14.5" H | 3" W × 16" H |
| 20 lb | 13" W × 18" H | 13" W × 16.5" H | 3.5" W × 18" H |

Back panel height is shorter because the bottom gusset fold reduces available print area by approximately 1.5". All dimensions assume a standard euro-style bottom gusset with zipper reseal at top.

Add 0.125" bleed on all exterior edges. Add 0.25" safe zone inside all edges for live copy.

### 1.2 Panel Breakdown

**Front Panel** — Primary consumer-facing surface. Full brand expression. Wordmark, illustration, headline, benefit callouts, SKU badge.

**Back Panel** — Secondary informational surface. Origin story, Why Tofu claims, testimonials, barcode, regulatory copy.

**Side Gusset (×2)** — Minimal identification surface. Wordmark only on one gusset. Weight identifier and recycling/disposal callout on the other.

**Bottom Gusset** — Internal structural fold. No print area (covered by seal). Do not place copy here.

**Tear notch** — Position at top right of back panel, 0.75" from top edge. Do not place copy within 0.5" of tear notch.

### 1.3 Material and Finish Recommendation

**Substrate:** Kraft-backed matte laminate with a white inner layer for color fidelity.

**Outer finish:** Soft-touch matte laminate, full bleed. Matte finish is mandatory — it aligns with the premium-minimal positioning.

**Spot UV:** Optional. If used, apply spot UV only to the "mochi" wordmark on the front panel. No full-panel gloss coating.

**Window:** A 2" × 3" clear window die-cut on the front panel lower-center is optional for retail shelf differentiation. If used, position it below the illustration zone, centered horizontally. Do not use windows on the 5 lb SKU (panel too narrow for proportional placement).

**Zipper:** White press-to-close zipper, recessed 0.75" from top seal. No zipper visible on front panel.

**Ink:** CMYK 4-color process throughout. CMYK equivalents for all brand colors are specified in Section 4.

---

## Section 2 — Front Panel Layout

The front panel is divided into six zones reading top to bottom. Proportions below are expressed as approximate percentages of panel height to scale across all three SKU sizes.

### Zone 1 — Wordmark + Tagline Lockup (~12% of panel height)

**Content:** Stacked wordmark lockup.

> **MANDATORY:** The tagline "from bean to box" must always appear with the mochi wordmark. It is a locked unit on all packaging surfaces — front panel, back panel footer, and side gusset. Never omit the tagline to save space; reduce the wordmark size instead.

- "mochi": Inter Light (300), 36pt / 42pt / 48pt across SKUs. Letter-spacing +14 units. Color: Deep Sage #2D6A4F
- "from bean to box": Inter Light (300), 9pt / 10pt / 11pt. Letter-spacing +4 units. Color: #6E6E73 (text-secondary — visually distinct from the wordmark)
- Use the **stacked** variant — not the horizontal Nav wordmark
- Centered horizontally. Top margin from panel edge: 0.375"
- Clear space: equal to the cap height of the "m" on all four sides

### Zone 2 — Hero Headline (~10% of panel height)

- "clean litter, finally." — locked from Hero.tsx
- Inter Bold (700), 22pt / 26pt / 30pt across SKUs
- Leading: 1.1×. Letter-spacing: −0.04em. Color: Charcoal #1D1D1F
- Centered horizontally. Maximum 2 lines, 6 words or fewer.

### Zone 3 — Illustration (~40% of panel height)

See Section 6 for full illustration direction. Illustration renders directly on cream panel background — no card or border.

### Zone 4 — Benefit Callouts (~18% of panel height)

Three benefit pills. **Layout A** (10 lb / 20 lb): horizontal row, centered. **Layout B** (5 lb): stacked, left-aligned.

- Pill: transparent fill, 1pt solid Deep Sage border, fully rounded
- Icon: Lucide vector (Leaf / Droplets / RefreshCw), 10pt, 1.5pt stroke, Deep Sage
- Label: Inter Regular (400), 7–9pt, all-caps, letter-spacing +0.06em, Deep Sage

**Three pills:**
1. Leaf — PLANT-BASED
2. Droplets — DUST-FREE
3. RefreshCw — BIODEGRADABLE

### Zone 5 — SKU Weight Badge (~8% of panel height)

- Bottom-right corner. Inset 0.375" from right and bottom of Zone 4.
- Terracotta #C8714F pill, white type
- Weight number: Inter Bold (700), 24pt / 28pt / 32pt
- Unit "lb": Inter Medium (500), 10pt, white at 85% opacity, letter-spacing +0.06em
- Badge color is identical across all three SKUs — size is the differentiator

### Zone 6 — Bottom Trust Band (~12% of panel height)

- Full-width strip. Background: Warm Sand #F4E1C1
- Height: 0.75" / 0.875" / 1" across SKUs
- Content: "Compostable in 60 days · Food-safe ingredients · Biodegradable"
- Inter Regular (400), 6–7.5pt, all-caps, letter-spacing +0.06em, Deep Sage
- Separator dots: Soft Sage #74C69D (only Soft Sage use on front panel)
- Certification marks (if available): left-aligned, monochrome Deep Sage, scaled to band height

---

## Section 3 — Back Panel Layout

### Zone 1 — Origin Story (~30% of back panel height)

**Section label:** "OUR STORY" — Inter Regular, 6–7.5pt, all-caps, +0.06em, #6E6E73

**Headline:** "we started with a better question." — Inter SemiBold (600), 14pt / 16pt / 18pt. Leading 1.2×. Letter-spacing −0.025em. Color: #1D1D1F

**Body (from OriginStory.tsx — verbatim):**
> Most cat litters are made from strip-mined clay or silica — materials that aren't great for cats, homes, or landfills. We asked: what if litter could be made from something that already exists?
>
> Tofu production creates a soy byproduct that would otherwise be discarded. We turned it into something remarkable.
>
> mochi is the result — plant-based, dust-free, biodegradable, and genuinely better.

Body: Inter Regular (400), 7–8.5pt. Leading 1.6×. Color: #6E6E73. Column width: 70% of panel.

### Zone 2 — Why Tofu (~30% of back panel height)

**Section label:** "THE SCIENCE MADE SIMPLE" — same as Zone 1 label treatment

**Layout:** 3-column (10 lb / 20 lb) or stacked (5 lb). No card borders — white space provides separation.

Icons (Leaf / Droplets / RefreshCw) converted to vector outlines at 1.5pt stroke, 14pt bounding box, Deep Sage.

**Card headlines** (from WhyTofu.tsx): Inter Medium (500), 8–10pt, −0.01em, #1D1D1F

**Card body** (verbatim):
- *food-grade ingredients* — Made from the same soy used in tofu production. No clay, no silica, no synthetic fragrances.
- *clumps on contact* — Forms tight, dry clumps in seconds. Easy to scoop. Low tracking. Your floors stay clean.
- *gone in 60 days* — Fully biodegradable. Flush it or compost it. Nothing goes to landfill.

Body: Inter Regular (400), 6.5–7.5pt. Leading 1.65×. Color: #6E6E73.

### Zone 3 — Testimonials (~20% of back panel height)

**Layout:** 2-column (10 lb / 20 lb) or stacked (5 lb).

**Selected quotes (from Testimonials.tsx):**
- "Switched from clay six months ago. The dust difference alone was worth it. My cat took to it immediately." — Sarah M., San Francisco
- "I was skeptical. Now I tell everyone. It actually clumps better than the brand I used for years." — James T., Brooklyn

**Decorative quotation mark:** Large typographic `"`, Deep Sage at 15% opacity, 36pt, behind quote text. Only approved decorative element on back panel.

Quote: Inter Regular (400), 7–8pt, leading 1.7×, #1D1D1F. Attribution: 6pt, #6E6E73.

### Zone 4 — Bottom Bar (~20% of back panel height)

Two columns:
- **Left:** Stacked wordmark (wordmark-primary.svg) + "mochilitter.com" below in Inter Light (300), 7pt, letter-spacing +0.2em, #6E6E73
- **Right:** Barcode placeholder (1" W × 0.75" H min, white backing, UPC-A) + legal line above spanning full width

Legal line: Inter Regular (400), 5.5pt, #6E6E73. Content TBD by legal/operations.

---

## Section 4 — Color Application

### Per-Panel Color Usage

| Surface | Background | Primary | Accent |
|---|---|---|---|
| Front panel | Cream #FAF3E8 | Deep Sage #2D6A4F | Soft Sage #74C69D (particles + separators only) |
| Front trust band | Warm Sand #F4E1C1 | Deep Sage #2D6A4F | Soft Sage (separator dots only) |
| SKU badge | Terracotta #C8714F | White #FFFFFF | None |
| Back panel | White #FFFFFF | Charcoal #1D1D1F | Deep Sage (wordmark, icons, quote marks) |
| Side gusset | Cream #FAF3E8 | Deep Sage #2D6A4F | None |

### CMYK Equivalents (Coated Stock)

| Brand Name | Hex | CMYK |
|---|---|---|
| Deep Sage | #2D6A4F | C58 M0 Y25 K58 |
| Terracotta | #C8714F | C0 M45 Y60 K22 |
| Cream | #FAF3E8 | C0 M2 Y9 K0 |
| Warm Sand | #F4E1C1 | C0 M10 Y24 K4 |
| Soft Sage | #74C69D | C54 M0 Y30 K22 |
| Charcoal | #1D1D1F | C0 M0 Y0 K88 |
| White | #FFFFFF | C0 M0 Y0 K0 |

**Request wet proofs on the specified substrate before approving production.** Deep Sage is a critical color — verify it does not shift toward brown or teal under matte laminate.

### SKU Visual Differentiation

| Differentiator | 5 lb | 10 lb | 20 lb |
|---|---|---|---|
| Wordmark size | 36pt | 42pt | 48pt |
| Hero headline | 22pt | 26pt | 30pt |
| SKU badge | Small pill | Medium pill | Large pill |
| Illustration particles | 3 (minimal) | 5 (standard) | 7 (full field) |
| Panel background | Cream | Cream | Cream |
| Accent color | Identical across all three SKUs | | |

Do not differentiate SKUs by panel background color or badge fill. Scale and particle density are the only variables.

---

## Section 5 — Typography Spec for Print

| Role | Weight | 5 lb (pt) | 10 lb (pt) | 20 lb (pt) | Tracking |
|---|---|---|---|---|---|
| Wordmark "mochi" | Light 300 | 36 | 42 | 48 | +14 units |
| Tagline | Light 300 | 8 | 9 | 10 | +4 units |
| Hero headline | Bold 700 | 22 | 26 | 30 | −0.04em |
| Section label | Regular 400 | 6 | 7 | 7.5 | +0.06em, all-caps |
| Back panel headline | SemiBold 600 | 14 | 16 | 18 | −0.025em |
| Body copy | Regular 400 | 7 | 8 | 8.5 | 0 |
| Benefit pill labels | Regular 400 | 7 | 8 | 9 | +0.06em, all-caps |
| Why Tofu card head | Medium 500 | 8 | 9 | 10 | −0.01em |
| Why Tofu card body | Regular 400 | 6.5 | 7 | 7.5 | 0 |
| Testimonial quote | Regular 400 | 7 | 7.5 | 8 | 0 |
| Attribution | Regular 400 | 6 | 6 | 6 | 0 |
| Trust band text | Regular 400 | 6 | 7 | 7.5 | +0.06em, all-caps |
| Legal line | Regular 400 | 5.5 | 5.5 | 5.5 | 0 |
| Website URL | Light 300 | 7 | 7 | 7 | +0.2em |
| SKU badge number | Bold 700 | 24 | 28 | 32 | 0 |

**Minimums:** 5.5pt for legal/regulatory. 6pt for brand copy. 7pt for comfortable consumer reading. Maximum 2 typeface weights per panel.

---

## Section 6 — Illustration Direction

### Overview

The front panel illustration is a static print adaptation of the animated `CatScene` SVG from `mochi-app/components/Hero.tsx`. Style must match exactly — animations frozen at neutral resting state.

**Two cats. One ball. Minimal ground plane. No background fill.**

### Cat 1 — Sitting cat (left)

- Body + head: ellipses, Deep Sage fill at 5% opacity, 2pt stroke solid
- Ears: triangular polygons, same treatment
- Eyes: upward-curved squint arcs (happy/calm), 2pt stroke, no fill
- Nose: small ellipse, Deep Sage 40% opacity
- Mouth: curved path, Deep Sage 60% opacity, 1.5pt stroke
- Front paws: two ellipses, 5% fill, 1.5pt stroke, with toe-divider lines at 50% opacity
- Whiskers: four lines (2 per side), 1pt, Deep Sage 30–40% opacity
- Batting paw: frozen at 0° rotation. Same ellipse treatment.
- Tail: freeze at keyframe 1 — `M148 310 C120 320 100 340 115 358 C128 372 150 362 152 345`. 3pt stroke, Deep Sage, no fill.

### Cat 2 — Playful cat (right, ~15% smaller)

- Same line-drawing treatment, proportionally scaled down
- Eyes: same happy squint arcs
- Front paws tucked at base
- Tail: freeze at keyframe 1 — `M310 330 C340 310 360 325 350 345 C342 360 322 354 320 340`. 3pt stroke.
- Float animation frozen at y=0

### Ball

- Center between Cat 1's extended paw and Cat 2's body
- Fill: Soft Sage #74C69D at 55% opacity. Stroke: Deep Sage 1.5pt.

### Illustration Scaling

| SKU | Zone 3 bounding box | Scale |
|---|---|---|
| 5 lb | 8.25" W × 5.2" H | ~65% of SVG viewBox |
| 10 lb | 10.25" W × 6.4" H | ~80% of SVG viewBox |
| 20 lb | 12.25" W × 7.2" H | ~95% of SVG viewBox |

Do not crop. Scale down further rather than cutting ears or tails.

### Particle Elements (Static)

Freeze particles at mid-animation state, scattered in upper Zone 3:

| Element | Position (SVG units) | Color | Opacity |
|---|---|---|---|
| Circle | cx=230, cy=175 | Deep Sage | 25% |
| Circle | cx=260, cy=195 | Deep Sage | 20% |
| Circle | cx=200, cy=205 | Soft Sage | 30% |
| Circle | cx=340, cy=185 | Deep Sage | 20% |
| Square (45°) | x=280, y=170 | Soft Sage | 25% |

**Particle density by SKU:**
- 5 lb: 3 particles (Circles 1, 3, Square)
- 10 lb: 5 particles (all above)
- 20 lb: 7 particles (all above + one Deep Sage circle at cx=310, cy=160 r=2 at 20%; one Soft Sage circle at cx=240, cy=150 r=1.5 at 25%)

### Prohibited Elements

No texture, dot grids, halftones, drop shadows, gradients, photography, or decorative script lettering. Per brand guidelines anti-patterns.

---

## Section 7 — Side Gusset Spec

### Left Gusset — Brand ID

- "mochi" only — Inter Light (300), 18pt, letter-spacing +6 units, Deep Sage
- Rotated 90°, reads bottom-to-top when bag is upright
- Centered. Clear space: 0.25" all sides. Background: Cream.

### Right Gusset — Weight + Disposal

- Weight: "5 lb" / "10 lb" / "20 lb" — Inter Bold (700), 14pt, Deep Sage. Upper half.
- Disposal: "BIODEGRADABLE" — Inter Regular (400), 6pt, all-caps, #6E6E73. Lower half.
- Background: Cream. Composting symbol (if required) between the two, Deep Sage monochrome, max 0.375" diameter.

---

## Section 8 — Production Notes

**Font delivery:** Embed Inter as outlined paths before printer handoff. Weights needed: 300, 400, 500, 600, 700.

**SVG to vector:** Recreate the cat illustration as native Illustrator/Affinity vectors — do not place the web SVG directly. Verify fill opacities on matte substrate; test at 1.2× specified opacity if proofs read too faint.

**Color proofing priority:** (1) Deep Sage, (2) Terracotta badge, (3) Cream panel consistency front-to-gusset.

**Dieline:** Obtain from the bag manufacturer before layout. Zone proportions in this spec are percentages of usable area — the manufacturer dieline takes precedence over listed dimensions.

**Barcode:** UPC-A. Minimum 0.75" W × 0.525" H at 100% magnification. Do not scale below 80%. White backing rectangle required, 0.125" padding all sides.

**File format:** PDF/X-4 with embedded ICC profile (Coated FOGRA39 or GRACoL 2006 Coated1v2 per printer spec). Separate layers: dieline / bleed / live matter.

---

## Open Items

| Item | Owner |
|---|---|
| Barcode / UPC data | Operations |
| Certification marks (compostable, etc.) | Legal |
| Manufacturer dieline | Procurement |
| Final SKU badge copy confirmation | Marketing |
| Wet proof approval | Brand / Stewart |

---

## Document Status

| Field | Value |
|---|---|
| Version | 1.0 |
| Date | February 23, 2026 |
| Status | Draft — pending pm-advisor approval before handoff to production designer |
| Brand authority | MOCHI_BRAND_GUIDELINES.md v1.1 |
| Design system compliance | Verified against globals.css, Hero.tsx, Nav.tsx |

---

*mochi Packaging Design Spec v1.0 — design-system-guardian, February 2026*
