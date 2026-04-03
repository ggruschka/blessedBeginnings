# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Single-page landing site for **Blessed Beginnings**, a Catholic children's products brand. Static marketing page — no routing, no backend, no tests.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — typecheck (`tsc -b`) then Vite build to `dist/`
- `npm run lint` — ESLint across all `.ts`/`.tsx` files
- `npm run preview` — serve the production build locally

## Stack

React 19 + TypeScript + Vite 8. Tailwind CSS v3 with CSS variables for theming. shadcn/ui (new-york style, `components.json`). Motion library (`motion/react`, the successor to Framer Motion) for all animations. Lucide for icons.

Path alias: `@` → `./src`

## Architecture

**App.tsx** renders a fixed `<Navbar />` plus a `<main>` of sequential full-viewport sections. Page order:

Hero → PromiseBar → OurStory → ProductsShowcase → ValueGrid → Testimonials → CTASection → Footer

### Section pattern

Full-bleed image/video sections (Hero, OurStory, CTASection) follow a consistent layered structure:
1. Background media (absolute, z-0)
2. Scrim gradients (top and bottom, z-1) — eased multi-stop gradients that blend into adjacent section colors
3. "Reading pillow" — centered radial gradient overlay (z-2) for text legibility
4. Content (z-10) — heading vertically centered, body+CTA anchored to bottom

Scrim colors must match the adjacent section's background so transitions feel seamless. The surface color tokens define the palette: `surface-ivory` (lightest), `surface-warm` (mid), `surface-deep` (dark), `background` (default).

### Design system primitives

- **WoodSurface** (`WoodSurface.tsx`): CSS-only faux wood texture used for buttons, nav pills, badges. Exports `woodStyle` (CSSProperties) and `WoodGrainOverlay` for composable use. All CTAs use this surface.
- **Vintage frames** (`index.css`): `.vintage-frame` and `.vintage-frame-strong` — watercolor-paper-style card containers with gradient borders via mask-composite.
- **SectionBadge**: Small wood-surface pill used as section eyebrow label.
- **Divider**: Decorative watercolor flourish image between sections.

### Animation wrappers (`components/animations/`)

All animation components respect `prefers-reduced-motion` and degrade gracefully:

- **FadeIn** — viewport-triggered fade with directional offset (up/down/left/right/none). Primary reveal animation.
- **BlurText** — word-by-word blur-to-clear entrance for hero headings.
- **StaggerContainer / StaggerItem** — viewport-triggered stagger using shared motion variants from `lib/animations.ts`.
- **ScrollSection** — scroll-linked sticky section (render-prop API, receives `scrollYProgress`).
- **ParallaxSection** — subtle parallax on scroll. Disabled on mobile.
- **ScrollLinked** — scroll-driven opacity/scale/y transforms.

Shared timing presets live in `lib/animations.ts` (easing curves, durations, variant factories).

### Scroll behavior

Desktop uses `scroll-snap-type: y proximity` (CSS-only, hover+fine-pointer media query). Mobile gets no scroll snap. Safe viewport height: `min-h-screen-safe` utility uses `100dvh` with `100vh` fallback.

### Typography

- Headings: `Instrument Serif` (italic), class `font-heading`
- Body: `Barlow` (light/regular/medium/semibold), class `font-body`
- Text legibility on image backgrounds: `.text-contrast` / `.text-contrast-strong` utilities (multi-layer text-shadow)

### Assets

All in `public/assets/`. Images have `.webp` primary with `.png`/`.jpg` fallbacks. Hero uses background video (`hero-bg.webm` / `.mp4`).
