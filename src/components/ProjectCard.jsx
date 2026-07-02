import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { techIcons } from "../utils/techIcons";
import "../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
    
    const { language } = useContext(LanguageContext);
    const { t } = useContext(LanguageContext);
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="group relative w-full h-[360px]
            sm:h-[400px]
            lg:h-[420px] perspective-[1500px]">

            {/* BOTON */}

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(!isFlipped);
                }}
                className="
                    absolute
                    bottom-5
                    right-5
                    z-50
                    w-10
                    h-10
                    sm:w-12
                    sm:h-12

                    text-lg
                    sm:text-xl
                    rounded-full
                    border
                    border-white/20
                    bg-black/50
                    backdrop-blur-md
                    flex
                    items-center
                    justify-center
                    text-white
                    transition-all
                    duration-500
                    hover:scale-110
                    hover:border-orange-500
                    hover:text-orange-400
                "
            >
                {isFlipped ? "×" : "+"}
            </button>

            {/* CONTENEDOR 3D */}

            <div
                className={`
                    relative
                    w-full
                    h-full
                    preserve-3d
                    transition-transform
                    duration-700
                    ${isFlipped ? "rotate-y-180" : ""}
                `}
            >

                {/* FRONT */}

                <div
                    className="
                        absolute
                        inset-0
                        rounded-3xl
                        bg-[#090909]
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        backface-hidden
                        overflow-hidden
                        transition-all
                        duration-500
                        hover:border-orange-500/40
                        hover:shadow-[0_0_30px_rgba(255,120,0,.15)]
                    "
                >
                    <img
                        src={project.logo}
                        alt={project.title[language]}
                        className="
                            w-28
                            sm:w-36
                            lg:w-40
                            object-contain
                            transition
                            duration-500
                            group-hover:scale-105
                            drop-shadow
                        "
                    />
                </div>

                {/* BACK */}

                <div
                    className="
                        absolute
                        inset-0
                        rotate-y-180
                        backface-hidden
                        rounded-3xl
                        overflow-hidden
                    "
                >

                    {/* Screenshot */}

                    <img
                        src={project.image}
                        alt={project.title[language]}
                        className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                        "
                    />

                    {/* Overlay */}

                    <div
                        className="
                            absolute
                            inset-0
                            bg-black/75
                        "
                    />

                    {/* Content */}

                    <div
                        className="
                            absolute
                            inset-0
                            z-20
                            flex
                            flex-col
                            justify-center
                            items-center
                            px-8
                            text-center
                        "
                    >

                        <h3
                            className="
                                text-2xl
                                sm:text-3xl
                                font-bold
                                text-white
                                mb-4
                            "
                        >
                            {project.title[language]}
                        </h3>

                        <p
                            className="
                            text-gray-300
                            text-sm
                            leading-relaxed
                            max-w-md
                            mb-6
                            px-2
                            "
                        >
                            {project.description[language]}
                        </p>

                        <div
                            className="
                                flex
                                flex-wrap
                                justify-center
                                gap-4
                                mb-8
                                text-2xl sm:text-3xl
                            "
                        >
                            {project.technologies.map((tech) => {

                                const TechIcon = techIcons[tech]?.icon;
                                const color = techIcons[tech]?.color;

                                return (
                                    TechIcon && (
                                        <TechIcon
                                            key={tech}
                                            className={`text-3xl ${color}`}
                                        />
                                    )
                                );
                            })}
                        </div>

                        <div
                            className="
                                flex
                                flex-wrap
                                justify-center
                                gap-5
                            "
                        >

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        text-white
                                        hover:text-orange-400
                                        transition
                                    "
                                >
                                    {t("projects.demo →")}
                                </a>
                            )}

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        text-white
                                        hover:text-orange-400
                                        transition
                                    "
                                >
                                    {t("projects.github →")}
                                </a>
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProjectCard;

