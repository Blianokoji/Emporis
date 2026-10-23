# Emporis Health Care — Design System 2.0 (Master Specification)

> **Document Type:** Ephemeral Master Design Specification & Execution Blueprint  
> **Source:** Visually sampled from the Emporis brand brochure (approximate foundational palette)  
> **Branch:** `enhancements/design-2.0`  
> **Audience:** Claude (Major Task Implementer) & Antigravity (Analyzer & Minor Task Support)  

---

## 1. Executive Summary & Design Vision

The mission of **Design 2.0** is to transform Emporis Health Care from a traditional navy/gold clinical aesthetic into a **vital, sleek, animated, and modern pharmaceutical web experience**. 

The design takes direct inspiration from the vibrant physical brand brochure, harmonizing deep clinical authority with energetic biopharmaceutical vitality:
- **Clinical Pedigree:** Grounded in scientific rigor, transparency, and formulation precision.
- **Biotech Vitality:** Infused with radiant accents representing cellular health, rejuvenation, and advanced medical formulations.
- **Sleek Fluid Motion:** Powered by buttery smooth scrolling (Lenis), choreographed reveals (GSAP ScrollTrigger), and tactile micro-interactions (magnetic hovers, cursor-responsive spotlights, and subtle depth elevation).
- **Multi-Device Parity:** Flawless adaptive experience spanning compact mobile phones, tablets, and ultra-wide desktop displays.

---

## 2. Color Token Architecture

The foundational palette is sampled directly from the brochure colors and mapped into a comprehensive semantic system.

### A. Primary Brand & Accent Tokens

| Color Name | Hex Code | Visual Identity | Primary Semantic Role |
| :--- | :--- | :--- | :--- |
| **Deep Brand Purple** | `#42104F` | Majestic obsidian royal plum | **Anchor Foundations**: Header navigation, hero overlays, footer canvas, high-contrast spotlight sections, brand statement backdrops. |
| **Vibrant Magenta** | `#D51B70` | Radiant cellular magenta | **Action & Highlights**: High-conversion CTA buttons, primary headlines highlights, active indicator badges, glowing borders, hover accents. |
| **Healthcare Blue** | `#263D99` | Crisp clinical cobalt | **Trust & Utility**: Secondary action buttons, verified clinical credentials, hyperlinks, data highlights, technical badges. |
| **Bright Cyan** | `#1599D0` | Electric biophotonic cyan | **Flow & Gradients**: Secondary accents, animated gradient fills, glowing spotlight halos, category chips, interactive active states. |
| **Healthcare Green** | `#5C9E31` | Fresh therapeutic leaf green | **Vitality & Organic Balance**: Logo accents, nutraceutical & hair health indicators, purity checkmarks, active status tags. |
| **Lavender White** | `#F7F3FA` | Muted clinical pearl white | **Light Canvas Foundation**: Primary background for light sections, card fills, alternating table rows, clean breathing spaces. |

---

### B. Derived Neutrals & Text Contrast Tokens

To maintain strict WCAG 2.1 AA readability across all canvases:

| Token Name | Value | Purpose |
| :--- | :--- | :--- |
| **Canvas Light** | `#F7F3FA` | Default page background for light content sections. |
| **Card Surface Light** | `#FFFFFF` | Crisp elevated card surface over Lavender White backdrops. |
| **Ink Deep (Text Light Canvas)** | `#200B29` | High-contrast body and heading text on light backgrounds (4.5:1+ contrast ratio). |
| **Muted Plum (Secondary Text)** | `#705F7B` | Secondary descriptions, timestamps, category flags, table headers on light canvas. |
| **Text Dark Canvas (Light Text)** | `#F7F3FA` | Body text placed on Deep Brand Purple or dark containers. |
| **Text Dark Muted** | `rgba(247, 243, 250, 0.70)` | Supporting descriptions on Deep Brand Purple. |
| **Border Subtle Light** | `rgba(66, 16, 79, 0.08)` | Delicate dividing line on light cards. |
| **Border Vibrant Dark** | `rgba(213, 27, 112, 0.22)` | Subtle radiant boundary line on dark purple cards. |
| **Glass Surface Dark** | `rgba(66, 16, 79, 0.85)` | Blur container for sticky navbar, floating modals, or dark cards. |

---

### C. Colour Usage Rules (supersedes the earlier gradient & glass recipes)

The palette stays; the harshness came from using every hue everywhere. Distribution follows 60 / 30 / 10:

- **60 — Light canvas:** Lavender White and white carry most sections, alternating as tone steps (no lines or shadows between them).
- **30 — Brand purple:** Deep Brand Purple is reserved for the hero scrim (via Purple Deep), the two product spotlight bands, The Emporis Edge and the footer. Formula tables sit on light surfaces.
- **10 — Accent:** Vibrant Magenta is the single action colour (primary CTA, text links, active nav rule, send button).
- **Product identity:** each product owns one accent, used only where it marks something (pillar rule, active table row, visualiser highlight): Embiotin = Vibrant Magenta, Emprotino = Healthcare Blue. Headlines and subtitles stay in ink or lavender-white, never in an accent.
- **Cyan & Green:** retired from decoration. They appear only in the Emprotino serving bar (the one categorical chart: `#4560C4`, `#1599D0`, `#5C9E31`, validated for colour-blind separation, each directly labelled).
- **Text:** headings in Ink Deep; running text in Ink Soft `#46384F`; Muted Plum only for captions, labels and table headers.
- **Never:** gradient text, gradient washes, glassmorphism, glows, multi-colour ribbons (BrandWave strokes in one tone via `currentColor`).

---

## 3. Typography Hierarchy & Rules

Two families. The display serif is sturdy and clinical (journal-like) rather than hairline-thin; figures use DM Sans with tabular numerals.

```
Display Headings  : Source Serif 4, Georgia, serif   (400 headings, 600 small titles)
Body, UI & Data   : DM Sans, system-ui, sans-serif   (400 / 500 / 600, tabular-nums for figures)
```

### Typographic Scale

| Level | Font Family | Size (Fluid Clamp) | Weight | Line Height | Tracking | Text Color |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | `Source Serif 4` | `clamp(2.75rem, 7vw, 5.5rem)` | 400 | `1.02` | `-0.02em` | `#F7F3FA` (second line at 70%) |
| **Section Title** | `Source Serif 4` | `clamp(2.75rem, 6vw, 4.75rem)` | 400 | `1.0` | `-0.02em` | `#200B29` / `#F7F3FA` |
| **Product Name** | `Source Serif 4` | `clamp(3rem, 7vw, 5.5rem)` | 400 | `0.95` | `0.01em` | `#F7F3FA` |
| **Subheading** | `Source Serif 4` | `clamp(1.85rem, 3.4vw, 2.6rem)` | 400 | `1.15` | `-0.01em` | `#200B29` |
| **Item Title** | `Source Serif 4` | `clamp(1.4rem, 2vw, 1.6rem)` | 600 | `1.25` | `0` | `#200B29` |
| **Body** | `DM Sans` | `1rem` – `1.0625rem` | 400 | `1.6` | `0` | `#46384F` / `rgba(247,243,250,0.9)` |
| **Label / Caption** | `DM Sans` | `0.875rem` | 500 | `1.4` | `0` | `#705F7B` (sentence case, never tracked caps) |
| **Figures** | `DM Sans` | inherit | 500 | inherit | `0` | ink, `tabular-nums` |

Headings use `text-wrap: balance`; paragraphs and list items use `text-wrap: pretty`.

---

## 4. Multi-Component Library & Modern Primitives Strategy

Claude should synthesize patterns from leading component ecosystems to create an elevated, high-performance UI:

1. **`lucide-react` / `react-icons` (Iconography):**
   - Use crisp, consistent 1.5px to 2px stroke icons.
   - Tint icons with clinical role colors: Shield/Lock (`#263D99`), Sparkles/Leaf (`#5C9E31`), Bolt/Pulse (`#D51B70`), Atom/Wave (`#1599D0`).
2. **Motion Primitives (GSAP + Framer Motion patterns):**
   - Hybrid approach: GSAP `ScrollTrigger` drives macro page choreography and scrubbed timelines; micro-interactions and layout transitions utilize spring-based physics.
3. **React-Bits / Modern Aceternity UI Patterns:**
   - **Spotlight Cards (`SpotlightCard.tsx`):** Dynamic cursor-tracking radial highlights.
   - **Bento Grid Architecture:** Clean asymmetrical cards in About and Feature sections with distinct visual weights.
   - **Typewriter Effect (`TextType.tsx`):** Preloader and hero subtitles with organic randomized typing speeds.
   - **Pixel / Wipe Transitions (`PixelTransition.tsx`):** For product packaging reveal comparisons.
4. **Accessible Headless Primitives (Radix / shadcn style):**
   - Accessible animated Accordion for formulation clinical data & FAQs.
   - Floating Sheet/Drawer for mobile navigation.
   - Tooltips on clinical ingredients explaining biochemical mechanisms.

---

## 5. Multi-Device Responsive Matrix (Mobile, Tablet, Desktop)

Claude must ensure that every section gracefully reflows across form factors:

### A. Mobile Phones (320px – 640px)
* **Touch Target Sizing:** All interactive elements (links, buttons, switches) minimum `44px × 44px`.
* **Navigation:** Sticky glass header with a smooth fullscreen or bottom-sheet drawer.
* **Layout Reflow:**
  - Product rows convert from horizontal side-by-side into stacked vertical cards with imagery positioned directly above specifications.
  - Giant watermark numerals scale responsively (`clamp(3.5rem, 15vw, 6rem)`) to prevent horizontal overflow.
  - Tables reflow into swipeable horizontal cards or collapsible specification accordions.
* **Typography:** Fluid `clamp()` formulas avoid awkward multi-line hyphenations.

### B. Tablets & Small Laptops (768px – 1024px)
* **Navigation:** Compact desktop header or refined hamburger drawer.
* **Grid Structure:** 2-column bento grids with balanced padding (`px-8 md:px-10`).
* **Touch + Pointer Adaptability:** Check for `@media (pointer: coarse)` to provide instant touch feedback without relying on hover-only states.

### C. Large Desktops & Ultra-wides (1280px – 1920px+)
* **Container Bounds:** Centered `max-w-7xl` with generous breathing margins.
* **Full Interactivity:** Rich cursor spotlights, magnetic CTA buttons, and layered background parallax.

---

## 6. Motion, Physics & Animation System

Animations must convey **fluidity, clinical precision, and effortless luxury** without feeling frantic or gimmicky.

### A. Smooth Scroll Orchestration (Lenis)
* Smooth scrolling managed via `lenis` to deliver frictionless, weightless momentum scrolling.
* Configuration target:
  ```js
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  ```

### B. GSAP ScrollTrigger Choreography
* **Section Entrances (`.fade-up`):**
  - Translate Y from `40px` to `0px`
  - Opacity from `0` to `1`
  - Duration: `0.9s` with `ease: "power2.out"`
  - Stagger child items by `0.12s`
* **Parallax Elements:**
  - Product imagery and background lab textures shift subtly (`yPercent: -15` to `yPercent: 15`) linked to scroll progress.
* **Pinned Scrubbers:**
  - Embiotin spotlight feature indicators lock smoothly while user scrubs through clinical formulation metrics.

### C. Tactile Micro-Interactions
1. **Interactive Spotlight Cards (`SpotlightCard.tsx`):**
   - Cursor tracking dynamic radial gradient overlay.
   - Light canvas spotlight: `rgba(21, 153, 208, 0.12)` (Bright Cyan tint).
   - Dark canvas spotlight: `rgba(213, 27, 112, 0.20)` (Vibrant Magenta halo).
2. **Magnetic & Fluid CTA Buttons:**
   - On hover: Scale up by `1.025`, subtle vertical translation `-2px`.
   - Continuous subtle shimmer or pulse on primary conversion button.
   - Chevron/arrow icon translates `+4px` horizontally on hover.
3. **Card Tilt & Elevation:**
   - Clean, rounded-2xl cards elevate from `box-shadow: 0 4px 12px rgba(66,16,79,0.04)` to `box-shadow: 0 20px 40px -12px rgba(66,16,79,0.12)`.
   - 300ms transition with `cubic-bezier(0.16, 1, 0.3, 1)`.

---

## 7. Component Modernization Blueprints

Claude should execute the component redesigns according to these blueprints:

### 1. `Navbar.tsx`
* **Surface:** Initial state transparent; on scroll (`scrollY > 50`), transitions to **Deep Purple Glass** (`rgba(66, 16, 79, 0.88)` with `backdrop-filter: blur(14px)`).
* **Divider:** Border bottom `1px solid rgba(213, 27, 112, 0.18)`.
* **Brand Logo & Title:** Logo accompanied by "Emporis Health Care" in `Source Serif 4`.
* **Menu Links:** In `DM Sans` (`0.85rem`, tracking `0.15em`, uppercase), `#F7F3FA` transitioning on hover to `#D51B70` with an animated underline indicator.
* **Mobile Drawer:** Animated slide-down or slide-in menu with quick contact link and product quick-jump shortcuts.

### 2. `Hero.tsx`
* **Backdrop:** Full-screen hero featuring `lab_img.webp` overlaid with a rich **Deep Brand Purple tint** (`rgba(66, 16, 79, 0.72)` combined with subtle radial cyan glow).
* **Headline:**
  ```html
  <span class="eyebrow text-[#1599D0]">Emporis Health Care</span>
  Redefining Wellness.<br/>
  <span class="text-[#D51B70]">Restoring Trust.</span>
  ```
* **Description:** Clean, high-legibility paragraph in `DM Sans` (`color: rgba(247, 243, 250, 0.85)`).
* **Action Cluster:**
  - **Primary CTA:** Vibrant Magenta pill button (`#D51B70`) linking smoothly to `#products`.
  - **Secondary CTA:** Healthcare Blue / Outline pill (`#263D99`) linking to `#about`.
* **Metric Badges:** 3 floating clinical credential badges (e.g., "100% Validated Formulations", "GMP Certified Manufacturing", "Specialist Formulation Focus").

### 3. `Products.tsx`
* **Container Canvas:** Lavender White (`#F7F3FA`) background with alternating row patterns.
* **Product Rows (Embiotin & Emprotino):**
  - Split row with large crisp product photography opposite clinical typography.
  - No watermark numerals (removed in the anti-slop pass).
  - Category flag pill: `Nutraceutical` (Healthcare Green `#5C9E31`) and `Nutritional` (Healthcare Blue `#263D99`).
  - Image Card: Subtle scale-up (`scale(1.04)`) on hover with smooth corner rounding (`rounded-3xl`).
  - Both formulations are active and released (no "Launching Soon" badges). Emflat has been removed from the product catalog.

### 4. `EmbiotinSection.tsx` (Deep Dive Spotlight)
* **Hero Banner:** Deep Brand Purple (`#42104F`) hero container with animated headline:
  - "Clinically Engineered for Follicular Density"
  - Highlighted words in Vibrant Magenta (`#D51B70`) and Bright Cyan (`#1599D0`).
* **Pillars of Formulation:** 4 interactive cards on Lavender White canvas:
  - "Targeted Cellular Nourishment"
  - "Multi-Action Fortification"
  - "Bioavailable Micronutrient Matrix"
  - "Proven Follicular Support"
  - Icons and accents highlighted in **Healthcare Green** (`#5C9E31`) and **Cyan** (`#1599D0`).
* **Clinical Comparison Matrix Table:**
  - Alternating rows using `#FFFFFF` and `#F7F3FA`.
  - Header in Deep Brand Purple (`#42104F`) with Lavender White typography.
  - Active checkmarks in Healthcare Green (`#5C9E31`).

### 5. `Edge.tsx` ("The Emporis Edge")
* **Layout:** Dual-split interactive showcase:
  - Left Side: Deep Brand Purple SpotlightCard featuring dynamic Magenta spotlight tracking, displaying corporate distinction and formulation philosophy.
  - Right Side: Rich image showcase (`emporis_edge.webp`) with sleek gradient mask and floating clinical stat card.

### 6. `About.tsx`
* **Section Canvas:** Lavender White (`#F7F3FA`).
* **Core Values Grid:** 3 feature cards with refined hover lifts:
  - Card 1: *Scientific Rigor* (Accents in Healthcare Blue `#263D99`).
  - Card 2: *Uncompromising Purity* (Accents in Healthcare Green `#5C9E31`).
  - Card 3: *Patient-Centric Formulations* (Accents in Vibrant Magenta `#D51B70`).
* **Hover Effect:** 1px border shift to accent color + delicate box shadow.

### 7. `Contact.tsx`
* **Layout:** Two-column split on Lavender White canvas:
  - Left Column: Corporate headquarters info (Edappally, Kochi, Kerala), contact phone/email cards, interactive social links with Cyan hover effects.
  - Right Column: Modernized clinical inquiry form.
* **Form Inputs:**
  - Background: Crisp White (`#FFFFFF`).
  - Border: `1px solid rgba(66, 16, 79, 0.15)`.
  - Focus Ring: `2px solid #263D99` with subtle Cyan outer glow.
  - Submit Button: Full-width or auto-width pill in Vibrant Magenta (`#D51B70`).

### 8. `Footer.tsx`
* **Canvas:** Solid Deep Brand Purple (`#42104F`) with top border `1px solid rgba(213, 27, 112, 0.20)`.
* **Content:**
  - Brand heading in `Source Serif 4` (`#F7F3FA`).
  - Clear navigation column links with smooth hover shifts to Vibrant Magenta (`#D51B70`).
  - Regulatory / Clinical disclaimer in muted text (`rgba(247, 243, 250, 0.65)`).
  - Smooth "Back to Top" floating or inline interactive button.

---

## 8. Caching, Bundling & Performance Architecture

The project is pre-configured with industry-grade performance and caching optimizations:

1. **Deterministic Vendor Chunk Splitting (`vite.config.ts`):**
   - Core libraries are split into separate immutable chunks:
     - `vendor-react` (`react`, `react-dom`)
     - `vendor-gsap` (`gsap`)
     - `vendor-lenis` (`lenis`)
     - `vendor-icons` (`react-icons`)
   - Allows client browsers to cache static vendor code across revisions.
2. **Font Preconnecting & Resource Hints (`index.html`):**
   - `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` eliminate font-loading waterfalls.
3. **Lazy-loaded Asynchronous Components:**
   - Non-critical below-the-fold views are lazily loaded to ensure instantaneous First Contentful Paint (< 1.2s).

---

## 9. Claude Execution Checklist & Work Breakdown

When Claude implements each section, follow this step-by-step checklist:

- [x] **Step 1: CSS & Tokens Alignment** (Antigravity completed)
  - Injected `@theme` tokens and glassmorphism classes in `src/index.css`.
- [x] **Step 2: Dependency Upgrades & Break Fixes** (Antigravity completed)
  - Packages audited and updated, 0 vulnerabilities, lint & build fully green.
- [x] **Step 3: Caching & Resource Hints** (Antigravity completed)
  - Preconnect font hints and vendor chunk splitting configured in Vite.
- [x] **Step 4: Navbar & Preloader Modernization** (Claude)
  - Apply Deep Purple glass background with Magenta border & mobile responsive drawer.
- [x] **Step 5: Hero Section Modernization** (Claude)
  - Restyle overlay with Deep Purple & Cyan vignette.
  - Implement dual-tone typography (`#F7F3FA` and `#D51B70`).
  - Upgrade CTA buttons to Magenta pill and Blue secondary pill.
- [x] **Step 6: Products Showcase & Responsive Rows** (Claude)
  - Apply `#F7F3FA` container background.
  - Implement category tags in Green/Cyan/Blue.
  - Mobile swipeable card or stacked layout.
- [x] **Step 7: EmbiotinSection Feature Polish** (Claude)
  - Deep Purple hero strip with Vibrant Magenta title accent.
  - Healthcare Green accents on purity & nutrient pillars.
  - Refactored comparison matrix table styling.
- [x] **Step 8: Edge & About Sections** (Claude)
  - Update spotlight colors to Magenta/Cyan.
  - Lavender White cards with subtle plum borders.
- [x] **Step 9: Contact & Footer** (Claude)
  - Lavender White form with Healthcare Blue focus indicators.
  - Deep Purple footer with Vibrant Magenta link hovers.
- [ ] **Step 10: Final Polish & Verification** (Antigravity)
  - Build check, responsive layout verification, contrast audit.
