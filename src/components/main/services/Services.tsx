import { useIntersectionAnimation } from "../../../shared/hooks/useIntersectionAnimation";

const Services = () => {
  const labelRef = useIntersectionAnimation({ threshold: 0.1 });
  const elderRef = useIntersectionAnimation<HTMLDivElement>({ threshold: 0.1 });
  const yangRef = useIntersectionAnimation<HTMLDivElement>({ threshold: 0.1 });
  const researchRef = useIntersectionAnimation<HTMLDivElement>({
    threshold: 0.1,
  });
  const diagnosticsRef = useIntersectionAnimation<HTMLDivElement>({
    threshold: 0.1,
  });
  const PSRef = useIntersectionAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={labelRef.ref}
      id="services"
      className=" w-auto  p-30  m-30  border-b-solid border-b-2 border-b-red-100/0 overflow-hidden"
      aria-label="services"
    >
      <div
        className={`text-2xl font-['Engry',serif] font-bold text-green-50 h-1/8 pb-20 flex justify-center 
          transition-all duration-500
          ${!labelRef.isVisible && "opacity-0 translate-y-10"}`}
      >
        <h2>Форматы психотерапевтической работы</h2>
      </div>

      <div className="flex flex-col justify-around text-lg h-7/8">
        <div className="w-full h-0" ref={elderRef.ref}></div>
        <div
          className={`rounded-2xl p-5 h-full mb-2 transition-all  duration-1000 ${
            !elderRef.isVisible && "translate-x-[100vw] opacity-0"
          }`}
          style={{ backgroundColor: "rgba(194, 194, 168, 0.9)" }}
        >
          <div>
            <strong className="text-xl">
              Психоаналитическая терапия взрослых
            </strong>
            <br />
            <em>1-2 раза в неделю</em>
            <br />
            <br />
            <p>
              Основной метод, которым я работаю, это терпаия фокусированная на
              переносе. Современный метод психоанализа, позволяющий решать
              широкий спектр психологических сложностей, начиная от проблем
              невротического уровня и заканчивая тяжелыми личностными
              расстройствами.
            </p>
          </div>
        </div>

        <div className="w-full h-0" ref={yangRef.ref}></div>
        <div
          className={`rounded-2xl p-5 h-full mb-2 transition-all duration-1000 ${
            !yangRef.isVisible && "-translate-x-[100vw] opacity-0"
          }`}
          style={{ backgroundColor: "rgba(194, 194, 168, 0.9)" }}
        >
          <div>
            <strong className="text-xl">
              Психоаналитическая терапия подростков
            </strong>
            <br />

            <em>с 16лет 1-2 раза в неделю</em>
            <br />
            <br />
            <p>
              Работаю в формате психоаналитически терапии, опираясь на концепты
              ТФП-терапии и классические идеи детского психоанализа.
            </p>
          </div>
        </div>

        <div className="w-full h-0" ref={researchRef.ref}></div>
        <div
          className={`rounded-2xl p-5 h-full mb-2 transition-all duration-1500 ${
            !researchRef.isVisible && "translate-x-[100vw] opacity-0"
          }`}
          style={{ backgroundColor: "rgba(194, 194, 168, 0.9)" }}
        >
          <div>
            <strong className="text-xl">
              Психоаналитическое иссследование структуры личности
            </strong>
            <br />
            <em>Занимает 6 встреч</em>
            <br /> <br />
            <p>
              Услуга может быть полезна для людей, которые чувствуют,что живут
              не так как хочется. А как хочется- непонятно. Помогает найти
              ответы на вопросы: Почему мне не нравится, как я живу? Какие
              смыслы и цели в моей жизни? Что мне нужно для счастья? Почему не
              складываются личные отношения? Почему меня ничего не радует?
            </p>
          </div>
        </div>

        <div className="w-full h-0" ref={diagnosticsRef.ref}></div>
        <div
          className={`rounded-2xl p-5 h-full mb-2 transition-all duration-2000 ${
            !diagnosticsRef.isVisible && "-translate-x-[100vw] opacity-0"
          }`}
          style={{ backgroundColor: "rgba(194, 194, 168, 0.9)" }}
        >
          <div>
            <strong className="text-xl">Дифференциальная диагностика</strong>
            <br />
            <em>Занимает 5-6 встреч</em>
            <br /> <br />
            <p>
              Для категории пациентов,имеющих в анамнезе полиморфные симтомы,
              дезорганизацию жизни, неспособность функционироватьв социуме и
              проблемы в личных отношениях. Также для пациентов имеющих
              коморбидные расстройства {"("}наличие 2 и более заболеваний{")"}{" "}
              или неуточненные диагнозы.
            </p>
          </div>
        </div>

        <div className="w-full h-0" ref={PSRef.ref}></div>
        <div
          aria-label="sessions format"
          className={`pt-2   pl-15  text-green-50 transition-all duration-1000 ${
            !PSRef.isVisible && "translate-x-[100vw] opacity-0"
          }`}
        >
          * На данный момент работаю только он-лайн, длительность 45 мин,
          сеттинг 1-2 раза в неделю
          <br />
          <br />
        </div>
      </div>
    </section>
  );
};

export default Services;
