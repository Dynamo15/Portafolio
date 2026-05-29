import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Shape } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Planet() {
  const groupRef = useRef();
  const moonOrbitRef = useRef();
  //const continent = new Shape();
  const continentTexture = useLoader(
    TextureLoader,
    "/projects/continentes.png"
  );

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.40;
    }

    if (moonOrbitRef.current) {
    moonOrbitRef.current.rotation.y += delta * 0.02;
    }
  });
  console.log(continentTexture);

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


              {/* NUBES */}
          

      
            {/* ATMOSFERA */}

                <mesh scale={1.08}>
                    <sphereGeometry args={[1.2, 64, 64]} />
                    <meshBasicMaterial
                        color="#60a5fa"
                        transparent
                        opacity={0.15}
                    />
                </mesh>

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
    </>  
    
  );
}

export default function Earth() {
  return (
    <div className="w-[550px] h-[550px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.15} />

        <directionalLight
          position={[6, 3, 4]}
          intensity={4}
        />

        <Planet />
      </Canvas>
    </div>
  );
}