// Shared class recipes for the product chapters (Embiotin, Emprotino) so both read as one template.

export const container = "mx-auto max-w-7xl px-5 sm:px-8 lg:px-10";
export const sectionPad = "py-[clamp(4.5rem,10vw,8rem)]";
export const subheading = "font-display text-[clamp(1.85rem,3.4vw,2.6rem)] leading-[1.15] font-normal tracking-[-0.01em]";

/**
 * Each product owns one accent, used only where it marks something: the pillar rule,
 * the active table row and the visualiser highlight. Text stays in ink.
 */
export const productAccent = {
  embiotin: { fill: "bg-magenta-vibrant", text: "text-magenta-vibrant" },
  emprotino: { fill: "bg-blue-health", text: "text-blue-health" },
} as const;

/** Spotlight band: the purple brand anchor every product opens on. */
export const spotlightBand = "bg-purple-brand text-lavender-white";
export const spotlightGrid = "grid items-center gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20";
export const spotlightName = "block text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[0.01em]";
export const spotlightSubtitle = "mt-5 block text-[clamp(1.35rem,2.4vw,1.85rem)] leading-snug text-lavender-white/75";
export const spotlightLabel = "text-lavender-white/60";
export const spotlightCopy = "mt-8 max-w-[60ch] space-y-4 text-[1.0625rem] leading-[1.65]";
/** Tall photo frame beside the spotlight copy. */
export const spotlightFrame =
  "relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-xl md:mx-0 md:justify-self-end";

/**
 * Pillar / benefit columns on a white band: a hairline rule above each column with a
 * short tone segment as the only accent. No card fill, no icon tile, no hover lift.
 */
export const pillarList = "mt-12 grid gap-x-10 gap-y-10";
export const pillarItem = "relative border-t border-purple-brand/10 pt-6";
export const pillarRule = "absolute -top-px left-0 h-0.5 w-10";
export const pillarTitle = "font-display text-[clamp(1.4rem,2vw,1.6rem)] leading-tight font-semibold text-ink-deep";
export const pillarText = "mt-3 max-w-[40ch] leading-[1.6] text-ink-soft";

/** Formula band: a light, white surface so the data reads like a printed label panel. */
export const formulaBand = "bg-white text-ink-deep";
export const formulaHeader = "flex flex-col justify-between gap-4 border-b border-purple-brand/10 pb-8 md:flex-row md:items-end";
export const formulaCount = "text-sm text-muted-plum tabular-nums";
export const formulaGrid = "mt-12 grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16";
export const visualCard = "min-w-0 rounded-xl bg-lavender-white p-6 sm:p-8";
