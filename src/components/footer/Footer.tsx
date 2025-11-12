import { useEffect, useRef } from "react";

import telephonelogo from "../../assets/icons/phone-svgrepo-com.svg";
import telegramlogo from "../../assets/icons/telegram-svgrepo-com.svg";
import whatsapplogo from "../../assets/icons/whatsapp-svgrepo-com.svg";
import vklogo from "../../assets/icons/VK_Compact_Logo_(2021-present).svg";
import maxlogo from "../../assets/icons/max-messenger-sign-logo.svg"; // если есть свой логотип

const Footer = ({ setBgOffset }: { setBgOffset: (x: number) => void }) => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        const shift = ratio * footer.offsetHeight;
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
    <footer
      ref={footerRef}
      className="w-full text-amber-50 flex justify-center bg-[rgba(53,57,43,1)]"
    >
      <section aria-label="Контактная информация" className="py-5 px-5">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-['Engry',serif] font-bold text-green-50 mb-3">
            Контакты
          </h3>

          <address className="not-italic flex justify-around gap-4">
            {/* Телефон */}
            <a
              href="tel:+79097312044"
              aria-label="Позвонить по номеру +7 909 731-20-44"
              className="transition-transform duration-300 hover:scale-110 origin-center"
            >
              <img src={telephonelogo} alt="Телефон" className="w-16" />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в Telegram"
              className="transition-transform duration-300 hover:scale-110 origin-center"
            >
              <img src={telegramlogo} alt="Telegram" className="w-16" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/79097312044"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в WhatsApp"
              className="transition-transform duration-300 hover:scale-110 origin-center"
            >
              <img src={whatsapplogo} alt="WhatsApp" className="w-16" />
            </a>

            {/* VK */}
            <a
              href="https://vk.com/id5517874"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Перейти в VK"
              className="transition-transform duration-300 hover:scale-110 origin-center"
            >
              <img src={vklogo} alt="VK" className="w-16" />
            </a>

            {/* Max (ссылка на сайт или портфолио) */}
            <a
              href="https://max.ru/id5517874"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Перейти на сайт Maх"
              className="transition-transform duration-300 hover:scale-110 origin-center"
            >
              <img src={maxlogo} alt="Max" className="w-16" />
            </a>
          </address>

          <p className="text-sm mt-3 text-center">
            * На данный момент работаю только в онлайн-формате
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
