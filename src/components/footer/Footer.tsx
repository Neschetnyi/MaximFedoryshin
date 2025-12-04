import { useEffect, useRef } from "react";

import "./footer.css";
import Separator from "../main/separator/Separator";

const Footer = ({ setBgOffset }: { setBgOffset: (x: number) => void }) => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const figureRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        const shift = ratio * 200;
        setBgOffset(shift);
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [setBgOffset]);

  return (
    <footer className="footer">
      <section aria-label="Контактная информация" className="footerSection">
        <figure className="figure">
          <picture>
            <source
              media="(min-width:1024px)"
              srcSet="./maxFoto/maxFotoFooterDesktop.webp"
              type="image/webp"
            />
            <img
              ref={figureRef}
              src="./maxFoto/maxFotoFooterMobile.webp"
              alt="Психолог"
              className="footerImg"
              loading="lazy"
            />
          </picture>
        </figure>
        <Separator />
        <div className="sectionInnerWrapper">
          <h3 className="footerHeadding">Контакты</h3>

          <address className="footerAddress">
            {/* Телефон */}
            <a
              href="tel:+79097312044"
              aria-label="Позвонить по номеру +7 909 731-20-44"
              className="footerButtonHover"
            >
              <img
                src="./icons/phone-svgrepo-com.svg"
                alt="Телефон"
                className="footerButtonImg"
                loading="lazy"
              />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в Telegram"
              className="footerButtonHover"
            >
              <img
                src="./icons/telegram-svgrepo-com.svg"
                alt="Telegram"
                className="footerButtonImg"
                loading="lazy"
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/79097312044"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в WhatsApp"
              className="footerButtonHover"
            >
              <img
                src="./icons/whatsapp-svgrepo-com.svg"
                alt="WhatsApp"
                className="footerButtonImg"
                loading="lazy"
              />
            </a>

            {/* VK */}
            <a
              href="https://vk.com/id5517874"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Перейти в VK"
              className="footerButtonHover"
            >
              <img
                src="./icons/VK_Compact_Logo_(2021-present).svg"
                alt="VK"
                className="footerButtonImg"
                loading="lazy"
              />
            </a>

            {/* Max (ссылка на сайт или портфолио) */}
            <a
              href="https://max.ru/id5517874"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Перейти на сайт Maх"
              className="footerButtonHover"
            >
              <img
                src="./icons/max-messenger-sign-logo.webp"
                alt="Max"
                className="footerButtonImg"
                loading="lazy"
              />
            </a>
          </address>

          <p className="workStyle" ref={footerRef}>
            * На данный момент работаю только в онлайн-формате
          </p>
        </div>
      </section>
      <div className="w-px h-px"></div>
    </footer>
  );
};

export default Footer;
