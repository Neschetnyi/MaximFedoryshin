/*
цвета зеленый светлые тона (черный красный) пастельные тона
шрифты стилистика библиотеки - фишинебельного кабинета
*/

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
// import bgImage from "./assets/clipart/e290b7edb6ff11f0b0d3567ecdaf0a75_1.jpeg";

import { useEffect, useRef, useState } from "react";
import Separator from "./components/main/separator/Separator";
// import MobileNavigation from "./components/MobileNavigation/MobileNavigation";
import Navigation from "./components/Navigation/Navigation";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";

export type refsType = {
  aboutMe: React.RefObject<HTMLDivElement | null>;
  services: React.RefObject<HTMLDivElement | null>;
  teraphy: React.RefObject<HTMLDivElement | null>;
  publications: React.RefObject<HTMLDivElement | null>;
};

const App = () => {
  // 🟢 добавлено: эффект сдвига фона при появлении футера
  const [bgOffset, setBgOffset] = useState(0);

  const aboutMe = useRef<HTMLDivElement | null>(null);
  const services = useRef<HTMLDivElement | null>(null);
  const teraphy = useRef<HTMLDivElement | null>(null);
  const publications = useRef<HTMLDivElement | null>(null);

  const refs = {
    aboutMe,
    services,
    teraphy,
    publications,
  };

  const [isLg, setIsLg] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  const [isMd, setIsMd] = useState(
    window.matchMedia("(min-width: 534px)").matches
  );
  const [isLargeMd, setIsLargeMd] = useState(
    window.matchMedia("(min-width: 800px)").matches
  );
  const [isPortrait, setIsPortrait] = useState(
    window.matchMedia("(orientation: portrait)").matches
  );
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );

  useEffect(() => {
    const portrait = window.matchMedia("(orientation: portrait)");
    const landscape = window.matchMedia("(orientation: landscape)");

    const lg = window.matchMedia("(min-width: 1024px)");
    const largeMd = window.matchMedia("(min-width: 800px)");
    const md = window.matchMedia("(min-width: 534px)");

    const updateLg = (e: MediaQueryListEvent) => setIsLg(e.matches);
    const updateMd = (e: MediaQueryListEvent) => setIsMd(e.matches);
    const updateLargeMd = (e: MediaQueryListEvent) => setIsLargeMd(e.matches);
    const updatePortrait = (e: MediaQueryListEvent) => setIsPortrait(e.matches);
    const updateLandscape = (e: MediaQueryListEvent) =>
      setIsLandscape(e.matches);

    lg.addEventListener("change", updateLg);
    md.addEventListener("change", updateMd);
    largeMd.addEventListener("change", updateLargeMd);
    portrait.addEventListener("change", updatePortrait);
    landscape.addEventListener("change", updateLandscape);

    return () => {
      lg.removeEventListener("change", updateLg);
      md.removeEventListener("change", updateMd);
      largeMd.removeEventListener("change", updateLargeMd);
      portrait.removeEventListener("change", updatePortrait);
      landscape.removeEventListener("change", updateLandscape);
    };
  }, []);

  const bgY = isLg
    ? 400 + bgOffset
    : isLargeMd
    ? 400 + bgOffset
    : isLandscape && isLargeMd
    ? 400 + bgOffset
    : isMd
    ? 200 + bgOffset
    : bgOffset;

  return (
    <div className="appWrapper ">
      {/* 🔹 Фон фиксированный, но сдвигается через backgroundPositionY */}
      {/* Внешний фиксированный слой */}
      <div className="fixed inset-0 -z-10 flex justify-center">
        {/* Внутренний центрированный слой с шириной 80lvw */}
        <div
          className={`
           m-0 p-0
           w-[100lvw] lg:w-[80lvw]
           bg-cover 
           bg-mobile lg:bg-desktop
           transition-all duration-400 ease-out
          `}
          style={{
            backgroundPositionY: `-${bgY}px`,
          }}
        />
      </div>
      <div className="contentWrapper">
        <Header />
        <Navigation refs={refs} />
        <MobileNavigation refs={refs} />
        <Separator />

        <Main refs={refs} />
        {/* 🔹 футер с ref для наблюдения */}
        <div className="footerWrapper">
          <Footer setBgOffset={setBgOffset} />
        </div>
      </div>
    </div>
  );
};

export default App;
