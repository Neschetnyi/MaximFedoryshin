import { useEffect, useRef, useState } from "react";
import "./navigation.css";

const Navigation = () => {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [signToChangeStuck, setSignToChangeStuck] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setSignToChangeStuck(true);
        } else {
          setSignToChangeStuck(false);
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(sentinel!);
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.tagName !== "A") return;

    const href = target.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const id = href.slice(1);
    const section = document.getElementById(id);
    if (!section) return;

    e.preventDefault();

    // глобальный сигнал “остановить все автоскроллы”
    window.dispatchEvent(new Event("stopAutoScroll"));

    //немного подождём (чтобы гарантированно остановились все циклы autoScroll)
    setTimeout(() => {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  // Перехватываем клики по ссылкам и плавно скроллим вручную
  useEffect(() => {
    const nav = document.querySelector("nav");
    if (!nav) return;

    nav.addEventListener("click", handleClick);
    return () => nav.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Маяк перед кнопкой */}
      <div ref={sentinelRef} className="w-px h-px"></div>
      <nav className={`navigation ${!isVisible && "navigationNotVisible"}`}>
        <ul className="text-2xl flex items-center justify-around w-full">
          <li className={`aboutMe ${!isVisible && "navigationNotVisible"}`}>
            <a href="#aboutMe" className="aHover">
              Обо мне |
            </a>
          </li>
          <li className={`services ${!isVisible && "navigationNotVisible"}`}>
            <a href="#services" className="aHover">
              Услуги |
            </a>
          </li>
          <li className={`aboutTFP ${!isVisible && "navigationNotVisible"}`}>
            <a href="#TFP" className="aHover">
              Что такое TFP |
            </a>
          </li>
          <li
            className={`publications ${!isVisible && "navigationNotVisible"}`}
          >
            <a href="#publications" className="aHover">
              Статьи |
            </a>
          </li>

          <li
            className={`signToServices ${
              signToChangeStuck ? "stuck signHover" : "stuckHover"
            }`}
          >
            <div
              className={`signToServicesSpan ${
                !isVisible && "navigationNotVisible"
              }
              `}
            >
              <a href="https://t.me/MaximFedoryshin" className="signA">
                Записаться на прием
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
