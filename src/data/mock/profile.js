export const profile = {

  hero: {

    name: "Ricardo Sánchez Herrera",

    role: {
      es: "Desarrollador de Software",
      en: "Software Developer",
    },

    description: {
      es: "La fuerza más fuerte que la electricidad y la energía atómica es la voluntad.",
      en: "The strongest force beyond electricity and atomic energy is determination.",
    },

    buttons: [

      {
        id: 1,

        type: "projects",

        label: {
          es: "Ver proyectos",
          en: "View Projects",
        },

        href: "#projects",

        target: "_self",

        enabled: true,
      },

      {
        id: 2,

        type: "cv",

        label: {
          es: "Descargar CV",
          en: "Download CV",
        },

        href: "/cv/Ricardo-Sanchez-Herrera.pdf",

        target: "_blank",

        enabled: true,
      }

    ]

  },

  about: {

    description: {

      es: "Soy un ingeniero de software que disfruta comprender cómo funcionan los sistemas para construir soluciones útiles. Me motiva aprender nuevas tecnologías, convertir ideas en proyectos reales y asumir retos que me permitan seguir creciendo profesionalmente.",

      en: "I am a software engineer who enjoys understanding how systems work to build useful solutions. I am motivated by learning new technologies, turning ideas into real projects and taking on challenges that help me continue growing professionally."

    },

    remote: {

      available: true,

      label: {

        es: "Sí",

        en: "Yes"

      }

    },

    status: {

      es: "Disponible para trabajar",

      en: "Available for work"

    },

    location: {

      es: "México",

      en: "Mexico"

    }

  }

};