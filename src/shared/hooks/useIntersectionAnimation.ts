import { useEffect, useRef, useState } from "react";

type IntersectionAnimationOptions = IntersectionObserverInit & {
  delay?: number;
};

export const useIntersectionAnimation = <T extends HTMLElement>(
  options?: IntersectionAnimationOptions
) => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible } as const;
};
