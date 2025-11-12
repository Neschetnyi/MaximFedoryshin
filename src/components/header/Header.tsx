//сверху шапкой "Это личное, никакого бизнеса"

import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // задержка для плавного старта анимации
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <header className="header">
      <div className="headerWrapper ">
        <div className={`cabinet ${!isVisible && "cabinetNotVisible"}`}>
          Это личное, никакого бизнеса
        </div>
        <div
          className={`nameBorderWrapper ${
            !isVisible && " nameBorderWrapperNotVisible"
          }`}
        >
          <span className={`name ${!isVisible && "nameNotVisible"}`}>
            Максим
          </span>
          <span className={`surname ${!isVisible && "surnameNotVisible"}`}>
            Федорышин
          </span>
        </div>
        <div className={`profession ${!isVisible && "professionNotVisible"}`}>
          <strong className="text-2xl">
            <ul>
              <li> Врач-психиатр </li>
              <li> Психотерапевт</li>
              <li> Психолог-психоаналитик</li>
            </ul>
          </strong>{" "}
        </div>
      </div>
    </header>
  );
};

export default Header;
