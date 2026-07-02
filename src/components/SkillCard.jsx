import { techIcons } from "../utils/techIcons";


const SkillCard = ({ skill }) => {


    const TechIcon = techIcons[skill.name]?.icon;
    const techColor = techIcons[skill.name]?.color;

    return (

        <div
            className="
                group
                border border-white/10
                bg-white/5
                backdrop-blur-md
                rounded-3xl
                p-5
                sm:p-6
                lg:p-8
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:gap-4
                transition-all
                duration-300

                hover:border-orange-400
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(255,140,0,0.25)]
            "
        >

            {TechIcon && (

                <TechIcon
                    className={`
                        text-3xl
                        sm:text-4xl
                        lg:text-5xl
                        transition-all
                        duration-300
                        group-hover:scale-110
                        ${techColor}
                    `}
                />

            )}

            <span
                className="
                    text-white
                    text-sm
                    sm:text-lg
                    lg:text-xl
                    font-semibold
                    group-hover:text-orange-300
                    transition
                "
            >
                {skill.name}
            </span>

        </div>

    );

};

export default SkillCard;