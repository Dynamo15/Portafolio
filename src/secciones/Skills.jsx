import { skills } from "../data/skills";
import SkillCard from "../componentes/SkillCard";

const Skills = () => {
  
  return (
    <section
      id="skills"
      className="
        px-6
        pt-32
        relative
        z-20
      "
    >
        <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">

          <p
            className="
              text-orange-400
              tracking-[0.35em]
              text-2xl
              uppercase
              mb-4
            "
          >
            Habilidades
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              text-white
            "
          >
            Tecnologias usadas en Proyectos
          </h2>

        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
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