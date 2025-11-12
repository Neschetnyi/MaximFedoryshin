/*
цвета зеленый светлые тона (черный красный) пастельные тона
шрифты стилистика библиотеки - фишинебельного кабинета
*/

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navigation from "./components/Navigation/Navigation";
import bgImage from "./assets/clipart/e290b7edb6ff11f0b0d3567ecdaf0a75_1.jpeg";

import { useState } from "react";
import Separator from "./components/main/ separator/Separator";

const App = () => {
  // 🟢 добавлено: эффект сдвига фона при появлении футера
  const [bgOffset, setBgOffset] = useState(0);

  return (
    <div className="w-full flex flex-col justify-center items-center relative border-0 m-0 p-0">
      {/* 🔹 Фон фиксированный, но сдвигается через backgroundPositionY */}
      <div
        className="flex flex-col  w-10/12 border-0 m-0 p-0 bg-fixed bg-cover bg-center  transition-all duration-400 ease-out"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPositionY: `-${bgOffset}px`,
        }}
      >
        <Header />
        <Navigation />
        <Separator />
        <Main />
      </div>

      {/* 🔹 футер с ref для наблюдения */}
      <div className="w-10/12">
        <Separator />
        <Footer setBgOffset={setBgOffset} />
      </div>
    </div>
  );
};

export default App;
