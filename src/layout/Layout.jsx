import Navbar from "../componentes/Navbar/Navbar";
import SceneBlack from "../componentes/SceneBlack";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scroll / 400, 1);

  return (
    <div className="text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* ICONOS */}
      <div
        className="
          neon
          fixed left-0 top-1/2 -translate-y-2/3
          flex ml-5 flex-col items-center gap-8
          text-orange-400 text-4xl
          z-[999]
        "
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

        <a href="mailto:ricardosah19@gmail.com">
          <MdEmail className="hover:scale-125 transition duration-300" />
        </a>
      </div>

      {/* SCENE */}
      <div className="fixed inset-0 -z-10">
        <SceneBlack progress={progress} />
      </div>

      {/* CONTENT */}
      <main className="relative z-20">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="text-center p-6 relative z-20">
        Ricardo Sánchez
      </footer>

    </div>
  );
};

export default Layout;
