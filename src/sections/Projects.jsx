import useProjects from "../hooks/useProjects";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useState } from "react";
import { projects } from "../data/mock/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const [openCard, setOpenCard] = useState(null);
  const { t } = useContext(LanguageContext);
  const { projects, loading, error } = useProjects();

  if (loading) {

    return (
      <section className="py-40 text-center text-white">
        Cargando proyectos...
      </section>
    );

  }

  if (error) {

    return (
      <section className="py-40 text-center text-red-500">
        Error al cargar proyectos.
      </section>
    );

  }



  return (

    <>

      <section
        id="projects"
        className="
          px-6
          pt-20
          pb-20
          md:pt-32
          md:pb-32
          relative
          z-20
        "
      >

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}

          <div className="text-center mb-12
            md:mb-24">

            <p
              className="
                text-orange-400
                text-xl
                sm:text-2xl
                tracking-[0.35em]
                uppercase
                mb-4
              "
            >
              {t("projects.subtitle")}
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                text-white
              "
            >
              {t("projects.title")}
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