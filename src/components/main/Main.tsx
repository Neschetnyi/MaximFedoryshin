import "./main.css";

import AboutMe from "./aboutMe/AboutMe";
import Services from "./services/Services";
import Vision from "./vision/Vision";
import Sertificates from "./aboutMe/sertificates/Sertificates";

import TFP from "./TFP/TFP";
import Publications from "../main/publications/Publications";
import { type refsType } from "../../App";

const Main = ({ refs }: { refs: refsType }) => {
  console.log("Main refs =", refs);
  const { aboutMe, services, teraphy, publications } = refs;
  return (
    <main className="min-h-lvh flex flex-col items-center">
      <AboutMe aboutMe={aboutMe} />
      <Sertificates />
      <Services services={services} />
      <TFP teraphy={teraphy} />
      <Publications publications={publications} />
      <Vision />
    </main>
  );
};
//
export default Main;
