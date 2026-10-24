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
  if (lenis) {
    // After a route change Lenis may still hold the previous page's height and clamp the scroll; re-measure first.
    lenis.resize();
    lenis.scrollTo(target, { force: true });
  }
  else target.scrollIntoView();
}

/** Jumps to the top of the page without animation (used when a new route renders). */
export function scrollToTop(): void {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
}
