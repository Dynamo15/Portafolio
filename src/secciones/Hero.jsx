import { useEffect, useState } from "react";
import HeroContent from "../componentes/HeroContent";

const Hero = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scroll / 400, 1);

  return (
    
    <section className="relative min-h-screen">

      <div className="sticky top-0 h-screen flex items-center justify-end pr-32 z-50">

        <div className="-translate-y-10">
          <HeroContent progress={progress} />
        </div>

      </div>

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-40
          bg-gradient-to-b
          from-transparent
          to-black/40
          pointer-events-none
          z-20
        "
      />

    </section>
    
  );
  
};

export default Hero;