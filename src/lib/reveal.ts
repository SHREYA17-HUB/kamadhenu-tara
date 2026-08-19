import { useEffect } from "react";

/**
 * Adds `.is-in` to every element carrying a reveal utility once it scrolls
 * into view. One shared observer, no animation library.
 */
export function useScrollReveal() {
  useEffect(() => {
    const selector = ".reveal, .reveal-x, .reveal-clip";
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const scan = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains("is-in")) observer.observe(el);
      });
    };

    scan();
    const mutation = new MutationObserver(scan);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}
