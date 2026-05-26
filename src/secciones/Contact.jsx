const Contact = () => {
  return (
    <section
      id="contact"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        py-32
        relative
        z-20
      "
    >
      <div className="max-w-5xl w-full">

        {/* TITLE */}
        <div className="text-center mb-20">

          <p
            className="
              text-orange-400
              tracking-[0.35em]
              uppercase
              mb-4
            "
          >
            Contact
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              text-white
              mb-6
            "
          >
            Let’s Build Something Amazing
          </h2>

          <p
            className="
              text-gray-400
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            Interested in collaboration, freelance work,
            game development or futuristic web experiences?
            Let’s connect.
          </p>

        </div>

        {/* CONTACT CARD */}
        <div
          className="
            relative
            border border-white/10
            bg-white/5
            backdrop-blur-md
            rounded-3xl
            p-10
            overflow-hidden

            shadow-[0_0_60px_rgba(255,140,0,0.08)]
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute
              -top-24
              -right-24
              w-72
              h-72
              bg-orange-500/20
              blur-3xl
              rounded-full
            "
          />

          <div className="relative z-10">

            {/* EMAIL */}
            <div className="mb-10">

              <p className="text-gray-500 uppercase tracking-[0.3em] mb-2">
                Email
              </p>

              <a
                href="mailto:ricardosah19@gmail.com"
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-white
                  hover:text-orange-400
                  transition
                "
              >
                ricardosah19@gmail.com
              </a>

            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-6">

              <a
                href="https://github.com/Dynamo15"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6
                  py-3
                  rounded-full
                  border border-white/10
                  hover:border-orange-400
                  hover:text-orange-400
                  transition
                "
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6
                  py-3
                  rounded-full
                  border border-white/10
                  hover:border-orange-400
                  hover:text-orange-400
                  transition
                "
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;