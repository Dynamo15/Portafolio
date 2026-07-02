import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import TechLabel from "../components/TechLabel";
import { DoubleSide } from "three";
import SateliteMenu from "../components/SateliteMenu";


export default function Satellite({

    satelliteRef,
    menuOpen,
    setMenuOpen

}) {

  const { t } = useContext(LanguageContext);

    return (
      


        <group
              ref={satelliteRef}
              position={[2.6, 1.5, 0]}
              onClick={() => setMenuOpen(!menuOpen)}
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

              <TechLabel position={[0, -0.5, 0]}>
                {t("common.contact")}
            </TechLabel>

            <SateliteMenu
                menuOpen={menuOpen}
            />
        </group>

    );

}