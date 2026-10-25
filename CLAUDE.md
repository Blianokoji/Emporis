# CLAUDE.md — Emporis Health Care (Emporius)

> **Project:** Emporis Health Care Web Application  
> **Active Branch:** `enhancements/client-copy-round-2`  
> **Collaboration Model:** Tandem workflow with **Antigravity** (Analysis, Tokens, Caching, Minor Tasks) and **Claude** (Major Architecture, Modern Sleek Visual Redesign, Functional Animations).  
> **Source of Truth for Design:** [`DESIGN.md`](./DESIGN.md)

---

## 1. Operating Protocol & Agent Directives

### A. Role Division
* **Claude (You):** Execute **Major Tasks**. Your mandate is to design and implement an extraordinary, modern, sleek, animated, and functionally responsive web application across mobile, tablet, and desktop screens. You own the component refactoring, fluid layout choreography, and interactive feature engineering.
* **Antigravity (Partner Agent):** Executes **Minor Tasks**. Manages CSS token definitions, bundle caching, preconnect hints, package updates, lint/build validations, and analysis summaries.
* **Git Safety:** Always work on `enhancements/client-copy-round-2`. **Do not push** to `origin` unless explicitly requested by the user.

### B. Agent & Skill Directives (Claude Design Suite)
* **Claude Design Core (`claude-design`):** Portable engine adapted from Anthropic's Claude.ai design system architecture (`jiji262/claude-design-skill`).
  - **Priority #0 Fact Verification:** Research real-world facts before assuming product specs, release timelines, or formulations.
  - **Core Asset Protocol:** Logos, authentic product photography, and UI screenshots are first-class citizens.
  - **Design Direction Advisor:** Provides 3 differentiated directions from 10 design philosophies (Swiss Editorial, Bauhaus Geometric, Kenya Hara, Dieter Rams, Magazine Editorial, Risograph, Brutalist, etc.).
  - **Format Playbooks:** Generates HTML artifacts, design canvases, interactive prototype shells, slide decks, and timeline animations.
* **UI/UX Pro Max (`ui-ux-pro-max`):** 50+ design styles, 97 color palettes, 57 font pairings, 99 UX rules, and accessibility benchmarks.
* **Frontend Design (`frontend-design`):** Enforces explicit aesthetic stances, DFII scoring (Aesthetic Impact, Context Fit, Feasibility, Performance vs Risk), and blocks generic templates.
* **Design Spells (`design-spells`):** Micro-interactions, tactile hover physics, cursor spotlights, and subtle delight without visual clutter.
* **Taste Skill (`taste` / `design-taste-frontend`):** Anti-slop frontend engineering, dynamic typography scales, and intentional layout variance.
* **Impeccable (`impeccable`):** Rigorous anti-pattern detection and design polish engine (`/impeccable polish`, `/impeccable audit`, `/impeccable critique`, `/impeccable animate`).
* **Design Agents in `.claude/agents/`:**
  - `claude-design-lead.md`: Master Design Director & Visual System Architect.
  - `claude-ui-specialist.md`: Frontend Craft & Accessible Interaction Engineer.
  - `claude-image-asset-producer.md`: Visual Media & Responsive Asset Director.
  - `claude-visual-critic.md`: Anti-Slop & Quality Gatekeeper.
* **Image & Visual Media Libraries:**
  - `lucide-react`: Modern SVG iconography standard.
  - `motion`: High-performance declarative animation library for React 19.
  - `src/lib/images.ts`: Curated Unsplash CDN photography collections (Laboratory, Neurology, Wellness, Abstract), dynamic zero-CLS SVG placeholder generators, and responsive `srcset` builders.
  - `src/lib/utils.ts`: `cn()` utility (`clsx` + `tailwind-merge`) for clean, collision-free Tailwind class management.
  - `scripts/design/image-asset-helper.js`: Asset audits (`audit-assets`) and vector placeholder generation (`generate-svg`).
* **Agent Squads & Subagents:** When tackling multi-component overhauls across the codebase, leverage subagents (`subagent-driven-development`, parallel agents) to refactor independent visual domains simultaneously (e.g., one agent on `Hero`/`Navbar`, another on `Products`/`EmbiotinSection`, another on `Edge`/`About`/`Contact`).

---

## 2. Technical Stack & Architecture

* **Framework:** React 19 (`react@^19.2.0`, `react-dom@^19.2.0`) + TypeScript 5.9 (`strict: true`)
* **Build System:** Vite 7 with Rollup manual chunk caching (`vendor-react`, `vendor-lenis`, `vendor-radix`)
* **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`, `@theme` directives in `src/index.css`)
* **Motion & Animation:** `motion` (declarative spring animations) + `lenis` smooth scrolling via shared instance in `src/lib/lenis.ts` (disabled under `prefers-reduced-motion`; anchor offsets come from `section[id] { scroll-margin-top }`).
* **Accessible primitives:** `@radix-ui/react-dialog` (mobile nav drawer).
* **Anti-slop rules:** no glassmorphism or backdrop blur, no gradient text or decorative gradient washes, no identical icon-tile cards with coloured top bars, no tracked uppercase labels, no pills on static text, no decorative watermark numerals or appended arrow icons. Section labels use the neutral `Eyebrow` (plain small text). Radii: photos/panels `rounded-xl`, inputs/secondary buttons `rounded-lg`, pill only for the hero CTA.
* **Content & Product Lineup Rules:**
  - **Product Lineup (Strictly 2 Products):** The portfolio consists solely of **Embiotin** and **Emprotino**. **Emflat** has been permanently removed from the catalog, navigation, copy, and schema.
  - **Emprotino Status:** Emprotino is officially released and active. Do not display any "Coming Soon", "Launching Soon", or "In Development" badges.
  - **Trademark Policy:** Neither product carries a trademark symbol (`Embiotin`, NOT `Embiotin™`; `Emprotino`, NOT `Emprotino™`). Do not use `™` anywhere across the codebase.
  - **Embiotin Positioning & Peripheral Neuropathy Mechanism:** Embiotin's primary clinical emphasis is on its **neuroscientific advantages** and cellular bioenergetics:
    - *Prevents Deficiency-Induced Damage:* A severe lack of vitamin B5 causes "burning feet syndrome" and nerve degeneration; adequate levels prevent these specific deficiency-related neuropathies.
    - *Precursor to Coenzyme A:* It converts into Coenzyme A (CoA), a vital molecule for cellular energy production, myelin sheath synthesis, and the maintenance of structural nerve health.
    - Active agent: 100 mg Calcium Pantothenate (Vitamin B5) paired with Biotin and cofactors for dual neuro-protection and tissue vitality.
  - **Preservation Rule:** Except for the above product catalog and positioning directives, maintain high scientific and clinical accuracy across all descriptions.
* **Icons:** `lucide-react` and `react-icons` — `react-icons/lu` / `lucide-react` for UI, `react-icons/fa6` for social brands.
* **Contact form:** `@emailjs/browser`, lazy-imported on submit when `VITE_EMAILJS_*` env vars are set (see `.env.example`); otherwise falls back to a pre-filled `mailto:`.
* **Form & Communication:** `@emailjs/browser@^4.4.1` for inquiries.

---

## 3. Component Architecture & System Inventory

```
C:\Users\bless\Documents\Emporius
├── public/
│   ├── emporis_logo.png
│   ├── emporis_logo.svg
│   ├── placeholders/
│   │   ├── product-embiotin.svg
│   │   ├── product-emprotino.svg
│   │   ├── hero-lab-research.svg
│   │   └── about-scientific-team.svg
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── embiotin.webp / embiotin_2.webp   (Nutraceutical hair supplement)
│   │   ├── emflat.webp                       (Archived asset - removed from active portfolio)
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
│   │   ├── Eyebrow.tsx                       (Subtle section category label)
│   │   ├── FormulaPanel.tsx                  (Ingredient details panel)
│   │   ├── FormulaTable.tsx                  (Clinical formulation table)
│   │   └── ProductStandard.tsx               (Standard certification badge card)
│   ├── lib/
│   │   ├── images.ts                         (Curated Unsplash CDN photography & SVG placeholders)
│   │   ├── lenis.ts                          (Smooth scrolling instance)
│   │   ├── navigation.ts                     (Accessible page routing and smooth scrolling anchors)
│   │   └── utils.ts                          (cn utility with clsx and tailwind-merge)
│   ├── App.tsx                               (Root layout with lazy loading & GSAP fade-ups)
│   ├── main.tsx                              (React 19 entry point)
│   └── index.css                             (Tailwind v4 @theme, brochure tokens, utilities)
├── scripts/
│   └── design/
│       └── image-asset-helper.js             (CLI utility for asset audits and vector SVG placeholders)
├── DESIGN.md                                 (Comprehensive Master Design System 2.0)
├── index.html                                (SEO metadata, JSON-LD Schema, font preconnects)
└── vite.config.ts                            (Optimized manual chunk caching configuration)
```

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
* `--color-ink-soft`: `#46384F` (Running body text on light canvas)
* `--color-muted-plum`: `#705F7B` (Captions, labels, table headers only)
* **Colour distribution:** 60 light canvas / 30 brand purple (hero, product spotlights, Edge, footer) / 10 magenta (actions). Each product has one accent for marks only (Embiotin magenta, Emprotino blue-health); cyan and green only in the Emprotino serving chart. See DESIGN.md §2C.

### Typography
* `font-display` / `--font-display`: `Source Serif 4` (headings, titles; 400, 600 for small item titles)
* `font-sans` / `--font-sans`: `DM Sans` — the page default (paragraphs, buttons, navigation)
* Figures and dosages: DM Sans with `tabular-nums` (Space Grotesk / `font-tech` removed).
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

# Audit assets & generate branded SVG placeholders
node scripts/design/image-asset-helper.js audit-assets
node scripts/design/image-asset-helper.js generate-svg

# Run Impeccable UI detector
.\.claude\skills\impeccable\scripts\impeccable.cmd detect
```

### Quality Guardrails for Claude
1. **Zero ESLint Warnings/Errors:** Always maintain `npm run lint` clean exit code 0.
2. **Zero TypeScript Errors:** `npm run build` must compile without type discrepancies.
3. **No Unsafe Type Assertions:** Avoid `(e as any)` or loose types; use exact React/DOM event interfaces.
4. **Smooth 60fps Performance:** Ensure ScrollTrigger instances are properly killed or cleaned up in `useEffect` return hooks to prevent memory leaks.
