import { useEffect, useRef } from "react";

const Vision = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    console.log("Vision render");
    const fullText = `Это личное* никакого бизнеса * Я Вас жду * Не стесняйтесь написать мне`;

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
    <section className="h-30 flex  p-6   w-full ">
      <div className="w-full flex items-baseline justify-center ">
        <p
          ref={textRef}
          className="
          text-3xl
          sm:text-4xl
          md:text-5xl
           font-bold text-green-50 leading-relaxed transition-opacity ease-out text-center "
          style={{ textShadow: "0 0 6px rgba(0,0,0,0.3)" }}
        />
      </div>
    </section>
  );
};

export default Vision;
