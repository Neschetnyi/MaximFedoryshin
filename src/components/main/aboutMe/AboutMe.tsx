import photo from "../../../assets/photo_2025-10-28_14-14-40.jpg";

const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      aria-label="about me"
      className="flex flex-wrap  backdrop-blur-2xl bg-black/10 min-h-lvh border-b-8 border-b-yellow-950/50"
    >
      <figure className="MaximFoto w-1/3 p-5 flex flex-col justify-around items-center ">
        <figcaption>
          <strong className="text-5xl font-['Engry',serif] font-bold text-green-50 ">
            {" "}
            Максим Федорышин
          </strong>
        </figcaption>
        <img src={photo} alt="Maxim Fedoryshin" className="rounded-2xl" />
      </figure>

      <div
        className=" w-2/3 p-5 text-green-50"
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
            <p className="text-xl">
              <strong className="text-2xl">
                Врач-психиатр Психотерапевт Психоаналитический терапевт <br />
                Член Русскоязычного Общества Терапии, фокусированной на переносе
                *
                <br />
                Кандидат в ТФП-терапевты ISTFP
              </strong>{" "}
              <br />
              * TFP Transference Focused Psychotherapy
              <br />
              <br />
              <p>
                У меня классическое медицинское образование. <br />
                По сей день я продолжаю свое профессиональное обучение в сфере
                психоанализа. <br />
                Постоянно состою в индивидуальных и групповых супервизиях.{" "}
                <br />
                Основной профессиональный интерес сейчас составляет TFP <br />
                (терапия, фокусированная на переносе, основатель Отто Кернберг).{" "}
                <br />
                Это вид современной психоаналитической терапии, направленной на
                лечение тяжелых личностных расстройств. <br />
                Прохожу международную сертификацию в ISTFP группе у Фрэнка
                Йоманса (Нью-Йорк).
              </p>
            </p>
            <br />
            <p aria-label="education">
              <h2 className="text-xl font-bold">Образование</h2>
              <ul className="list-disc list-inside text-lg text-green-50 space-y-1">
                <li>
                  Пермская Государственная Медицинская Академия 2000-2006 г.г.
                </li>
                <li> Интернатура по психиатрии 2007г.</li>
                <li> Первичная специализация по психотерапии 2009г.</li>
                <li>
                  Аналитическая психология(юнгианский психоанализ) 2015-2017г.г.
                </li>
                <li>
                  Специализация по детскому и подростковому психоанализу 2018г.
                </li>
                <li>Начало обучения в ТФП-проекте 2019г.</li>
                <li>
                  Прохожу обучение терапии, фокусированной на переносе, и по сей
                  день*.
                </li>
              </ul>
              <em>* Обучение включает теорию и работу с супервизорами.</em>
            </p>
            <br />
          </div>

          <div className="pb-10 pl-20 pr-10">
            <p>
              <strong className="text-2xl">
                Работаю под супервизией психотерапевтов с мировым именем:
              </strong>
            </p>
            <br />
            <ul className="text-xl">
              <li>
                {" "}
                <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D1%80%D0%BD%D0%B1%D0%B5%D1%80%D0%B3,_%D0%9E%D1%82%D1%82%D0%BE">
                  <strong>Отто Кернберг</strong>
                  <br />
                  <em>- крупнейший современный мыслитель психонализа</em>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.frankyeomans.com/curriculum-vitae.php">
                  <strong>Фрэнк Йоманс</strong>
                  <br />
                  <em>
                    - Президент Международного общества терапии, фокусированной
                    на переносе
                  </em>
                </a>
              </li>
              <li>
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
    </section>
  );
};

export default AboutMe;
