import { useState } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiPython,
  SiTensorflow,
  SiUnrealengine,
  SiHtml5,
  SiCss,
  SiPhp,
  SiJavascript,
  SiLinux,
  SiDebian
} from "react-icons/si";

const techIcons = {
  "HTML": {
    icon: SiHtml5,
    color: "text-orange-500"
  },

  "CSS3": {
    icon: SiCss,
    color: "text-blue-500"
  },

  "PHP": {
    icon: SiPhp,
    color: "text-indigo-400"
  },

  "JavaScript": {
    icon: SiJavascript,
    color: "text-yellow-300"
  },

  "Linux": {
    icon: SiLinux,
    color: "text-yellow-200"
  },

  "Kali Linux": {
    icon: SiDebian,
    color: "text-red-500"
  },

  "Python": {
    icon: SiPython,
    color: "text-yellow-400"
  },

  "MySQL": {
    icon: SiMysql,
    color: "text-blue-500"
  }
};


const projects = [
  {
    title: "Pagina web con simulación de Vulnerabilidad de Cámara Web",
    description:
      "Proyecto académico orientado a la investigación de vulnerabilidades web y privacidad digital, demostrando riesgos asociados al uso inseguro de permisos de cámara y comunicación remota.",
    tech: [
          
          "HTML", 
          "CSS3", 
          "PHP", 
          "JavaScript", 
          "Linux",
          "Kali Linux",  
          "Python"
          
        ],
    image: "/projects/ingenieria.jpeg",
    github: "https://github.com/Dynamo15/IngenieriaUAEM",
    demo: "https://wonderful-jalebi-5317dd.netlify.app/"
    
  },

  {
    title: "Portafolio 1",
    description:
      "Mi primer portafolio como desarrollador. Aunque cumplió su objetivo inicial, el diseño estático complicaba su actualización diaria. Esto me impulsó a diseñar una nueva versión desde cero, aplicando lo aprendido para ofrecer una mejor experiencia y un mantenimiento más eficiente.",
    tech: ["HTML", "CSS3", "JavaScript"],
    image: "/projects/portafolio.jpg",
    github: "https://github.com/Dynamo15",
    demo: "https://resonant-cendol-9f496d.netlify.app/#inicio"
  },

  {
    title: "Servidores de la Palabra",
    description:
      "Desarrollo del sitio web oficial para el Instituto Teológico para Laicos. Diseñé e implementé la estructura principal de la plataforma durante mis prácticas profesionales, permitiendo la digitalización de la oferta académica (diplomados), el acceso al área de alumnos y el registro de nuevos usuarios en línea, participando en el backend, estando actualmente en linea!! y beneficiando a más de 500 alumnos de inicio.  ",
    tech: ["HTML", "CSS3", "JavaScript", "PHP", "MySQL" ],
    image: "/projects/diplomado.jpeg",
    
    demo: "https://servidoresdelapalabra.org/"
  }
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
    <section
      id="projects"
      className="
        min-h-screen
        px-6
        py-32
        relative
        z-20
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-24">

          <p
            className="
              text-orange-400
              tracking-[0.35em]
              uppercase
              mb-4
            "
          >
            Proyectos
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              text-white
            "
          >
            Proyectos Destacados
          </h2>

        </div>

        {/* PROJECTS */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
          "
        >

          {projects.map((project, index) => (
            <div
              key={index}
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
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative
                  h-[320px]
                  overflow-hidden
                  cursor-pointer
                "
                onClick={() => setSelectedImage(project.image)}
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
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

                {/* Hover Button */}
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
                      border border-white/20
                      bg-black/40
                      backdrop-blur-md
                      text-white
                      uppercase
                      tracking-[0.2em]
                      text-sm
                    "
                  >
                    View Project
                  </span>
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8">

                {/* TITLE */}
                <h3
                  className="
                    text-3xl
                    font-bold
                    text-white
                    mb-5
                  "
                >
                  {project.title}
                </h3>

                {/* TECH */}
<div className="flex flex-wrap gap-3 mb-6">

  {project.tech.map((tech, i) => {

    const TechIcon = techIcons[tech]?.icon;
    const techColor = techIcons[tech]?.color;

    return (
      <span
        key={i}
        className="
          group
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border border-orange-400/20
          bg-orange-400/5
          text-orange-300
          text-sm
          transition-all
          duration-300
          hover:border-orange-400/50
          hover:bg-orange-400/10
          hover:scale-105
        "
      >

        {TechIcon && (
          <TechIcon
            className={`
              text-lg
              transition-transform
              duration-300
              group-hover:scale-125
              ${techColor}
            `}
          />
        )}

        {tech}

      </span>
    );
  })}

</div>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-gray-400
                    leading-relaxed
                    mb-8
                  "
                >
                  {project.description}
                </p>

                {/* BUTTONS */}
                <div className="grid grid-cols-2 gap-4">

                {project.demo && (
                  <a
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
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      text-center
                      px-6
                      py-3
                      rounded-full
                      border border-white/20
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
          ))}

        </div>

      </div>
    </section>

    {selectedImage && (
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
        onClick={() => setSelectedImage(null)}
      >

        <img
          src={selectedImage}
          alt=""
          className="
            max-w-6xl
            w-full
            rounded-3xl
            shadow-2xl
          "
        />

      </div>
    )}

    </>
  );
};

export default Projects;