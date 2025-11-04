const Footer = () => {
  return (
    <footer
      className="w-full text-amber-50 flex justify-center"
      style={{ backgroundColor: "rgba(53, 57, 43, 1)" }}
    >
      <section aria-label="sessions format" className="pt-5  pb-5 pr-5">
        <strong>Формат работы</strong>
        Он-лайн сессии <br />
        Длительность 45 мин <br />
        Работаю со взрослыми и подростками
        <br />
        (начиная с 16 лет) <br />
        Сеттинг 1-2 раза в неделю
      </section>
      <section aria-label="contacts" className="pt-5  pb-5 pr-5">
        <strong>Контакты</strong>
        <br />
        На данный момент работаю только в он-лайн формате
        <br />
        Телефон 8-909-731-20-44 <br />
        VK https://vk.com/id5517874 <br />
        Telegram WhatsApp Maх <br />
      </section>
    </footer>
  );
};

export default Footer;
