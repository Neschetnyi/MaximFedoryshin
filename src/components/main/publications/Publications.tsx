import { publicationsData } from "./publicationsData";

import ModalWindow from "../../../shared/components/ModalWindow/ModalWindow";
import { useModal } from "../../../shared/components/ModalWindow/useModal";
import Slider from "../../../shared/components/Slider/Slider";
import { type publicationType } from "./publicationsTypes";

const Publications = ({
  publications,
}: {
  publications: React.RefObject<HTMLDivElement | null>;
}) => {
  const { modalData, isVisible, openModal, closeModal } =
    useModal<publicationType>();

  return (
    <section
      id="publications"
      ref={publications}
      aria-labelledby="publications"
      className="w-full pt-20 flex flex-col items-center mb-10 h-[80dvh]"
    >
      <h2
        id="certificates-title"
        className="text-2xl font-['Engry',serif] font-bold text-green-50 h-1/8 pb-10 flex justify-center"
      >
        Чуть-чуть чтения
      </h2>

      <Slider>
        {publicationsData.map((publication) => (
          <div
            className="cursor-pointer bg-black/15 backdrop-blur-lg rounded-lg w-[15vw] min-w-[150px] h-[30vh] shrink-0 transition-transform duration-300 ease-in-out hover:scale-105"
            key={publication.id}
            onClick={() => openModal(publication)}
          >
            <figure className="mb-2 cursor-pointer shrink-0 w-full  h-[15vh] overflow-hidden rounded-xl ">
              <img
                src={publication.imgSrc}
                alt={publication.title}
                className=" object-cover w-full h-full "
              />
            </figure>

            <div className="h-[12vh] overflow-hidden mr-2 ml-2 mb-2">
              <h3 className="lg:text-sm text-xs font-['Engry',serif] text-green-50">
                {publication.title}
              </h3>
              <p className="text-xs lg:text-sm">{publication.content}</p>
            </div>
          </div>
        ))}
      </Slider>

      <ModalWindow isVisible={isVisible} closeModal={closeModal}>
        {modalData && (
          <div className="flex justify-center ">
            <div className="w-[60vw] max-h-[90vh]">
              <img
                src={modalData.imgSrc}
                alt={modalData.title}
                className="object-contain max-w-full max-h-[40vh] rounded-lg shadow-2xl mb-4"
              />
              <h3 className="text-lg font-['Engry',serif] mb-4 text-green-50">
                {modalData.title}
              </h3>
              <p className="text-green-50 h-[30vh] overflow-y-scroll">
                <pre className="whitespace-pre-wrap text-green-50 font-['Old_Standard_TT',serif]">
                  {modalData.content}
                </pre>
              </p>
            </div>
          </div>
        )}
      </ModalWindow>
    </section>
  );
};

export default Publications;
