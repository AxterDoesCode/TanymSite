import { useEffect, useRef } from "react";

/* useReveal — fade-in once when an element enters the viewport.
 * Opacity only (no transform) per the design system: "fades and gentle reveals only."
 * Uses IntersectionObserver; respects prefers-reduced-motion.
 */
export default function useReveal({ threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.dataset.revealed = "true";
      return;
    }

    el.dataset.revealed = "false";
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.dataset.revealed = "true";
            obs.unobserve(e.target);
          }
        }
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
