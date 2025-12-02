/*
цвета зеленый светлые тона (черный красный) пастельные тона
шрифты стилистика библиотеки - фишинебельного кабинета
*/

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
// import bgImage from "./assets/clipart/e290b7edb6ff11f0b0d3567ecdaf0a75_1.jpeg";

import { useRef, useState } from "react";
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

  return (
    <div className="appWrapper">
      {/* 🔹 Фон фиксированный, но сдвигается через backgroundPositionY */}
      <div
        className="contentWrapper"
        style={{
          backgroundPositionY: `-${bgOffset}px`,
        }}
      >
        <Header />
        <Navigation refs={refs} />
        <MobileNavigation refs={refs} />
        <Separator />
        <Main refs={refs} />
        {/* 🔹 футер с ref для наблюдения */}
        <div className="footerWrapper">
          <Separator />
          <Footer setBgOffset={setBgOffset} />
        </div>
      </div>
    </div>
  );
};

export default App;
