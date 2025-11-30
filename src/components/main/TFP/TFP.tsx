import { useMemo } from "react";
import { useIntersectionAnimation } from "../../../shared/hooks/useIntersectionAnimation";
import type { refsType } from "../../../App";

const TFP = ({ teraphy }: { teraphy: refsType["teraphy"] }) => {
  const videoRef = useIntersectionAnimation<HTMLParagraphElement>();
  const delayed = useMemo(() => ({ delay: 300 }), []);
  const myVision = useIntersectionAnimation<HTMLAnchorElement>(delayed);

  return (
    <section
      id="TFP"
      ref={teraphy}
      aria-label="Kernberg video interview about TFP"
      className=" lg:w-[80lvw] w-lvw mb-[20dvh] p-10 bg-amber-100/80 overflow-hidden border-yellow-950/50 border-b-8 border-t-8  flex flex-col items-center"
    >
      <div className="w-full flex flex-col items-center overflow-hidden">
        <h3
          className="text-xl font-['Engry',serif] font-bold text-green-50 w-full p-2 mb-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          Отто Кернберг о психоанализе и психоаналитической терапии
        </h3>

        <iframe
          className={`overflow-hidden transition-all duration-600 ${
            !videoRef.isVisible && "opacity-0 scale-1000 rotate-90"
          }`}
          title="Отто Кернберг о Фокусированной на переносе терапии (TFP)"
          src="https://player.vimeo.com/video/645996054?h=df9096ba3d"
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; "
        ></iframe>
        <p ref={videoRef.ref} className="video-source">
          Источник видео:{" "}
          <a
            href="https://newpsy.org/tpost/0coo7fpdz1-terapiya-fokusirovannaya-na-perenose-tfp?amp=true#_ftn1"
            target="_blank"
          >
            newpsy.org
          </a>
        </p>
      </div>
      <div className="p-10 w-full">
        <p>
          Терапия, фокусированная на переносе, разработанная Отто Кернбергом, —
          это психодинамический вид психотерапии, который решает широкий спектр
          психологических сложностей. Ее главная задача — изменить структуру
          личности человека, помогая ему справляться с внутренними конфликтами и
          улучшать качество жизни. Этот подход подходит не только пациентам с
          невротическими трудностями, но и тем, кто обладает пограничной
          структурой личности, включающей тяжелые личностные расстройства
          (нарциссическое, пограничное). Клинически доказанный метод. <br />{" "}
          <br />
          <span
            className="text-green-50"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          >
            {" "}
            <a href="https://psy-event.org/" ref={myVision.ref}>
              Данному методу я обучаюсь через проект Psy Event, который проводит
              подготовку русскоговорящих специалистов по всему миру. Действует с
              2015г. https://psy-event.org/
            </a>
          </span>
        </p>
        <br />

        <h3
          className={`text-2xl font-['Engry',serif] font-bold text-green-50 w-full p-2 mb-2 
            transition-all duration-600 ${
              !myVision.isVisible && "opacity-0 scale-1000 rotate-90"
            }`}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          Моё видение психотерапии
        </h3>
        <p>
          Я не могу дать гарантию успеха психотерапии, но могу дать гарантию,
          что максимально использую свои знания психологии, чтобы помочь
          пациенту с его сложностями. Работа с психикой — это всегда сложное и
          полное вызовов путешествие в глубины себя. Я занимаюсь
          психотерапевтической практикой с 2009 года, и за это время моим
          основным методом стала терапия, фокусированная на переносе, — подход,
          который помогает по-новому увидеть, как внутренний мир влияет на нашу
          жизнь. Психика — это сложная структура, своего рода многоуровневый
          психический аппарат, где переплетаются наши опыт и чувства. В терапии
          я уделяю много внимания изучению этих тонких особенностей психики,
          ведь именно через понимание их мы можем начать интегрировать
          разрозненные части себя. Зачастую люди обращаются ко мне с чувством,
          что что-то внутри них не на месте, что сложности в жизни — это
          следствие неких внутренних противоречий и неосознанных эмоций. Мой
          опыт и знания из разных психоаналитических подходов позволяют мне
          помочь разобраться в этих глубинных процессах. Вместе мы ищем, как
          работает ваша психика, какие внутренние механизмы организуют ваш
          уникальный жизненный опыт. Для меня важно не просто помогать
          справиться с симптомами или ситуациями, а помочь увидеть тот невидимый
          внутренний смысл, который стоит за внешними сложностями. Если вы
          хотите понять себя глубже, раскрыть внутренние причины своих страданий
          и научиться жить более целостно — я буду рад помочь на этом пути.
        </p>
      </div>
    </section>
  );
};

export default TFP;
