import bgImage from "../../../assets/clipart/c936e4edb70011f0ac1eba491b3b44de_1.jpeg";

const Separator = () => {
  return (
    <div
      className="h-20 bg-cover bg-center border-b-8 border-t-8 border-yellow-950/50"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    ></div>
  );
};

export default Separator;
