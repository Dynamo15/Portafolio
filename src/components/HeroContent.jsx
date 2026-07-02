import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useEffect, useState } from "react";
import useProfile from "../hooks/useProfile";

export default function HeroContent({ progress = 0 }) {
  const [text, setText] = useState("");
  const { language, t } = useContext(LanguageContext);
  const {
      profile,
      loading,
      error
  } = useProfile();
  const words = profile?.hero?.role?.[language] ?? "";

  useEffect(() => {

      let i = 0;

      setText("");

      const interval = setInterval(() => {

          setText(words.slice(0, i));

          i++;

          if (i > words.length)
              clearInterval(interval);

      }, 90);

      return () => clearInterval(interval);

  }, [words]);


  if (loading) return null;

  if (error) return null;

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
          max-w-3xl
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
          {t("hero.hello")}
          
        </p>
        

        {/* NAME */}
        <h1
          className="
            text-3xl
            sm:text-5xl
            md:text-6xl
            xl:text-7xl
            font-black
            text-white
            leading-tight
            tracking-tight
            md:whitespace-nowrap
          "
        >
          {profile.hero.name}
        </h1>

        {/* TYPEWRITER */}
        <p
          className="
            mt-6
            text-xl
            sm:text-3xl
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

            text-center
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
            text-sm
            sm:text-base
            md:text-xl
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          {profile.hero.description[language]}
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

          {profile.hero.buttons
            .filter(button => button.enabled)
            .map(button => (

              <a
                key={button.id}
                href={button.href}
                target={button.target}
                rel={
                  button.target === "_blank"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  px-7
                  py-3
                  rounded-full
                  bg-orange-500
                  hover:bg-orange-400
                  transition
                  font-semibold
                  shadow-lg
                "
              >
                {button.label[language]}
              </a>

          ))}

        </div>
      </div>
    </section>
  );
}