import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState} from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import {Text} from "@react-three/drei";





function TechLabel({ position, children }) {

  const ref = useRef();
  const { camera } = useThree();
  

  useFrame((state) => {

    if (!ref.current) return;

    ref.current.lookAt(
      camera.position
    );

      {/* LUZ DE DIRECCION */}
    ref.current.material.opacity =
      0.8 +
      Math.sin(
        state.clock.elapsedTime * 3
      ) * 0.2;
  });

  return (
    
    <>
      
      <Text
        ref={ref}
        position={position}
        fontSize={0.22}
        color="#fab516"
        outlineWidth={0.012}
        outlineColor="#dd7514"
        anchorX="center"
        anchorY="middle"
      >
        {children}
      </Text>
      <Text
        position={position}
        fontSize={0.28}
        color="#f1bf29"
        fillOpacity={0.15}
      ></Text>
    </>
    
  );
}

function Planet() {
  const groupRef = useRef();
  const moonOrbitRef = useRef();
  const continentTexture = useLoader(
    TextureLoader,
    "/projects/continentes.png"
  );
  const satelliteRef = useRef();
  const lightRef = useRef();
  
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
    moonOrbitRef.current.rotation.y += delta * 0.02;
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

    if (lightRef.current) {

      lightRef.current.material.emissiveIntensity =
        1 +
        Math.sin(
          state.clock.elapsedTime * 5
        ) * 0.7;

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



          {/* SATELITE */}
            <group
              ref={satelliteRef}
              position={[2.6, 1.5, 0]}
            >

              {/* CUERPO PRINCIPAL */}
              <mesh>
                <boxGeometry args={[0.35, 0.22, 0.22]} />
                <meshStandardMaterial
                  color="#bfc6cf"
                  metalness={0.7}
                  roughness={0.3}
                />
              </mesh>


                {/*SEGUNDA CAJA */}
              <mesh position={[0, 0.12, 0]}>
                <boxGeometry args={[0.18, 0.08, 0.18]} />
                <meshStandardMaterial
                  color="#d1d5db"
                  metalness={0.8}
                />
              </mesh>

            <group>

              {/*PANEL IZQUIERDO */}

              <mesh position={[-0.45, 0, 0]}>
                <boxGeometry args={[0.45, 0.12, 0.03]} />
                <meshStandardMaterial
                  color="#1e40af"
                  emissive="#2563eb"
                  emissiveIntensity={0.2}
                />
              </mesh>

                {/* PANEL DERECHO*/}

              <mesh position={[0.45, 0, 0]}>
                <boxGeometry args={[0.45, 0.12, 0.03]} />
                <meshStandardMaterial
                  color="#1e40af"
                  emissive="#2563eb"
                  emissiveIntensity={0.2}
                />
              </mesh>

              {/*marco metalico izq*/}
              <mesh position={[-0.45, 0, -0.02]}>
                <boxGeometry args={[0.5, 0.16, 0.01]} />
                <meshStandardMaterial
                  color="#9ca3af"
                  metalness={0.8}
                />
              </mesh>

              {/* MARCO DERECHO */}
              <mesh position={[0.45, 0, -0.02]}>
                <boxGeometry args={[0.5, 0.16, 0.01]} />
                <meshStandardMaterial
                  color="#9ca3af"
                  metalness={0.8}
                />
              </mesh>

              {/* Línea 1 */}
                <mesh position={[-0.45, 0.03, 0.02]}>
                  <boxGeometry args={[0.42, 0.005, 0.005]} />
                  <meshBasicMaterial color="#60a5fa" />
                </mesh>

                {/* Línea 2 */}
                <mesh position={[-0.45, -0.03, 0.02]}>
                  <boxGeometry args={[0.42, 0.005, 0.005]} />
                  <meshBasicMaterial color="#60a5fa" />
                </mesh>

                <mesh position={[-0.53, 0, 0.02]}>
                  <boxGeometry args={[0.005, 0.11, 0.005]} />
                  <meshBasicMaterial color="#60a5fa" />
                </mesh>

                <mesh position={[-0.37, 0, 0.02]}>
                  <boxGeometry args={[0.005, 0.11, 0.005]} />
                  <meshBasicMaterial color="#60a5fa" />
                </mesh>

                {/* Línea 1 */}
                <mesh position={[0.45, 0.03, 0.02]}>
                  <boxGeometry args={[0.42, 0.005, 0.005]} />
                  <meshBasicMaterial color="#60a5fa" />
                </mesh>

                {/* Línea 2 */}
                <mesh position={[0.45, -0.03, 0.02]}>
                  <boxGeometry args={[0.42, 0.005, 0.005]} />
                  <meshBasicMaterial color="#60a5fa" />
                </mesh>

                {/* Línea vertical izquierda */}
                <mesh position={[0.37, 0, 0.02]}>
                  <boxGeometry args={[0.005, 0.11, 0.005]} />
                  <meshBasicMaterial color="#60a5fa" />
                </mesh>

                {/* Línea vertical derecha */}
                <mesh position={[0.53, 0, 0.02]}>
                  <boxGeometry args={[0.005, 0.11, 0.005]} />
                  <meshBasicMaterial color="#60a5fa" />
                </mesh>

            </group>
                

                


                {/* ANTENA */}
              <mesh position={[0, 0.18, 0]}>
                <cylinderGeometry
                  args={[0.02, 0.02, 0.15]}
                />
                <meshStandardMaterial color="#d1d5db" />
              </mesh>


              {/* PLANEL RECEPTOR */}
              <mesh position={[0, 0.3, 0]}>
                <sphereGeometry
                  args={[0.08, 16, 16]}
                />
                <meshStandardMaterial
                  color="#e5e7eb"
                />

                <mesh position={[0, 0.38, 0]}>
                  <sphereGeometry
                    args={[0.03, 16, 16]}
                  />
                  <meshStandardMaterial
                    color="#60a5fa"
                    emissive="#60a5fa"
                    emissiveIntensity={2}
                  />
                </mesh>
              </mesh>

              {/* BRAZO DE COMUNICACION */}

              <mesh position={[0, -0.18, 0]}>
                <cylinderGeometry
                  args={[0.015, 0.015, 0.18]}
                />
                <meshStandardMaterial
                  color="#d1d5db"
                />
              </mesh>

              {/* SENSOR FRONTAL */}

              <mesh position={[0, 0, 0.13]}>
                <sphereGeometry args={[0.04]} />
                <meshStandardMaterial
                  color="#0ea5e9"
                  emissive="#0ea5e9"
                  emissiveIntensity={1}
                />
              </mesh>


            {/* LUZ */}
              <mesh
                ref={lightRef}
                position={[0.15, 0.1, 0]}
              >
                <sphereGeometry args={[0.03]} />
                <meshStandardMaterial
                  color="#f59e0b"
                  emissive="#f59e0b"
                  emissiveIntensity={1}
                />
              </mesh>

              <TechLabel
                position={[0, -0.5, 0]}
              >
                CONTACTO
              </TechLabel>
              

            </group>

              
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

  const scale = 2.4 - progress * 1.5;
  const x = (1 - progress) * 12;
  const y = (1 - progress) * -4;
  const rotationZ = (1 - progress) * -0.4;
  
  
    
  return (
    
    <div className="w-[1800px] h-[1800px]">
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