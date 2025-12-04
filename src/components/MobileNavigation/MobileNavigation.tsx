import { useEffect, useRef, useState } from "react";
import "./mobileNavigation.css";
import { type refsType } from "../../App";

const MobileNavigation = ({ refs }: { refs: refsType }) => {
  const { aboutMe, services, teraphy, publications } = refs;

  const mobileSentinelRef = useRef<HTMLDivElement | null>(null);
  const scrollYref = useRef<number>(0);

  const [isVisibleMobile, setIsVisibleMobile] = useState(true); // закрыто = 42px
  const [isStuck, setIsStuck] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [noAnim, setNoAnim] = useState(false); // отключает transform-анимации

  // ---------------------------------------------------------
  //   ХЭНДЛЕР КЛИКА ПО <a>
  // ---------------------------------------------------------
  const handleLinkClickSign = () => {
    setIsVisibleMobile(true);
    setTimeout(() => {
      scrollYref.current = 0;
      setIsScroll(false);
    }, 150);
  };

  const handleLinkClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.TouchEvent<HTMLAnchorElement>,
    section: React.RefObject<HTMLDivElement | null> | null
  ) => {
    e.preventDefault();

    window.dispatchEvent(new Event("stopAutoScroll"));

    setIsVisibleMobile(true);
    setTimeout(() => {
      scrollYref.current = 0;
      setIsScroll(false);
    }, 150);

    setTimeout(() => {
      section?.current?.scrollIntoView();
    }, 150);
  };

  // ---- Sticky observer ----------------------------------------------------
  useEffect(() => {
    const sentinel = mobileSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // ---- Отключить transform-анимации при переходе sticky <-> absolute ------
  useEffect(() => {
    setNoAnim(true);
    const t = setTimeout(() => setNoAnim(false), 40);
    return () => clearTimeout(t);
  }, [isStuck]);

  // ---- Scroll lock --------------------------------------------------------
  useEffect(() => {
    document.body.style.overflow = isVisibleMobile ? "" : "hidden";
  }, [isVisibleMobile]);

  // ---- Toggle menu --------------------------------------------------------
  const toggleMenu = () => {
    if (!isVisibleMobile) {
      // закрываем
      document.body.classList.remove("menu-open");
      setIsVisibleMobile(true);
      setTimeout(() => {
        scrollYref.current = 0;
        setIsScroll(false);
      }, 350);
      return;
    }

    // открываем
    if (window.scrollY > 0) {
      document.body.classList.add("menu-open");
      setIsScroll(true);
      scrollYref.current = window.scrollY;
      setTimeout(() => setIsVisibleMobile(false), 350);
    } else {
      document.body.classList.add("menu-open");
      setIsVisibleMobile(false);
    }
  };

  // ---- Navigation classes -------------------------------------------------

  const navStyle =
    isScroll && !isStuck
      ? { transform: `translateY(calc(${scrollYref.current}px)) ` }
      : {};

  return (
    <>
      <div ref={mobileSentinelRef} className="w-5px h-5px"></div>

      <nav
        style={navStyle}
        className={`lg:hidden 
          w-lvw z-20 bg-white/10 backdrop-blur-2xl 
          flex flex-col items-center will-change-transform
          
          ${
            noAnim
              ? "no-transform-transition"
              : "transition-all duration-500 ease-out"
          }
          ${
            !isStuck
              ? isVisibleMobile
                ? "absolute top-[calc(100dvh-42px)] h-[42px]"
                : "absolute top-[calc(100dvh-42px)] h-dvh -translate-y-[calc(100dvh-42px)]"
              : isVisibleMobile
              ? "sticky top-0 h-[42px]"
              : "sticky top-0 h-dvh"
          }
        `}
      >
        {/* Верхняя кнопка до sticky */}
        <button
          onClick={toggleMenu}
          className={`mobileButton1
            w-full h-[42px] flex justify-center items-center
            bg-white/30 backdrop-blur-md
            font-['Miamanueva'] text-5xl text-green-50 text-shadow-2xs text-shadow-black
            ${isStuck ? "hidden" : ""}
          `}
        >
          ≡
        </button>

        {/* Контент */}
        <div
          className={`flex flex-col justify-end w-full transition-all duration-300 ease-in-out overflow-hidden ${
            !isVisibleMobile ? "   h-dvh opacity-100" : "h-px opacity-0"
          }`}
        >
          <ul
            className={` text-xl landscape:text-xs font-bold font-engry text-green-50 flex flex-col text-center justify-around w-lvw h-full transition-all duration-300 top-0 `}
          >
            <li className="listEl  block">
              <a
                href="#aboutMe"
                onClick={(e) => handleLinkClick(e, aboutMe)}
                className="aMobileMenu w-full"
              >
                Обо мне |
              </a>
            </li>

            <li className="listEl  block">
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, services)}
                className="aMobileMenu w-full"
              >
                Услуги |
              </a>
            </li>

            <li className="listEl  block">
              <a
                href="#TFP"
                onClick={(e) => handleLinkClick(e, teraphy)}
                className="aMobileMenu w-full"
              >
                Что такое TFP |
              </a>
            </li>

            <li className="listEl  block">
              <a
                href="#publications"
                onClick={(e) => handleLinkClick(e, publications)}
                className="aMobileMenu w-full"
              >
                Статьи |
              </a>
            </li>

            <li className="listEl  block">
              <a
                href="https://t.me/MaximFedoryshin"
                target="_blank"
                rel="noopener noreferrer"
                className="aMobileMenu w-full"
                onClick={handleLinkClickSign}
              >
                Записаться <br />
                на прием |
              </a>
            </li>
          </ul>
        </div>

        {/* Нижняя кнопка когда sticky */}
        <button
          onClick={toggleMenu}
          className={` mobileButton2
            w-full h-[42px] flex justify-center items-center mt-auto
            bg-white/30 backdrop-blur-md
            font-['Miamanueva'] text-5xl text-green-50 text-shadow-2xs text-shadow-black
            ${isStuck ? "" : "hidden"}
          `}
        >
          ≡
        </button>
      </nav>
      <div className={`lg:h-px h-[42px] ${isStuck && "hidden"}`}></div>
    </>
  );
};

export default MobileNavigation;

//  bg-gray-300/95 ${/* g-gray-300/95 */}
