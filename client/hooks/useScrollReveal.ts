import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-6");
          el.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "-10% 0px", threshold: 0.15, ...(options || {}) },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
