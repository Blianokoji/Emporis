# CLAUDE.md — Emporis Health Care (Emporius)

> **Project:** Emporis Health Care Web Application  
> **Active Branch:** `enhancements/design-2.0`  
> **Collaboration Model:** Tandem workflow with **Antigravity** (Analysis, Tokens, Caching, Minor Tasks) and **Claude** (Major Architecture, Modern Sleek Visual Redesign, Functional Animations).  
> **Source of Truth for Design:** [`DESIGN.md`](./DESIGN.md)

---

## 1. Operating Protocol & Agent Directives

### A. Role Division
* **Claude (You):** Execute **Major Tasks**. Your mandate is to design and implement an extraordinary, modern, sleek, animated, and functionally responsive web application across mobile, tablet, and desktop screens. You own the component refactoring, fluid layout choreography, and interactive feature engineering.
* **Antigravity (Partner Agent):** Executes **Minor Tasks**. Manages CSS token definitions, bundle caching, preconnect hints, package updates, lint/build validations, and analysis summaries.
* **Git Safety:** Always work on `enhancements/design-2.0`. **Do not push** to `origin` unless explicitly requested by the user.

### B. Agent & Skill Directives
* **Graphify:** Utilize `graphify` to map and analyze component dependency graphs, asset references, and CSS token linkages across the application before making structural modifications.
* **Design Skills:** Invoke specialized design skills (e.g., `frontend-design`, `ui-ux-pro-max`, `design-spells`, `design-spatial`) to ensure:
  - High-end visual hierarchy and editorial elegance.
  - Tactile micro-interactions (magnetic hovers, cursor-responsive spotlights, smooth card tilts).
  - Harmonic spatial rhythm, generous breathing room, and dynamic viewport clamping.
* **Agent Squads & Subagents:** When tackling multi-component overhauls across the codebase, leverage subagents (`subagent-driven-development`, parallel agents) to refactor independent visual domains simultaneously (e.g., one agent on `Hero`/`Navbar`, another on `Products`/`EmbiotinSection`, another on `Edge`/`About`/`Contact`).

---

## 2. Technical Stack & Architecture

* **Framework:** React 19 (`react@^19.2.0`, `react-dom@^19.2.0`) + TypeScript 5.9 (`strict: true`)
* **Build System:** Vite 7 with Rollup manual chunk caching (`vendor-react`, `vendor-lenis`, `vendor-radix`)
* **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`, `@theme` directives in `src/index.css`)
* **Motion:** CSS keyframes in `src/index.css` (`animate-rise`, `animate-veil`, `animate-draw`, sheet/fade for Radix). GSAP was removed; one orchestrated intro (Preloader veil → Hero rise) is the only non-user-triggered motion.
  - `lenis` smooth scrolling via the shared instance in `src/lib/lenis.ts` (disabled under `prefers-reduced-motion`; anchor offsets come from `section[id] { scroll-margin-top }`).
* **Accessible primitives:** `@radix-ui/react-dialog` (mobile nav drawer), `@radix-ui/react-tabs` (Embiotin `FormulaExplorer` hexagon ring).
* **Icons:** `react-icons` — `react-icons/lu` (Lucide) for UI, `react-icons/fa6` for social brands.
* **Contact form:** `@emailjs/browser`, lazy-imported on submit when `VITE_EMAILJS_*` env vars are set (see `.env.example`); otherwise falls back to a pre-filled `mailto:`.
* **Form & Communication:** `@emailjs/browser@^4.4.1` for inquiries.

---

## 3. Component Architecture & System Inventory

```
C:\Users\bless\Documents\Emporius
├── public/
│   ├── emporis_logo.png
│   ├── emporis_logo.svg
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── embiotin.webp / embiotin_2.webp   (Nutraceutical hair supplement)
│   │   ├── emflat.webp                       (Gastrointestinal simethicone syrup)
│   │   ├── emprotein.webp                    (Advanced whey protein formula)
│   │   ├── emporis_edge.webp                 (Corporate research laboratory)
│   │   ├── emporis_logo.webp                 (Brand insignia)
│   │   ├── grid_img_1/2/3.webp               (Clinical facility imagery)
│   │   └── lab_img.webp                      (Hero background scene)
│   ├── components/
│   │   ├── Navbar.tsx                        (Sticky glassmorphic navigation with scroll detection)
│   │   ├── Preloader.tsx                     (Brand typing intro with TextType & GSAP)
│   │   ├── Hero.tsx                          (Full-screen cinematic hero with dual CTA)
│   │   ├── Products.tsx                      (Core product showcase with watermark numerals)
│   │   ├── EmbiotinSection.tsx               (Comprehensive formulation spotlight & clinical matrix)
│   │   ├── Edge.tsx                          (SpotlightCard split-showcase of company edge)
│   │   ├── About.tsx                         (Mission, values, and GridMotion interactive mosaic)
│   │   ├── Contact.tsx                       (Kochi headquarters info & inquiry channel)
│   │   ├── Footer.tsx                        (Brand disclaimer, columns, and back-to-top)
│   │   ├── SpotlightCard.tsx                 (Radial cursor-tracking spotlight container)
│   │   ├── GridMotion.tsx                    (Interactive mouse-driven image/text grid)
│   │   ├── PixelTransition.tsx               (Interactive pixel-dissolve comparison card)
│   │   ├── TextType.tsx                      (Typewriter effect with variable randomized speed)
│   │   ├── GlassCard.tsx                     (Frosted glass container primitive)
│   │   └── MediaFeature.tsx                  (Two-column image/copy layout primitive)
│   ├── App.tsx                               (Root layout with lazy loading & GSAP fade-ups)
│   ├── main.tsx                              (React 19 entry point)
│   └── index.css                             (Tailwind v4 @theme, brochure tokens, utilities)
├── DESIGN.md                                 (Comprehensive Master Design System 2.0)
├── index.html                                (SEO metadata, JSON-LD Schema, font preconnects)
└── vite.config.ts                            (Optimized manual chunk caching configuration)
```

### Detailed Component Blueprints for Design 2.0

1. **`Navbar.tsx`**:
   - Current: Transparent to navy background with basic text links.
   - Design 2.0 Goal: Deep Brand Purple glass (`.glass-purple`), Vibrant Magenta active underline indicators, mobile responsive slide-out drawer, accessible menu button.
2. **`Hero.tsx`**:
   - Current: Navy overlay on `lab_img.webp`, gold button.
   - Design 2.0 Goal: Atmospheric Deep Purple vignette with Bright Cyan radial flare; headline featuring `"Restoring Trust"` in Vibrant Magenta (`#D51B70`); primary pill button in Magenta with hover shine; secondary pill in Healthcare Blue (`#263D99`); floating clinical trust badges.
3. **`Products.tsx`**:
   - Current: Alternating image rows with watermark numbers (`01`, `02`, `03`) and Coming Soon badges.
   - Design 2.0 Goal: Lavender White canvas (`#F7F3FA`), category pills with color-coding (`Nutraceutical` = Healthcare Green `#5C9E31`, `Gastrointestinal` = Bright Cyan `#1599D0`, `Nutritional` = Healthcare Blue `#263D99`), smooth card image zoom, mobile swipeable or stacked cards.
4. **`EmbiotinSection.tsx`**:
   - Current: Detailed table and benefit list with gold borders.
   - Design 2.0 Goal: Deep Purple hero strip with Vibrant Magenta title accent; 4 clinical pillar cards with Healthcare Green icons; clean alternating comparison table (`#FFFFFF` & `#F7F3FA`) with active green checkmarks.
5. **`Edge.tsx`**:
   - Current: Split screen with gold spotlight.
   - Design 2.0 Goal: SpotlightCard with Vibrant Magenta / Bright Cyan dynamic spotlight halo; high-contrast Deep Purple text container paired with laboratory imagery.
6. **`About.tsx`**:
   - Current: GridMotion with cream glass cards.
   - Design 2.0 Goal: Refined bento-grid value cards on Lavender White canvas with delicate plum borders (`rgba(66, 16, 79, 0.08)`) and hover elevation physics.
7. **`Contact.tsx`**:
   - Current: Static address block on cream background.
   - Design 2.0 Goal: Sleek clinical contact portal with interactive social pills, email link with Cyan hover glow, and accessible form fields with Healthcare Blue focus rings.
8. **`Footer.tsx`**:
   - Current: Navy footer with gold links.
   - Design 2.0 Goal: Deep Brand Purple foundation (`#42104F`), top border in `rgba(213, 27, 112, 0.20)`, Lavender White typography, and animated "Back to Top" button.

---

## 4. Design System 2.0 Quick Reference

Detailed specs are in [`DESIGN.md`](./DESIGN.md). Always reference it for exact values.

### Color Tokens (Tailwind v4 `@theme` in `src/index.css`)
* `--color-purple-brand`: `#42104F` (Headers, hero overlays, footer, dark anchors)
* `--color-magenta-vibrant`: `#D51B70` (CTAs, key highlights, active badges, focus borders)
* `--color-blue-health`: `#263D99` (Trust marks, secondary buttons, clinical links)
* `--color-cyan-bright`: `#1599D0` (Gradients, illustrations, hover glows, secondary accents)
* `--color-green-health`: `#5C9E31` (Wellness/nutrition tags, purity badges, logo accents)
* `--color-lavender-white`: `#F7F3FA` (Card backgrounds, table rows, primary light canvas)
* `--color-ink-deep`: `#200B29` (High-contrast text on light canvas)
* `--color-muted-plum`: `#705F7B` (Secondary descriptions, captions, timestamps)

### Typography
* `font-display` / `--font-display`: `Cormorant Garamond` (headings, titles)
* `font-sans` / `--font-sans`: `DM Sans` — the page default (paragraphs, buttons, navigation)
* `font-tech` / `--font-tech`: `Space Grotesk` (dosages, badges, technical data)
* Fonts load from one `<link>` in `index.html` (not CSS `@import`).

### Responsive Standards
* **Mobile (< 768px):** Min touch target `44px × 44px`, single column stacked cards, fluid clamp headings.
* **Tablet (768px - 1024px):** 2-column bento grids, touch-friendly hover alternatives.
* **Desktop (1024px+):** Immersive split layouts, cursor spotlights, magnetic CTA physics.

---

## 5. Development & Verification Commands

```bash
# Start local development server
npm run dev

# Run TypeScript check & build production bundle
npm run build

# Run ESLint validation
npm run lint

# Preview built production distribution
npm run preview
```

### Quality Guardrails for Claude
1. **Zero ESLint Warnings/Errors:** Always maintain `npm run lint` clean exit code 0.
2. **Zero TypeScript Errors:** `npm run build` must compile without type discrepancies.
3. **No Unsafe Type Assertions:** Avoid `(e as any)` or loose types; use exact React/DOM event interfaces.
4. **Smooth 60fps Performance:** Ensure ScrollTrigger instances are properly killed or cleaned up in `useEffect` return hooks to prevent memory leaks.
