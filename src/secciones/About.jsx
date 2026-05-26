import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const About = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <p className="text-orange-400 tracking-[0.35em] text-sm mb-4">
            ABOUT ME_
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {t("about.title")}
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed">
            {t("about.description")}
          </p>

          <div className="mt-10 flex gap-10 flex-wrap">
            <div>
              <h3 className="text-3xl font-bold text-orange-400">+10</h3>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-400">3+</h3>
              <p className="text-gray-500 text-sm">Years Learning</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-400">100%</h3>
              <p className="text-gray-500 text-sm">Passion</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          <div className="w-[320px] h-[420px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl">
            <div className="w-full h-full rounded-2xl border border-orange-400/20 flex items-center justify-center text-center px-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {t("about.quote")}
              </p>
            </div>
          </div>

          <div className="absolute -z-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default About;