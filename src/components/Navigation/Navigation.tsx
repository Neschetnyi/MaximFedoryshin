import { useEffect, useRef, useState } from "react";
import "./navigation.css";
import type { refsType } from "../../App";

const Navigation = ({ refs }: { refs: refsType }) => {
  const { aboutMe, services, teraphy, publications } = refs;
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

  const handleClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.TouchEvent<HTMLAnchorElement>,
    section: React.RefObject<HTMLDivElement | null> | null
  ) => {
    e.preventDefault();

    // глобальный сигнал “остановить все автоскроллы”
    window.dispatchEvent(new Event("stopAutoScroll"));

    //немного подождём (чтобы гарантированно остановились все циклы autoScroll)
    setTimeout(() => {
      section?.current?.scrollIntoView();
    }, 150);
  };

  // Перехватываем клики по ссылкам и плавно скроллим вручную

  return (
    <>
      {/* Маяк перед кнопкой */}
      <div ref={sentinelRef} className="w-px h-px"></div>
      <nav className={`navigation ${!isVisible && "navigationNotVisible"}`}>
        <ul className="text-2xl flex items-center justify-around w-full">
          <li className={`aboutMe ${!isVisible && "navigationNotVisible"}`}>
            <a
              href="#aboutMe"
              className="aHover"
              onClick={(e) => handleClick(e, aboutMe)}
            >
              Обо мне |
            </a>
          </li>
          <li className={`services ${!isVisible && "navigationNotVisible"}`}>
            <a
              href="#services"
              className="aHover"
              onClick={(e) => handleClick(e, services)}
            >
              Услуги |
            </a>
          </li>
          <li className={`aboutTFP ${!isVisible && "navigationNotVisible"}`}>
            <a
              href="#TFP"
              className="aHover"
              onClick={(e) => handleClick(e, teraphy)}
            >
              Что такое TFP |
            </a>
          </li>
          <li
            className={`publications ${!isVisible && "navigationNotVisible"}`}
          >
            <a
              href="#publications"
              className="aHover"
              onClick={(e) => handleClick(e, publications)}
            >
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
              <a
                href="https://t.me/MaximFedoryshin"
                className="signA"
                target="_blank"
                rel="noopener noreferrer"
              >
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
