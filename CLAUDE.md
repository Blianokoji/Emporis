# CLAUDE.md — Emporis Health Care (Emporius)

Design source of truth: `DESIGN.md` (exact values), tokens in `src/index.css` (`@theme`). Global routing/skill policy: `~/.claude/CLAUDE.md`. Previous long version: `~/.claude/backups/orchestration-2026-10-25/project/CLAUDE.md`.

## Rules
- Git: check `git branch` first. Do NOT push to `origin` unless user asks.
- Partner agent Antigravity handles minor tasks (CSS tokens, caching, package updates, lint/build, analysis). Claude owns architecture, visual redesign, animation.
- Frontend work: read DESIGN.md + touched components first; use ONE direction skill per pass (`impeccable` or `design-taste-frontend`); project design agents in `.claude/agents/` only for multi-component overhauls. Verify at <768, 768–1024, ≥1024px.

## Stack
React 19 + TS 5.9 strict · Vite 7 (manual chunks vendor-react/lenis/radix) · Tailwind v4 (`@tailwindcss/vite`) · `motion` + `lenis` (`src/lib/lenis.ts`, off under `prefers-reduced-motion`; anchor offset via `section[id] { scroll-margin-top }`) · `wouter` routing · `@radix-ui/react-dialog` (mobile nav) · icons `lucide-react`, `react-icons/fa6` (social) · contact form `@emailjs/browser` lazy-imported when `VITE_EMAILJS_*` set (see `.env.example`), else prefilled `mailto:`. No GSAP.
Layout: `src/components/*` (sections, `Eyebrow`, `FormulaPanel/Table`, `ProductStandard`, `BrandWave`, `productLayout.ts`), `src/lib/{images,lenis,navigation,utils}.ts` (`cn()` = clsx+tailwind-merge), `scripts/design/image-asset-helper.js` (`audit-assets`, `generate-svg`).

## Content rules (requirements)
- Exactly 2 products: **Embiotin**, **Emprotino**. Emflat permanently removed (catalog, nav, copy, schema; `emflat.webp` is archived, unused).
- Emprotino is released: NO "Coming Soon"/"Launching Soon"/"In Development".
- NO `™` anywhere.
- Embiotin: lead with neuro/bioenergetic positioning: B5 deficiency → "burning feet syndrome"/nerve degeneration (prevented by adequate B5); B5 → Coenzyme A (energy, myelin synthesis, nerve health); active: 100 mg Calcium Pantothenate (B5) + Biotin + cofactors. Otherwise keep clinical/scientific accuracy.

## Anti-slop (requirements)
No glassmorphism/backdrop blur · no gradient text or decorative gradient washes · no identical icon-tile cards with coloured top bars · no tracked uppercase labels · no pills on static text · no watermark numerals or appended arrow icons. Section labels = neutral `Eyebrow`. Radii: photos/panels `rounded-xl`, inputs/secondary buttons `rounded-lg`, pill only for hero CTA. Colour split 60 light / 30 brand purple / 10 magenta (DESIGN.md §2C). Fonts: Source Serif 4 (display), DM Sans (body, `tabular-nums` for figures), single `<link>` in `index.html`. Touch targets ≥44px.

## Commands / gates
```bash
npm run dev      # vite
npm run build    # tsc -b && vite build — must have 0 TS errors
npm run lint     # eslint — must exit 0
.\.claude\skills\impeccable\scripts\impeccable.cmd detect   # UI detector
```
No `any`/unsafe assertions. Clean up effects/listeners in `useEffect` returns.

## Code index
`graphify-out/` (gitignored) is a snapshot; session hook reports freshness. If STALE, rebuild (`/graphify`) or verify against `src/`.
