import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../componentes/ProjectCard";
import ProjectModal from "../componentes/ProjectModal";

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const [openCard, setOpenCard] = useState(null);

  return (

    <>

      <section
        id="projects"
        className="
          px-6
          pt-32
          pb-32
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
                text-2xl
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

          {/* GRID */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-12
            "
          >


            {/* CARD */}


            {projects.map((project) => (

              <ProjectCard
                  key={project.id}
                  project={project}
                  isOpen={openCard === project.id}
                  onToggle={() =>
                      setOpenCard(
                          openCard === project.id ? null : project.id
                      )
                  }
                  onSelect={setSelectedProject}
              />

            ))}

          </div>

        </div>

        </section>



        {/*MODAL*/}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </>

  );

};

export default Projects;