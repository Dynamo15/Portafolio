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
      <div
        className="
          max-w-[1800px]
          mx-auto

          grid
          grid-cols-1
          lg:grid-cols-2

          gap-12
          lg:gap-40

          items-center

          px-2
          sm:px-6
          md:px-10
          lg:px-24
        "
      >

        {/* TEXTO */}
        <div
          className="
            order-1
            lg:order-1
          "
        >
          <p
            className="
              text-orange-400
              tracking-[0.35em]
              text-xl
              sm:text-2xl
              uppercase
              mb-4
            "
          >
            Sobre Mi
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {t("")}
          </h2>

          <p
            className="
              mt-8
              lg:mt-12

              text-gray-400

              text-base
              sm:text-lg
              lg:text-xl

              leading-8
              lg:leading-10

              max-w-2xl
            "
          >
            Soy ingeniero en software y disfruto entender cómo funcionan los
            sistemas para construir soluciones útiles. Me motiva aprender nuevas
            tecnologías, convertir ideas en proyectos reales y enfrentar retos que
            me permitan seguir creciendo profesionalmente.
          </p>

          <div
            className="
              mt-12
              lg:mt-20

              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3

              gap-8
            "
          >
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-orange-400">
                REMOTO
              </h3>
              <p className="text-gray-500 text-lg lg:text-xl">
                SI
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-orange-400">
                ESTATUS
              </h3>
              <p className="text-gray-500 text-lg lg:text-xl">
                DISPONIBLE PARA TRABAJAR
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-orange-400">
                LOCACIÓN
              </h3>
              <p className="text-gray-500 text-lg lg:text-xl">
                MÉXICO
              </p>
            </div>
          </div>
        </div>

        {/* TIERRA */}
        <div
          className="
            order-2
            lg:order-2

            flex
            justify-center
            items-center
          "
        >
          <Earth />

          <div
            className="
              absolute
              -z-10

              w-[250px]
              h-[250px]

              sm:w-[400px]
              sm:h-[400px]

              lg:w-[520px]
              lg:h-[520px]

              rounded-full
              bg-blue-500/20
              blur-3xl
            "
          />
        </div>

      </div>
    </section>
  );
};

export default About;


