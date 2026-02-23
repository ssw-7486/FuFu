# FuFu / mochi — Claude Project Context

## Project

**mochi** — a premium cat litter brand. Landing page built with Next.js 14, React 18, TypeScript, Tailwind CSS, and Framer Motion.

App lives in `mochi-app/`.

## Dev Server

```bash
cd mochi-app && npm run dev   # runs on http://localhost:3001
```

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Icons | Lucide React |

## Project Structure

```
mochi-app/
  app/
    layout.tsx       # root layout, font loading
    page.tsx         # page composition
    globals.css      # global styles
  components/
    Nav.tsx          # fixed nav, responsive wordmark
    Hero.tsx         # hero section (active)
    HeroOpt1.tsx     # hero A/B reference (solid-fill cats)
    LifeCycle.tsx    # lifecycle section
    LifeCycleSketch.tsx
    WhyTofu.tsx
    OriginStory.tsx
    Testimonials.tsx
    Footer.tsx
  tailwind.config.ts
```

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `brand-primary` | `#2D6A4F` | Primary green, wordmark |
| `brand-hover` | `#1E4D38` | Primary hover |
| `deep-forest` | `#1B4332` | Dark green |
| `soft-sage` | `#74C69D` | Light accent |
| `terra` | `#C8714F` | Terracotta CTA |
| `terra-hover` | `#B05E3E` | CTA hover |
| `cream` | `#FAF3E8` | Warm background |
| `warm-sand` | `#F4E1C1` | Sand accent |
| `bg-surface` | `#F5F5F7` | Surface gray |
| `text-primary` | `#1D1D1F` | Body text |
| `text-secondary` | `#6E6E73` | Muted text, tagline |

### Typography
| Token | Size | Use |
|---|---|---|
| `display` | 3.5rem | Hero headline |
| `h1` | 2.5rem | Section headers |
| `h2` | 1.75rem | Sub-headers |
| `h3` | 1.25rem | Card titles |
| `body-lg` | 1.1875rem | Body copy |
| `body-sm` | 0.875rem | Small copy |
| `caption` | 0.75rem | Labels |

Font: **Inter** (light 300 for wordmark, regular/medium elsewhere)

### Layout
- `max-w-content`: 980px
- `max-w-editorial`: 680px
- `h-nav` / `spacing-nav`: 60px
- Page horizontal padding: `px-5`

## Wordmark

The nav wordmark is SVG text (not a font file):
- **Mobile (`< sm`)**: `mochi` only — `viewBox="0 0 150 60"`, `sm:hidden`
- **Desktop (`sm+`)**: `mochi | from bean to box` — `viewBox="0 0 460 60"`, `hidden sm:block`
- Color: `#2D6A4F` (brand-primary) for `mochi`, `#6E6E73` (text-secondary) for tagline
- Font: Inter 300, `letterSpacing="6"` for wordmark, `letterSpacing="1.5"` for tagline
- Divider: `#D1D5DB` vertical line

## Sessions

Saved to `docs/sessions/YYYY-MM-DD.md` after each session.
