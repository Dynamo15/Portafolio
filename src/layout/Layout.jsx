import Navbar from "../componentes/Navbar/Navbar";
//import ThreeScene from "../componentes/ThreeScene";
import SceneBlack from "../componentes/SceneBlack"
import HeroContent from "../componentes/HeroContent";
import {FaGithub, FaLinkedin} from "react-icons/fa";
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
    <div className="text-white">
    
    <Navbar />

    {/* 🔥 ICONOS (FUERA DEL HERO) */}
    <div className=" neon
      fixed left-0 top-1/2 -translate-y-2/3
      flex ml-5 flex-col items-center gap-8
      text-orange-400 text-4xl
      z-[999]
    ">
      <a href="https://github.com/Dynamo15" target="_blank">
        <FaGithub className="hover:scale-125 transition duration-300" />
      </a>

      <a href="https://www.linkedin.com/in/s%C3%A1nchez-herrera-ricardo-396413225/" target="_blank">
        <FaLinkedin className="hover:scale-125 transition duration-300" />
      </a>

      <a href="mailto:ricardosah19@gmail.com">
        <MdEmail className="hover:scale-125 transition duration-300" />
      </a>
    </div>

    {/* CANVAS */}
    <SceneBlack progress={progress} />

    {/* HERO */}
      <section className="relative h-[130vh]">

        <div className="hero-fade"></div>

        {/* TEXTO */}
        <div className="sticky top-0 h-screen flex items-center justify-end pr-32 z-50">
          <div className="-translate-y-10">
            <HeroContent progress={progress} />
          </div>
        </div>

      </section>

      <main className="bg-black relative z-20">
        {children}
      </main>

      <footer className="text-center p-6 bg-black">
        Ricardo Sánchez
      </footer>
      <section
  id="contact"
  className="min-h-screen flex items-center justify-center"
>
  <div>
    <h2 className="text-4xl font-bold text-white">Contact Me</h2>
    <p className="text-gray-400 mt-4">
      Email: ricardosah19@gmail.com
    </p>
  </div>
</section>
    </div>
  );
};

export default Layout;