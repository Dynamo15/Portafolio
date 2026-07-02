import Navbar from "../components/Navbar/Navbar";
import SceneBlack from "../components/SceneBlack";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Layout = ({ children }) => {
    const [scroll, setScroll] = useState(0);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    useEffect(() => {

    const handleScroll = () => {

      setScroll(window.scrollY);

      const about = document.getElementById("about");
      const contact = document.getElementById("contact");

      if (!about) return;

      const rect = about.getBoundingClientRect();

      const visible =
        rect.top < window.innerHeight * 0.4 &&
        rect.bottom > window.innerHeight * 0.4;

        setAboutVisible(visible);

          if (contact) {

          const contactRect = contact.getBoundingClientRect();

          const contactIsVisible =
            contactRect.top < window.innerHeight * 0.4 &&
            contactRect.bottom > window.innerHeight * 0.4;

          setContactVisible(contactIsVisible);

      }

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const progress = Math.min(scroll / 400, 1);
  

  return (
    <div className="text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />
      <ScrollToTopButton />

      {/* BOTONES */}
      <div
        className={`
          neon
          fixed

          left-4
          md:left-14

          bottom-6
          md:bottom-auto

          top-auto
          md:top-1/2

          md:-translate-y-2/3

          flex
          flex-row
          md:flex-col

          items-center

          gap-6
          md:gap-8

          text-orange-400

          text-3xl
          md:text-4xl

          z-[999]

          transition-all
          duration-700

          ${
            aboutVisible
              ? "opacity-0 -translate-x-8 pointer-events-none"
              : "opacity-100 translate-x-0"
          }
        `}
      >
        <a
          href="https://github.com/Dynamo15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:scale-125 transition duration-300" />
        </a>

        <a
          href="https://www.linkedin.com/in/s%C3%A1nchez-herrera-ricardo-396413225/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:scale-125 transition duration-300" />
        </a>


        <a
          href="mailto:ricardosah19@gmail.com"
          className={`
            transition-all
            duration-500
            ${
              contactVisible
                ? "opacity-0 -translate-x-6 pointer-events-none"
                : "opacity-100 translate-x-0"
            }
          `}
        >
          <MdEmail className="hover:scale-125 transition duration-300" />
        </a>
      </div>

      {/* SCENE */}
      <div className="fixed inset-0 -z-10">
        <SceneBlack progress={progress} />
      </div>

      {/*Earth*/}

      {/* CONTENT */}
      <main className="relative z-20">
        {children}
      </main>

      {/* FOOTER 
      <footer className="text-center p-6 relative z-20">
        Ricardo Sánchez
      </footer>*/}

    </div>
  );
};

export default Layout;
