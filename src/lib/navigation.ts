import { useCallback } from "react";
import { useLocation } from "wouter";
import { scrollToHash } from "./lenis";

/**
 * Returns a handler that brings a home-page section into view from anywhere on the site.
 * On the home route it scrolls directly; elsewhere it navigates to "/#section" and the
 * home page scrolls on mount (see `useInitialHashScroll`).
 */
export function useGoToSection(): (hash: string) => void {
  const [location, navigate] = useLocation();
  return useCallback(
    (hash: string) => {
      if (location === "/") scrollToHash(hash);
      else navigate(`/${hash}`);
    },
    [location, navigate]
  );
}
