import { useRef } from "react";
import { useAutoScroll } from "../../hooks/useAutoScroll";
import { useStopWheelHScroll } from "../../hooks/useStopWheelHScroll";
import { useIntersectionAnimation } from "../../hooks/useIntersectionAnimation";

type SliderProps = {
  children: React.ReactNode;
};

const Slider = ({ children }: SliderProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useIntersectionAnimation<HTMLDivElement>({
    threshold: 0.5,
  });
  const { startAutoScroll, stopAutoScroll, scroll } = useAutoScroll(
    scrollRef,
    2000
  );
  useStopWheelHScroll(scrollRef, 4);

  return (
    <div
      className={`flex justify-between items-stretch max-w-[calc(100lvw-20px)]`}
      ref={sliderRef.ref}
    >
      <button
        onClick={() => scroll("left")}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        className="bg-white/60 border-2 border-yellow-950/30 rounded-xl w-10 text-xl text-yellow-950 cursor-pointer transition hover:bg-white"
        aria-label="Прокрутить влево"
      >
        ←
      </button>

      <div
        className={`relative w-11/12 max-w-5xl 
          overflow-hidden 
          rounded-2xl 
          border-4
           border-yellow-950/30 
           certificates-container 
           `}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        <div
          ref={scrollRef}
          className={`flex 
                     flex-nowrap             
                     overflow-x-auto 
                     scroll-smooth 
                     gap-4 
                     p-4 
                     [&::-webkit-scrollbar]:hidden 
                     [-ms-overflow-style:none] 
                     [scrollbar-width:none]
                     transition-all duration-500 ease-in ${
                       !sliderRef.isVisible ? "max-w-0" : "max-w-5xl"
                     }`}
        >
          {children}
        </div>
      </div>

      <button
        onClick={() => scroll("right")}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        className="bg-white/60 border-2 border-yellow-950/30 rounded-xl w-10 text-xl text-yellow-950 cursor-pointer transition hover:bg-white"
        aria-label="Прокрутить вправо"
      >
        →
      </button>
    </div>
  );
};

export default Slider;
