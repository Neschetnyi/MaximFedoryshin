import { useRef, useEffect } from "react";
import { certificates } from "./sertificatesData";
import ModalWindow from "../../../../shared/components/ModalWindow/ModalWindow";
import { useModal } from "../../../../shared/components/ModalWindow/useModal";

const Sertificates = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);
  const leftButtonRef = useRef<HTMLButtonElement | null>(null);
  const rightButtonRef = useRef<HTMLButtonElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current || !elementRef.current) return;
    const scrollAmount = elementRef.current.offsetWidth + 16;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const { modalData, isVisible, openModal, closeModal } = useModal();

  useEffect(() => {
    const startAutoScroll = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        if (!scrollRef.current || !elementRef.current) return;

        const scrollAmount = elementRef.current.offsetWidth + 16;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }, 2000);
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const container = scrollRef.current;
    const leftButton = leftButtonRef.current;
    const rightButton = rightButtonRef.current;

    container?.addEventListener("mouseenter", stopAutoScroll);
    container?.addEventListener("mouseleave", startAutoScroll);
    leftButton?.addEventListener("mouseenter", stopAutoScroll);
    leftButton?.addEventListener("mouseleave", startAutoScroll);
    rightButton?.addEventListener("mouseenter", stopAutoScroll);
    rightButton?.addEventListener("mouseleave", startAutoScroll);

    startAutoScroll();

    return () => {
      stopAutoScroll();
      container?.removeEventListener("mouseenter", stopAutoScroll);
      container?.removeEventListener("mouseleave", startAutoScroll);
      leftButton?.removeEventListener("mouseenter", stopAutoScroll);
      leftButton?.removeEventListener("mouseleave", startAutoScroll);
      rightButton?.removeEventListener("mouseenter", stopAutoScroll);
      rightButton?.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  return (
    <section
      aria-labelledby="certificates-title"
      className="w-full pt-20 flex flex-col items-center"
    >
      <h2 id="certificates-title" className="sr-only">
        Сертификаты и дипломы психолога Максима Федорышина
      </h2>

      <div className="flex justify-between  items-stretch">
        <button
          ref={leftButtonRef}
          onClick={() => scroll("left")}
          className="bg-white/60 border-2 border-yellow-950/30 rounded-xl w-10 text-xl text-yellow-950 cursor-pointer transition hover:bg-white"
          aria-label="Прокрутить влево"
        >
          ←
        </button>

        <div className="relative w-11/12 max-w-5xl overflow-hidden rounded-2xl border-4 border-yellow-950/30 certificates-container">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth gap-4 p-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {certificates.map((cert, index) => (
              <figure
                ref={index === 0 ? elementRef : null}
                key={index}
                className="cursor-pointer shrink-0 w-[250px] h-[180px] overflow-hidden rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => openModal(cert.src)}
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-full object-cover"
                />
              </figure>
            ))}
          </div>
        </div>

        <button
          ref={rightButtonRef}
          onClick={() => scroll("right")}
          className="bg-white/60 border-2 border-yellow-950/30 rounded-xl w-10 text-xl text-yellow-950 cursor-pointer transition hover:bg-white"
          aria-label="Прокрутить вправо"
        >
          →
        </button>
      </div>

      {/* Модальное окно */}
      <ModalWindow isVisible={isVisible} closeModal={closeModal}>
        {modalData && (
          <img
            src={modalData}
            alt="Сертификат"
            className="object-contain max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        )}
      </ModalWindow>
    </section>
  );
};

export default Sertificates;
