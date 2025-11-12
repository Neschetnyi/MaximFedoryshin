import { useEffect, useRef } from "react";

type Direction = "left" | "right";

/**
 * Универсальный автоскролл для горизонтальных контейнеров
 * с автоостановкой, если элемент вне зоны видимости.
 */
export const useAutoScroll = (
  scrollRef: React.RefObject<HTMLDivElement | null>,
  intervalMs: number = 2000,
  gap: number = 16
) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoScroll = () => {
    if (intervalRef.current) return; // уже запущен

    intervalRef.current = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const firstChild = container.children[0] as HTMLElement | null;
      if (!firstChild) return;

      const scrollAmount = firstChild.offsetWidth + gap;
      const { scrollLeft, scrollWidth, clientWidth } = container;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, intervalMs);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // 1️⃣ — остановка при касании (мобильные)
    const handleTouchStart = () => stopAutoScroll();
    container.addEventListener("touchstart", handleTouchStart);

    // ✅ слушаем глобальное событие остановки всех автоскроллов
    const handleGlobalStop = () => stopAutoScroll();
    window.addEventListener("stopAutoScroll", handleGlobalStop);

    // 2️⃣ — Intersection Observer для видимости
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startAutoScroll();
        } else {
          stopAutoScroll();
        }
      },
      {
        threshold: 0.2, // сработает, если видно хотя бы 20% блока
      }
    );

    observer.observe(container);

    // при монтировании можно не запускать сразу — observer сам решит
    return () => {
      stopAutoScroll();
      container.removeEventListener("touchstart", handleTouchStart);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scroll = (direction: Direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const firstChild = container.children[0] as HTMLElement | null;
    if (!firstChild) return;

    const scrollAmount = firstChild.offsetWidth + gap;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return { startAutoScroll, stopAutoScroll, scroll };
};
