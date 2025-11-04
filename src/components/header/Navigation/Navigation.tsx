import { useEffect, useRef } from "react";
import "./navigation.css";

type NavigationProps = {
  isVisible: boolean;
  setIsVisible: (x: boolean) => void;
  setIsVisibleHeader: (x: boolean) => void;
  firstTimeAnimation: React.RefObject<boolean | null>;
};

const Navigation = ({
  isVisible,
  setIsVisible,
  setIsVisibleHeader,
}: NavigationProps) => {
  const signRef = useRef<HTMLLIElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const sign = signRef.current;

    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // если entry.isIntersecting === false → элемент "прилип"
        if (!entry.isIntersecting) {
          sign!.classList.add("stuck");
          setIsVisibleHeader(false);
          console.log("вышел из зоны пересечения");
        } else {
          sign!.classList.remove("stuck");
          setIsVisibleHeader(true);
          console.log("в зоне пересечения");
        }
      },
      {
        root: null, // viewport
        threshold: 0,
      }
    );

    observer.observe(sentinel!);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Маяк перед кнопкой */}
      <div ref={sentinelRef} className="w-px h-px"></div>
      <nav className={`navigation ${!isVisible && "navigationNotVisible"}`}>
        <ul className="text-2xl flex items-center justify-around w-full">
          <li className={`aboutMe ${!isVisible && "navigationNotVisible"}`}>
            <a
              href="#aboutMe"
              className="hover:text-shadow-lg hover:text-shadow-emerald-900 hover:text-green-50 transition-all ease-out duration-200"
            >
              Обо мне |
            </a>
          </li>
          <li className={`services ${!isVisible && "navigationNotVisible"}`}>
            <a
              href="#services"
              className="hover:text-shadow-lg hover:text-shadow-emerald-900 hover:text-green-50 transition-all ease-out duration-200"
            >
              Услуги |
            </a>
          </li>
          <li className={`aboutTFP ${!isVisible && "navigationNotVisible"}`}>
            <a
              href="#TFP"
              className="hover:text-shadow-lg hover:text-shadow-emerald-900 hover:text-green-50 transition-all ease-out duration-200"
            >
              Что такое TFP |
            </a>
          </li>
          <li
            className={`publications ${!isVisible && "navigationNotVisible"}`}
          >
            Статьи |
          </li>

          <li ref={signRef} className={`signToServices `}>
            <div
              className={`signToServicesSpan ${
                !isVisible && "navigationNotVisible"
              }`}
            >
              <a
                href="https://t.me/MaximFedoryshin"
                className="hover:text-shadow-lg hover:text-shadow-emerald-900 hover:text-green-300 transition-all ease-out duration-200"
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
