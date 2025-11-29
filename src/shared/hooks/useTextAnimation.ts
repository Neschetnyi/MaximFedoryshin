import { useEffect, useRef } from "react";

export const useTextAnimation = ({
  classNameParam,
  options,
}: {
  classNameParam: string;
  options?: IntersectionObserverInit;
}) => {
  const timer = useRef(100);

  useEffect(() => {
    const elements = document.querySelectorAll(`.${classNameParam}`);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove(`${classNameParam}`);
            observer.unobserve(entry.target);
          }, timer.current);

          timer.current += 50;
        }
      });
    }, options);
    elements.forEach((element) => {
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
};
