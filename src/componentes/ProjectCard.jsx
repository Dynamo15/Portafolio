import { techIcons } from "../data/techIcons";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";


const ProjectCard = ({ project, onSelect }) => {
  const { language, t } = useContext(LanguageContext);



  return (

    <div
    onClick={() => onSelect(project)}
      className="
        project-card
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-black/30
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-orange-400/40
        hover:-translate-y-2
        hover:shadow-[0_0_35px_rgba(255,140,0,0.15)]
        cursor-pointer
      "
    >

      {/* IMAGE */}
    <div
        
        className="
            relative
            h-[320px]
            overflow-hidden
        "
        >

        <img
          src={project.image}
          alt={project.title.es}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
          "
        >
        <span
        className="
            px-6
            py-3
            rounded-full
            border
            border-white/20
            bg-black/40
            backdrop-blur-md
            text-white
            uppercase
            tracking-[0.2em]
            text-sm
        "
        >
            {t("viewDetails")}
        </span>
        </div>

      </div>

      <div className="p-8">

        <h3 className="text-3xl font-bold text-white mb-5">
          {project.title[language]}
        </h3>

        <div className="flex flex-wrap gap-3 mb-6">

          {project.technologies.map((tech, i) => {

            const TechIcon = techIcons[tech]?.icon;
            const techColor = techIcons[tech]?.color;

            return (

                <span
                    key={i}
                    className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    border
                    border-orange-400/20
                    bg-orange-400/5
                    text-orange-300
                    text-sm
                "
                >

                {TechIcon && (
                  <TechIcon
                    className={`text-lg ${techColor}`}
                  />
                )}

                {tech}

              </span>

            );

          })}

        </div>

        <p className="text-gray-400 leading-relaxed mb-8">
          {project.description[language]}
        </p>

        <div className="grid grid-cols-2 gap-4">

        {project.demo && (
            <a
                onClick={(e) => e.stopPropagation()}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                text-center
                px-6
                py-3
                rounded-full
                bg-orange-500
                hover:bg-orange-400
                transition
                font-semibold

                ${!project.github ? "col-span-2" : ""}
              `}
            >
              Live Demo
            </a>
        )}

          {project.github && (
            <a
                onClick={(e) => e.stopPropagation()}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                text-center
                px-6
                py-3
                rounded-full
                border
                border-white/20
                hover:border-orange-400
                hover:text-orange-400
                transition

                ${!project.demo ? "col-span-2" : ""}
              `}
            >
              GitHub
            </a>
          )}

        </div>

      </div>

    </div>

  );

};

export default ProjectCard;