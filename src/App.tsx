/*
цвета зеленый светлые тона (черный красный) пастельные тона
шрифты стилистика библиотеки - фишинебельного кабинета
*/

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navigation from "./components/header/Navigation/Navigation";
import bgImage from "./assets/clipart/e290b7edb6ff11f0b0d3567ecdaf0a75_1.jpeg";

import { useEffect, useRef, useState } from "react";
import Separator from "./components/main/ separator/Separator";

const App = () => {
  const [isVisibleHeader, setIsVisibleHeader] = useState(false);
  const [isVisibleNav, setIsVisibleNav] = useState(false);
  const firstTimeAnimation = useRef<null | boolean>(false);
  const animationGoing = useRef<null | boolean>(true);

  // 🟢 добавлено: эффект сдвига фона при появлении футера
  const [bgOffset, setBgOffset] = useState(0);
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio; // насколько футер виден
        // сдвигаем фон вверх максимум на высоту футера * 0.5
        const shift = ratio * footer.offsetHeight;
        setBgOffset(shift);
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20), // шаги 0 → 1
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center relative border-0 m-0 p-0">
      <div className="w-1/12 border-0 m-0 p-0"></div>

      {/* 🔹 Фон фиксированный, но сдвигается через backgroundPositionY */}
      <div
        className="flex flex-col w-10/12 border-0 m-0 p-0 bg-fixed bg-cover bg-center transition-all duration-500 ease-out"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPositionY: `-${bgOffset}px`,
        }}
      >
        <Header
          isVisible={isVisibleHeader}
          setIsVisible={setIsVisibleHeader}
          firstTimeAnimation={firstTimeAnimation}
          animationGoing={animationGoing}
        />
        <Navigation
          isVisible={isVisibleNav}
          setIsVisibleHeader={setIsVisibleHeader}
          setIsVisible={setIsVisibleNav}
          firstTimeAnimation={firstTimeAnimation}
        />
        <Main />
      </div>

      {/* 🔹 футер с ref для наблюдения */}
      <div ref={footerRef} className="w-10/12">
        <Separator />
        <Footer />
      </div>
    </div>
  );
};

export default App;
