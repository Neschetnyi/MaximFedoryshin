import publication from "../../assets/publications/6JDgfB87E6HxBV6QLR2l6g_V1dcSXyzDPVBjiYANNWgTRfFBmnl5nR3SxeOddXEmJBp2wj28JYPRgU6Iwo6TgL-a.jpg";

const Publications = () => {
  return (
    <section aria-label="publications swiper">
      <figure>
        <img src={publication} alt="Плохой психоанализ" />
        <figcaption>
          <h4>Плохой психоанализ</h4>Недавно сам видел в сети: таролог -
          психолог, обучение 5 месяцев. Интересно звучит. А некоторые люди
          корочки психолога получают после 5 лет института. В век коучей,
          шаманов, психологов –тарологов, которые имеют обычно в анамнезе
          краткосрочные курсы, психоанализ остается с одной стороны чем-то
          монументальным, а с другой –похоже никогда не достигнет уровня их
          популярности.
          <a href="">читать далее...</a>
        </figcaption>
      </figure>
    </section>
  );
};

export default Publications;
