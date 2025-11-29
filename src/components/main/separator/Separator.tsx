import style from "./separator.module.css";

import bgImage from "../../../assets/clipart/c936e4edb70011f0ac1eba491b3b44de_1.jpeg";

const Separator = () => {
  return (
    <div
      className={style.separator}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>
  );
};

export default Separator;
