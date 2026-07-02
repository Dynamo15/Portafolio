import { useEffect, useState } from "react";
import HeroContent from "../components/HeroContent";

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
      <div
        className="
          sticky
          top-0
          h-screen
          flex
          items-center

          justify-center
          lg:justify-end

          px-6
          lg:pr-32

          z-50
        "
      >
        <div className="-translate-y-10">
          <HeroContent progress={progress} />
        </div>
      </div>
    </section>
    
  );
  
};

export default Hero;