import photo from "../../../assets/photo_2025-10-28_14-14-40.jpg";
import "./aboutMe.css";
import { useIntersectionAnimation } from "../../../shared/hooks/useIntersectionAnimation";
import { useTextAnimation } from "../../../shared/hooks/useTextAnimation";

const AboutMe = ({
  aboutMe,
}: {
  aboutMe: React.RefObject<HTMLDivElement | null>;
}) => {
  const myName = useIntersectionAnimation<HTMLDivElement>({ threshold: 0.5 });
  const imgMyName = useIntersectionAnimation<HTMLDivElement>({
    threshold: 0.5,
  });
  const textField = useIntersectionAnimation<HTMLDivElement>({
    threshold: 0.1,
  });

  useTextAnimation({
    classNameParam: "notVisibleText",
    options: { threshold: 0.1 },
  });

  return (
    <section ref={aboutMe} id="aboutMe" aria-label="about me">
      <div
        ref={textField.ref}
        className=" flex  flex-wrap flex-col max-lg:items-center lg:flex-row overflow-hidden backdrop-blur-2xl bg-black/10 min-h-dvh border-b-8 border-b-yellow-950/50"
      >
        <figure
          className={`MaximFoto  w-1/2 lg:w-1/3 lg:pt-15 p-5 flex flex-col  justify-baseline items-center overflow-hidden  `}
        >
          <div ref={myName.ref} className=" w-full h-px"></div>
          <figcaption>
            <strong
              className={`xl:text-2xl xllg:text-3xl 2xl:text-4xl lg:text-2xl md:text-4xl text-2xl inline-block font-['Engry',serif] font-bold text-green-50 pb-5 transitionAll duration-1000 ${
                !myName.isVisible && "-translate-x-[50vw] opacity-0 "
              }`}
            >
              {" "}
              Максим Федорышин
            </strong>
          </figcaption>
          <div ref={imgMyName.ref} className="w-px h-px"></div>
          <img
            src={photo}
            alt="Maxim Fedoryshin"
            className={`rounded-2xl  transitionAll  duration-1000 ${
              !imgMyName.isVisible && "-translate-x-[50vw] opacity-0 "
            }`}
          />
        </figure>

        <div
          className={`w-full lg:w-2/3 p-5 text-green-50 transition-all duration-500 ${
            !textField.isVisible && "translate-x-[50vw] opacity-0 "
          }`}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            boxShadow: `
            inset 0 4px 100px rgba(0, 0, 0, 0.4),
            inset 0 -4px 100px rgba(0, 0, 0, 0.4),
            inset 4px 0 100px rgba(0, 0, 0, 0.4),
            inset -4px 0 100px rgba(0, 0, 0, 0.4)
            `,
          }}
        >
          <div className="flex h-full flex-col justify-between">
            <div className="pt-10">
              <strong className="text-2xl">
                <ul>
                  <li className={`transition-all duration-1000 notVisibleText`}>
                    Врач-психиатр
                  </li>
                  <li className={`transition-all duration-1000 notVisibleText`}>
                    Психотерапевт
                  </li>
                  <li className={`transition-all duration-1000 notVisibleText`}>
                    Психолог-психоаналитик
                  </li>
                  <li className={`transition-all duration-1000 notVisibleText`}>
                    Член Русскоязычного Общества Терапии, фокусированной на
                    переносе *
                  </li>
                  <li className={`transition-all duration-1000 notVisibleText`}>
                    Кандидат в ТФП-терапевты ISTFP **
                  </li>
                </ul>
              </strong>

              <p className={`transition-all duration-1000 notVisibleText`}>
                * TFP Transference Focused Psychotherapy
                <br />
                ** Международное сообщество терапии, фокусированной на переносе{" "}
                <br />
              </p>

              <br />
              <p>
                <span className="text-xl transition-all duration-1000 notVisibleText">
                  {" "}
                  У меня классическое медицинское образование. <br />
                </span>
                <span className="text-xl transition-all duration-1000 notVisibleText">
                  {" "}
                  По сей день я продолжаю свое профессиональное обучение в сфере
                  психоанализа. <br />
                </span>
                <span className="text-xl transition-all duration-1000 notVisibleText">
                  {" "}
                  Постоянно состою в индивидуальных и групповых супервизиях.{" "}
                  <br />
                </span>
                <span className="text-xl transition-all duration-1000 notVisibleText">
                  Основной профессиональный интерес сейчас составляет TFP <br />
                </span>
                <span className="text-xl transition-all duration-1000 notVisibleText">
                  (терапия, фокусированная на переносе, основатель Отто
                  Кернберг). <br />
                </span>
                <span className="text-xl transition-all duration-1000 notVisibleText">
                  {" "}
                  Это вид современной психоаналитической терапии, направленной
                  на лечение тяжелых личностных расстройств. <br />
                </span>
                <span className="text-xl transition-all duration-1000 notVisibleText">
                  Прохожу международную сертификацию в ISTFP группе у Фрэнка
                  Йоманса (Нью-Йорк). <br />
                </span>
              </p>

              <h2
                className={`text-xl font-bold transition-all duration-1000 notVisibleText`}
              >
                Образование
              </h2>
              <ul className="list-disc list-inside text-lg text-green-50 space-y-1">
                <li className="text-xl transition-all duration-1000 notVisibleText">
                  Пермская Государственная Медицинская Академия 2000-2006 г.г.
                </li>
                <li className="text-xl transition-all duration-1000 notVisibleText">
                  {" "}
                  Интернатура по психиатрии 2007г.
                </li>
                <li className="text-xl transition-all duration-1000 notVisibleText">
                  {" "}
                  Первичная специализация по психотерапии 2009г.
                </li>
                <li className="text-xl transition-all duration-1000 notVisibleText">
                  Аналитическая психология(юнгианский психоанализ) 2015-2017г.г.
                </li>
                <li className="text-xl transition-all duration-1000 notVisibleText">
                  Специализация по детскому и подростковому психоанализу 2018г.
                </li>
                <li className="text-xl transition-all duration-1000 notVisibleText">
                  Начало обучения в ТФП-проекте 2019г.
                </li>
                <li className="text-xl transition-all duration-1000 notVisibleText">
                  Прохожу обучение терапии, фокусированной на переносе, и по сей
                  день*.
                </li>
              </ul>
              <br />
              <em className="text-xl transition-all duration-1000 notVisibleText">
                * Обучение включает теорию и работу с супервизорами.
              </em>
              <br />
            </div>
            <br />
            <br />
            <div className="pb-10 pl-20 pr-10">
              <strong className="text-2xl transition-all duration-1000 notVisibleText">
                Работаю под супервизией психотерапевтов с мировым именем:
              </strong>
              <br />
              <br />
              <ul className="text-xl">
                <li className={`transition-all duration-1000 notVisibleText`}>
                  {" "}
                  <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D1%80%D0%BD%D0%B1%D0%B5%D1%80%D0%B3,_%D0%9E%D1%82%D1%82%D0%BE">
                    <strong>Отто Кернберг</strong>
                    <br />
                    <em>- крупнейший современный мыслитель психонализа</em>
                  </a>
                </li>
                <li className={`transition-all duration-1000 notVisibleText`}>
                  {" "}
                  <a href="https://www.frankyeomans.com/curriculum-vitae.php">
                    <strong>Фрэнк Йоманс</strong>
                    <br />
                    <em>
                      - Президент Международного общества терапии,
                      фокусированной на переносе
                    </em>
                  </a>
                </li>
                <li className={`transition-all duration-1000 notVisibleText`}>
                  {" "}
                  <a href="https://verosteiner.com/">
                    <strong>Вероника Штайнер</strong>
                    <br />
                    <em> - координатор группы развития ТФП Чили</em>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

//aboutMeRef.current
