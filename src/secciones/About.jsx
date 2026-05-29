import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Earth from "../componentes/Earth";

const About = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT */}
        <div>

          <p className="text-orange-400 tracking-[0.35em] text-sm mb-4">
            ABOUT ME_
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {t("about.title")}
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
            Soy desarrollador de software con enfoque en desarrollo web y una fuerte
            curiosidad por áreas como la inteligencia artificial, la ciberseguridad y el
            desarrollo de videojuegos.
            <br />
            <br />
            Me gusta diseñar sistemas funcionales, pero también experiencias que resulten
            intuitivas, inmersivas y memorables. Creo que los detalles marcan la
            diferencia, tanto en la arquitectura de una aplicación como en la forma en que
            las personas interactúan con ella.
          </p>

          <div className="mt-12 flex gap-12 flex-wrap">

            <div>
              <h3 className="text-3xl font-bold text-orange-400">+10</h3>
              <p className="text-gray-500 text-sm">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-400">3+</h3>
              <p className="text-gray-500 text-sm">
                Years Learning
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-400">100%</h3>
              <p className="text-gray-500 text-sm">
                Passion
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">

          {/* Placeholder Tierra */}
          <Earth />

          {/* Glow para futura Tierra */}
          <div
            className="
              absolute
              -z-10
              w-[420px]
              h-[420px]
              rounded-full
              bg-orange-500/20
              blur-3xl
            "
          />

        </div>

      </div>
    </section>
  );
};

export default About;