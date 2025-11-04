import "./main.css";

import AboutMe from "./aboutMe/AboutMe";
import Services from "./services/Services";
import Vision from "./vision/Vision";
import Sertificates from "./aboutMe/sertificates/Sertificates";
import Separator from "./ separator/Separator";
import TFP from "./TFP/TFP";

const Main = () => {
  return (
    <main className="min-h-lvh">
      <Separator />
      <AboutMe />
      <Sertificates />
      <Services />
      <TFP />
      <Vision />
    </main>
  );
};

export default Main;
