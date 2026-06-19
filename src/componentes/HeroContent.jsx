
import { useEffect, useState } from "react";

export default function HeroContent({ progress = 0 }) {
  const words = "Software Developer";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(words.slice(0, i));
      i++;

      if (i > words.length) clearInterval(interval);
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        transform: `
          translateY(${progress * 45}px)
          scale(${1 - progress * 0.05})
        `,
        opacity: 1 - progress * 0.4
      }}
      className="
        w-full
        flex
        justify-center
        px-6

      "
    >
      <div
        className="
          max-w-4xl
          w-full
          text-center
        "
      >
        {/* MINI TITLE */}
        <p
          className="
            text-orange-400
            text-sm md:text-2xl
            tracking-[0.45em]
            mb-5
          "
        >
          HOLA MUNDO_
        </p>

        {/* NAME */}
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            xl:text-7xl
            font-black
            text-white
            leading-tight
            tracking-tight
            whitespace-nowrap
          "
        >
          Ricardo Sánchez Herrera
        </h1>

        {/* TYPEWRITER */}
        <p
          className="
            mt-6
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            tracking-[0.12em]
            uppercase
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-orange-400
            via-yellow-300
            to-orange-500
            min-h-[65px]

            whitespace-nowrap
          "
        >
          {text}
          <span className="animate-pulse ml-1">|</span>
        </p>

        {/* DESC */}
        <p
          className="
            mt-6
            text-gray-400
            text-base
            md:text-xl
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          La fuerza más fuerte que la electricidad y la energía atómica es la voluntad
        </p>

        {/* BUTTONS */}
        <div
          className="
            mt-10
            flex
            gap-5
            justify-center
            flex-wrap
          "
        >
          <a
            href="#projects"
            className="
              px-7 py-3 rounded-full
              bg-orange-500
              hover:bg-orange-400
              transition
              font-semibold
              shadow-lg
            "
          >
            Ver Proyectos
          </a>
          {/*
            <a
              href="#contact"
              className="
                px-7 py-3 rounded-full
                border border-white/20
                hover:border-orange-400
                hover:text-orange-400
                transition
              "
            >
              Contacto
            </a>
          */}
        </div>
      </div>
    </section>
  );
}