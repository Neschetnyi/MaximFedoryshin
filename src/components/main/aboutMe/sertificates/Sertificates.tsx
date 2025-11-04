import proreEducation from "../../../../assets/sertificates/vuz_48335_f7f36c.jpg";
import education from "../../../../assets/sertificates/vuz_48336_5b2a56.jpg";
import yungianEducation from "../../../../assets/sertificates/vuz_48338_80027a.jpg";
import nlpEducation from "../../../../assets/sertificates/vuz_sert_89583.jpg";

const Sertificates = () => {
  return (
    <section className="w-full  pt-20 flex justify-center  h-[30vh]">
      <figure className="flex justify-center ">
        <img
          className="h-full   mr-2 ml-2 rounded-2xl border-4 border-yellow-950/30"
          src={proreEducation}
          alt=""
        />
        <img
          className="h-full  mr-2 ml-2 rounded-2xl border-4 border-yellow-950/30"
          src={education}
          alt=""
        />
        <img
          className="h-full   mr-2 ml-2 rounded-2xl border-4 border-yellow-950/30"
          src={yungianEducation}
          alt=""
        />
        <img
          className="h-full  mr-2 ml-2 rounded-2xl border-4 border-yellow-950/30"
          src={nlpEducation}
          alt=""
        />
      </figure>
    </section>
  );
};

export default Sertificates;
