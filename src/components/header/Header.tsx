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
    // задержка для плавного старта анимации
    setTimeout(() => {
      setIsVisible(true);

      console.log(animationGoing, "isAnimating before animation");
      setTimeout(() => {
        animationGoing.current = false;
        firstTimeAnimation.current = true;
        console.log(animationGoing, "isAnimating after animation");
      }, 3000);
    }, 100);
    //event: WheelEvent | TouchEvent
    const handleScrollAttempt = () => {
      if (animationGoing.current) {
        console.log("handleScrollAttempt");

        // если идёт анимация — запрещаем скролл
        // event.preventDefault();
        // event.stopPropagation();
      }
      if (firstTimeAnimation.current) {
        setIsVisible(false);
        // event.preventDefault();
        // event.stopPropagation();
        console.log("handleScrollAttempt after firstTimeAnimation");
        setTimeout(() => {
          firstTimeAnimation.current = false;
        }, 500);
      }
    };

    window.addEventListener("wheel", handleScrollAttempt, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScrollAttempt);
    };
  }, [animationGoing]);

  return (
    <header className="header">
      <div className="headerWrapper ">
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
