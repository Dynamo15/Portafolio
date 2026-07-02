import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import useContact from "../hooks/useContact";


const Contact = () => {
  const { t } = useContext(LanguageContext);
  const {
    contact,
    loading,
    error,
  } = useContact();
    

  if (loading) return null;

  if (error) {
    return <p>Error cargando contacto.</p>;
  }

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
              text-2xl
              uppercase
              mb-4
            "
          >
            {t("contact.subtitle")}
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
            {t("contact.title")}
          </h2>

          

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
            <div className="mb-10 text-center">
              <p className="text-orange-400 uppercase tracking-[0.3em] mb-2">
                {t("contact.mail")}
              </p>

              <a
                href={`mailto:${contact.email}`}
                className="
                  block
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-white
                  hover:text-orange-400
                  transition
                  text-center
                "
              >
                {contact.email}
              </a>

              

              

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;