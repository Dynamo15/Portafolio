import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { skills } from "../data/api/skills";
import SkillCard from "../componentes/SkillCard";

const Skills = () => {
  const { t } = useContext(LanguageContext);
  
  return (
    <section
      id="skills"
      className="
        px-6
        pt-20
        md:pt-32
        relative
        z-20
      "
    >
        <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-12
          md:mb-20">

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
            {t("skills.subtitle")}
          </p>

          <h2
            className="
              text-5xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              md:text-6xl
              font-black
              text-white
            "
          >
            {t("skills.title")}
          </h2>

        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4

            gap-4
            sm:gap-6
            lg:gap-8
          "
        >

          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
            />
          ))}

        </div>



          {/*skills.map((skill) => (
            <div
              key={skill.id}
              className="
                group
                border border-white/10
                bg-white/5
                backdrop-blur-md
                rounded-3xl
                p-8
                flex items-center justify-center
                text-center
                text-white
                text-xl
                font-semibold
                transition-all
                duration-300

                hover:border-orange-400
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(255,140,0,0.25)]
              "
            >
              <span className="group-hover:text-orange-300 transition">
                {skill.name.es}
              </span>
            </div>
          ))*/}

        </div>

    </section>
  );
};

export default Skills;