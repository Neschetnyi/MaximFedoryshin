import { useEffect, useRef } from "react";

const Vision = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const fullText = `Я не могу дать гарантию* успеха психотерапии* но могу дать гарантию* что
максимально использую* свои знания психологии* чтобы помочь пациенту* с
его сложностями* Работа с психикой*  это всегда сложное* и полное вызовов
путешествие* в глубины себя* Я занимаюсь * психотерапевтической* практикой* с
2009 года* и за это время* моим основным методом* стала терапия*
фокусированная на переносе*  подход, который помогает* по-новому
увидеть* как внутренний мир* влияет на нашу жизнь* Психика — это сложная*
структура* своего рода многоуровневый* психический аппарат* где
переплетаются* наши опыт и чувства* В терапии я уделяю* много внимания*
изучению этих тонких* особенностей психики* ведь именно через* понимание
их* мы можем начать интегрировать* разрозненные части себя.`;

    const chunks = fullText
      .split(/[*]/)
      .map((chunk) => chunk.trim())
      .filter(Boolean);

    if (!textRef.current || chunks.length === 0) return;

    const el = textRef.current;
    el.textContent = "";
    el.style.opacity = "0";

    let currentChunk = 0;
    let charIndex = 0;
    let opacity = 0;
    let mode: "fade-in" | "typing" | "pause" | "fade-out" = "fade-in";
    let lastTime = 0;
    let rafId = 0;
    let pauseTimer = 0;

    const fadeSpeed = 0.0195; // скорость изменения прозрачности
    const typeDelay = 38; // скорость печати (мс)
    const pauseAfterTyping = 1000; // пауза перед исчезновением

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      const chunk = chunks[currentChunk];

      switch (mode) {
        case "fade-in":
          opacity += fadeSpeed;
          if (opacity > 1) opacity = 1;
          el.style.opacity = String(opacity);
          if (opacity >= 1) {
            mode = "typing";
            charIndex = 0;
            el.textContent = "";
            lastTime = time;
          }
          break;

        case "typing":
          if (delta >= typeDelay) {
            el.textContent = chunk.slice(0, charIndex + 1);
            charIndex++;
            lastTime = time;
            if (charIndex >= chunk.length) {
              mode = "pause";
              pauseTimer = pauseAfterTyping;
            }
          }
          break;

        case "pause":
          if (pauseTimer > 0) {
            pauseTimer -= delta;
          } else {
            mode = "fade-out";
          }
          break;

        case "fade-out":
          opacity -= fadeSpeed;
          if (opacity < 0) opacity = 0;
          el.style.opacity = String(opacity);
          if (opacity <= 0) {
            currentChunk = (currentChunk + 1) % chunks.length;
            mode = "fade-in";
            el.textContent = "";
          }
          break;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="min-h-lvh flex  p-6 pt-90 w-full ">
      <div className="w-2/10"></div>
      <div className="w-6/10 flex items-baseline justify-center">
        <p
          ref={textRef}
          className="text-6xl font-bold text-green-50 leading-relaxed transition-opacity ease-out text-center "
          style={{ textShadow: "0 0 6px rgba(0,0,0,0.3)" }}
        />
      </div>
      <div className="w-2/10"></div>
    </section>
  );
};

export default Vision;
