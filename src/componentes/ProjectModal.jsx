import { techIcons } from "../data/techIcons";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const ProjectModal = ({ project, onClose }) => {

    const { language, t } = useContext(LanguageContext);

    if (!project) return null;

    return (

        <div
            className="
                fixed
                inset-0
                z-50
                bg-black/80
                backdrop-blur-md
                flex
                items-center
                justify-center
                p-6
            "
            onClick={onClose}
        >

            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    w-full
                    max-w-5xl
                    rounded-3xl
                    overflow-hidden
                    bg-zinc-950
                    border
                    border-white/10
                    shadow-2xl
                "
            >

                {/* IMAGE */}

                <img

                    src={project.image}

                    alt={project.title[language]}

                    className="
                        w-full
                        h-[420px]
                        object-cover
                    "

                />

                {/* CONTENT */}

                <div className="p-10">

                    <h2 className="text-4xl font-black text-white mb-6">

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
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-orange-500/10
                                        border
                                        border-orange-500/20
                                    "

                                >

                                    {Icon && (

                                        <Icon className={`text-lg ${color}`} />

                                    )}

                                    {tech}

                                </span>

                            );

                        })}

                    </div>

                    {/* DESCRIPTION */}

                    <p className="text-gray-400 leading-8 text-lg mb-10">

                        {project.description[language]}

                    </p>

                    {/* BUTTONS */}

                    <div className="flex gap-4">

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