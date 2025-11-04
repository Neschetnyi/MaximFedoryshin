import { useEffect } from "react";
import "./header.css";

type HeaderProps = {
  animationGoing: React.RefObject<boolean | null>;
  firstTimeAnimation: React.RefObject<boolean | null>;
  isVisible: boolean;
  setIsVisible: (x: boolean) => void;
};

const Header = ({
  animationGoing,
  firstTimeAnimation,
  setIsVisible,
  isVisible,
}: HeaderProps) => {
  useEffect(() => {
    // плавная стартовая анимация
    setTimeout(() => {
      setIsVisible(true);

      setTimeout(() => {
        animationGoing.current = false;
        firstTimeAnimation.current = true;
      }, 4000);
    }, 200);

    const handleScrollAttempt = (event: WheelEvent | TouchEvent) => {
      // читаем значения ref прямо в момент события!
      if (animationGoing.current) {
        event.preventDefault();
        event.stopPropagation();
        console.log("⛔ Блокируем скролл во время анимации");
        return;
      }

      if (firstTimeAnimation.current) {
        event.preventDefault();
        event.stopPropagation();
        setIsVisible(false);
        console.log("🎬 Запускаем анимацию скрытия Header");
        firstTimeAnimation.current = false;

        // после завершения анимации можно позволить скролл
        setTimeout(() => {
          animationGoing.current = false;
        }, 2000);
      }
    };

    // обязательно { passive: false } чтобы работал preventDefault
    window.addEventListener("wheel", handleScrollAttempt, { passive: false });
    window.addEventListener("touchmove", handleScrollAttempt, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleScrollAttempt);
      window.removeEventListener("touchmove", handleScrollAttempt);
    };
  }, []); // эффект всё ещё вызывается один раз
  // но работает стабильно, потому что читаем ref динамически

  return (
    <header className="header">
      <div className="headerWrapper">
        <div className={`cabinet ${!isVisible && "cabinetNotVisible"}`}>
          кабинет
        </div>
        <div
          className={`nameBorderWrapper ${
            !isVisible && " nameBorderWrapperNotVisible"
          }`}
        >
          <span className={`name ${!isVisible && "nameNotVisible"}`}>
            Максима
          </span>
          <span className={`surname ${!isVisible && "surnameNotVisible"}`}>
            Федорышина
          </span>
        </div>
        <div className={`profession ${!isVisible && "professionNotVisible"}`}>
          дипломированного психолога - психотерапевта
        </div>
      </div>
    </header>
  );
};

export default Header;
