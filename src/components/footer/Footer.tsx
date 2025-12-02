import { useEffect, useRef } from "react";

import "./footer.css";

import telephonelogo from "../../assets/icons/phone-svgrepo-com.svg";
import telegramlogo from "../../assets/icons/telegram-svgrepo-com.svg";
import whatsapplogo from "../../assets/icons/whatsapp-svgrepo-com.svg";
import vklogo from "../../assets/icons/VK_Compact_Logo_(2021-present).svg";
import maxlogo from "../../assets/icons/max-messenger-sign-logo.svg";
import openHands from "../../assets/maxFoto/openHands.png";

const Footer = ({ setBgOffset }: { setBgOffset: (x: number) => void }) => {
  const footerRef = useRef<HTMLDivElement | null>(null);

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
    <footer ref={footerRef} className="footer">
      <section aria-label="Контактная информация" className="footerSection">
        <div className="sectionInnerWrapper">
          <figure className="figure">
            <img src={openHands} className="footerImg" alt="обьятья" />
          </figure>
          <h3 className="footerHeadding">Контакты</h3>

          <address className="footerAddress">
            {/* Телефон */}
            <a
              href="tel:+79097312044"
              aria-label="Позвонить по номеру +7 909 731-20-44"
              className="footerButtonHover"
            >
              <img
                src={telephonelogo}
                alt="Телефон"
                className="footerButtonImg"
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
                src={telegramlogo}
                alt="Telegram"
                className="footerButtonImg"
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
                src={whatsapplogo}
                alt="WhatsApp"
                className="footerButtonImg"
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
              <img src={vklogo} alt="VK" className="footerButtonImg" />
            </a>

            {/* Max (ссылка на сайт или портфолио) */}
            <a
              href="https://max.ru/id5517874"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Перейти на сайт Maх"
              className="footerButtonHover"
            >
              <img src={maxlogo} alt="Max" className="footerButtonImg" />
            </a>
          </address>

          <p className="workStyle">
            * На данный момент работаю только в онлайн-формате
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
