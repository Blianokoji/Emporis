import Lenis from "lenis";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Shared smooth-scroll instance; null when the visitor prefers reduced motion. */
export const lenis: Lenis | null = prefersReducedMotion
  ? null
  : new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true, // offsets come from section scroll-margin-top
      autoRaf: true,
    });

/** Scrolls to an in-page anchor; the fixed-header offset comes from scroll-margin-top. */
export function scrollToHash(hash: string): void {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;
  if (lenis) lenis.scrollTo(target, { force: true });
  else target.scrollIntoView();
}
