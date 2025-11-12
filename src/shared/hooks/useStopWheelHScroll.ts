import { useEffect } from "react";

/**
 * Делает горизонтальный скролл колесиком мыши внутри контейнера.
 * Блокирует вертикальный скролл страницы при наведении.
 * Работает только на десктопах.
 */
export const useStopWheelHScroll = (
  ref: React.RefObject<HTMLElement | null>,
  multiplier: number = 1.2
) => {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Игнорируем touch-устройства (там wheel нет)
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
      const canScrollHorizontally = scrollWidth > clientWidth;

      if (!canScrollHorizontally) return;

      const atStart = scrollLeft <= 0 && delta < 0;
      const atEnd = scrollLeft + clientWidth >= scrollWidth && delta > 0;

      // если можно проскроллить — предотвращаем вертикальную прокрутку
      if (!atStart && !atEnd) {
        e.preventDefault();
        container.scrollBy({
          left: delta * multiplier,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, multiplier]);
};
