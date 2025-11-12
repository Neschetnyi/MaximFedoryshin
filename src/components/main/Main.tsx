import "./main.css";

import AboutMe from "./aboutMe/AboutMe";
import Services from "./services/Services";
import Vision from "./vision/Vision";
import Sertificates from "./aboutMe/sertificates/Sertificates";

import TFP from "./TFP/TFP";
import Publications from "../main/publications/Publications";

const Main = () => {
  return (
    <main className="min-h-lvh flex flex-col items-center">
      <AboutMe />
      <Sertificates />
      <Services />
      <TFP />
      <Publications />
      <Vision />
    </main>
  );
};
//
export default Main;
