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
      <div className="max-w-[1800px] mx-auto grid md:grid-cols-2 gap-40 items-center px-24">

        {/* LEFT */}
        <div>

          <p
            className="
              text-orange-400
              tracking-[0.35em]
              text-2xl
              uppercase
              mb-4
            "
          >
            Sobre Mi
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {t("")}   {/* AQUI PUEDE IR UN TITULO */}
          </h2>

          <p className="mt-12 text-gray-400 text-xl leading-10 max-w-2xl">

              Soy ingeniero en software y disfruto entender cómo funcionan los sistemas para construir soluciones útiles. 
              Me motiva aprender nuevas tecnologías, convertir ideas en proyectos reales y enfrentar retos que me permitan seguir creciendo profesionalmente.
            <br />
            
            
          </p>

          <div className="mt-20 flex gap-20 flex-wrap">

            <div>
              <h3 className="text-2xl font-bold text-orange-400">REMOTO</h3>
              <p className="text-gray-500 text-xl">
                SI
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-400">ESTATUS</h3>
              <p className="text-gray-500 text-xl">
                DISPONIBLE PARA TRABAJAR
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-400">LOCACIÓN</h3>
              <p className="text-gray-500 text-xl">
                MÉXICO
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">

          {/* Placeholder Tierra */}
          <div className="flex justify-center items-center">
            <Earth />
          </div>

          {/* Glow para futura Tierra */}
          <div
            className="
              absolute
              -z-10
              w-[420px]
              h-[420px]
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