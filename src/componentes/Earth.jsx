import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState} from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import {Text} from "@react-three/drei";
import TechLabel from "../componentes/TechLabel";
import Satelite from "../componentes/Satelite";


function Planet() {
  const groupRef = useRef();
  const moonOrbitRef = useRef();
  const continentTexture = useLoader(
    TextureLoader,
    "/projects/continentes.png"
  );
  const satelliteRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  
  //const lightRef = useRef();
  
  {/*
  const ringRef = useRef();
    const technologies = [
    "React",
    "CSS3",
    "PHP",
    "MySQL",
    "Linux",
    "JavaScript",
    "HTML",
    "Kali Linux",
    "Python",
  ];
  const techRingRef = useRef();
  */}
  

  useFrame((state, delta) => {

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }

    if (moonOrbitRef.current) {
      moonOrbitRef.current.rotation.y += delta * 0.04;
    }

    if (satelliteRef.current) {

        satelliteRef.current.position.y =
          1.5 +
          Math.sin(
            state.clock.elapsedTime * 0.7
          ) * 0.05;

        satelliteRef.current.rotation.z =
          Math.sin(
            state.clock.elapsedTime * 0.4
          ) * 0.05;
      }
    


  });

  {/*useFrame((state, delta) => {

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
    }

  });
  */}

  return (
    <>
      <group ref={groupRef}>
        
          

            {/* TIERRA */}
            <mesh>
              <sphereGeometry args={[1.2, 64, 64]} />

              <meshStandardMaterial
                color="#2c7be5"
                emissive="#0b3d91"
                emissiveIntensity={0.4}
                roughness={0.9}
                metalness={0}
              />
            </mesh>

            <mesh scale={1.002}>
              <sphereGeometry args={[1.2, 64, 64]} />

              <meshStandardMaterial
                map={continentTexture}
                transparent={true}
                alphaTest={0.1}
              />
            </mesh>
            
            {/* ATMOSFERA */}

                <mesh scale={1.08}>
                    <sphereGeometry args={[1.2, 64, 64]} />
                    <meshBasicMaterial
                        color="#60a5fa"
                        transparent
                        opacity={0.15}
                    />
                </mesh>

              {/*ANILLOS*

              <group 
              ref={techRingRef}
              rotation={[0.35, 0, -0.25]}
              >
                {
                  technologies.map((tech, index) => {

                    const angle =
                      (index / technologies.length) *
                      Math.PI * 2;

                    const radius = 2.3;

                    const x = Math.cos(angle) * radius;
                    const z = Math.sin(angle) * radius;

                    return (
                      <TechLabel
                        key={tech}
                        position={[x, 0, z]}
                      >
                        {tech}
                      </TechLabel>
                    );
                  })
                }
              </group>

              */}

                {/*GLOW*/}
                <mesh scale={1.18}>
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshBasicMaterial
                    color="#60a5fa"
                    transparent
                    opacity={0.03}
                />
                
                </mesh>

                
                {/* Glow exterior */}
            <mesh scale={1.15}>
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshBasicMaterial
                color="#4da6ff"
                transparent
                opacity={0.08}
                />
            </mesh>
            
      </group>

          
            {/* LUNA */}
          <group ref={moonOrbitRef}>

            <mesh position={[2.8, 0, 0]}>
                <sphereGeometry args={[0.22, 32, 32]} />

                <meshStandardMaterial
                color="#bdbdbd"
                roughness={1}
                metalness={0}
                />
            </mesh>
          </group>


          <Satelite
            satelliteRef={satelliteRef}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />

          
              </>  
    
  );
  
}



export default function Earth() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    
    const onScroll = () => {
      const value = Math.min(
        1,
        window.scrollY / 1700
      );

      setProgress(value);
    };

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

  const isMobile = window.innerWidth < 768;

  const scale = isMobile
    ? 1.3 - progress * 0.6
    : 2.4 - progress * 1.5;

  const x = isMobile
    ? 0
    : (1 - progress) * 12;

  const y = isMobile
    ? 0
    : (1 - progress) * -4;

  const rotationZ = (1 - progress) * -0.4;
  
    
  return (
    
    <div
      className="
        w-[260px]
        h-[260px]

        sm:w-[350px]
        sm:h-[350px]

        md:w-[600px]
        md:h-[600px]

        lg:w-[800px]
        lg:h-[800px]

        xl:w-[1800px]
        xl:h-[1800px]
      "
    >
      <Canvas camera={{ position: [0, 0, 10] }}>
        

        <ambientLight intensity={0.15} />

        <directionalLight
          position={[6, 3, 4]}
          intensity={4}
        />

        
        <group
          position={[x, y, 0]}
          scale={[scale, scale, scale]}
          rotation={[0, 0, rotationZ]}
        >
          <Planet />
          
        </group>

        

      </Canvas>
    </div>
  );
}