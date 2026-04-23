import Navbar from "../componentes/Navbar/Navbar";
//import ThreeScene from "../componentes/ThreeScene";
import SceneBlack from "../componentes/SceneBlack"
import HeroContent from "../componentes/HeroContent";

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

      {/* 🔥 CANVAS GLOBAL (fuera de todo) */}
      <SceneBlack progress={progress} />

      {/* HERO */}
      <section className="relative h-[200vh]">

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
    </div>
  );
};

export default Layout;