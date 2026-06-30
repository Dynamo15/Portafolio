import { techIcons } from "../data/api/techIcons";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const ProjectModal = ({ project, onClose }) => {

    const { language, t } = useContext(LanguageContext);

    if (!project) return null;

    return (

        <div
            className="
                w-full
                max-w-5xl

                max-h-[90vh]
                overflow-y-auto

                rounded-3xl
                overflow-x-hidden

                bg-zinc-950
                border
                border-white/10
                shadow-2xl
            "
            onClick={onClose}
        >

            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    relative
                    w-full
                    max-w-5xl
                    max-h-[90vh]
                    overflow-y-auto
                    rounded-3xl
                    overflow-hidden
                    bg-zinc-950
                    border
                    border-white/10
                    shadow-2xl
                "
            >


                <button
                    onClick={onClose}
                    className="
                        absolute
                        top-4
                        right-4
                        z-50

                        w-10
                        h-10

                        flex
                        items-center
                        justify-center

                        rounded-full

                        bg-black/60
                        backdrop-blur-md

                        text-white
                        text-xl

                        transition
                        hover:bg-orange-500
                        hover:scale-110
                    "
                >
                    ✕
                </button>

                {/* IMAGE */}

                <img

                    src={project.image}

                    alt={project.title[language]}

                    className="
                        w-full
                        h-[180px]
                        sm:h-[280px]
                        md:h-[420px]
                        object-cover
                    "

                />

                {/* CONTENT */}

                <div className="p-5
                    sm:p-8
                    lg:p-10">

                    <h2 className="text-2xl
                        sm:text-3xl
                        lg:text-4xl font-black text-white mb-6">

                        {project.title[language]}

                    </h2>

                    {/* TECHNOLOGIES */}

                    <div className="flex flex-wrap gap-3 mb-8">

                        {project.technologies.map((tech) => {

                            const Icon = techIcons[tech]?.icon;
                            const color = techIcons[tech]?.color;

                            return (

                                <span

                                    key={tech}

                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        px-3
                                        py-1.5
                                        text-sm
                                        sm:text-base
                                        rounded-full
                                        bg-orange-500/10
                                        border
                                        border-orange-500/20
                                    "

                                >

                                    {Icon && (

                                        <Icon className={`text-base
                                                            sm:text-lg ${color}`} />

                                    )}

                                    {tech}

                                </span>

                            );

                        })}

                    </div>

                    {/* DESCRIPTION */}

                    <p className="text-gray-400 text-base
                        sm:text-lg

                        leading-7
                        sm:leading-8 mb-10">

                        {project.description[language]}

                    </p>

                    {/* BUTTONS */}

                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-row

                            gap-4
                        "
                    >

                        {project.demo && (

                            <a

                                href={project.demo}

                                target="_blank"

                                rel="noopener noreferrer"

                                className="
                                    px-6
                                    py-3
                                    rounded-full
                                    bg-orange-500
                                    hover:bg-orange-400
                                    transition
                                    font-semibold
                                "

                            >

                                Live Demo

                            </a>

                        )}

                        {project.github && (

                            <a

                                href={project.github}

                                target="_blank"

                                rel="noopener noreferrer"

                                className="
                                    px-6
                                    py-3
                                    rounded-full
                                    border
                                    border-white/20
                                    hover:border-orange-400
                                    hover:text-orange-400
                                    transition
                                "

                            >

                                GitHub

                            </a>

                        )}

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ProjectModal;