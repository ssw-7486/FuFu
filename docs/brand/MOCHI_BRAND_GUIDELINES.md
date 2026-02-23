# mochi Brand Guidelines
### Version 1.1 — February 2026

---

## 1. Brand Overview

**Mission**
mochi makes the responsible choice effortless. We believe caring for your cat and caring for the planet should feel the same — clean, natural, and quietly premium.

**Brand Personality**
Clean. Natural. Modern. Premium. Quietly vibrant.

mochi sits at the intersection of a farmer's market and an Apple Store. The product is plant-based and biodegradable; the experience is refined and frictionless.

**Primary Audience**
Eco-conscious millennials, ages 27–40, urban and suburban. Values-driven purchasers who read ingredient labels and care about packaging waste. They want premium without pretension.

**Secondary Audiences**
- Budget-conscious families: attracted by value messaging and biodegradable safety framing
- Premium pet parents: attracted by efficacy, cleanliness, and elevated aesthetic

**All brand decisions optimize for the primary audience. Secondary audiences are served through copy variants, not visual divergence.**

---

## 2. Brand Name

**Name: mochi**

mochi evokes softness, cleanliness, and a quiet premium quality. It has strong cultural resonance with younger demographics, is easy to pronounce and spell across languages, and is tonally aligned with plant-based, modern, and premium positioning. It does not over-explain the product — it invites curiosity.

**Usage Rules**
- Always written as: mochi (all lowercase)
- Never: mochi, MOCHI, or Môchi
- Tagline lockup (primary): mochi. from bean to box.
- Domain-ready: mochilitter.com (recommended)
- Do not append "Cat Litter" to the primary wordmark — the product category is a secondary line below the logo

---

## 3. Logo Usage Guidelines

*Note: Final logo asset is pending. These rules govern all logo usage once the asset is delivered.*

**Clear Space**
Maintain clear space equal to the height of the "M" in the wordmark on all four sides. No other graphic elements, text, or imagery within this zone.

**Minimum Sizes**
- Digital: 120px wide minimum
- Print: 1 inch wide minimum

**Approved Lockups**
- Primary: Wordmark horizontal (mochi + product line beneath)
- Secondary: Wordmark stacked
- Icon only: Permitted only at small sizes where wordmark is illegible (e.g., app icon, favicon)

**Do**
- Use on white, Apple Surface Gray (#F5F5F7), or Deep Sage (#2D6A4F) backgrounds
- Use the white reversed version on Deep Sage

**Do Not**
- Stretch, rotate, or distort
- Apply drop shadows or gradients
- Place on busy photographic backgrounds
- Use unapproved color combinations

---

## 4. Color System

**Primary Palette**

| Name | Hex | RGB | CMYK | Usage |
|---|---|---|---|---|
| Deep Sage | #2D6A4F | 45, 106, 79 | 58, 0, 25, 58 | Primary brand color. CTAs, headings, key UI elements. |
| Apple Surface Gray | #F5F5F7 | 245, 245, 247 | 0, 0, 1, 3 | Background. The dominant canvas color. |
| Pure White | #FFFFFF | 255, 255, 255 | 0, 0, 0, 0 | Cards, content surfaces, negative space. |
| Charcoal | #1D1D1F | 29, 29, 31 | 0, 0, 0, 88 | Body text, primary copy. |

**Secondary / Accent Palette**

| Name | Hex | Usage |
|---|---|---|
| Soft Sage | #74C69D | Hover states, highlights, secondary tags |
| Warm Sand | #F4E1C1 | Background accents, packaging highlights, family-oriented contexts |
| Deep Forest | #1B4332 | Dark mode base, premium tier emphasis |

**CSS Design Tokens**

```css
:root {
  /* Primary */
  --color-brand-primary: #2D6A4F;
  --color-accent-primary: #2D6A4F;
  --color-accent-hover: #1E4D38;
  --color-bg-default: #FFFFFF;
  --color-bg-surface: #F5F5F7;
  --color-text-primary: #1D1D1F;
  --color-text-secondary: #6E6E73;

  /* Secondary */
  --color-soft-sage: #74C69D;
  --color-warm-sand: #F4E1C1;
  --color-deep-forest: #1B4332;

  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Type Scale */
  --text-display: 3.5rem;     /* 56px */
  --text-h1: 2.5rem;          /* 40px */
  --text-h2: 1.75rem;         /* 28px */
  --text-h3: 1.25rem;         /* 20px */
  --text-body-lg: 1.1875rem;  /* 19px */
  --text-body: 1rem;          /* 16px */
  --text-body-sm: 0.875rem;   /* 14px */
  --text-caption: 0.75rem;    /* 12px */

  /* Letter Spacing */
  --tracking-display: -0.04em;
  --tracking-h1: -0.03em;
  --tracking-h2: -0.02em;
  --tracking-default: 0;
  --tracking-label: 0.02em;
  --tracking-badge: 0.06em;
  --tracking-wordmark-social: 0.2em;

  /* Spacing — 4px base */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-subtle: 0 1px 4px rgba(0, 0, 0, 0.06);

  /* Transitions */
  --transition-base: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  /* Grid */
  --grid-max-width: 980px;
  --grid-gutter: 20px;
  --nav-height: 48px;
}
```

**Usage Rules**
- Deep Sage is the hero color. It anchors the brand without dominating.
- Vibrant color is an accent layer only. Never use Soft Sage as a background at full-page scale.
- Warm Sand is a warmth signal for family-oriented contexts.
- Do not introduce colors outside this palette without brand approval.
- No more than 2 colors visible in any single viewport.

---

## 5. Typography System

**Typeface: Inter**
Inter is a clean, highly legible sans-serif optimized for screens. It carries a modern, neutral authority that aligns with the premium-minimal aesthetic. One typeface across all contexts — no mixing.

**Type Scale**

| Role | Weight | Size (desktop) | Size (mobile) | Line Height | Tracking |
|---|---|---|---|---|---|
| Display / Hero | 700 Bold | 56px | 36px | 1.1 | -0.04em |
| Heading H1 | 600 SemiBold | 40px | 28px | 1.2 | -0.03em |
| Heading H2 | 600 SemiBold | 28px | 22px | 1.25 | -0.02em |
| Heading H3 | 500 Medium | 20px | 18px | 1.3 | -0.01em |
| Body | 400 Regular | 16px | 15px | 1.6 | 0 |
| Caption / Label | 400 Regular | 12px | 12px | 1.4 | +0.02em |
| Button | 500 Medium | 14px | 14px | 1.0 | 0 |
| Wordmark (social) | 300 Light | — | — | — | +0.2em min |

**Rules**
- Never use more than 2 weights on a single surface
- All-caps permitted only for labels and short tags — never body copy or headlines
- Body text line length: 60–75 characters
- Headlines complete the thought in 1–6 words where possible

---

## 6. Voice and Tone

**Core Voice Attributes**
Confident. Warm. Direct. Understated.

mochi does not over-explain, shout, or over-promise. We trust our audience to connect the dots. We are not a wellness brand that lectures. We are a brand that simply works — and lets quality speak.

**Tone by Context**

| Context | Tone | Example |
|---|---|---|
| Product descriptions | Clear, benefit-forward | "Dust-free. Biodegradable. Your cat won't notice. The planet will." |
| Social captions | Warm, light, observational | "Soft on paws. Easy on the bin." |
| Sustainability claims | Factual, no greenwashing | "Made from tofu byproduct. Composted in 60 days." |
| Error states / support | Human, reassuring | "Something went wrong. Let's fix it." |

**Before / After Examples**

| Before | After |
|---|---|
| "Our revolutionary, 100% eco-friendly tofu litter is the best choice for conscious cat parents everywhere!" | "Plant-based. Compostable. Cats approve." |
| "We care deeply about the environment and want to help you make a positive impact with every scoop." | "Every bag keeps 2 lbs of soy byproduct out of landfill." |
| "Amazing odor control that will leave your home smelling fresh and clean!" | "Odor stays in the box. Not in the room." |

**Off-Brand Language — Do Not Use**
- "Revolutionary" / "game-changing" / "disrupting"
- Excessive exclamation points
- Guilt-based sustainability messaging ("The planet needs you to…")
- Baby talk or overly cutesy pet language ("fur babies," "pawrents")
- Vague claims ("natural," "green," "eco" without specifics)

---

## 7. Messaging Pillars and Taglines

**Primary Tagline**
> from bean to box

> **MANDATORY RULE:** The tagline "from bean to box" must appear alongside the mochi wordmark on ALL surfaces — packaging (front panel, back panel footer, side gusset), print collateral, digital, and social. It is never optional. The wordmark and tagline are a locked unit. The only permitted exception is the mobile navigation bar where horizontal space is critically constrained (under 640px viewport width).

**Alternative Taglines**
- "Clean by nature."
- "Soft on cats. Easy on Earth."
- "Plant-based litter, refined."
- "The clean choice. For both of you."

**Core Messaging Pillars**

**Pillar 1 — Plant-Based Purity**
mochi is made from tofu byproduct — a food-grade material that is dust-free, non-toxic, and safe for cats and homes. Lead with what it is made from, not just what it avoids.
Key phrases: plant-based, tofu-derived, food-safe ingredients, dust-free

**Pillar 2 — Effortless Cleanliness**
Superior odor control and clumping. mochi performs as well as or better than clay. Performance is not sacrificed for sustainability.
Key phrases: exceptional clump strength, odor locked in, low tracking, easy scoop

**Pillar 3 — Genuine Sustainability**
Biodegradable in 60 days. Made from a byproduct that would otherwise be discarded. Specific, honest environmental claims only — no greenwashing.
Key phrases: compostable, byproduct reuse, biodegradable, low carbon footprint

**Pillar 4 — Modern Simplicity**
The brand, the packaging, and the experience are designed to feel premium without being complicated. mochi fits in a well-designed home.
Key phrases: minimal, clean design, thoughtfully made, fits your life

**Audience-Specific Copy Variants**

| Audience | Lead Pillars | Angle |
|---|---|---|
| Eco-conscious millennials | 1 + 3 | Specificity over claims. Trust earned through transparency. |
| Budget-conscious families | 2 + 1 | Safety, value, and performance. "Safe for kids and cats." |
| Premium pet parents | 4 + 2 | Design, efficacy, and elevated feel. Price positioned as quality signal. |

---

## 8. Component Design System Summary

**Grid**
- Max content width: 980px centered (desktop)
- Mobile: 16px gutters, single column
- Spacing scale: 4px base unit

**Core Components**

| Component | Style |
|---|---|
| Primary Button | Deep Sage fill, white text, --radius-full (pill), 14px Inter Medium, 48px height, no shadow |
| Secondary Button | Transparent, Deep Sage border 1.5px, Deep Sage text, --radius-full |
| Ghost Button | No border, Deep Sage text, underline on hover |
| Card | White background, 12px radius, 1px border #E5E5E5, 24px padding |
| Tag / Badge | Soft Sage background, Deep Forest text, 4px radius, 12px Inter Regular |
| Icon style | Line icons, 1.5px stroke (Lucide), Deep Sage or Charcoal only |
| Divider | 1px #E5E5E5, no decorative dividers |
| Navigation | 48px height, backdrop blur, no border until scroll |

**Component States**
- Hover: 10% opacity overlay in Deep Sage; buttons darken to #1E4D38
- Focus: 2px Deep Sage outline, 2px offset
- Disabled: 40% opacity, no interaction

**Accessibility**
- Deep Sage on white: 7.2:1 — passes WCAG AAA ✓
- White on Deep Sage: passes WCAG AA ✓
- All text/background combinations must meet WCAG AA minimum (4.5:1)
- Never use Soft Sage as text on white backgrounds

**Apple-Parity Validation Checklist**
Before any screen is approved, verify:
- [ ] One clear focal point per section
- [ ] Primary CTA is the most visually prominent interactive element
- [ ] Headline communicates value proposition in under 7 words
- [ ] No decorative elements that don't serve the conversion path
- [ ] Body copy is under 3 sentences
- [ ] Color count does not exceed 2 per viewport
- [ ] White space is generous — layout feels confident, not cramped

---

## 9. Social Media Design System

**Platform Priority: Instagram (primary), TikTok (secondary)**

### Wordmark — Social Variant

Inter Light (weight 300), tracking 0.2em minimum, Deep Sage #2D6A4F on light backgrounds, Pure White on Deep Sage. Do not use the SemiBold wordmark in social contexts.

### Accessibility

Deep Sage (#2D6A4F) on white (#FFFFFF) = **7.2:1 contrast ratio** — exceeds WCAG AAA (7:1 threshold). Confirmed safe for all social text overlays.

### Photography Composition Rules

- Compose all photography to work in both 1:1 and 4:5 crops simultaneously
- Subject must be centered or offset toward the upper portion of the frame
- Do not place critical subject matter in the lower quarter of the frame
- Subject types: cats in calm, clean domestic environments (natural light, neutral interiors)
- Ingredients: flat lay on white or sage linen, clean macro shots
- Color temperature: cool-to-neutral. No warm orange tones.
- Avoid: cluttered backgrounds, artificial studio lighting, overly posed cats

### Social Typography Rules

- Minimum text size on any post, story, or reel: **32px at native resolution**
- Applies to all text overlays: captions, ingredient callouts, claim text
- Ensures legibility at reduced grid thumbnail scale

### Brand Mark — "M" Symbol Variant

Required for Instagram profile icon and favicon.
- Rendered at 110px circle crop
- "M" in Inter Light (300), wide tracking, Deep Sage on white OR white on Deep Sage
- Must be legible and uncluttered at this size — no decorative elements
- Exclusive use case: profile icon and favicon only. Not a replacement for wordmark elsewhere.

---

## 10. Social Media Style Guide

### Instagram

**Feed Posts (1080×1080px — 1:1)**
- Background: Apple Surface Gray (#F5F5F7) or Pure White
- One dominant visual per post: product, ingredient, or lifestyle
- Maximum 5 words of text overlay on image
- Deep Sage present in every post at minimum (logo or tag)
- No busy collages — one subject, generous white space

**Stories and Reels (1080×1920px — 9:16)**
- Full-bleed photography or color block backgrounds
- Text in upper or lower thirds only — never centered
- Top safe zone: 250px. Bottom safe zone: 300px. Keep critical content clear.
- Animated text: simple fade or slide only — no bounce or spin
- Reels: first 2 seconds must work without sound (text hook required)

**Reel Cover Template**
- Full-bleed product photography
- Wordmark: bottom-left, Inter Light 300, wide tracking, white, minimum 32px native
- Single bold text overlay: minimum 40px, Inter Bold 700, upper third
- No additional graphic elements beyond photo + text

**Profile Image**
- mochi "M" symbol mark on Deep Sage background
- No photography in profile image

**Caption Style**
- 1–2 sentences maximum
- Maximum 5 hashtags, placed in first comment (not caption)
- Tone: warm, dry wit, understated
- CTA: soft — "Link in bio" / "Available now" — never aggressive

**Content Templates**

| Template | Format | Description |
|---|---|---|
| Product hero | 1:1 | Product bag centered, white BG, single copy line below, Deep Sage logo bottom-right |
| Ingredient story | 1:1 | Flat lay, Warm Sand BG, Deep Sage heading, one-line factoid |
| Lifestyle | 1:1 | Cat in natural light, minimal/no text overlay, caption carries brand message |
| Social proof | 1:1 | Apple Surface Gray BG, single bold stat in Deep Sage, mochi wordmark |
| Lo-fi / UGC-adjacent | 1:1 | Casual crop, feels authentic and unpolished — intentional |

### TikTok (Secondary)

- Tone: identical voice, slightly more casual and direct
- Hook in first 1.5 seconds — text or spoken word
- Best formats: product demo, ingredient breakdown, "why tofu?" education
- Avoid: trending audio that conflicts with premium positioning
- Adapt Instagram templates — do not create TikTok-exclusive design assets

### Engagement Voice

- Respond within 24h on Instagram, 12h on TikTok
- Match commenter tone — casual if they're casual, warm if they're warm
- Never defensive in public comments

---

## 11. Anti-Patterns

**Visual**
- No gradients on backgrounds or buttons
- No drop shadows (except 0/1px/4px subtle product photography shadows)
- No decorative fonts, script typefaces, or typefaces other than Inter
- No more than 2 colors in a single UI surface
- No center-aligned body copy blocks longer than 2 lines
- No stock "happy family with pet" cliches

**Copy**
- No unverified environmental claims
- No urgency language ("Act now," "Limited time," "Don't miss out")
- No superlatives without substantiation ("best," "most," "only")
- No sustainability lecturing — state facts, let audience conclude
- No pet-parent slang ("fur babies," "pawrents," "meow-velous")

**Brand**
- Do not position mochi as a budget brand, even for budget family segments — lead with value, not price
- Do not dilute premium signal with over-discounting or promotional visual styles (starbursts, percent-off banners)
- Do not expand scope without pm-advisor approval

---

## Document Status

| Field | Value |
|---|---|
| Version | 1.1 |
| Date | February 2026 |
| Status | Final — approved for implementation |
| Brand name | mochi (confirmed) |
| Platform priority | Instagram primary, TikTok secondary |
| Open items | Logo asset + "M" symbol variant (pending creation) |
| Next milestone | Figma component library build |

---

*mochi Brand Guidelines v1.1 — compiled by fufu-brand team*
