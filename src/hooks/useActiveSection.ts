import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently crossing the upper third of the viewport.
 * `route` re-attaches the observer when the page changes and its sections remount.
 */
export function useActiveSection(ids: readonly string[], route: string): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -65% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids, route]);

  return active;
}
