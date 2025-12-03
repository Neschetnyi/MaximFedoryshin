import { certificates } from "./sertificatesData";
import ModalWindow from "../../../../shared/components/ModalWindow/ModalWindow";
import { useModal } from "../../../../shared/components/ModalWindow/useModal";
import Slider from "../../../../shared/components/Slider/Slider";

const Sertificates = () => {
  const { modalData, isVisible, openModal, closeModal } = useModal();

  const prefetchImage = (url: string) => {
    // если уже префетчено — не повторять
    if (document.querySelector(`link[rel="prefetch"][href="${url}"]`)) return;

    const link = document.createElement("link");
    link.rel = "prefetch";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
  };

  return (
    <section
      aria-labelledby="certificates-title"
      className="w-full pt-20 flex flex-col items-center"
    >
      <h2 id="certificates-title" className="sr-only">
        Сертификаты и дипломы психолога Максима Федорышина
      </h2>

      <Slider>
        {certificates.map((cert, index) => (
          <figure
            key={index}
            className="cursor-pointer shrink-0 w-[250px] h-[180px] overflow-hidden rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => {
              prefetchImage(cert.src.desktop);
              prefetchImage(cert.src.mobile);
              openModal(cert.src);
            }}
          >
            <img
              src={cert.src.preview}
              alt={cert.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </figure>
        ))}
      </Slider>

      <ModalWindow isVisible={isVisible} closeModal={closeModal}>
        {modalData && (
          <figure>
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet={modalData.desktop}
                type="image/webp"
              />
              <img
                src={modalData.mobile}
                alt="Сертификат"
                className="object-contain max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              />
            </picture>
          </figure>
        )}
      </ModalWindow>
    </section>
  );
};

export default Sertificates;
