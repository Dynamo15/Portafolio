
import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";



function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 2.5, 6);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
}

function Stars() {
  const starsRef = useRef();

  
  const count = 300;

  const starPositions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }

    return arr;
  }, []);

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={starPositions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial size={0.02} depthWrite={false} />
    </points>
  );
}

function AccretionDisk() {
  const meshRef1 = useRef();
  const mat1 = useRef();

  const meshRef2 = useRef();
  const mat2 = useRef();

  useFrame((state, delta) => {
    const speed = delta * 60;

    if (mat1.current && meshRef1.current) {
      mat1.current.uniforms.time.value += delta;
      meshRef1.current.rotation.z += 0.0012 * speed;
    }

    if (mat2.current && meshRef2.current) {
      mat2.current.uniforms.time.value += delta;
      meshRef2.current.rotation.z += 0.002 * speed;
    }
  });

  return (
    <>
      {/* Glow */}
      <mesh rotation={[Math.PI / 2.2, 0.6, 0.3]}>
        <planeGeometry args={[10, 10, 32, 32]} />
        <meshBasicMaterial
          color="#c8611c"
          transparent
          opacity={0.06}
        />
      </mesh>

      {/* DISCO 1 */}
      <mesh
        ref={meshRef1}
        rotation={[Math.PI / 2, 7, 5]}
      >
        {/* antes 256x256 */}
        <planeGeometry args={[12, 12, 64, 64]} />

        <shaderMaterial
          ref={mat1}
          side={THREE.DoubleSide}
          transparent
          depthWrite={false}
          uniforms={{
            time: { value: 0 }
          }}
          vertexShader={`
            varying vec2 vUv;
            void main(){
              vUv = uv;
              gl_Position = projectionMatrix *
                            modelViewMatrix *
                            vec4(position,1.0);
            }
          `}
          fragmentShader={`
            uniform float time;
            varying vec2 vUv;

            float random(vec2 st){
              return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453);
            }

            void main(){
              vec2 uv = vUv * 2.0 - 1.0;

              float dist = length(uv);

              float lens = 1.5 / (dist + 0.3);
              uv += uv * lens * 0.6;

              float d = length(uv);

              float inner = smoothstep(0.15,0.45,d);
              float outer = smoothstep(0.5,1.1,d);
              float disk = inner * (1.0 - outer);

              float angle = atan(uv.y, uv.x);

              float swirl = sin(angle * 10.0 + time * 4.0);
              float turbulence = swirl * 0.15;

              float noise = random(uv * 70.0 + time * 0.2);
              float particles = step(0.55, noise);

              float streaks = pow(abs(sin(angle * 35.0)), 5.0);

              float grain = disk * particles * streaks;

              float intensity = grain * 2.6 + turbulence * 0.2;

              float coreGlow = 1.0 / (d * 10.0 + 0.1);
              intensity += coreGlow * 0.6;

              vec3 orange = vec3(1.0,0.5,0.1);
              vec3 red = vec3(0.4,0.05,0.02);

              vec3 color = mix(red, orange, intensity);
              color += coreGlow * 1.1;

              float photonDist = abs(d - 0.2);
              float photonRing = exp(-photonDist * 120.0);

              color += vec3(1.0,0.95,0.85) * photonRing * 4.0;

              float shadow = smoothstep(0.15,0.35,dist);
              color *= shadow;

              float alpha = clamp(grain + photonRing * 0.25,0.0,1.0);

              gl_FragColor = vec4(color, alpha);
            }
          `}
        />
      </mesh>

      {/* DISCO 2 */}
      <mesh
        ref={meshRef2}
        rotation={[Math.PI / 2, 7, 5]}
      >
        <planeGeometry args={[12, 12, 64, 64]} />

        <shaderMaterial
          ref={mat2}
          side={THREE.DoubleSide}
          transparent
          depthWrite={false}
          uniforms={{
            time: { value: 0 }
          }}
          vertexShader={`
            varying vec2 vUv;
            void main(){
              vUv = uv;
              gl_Position = projectionMatrix *
                            modelViewMatrix *
                            vec4(position,1.0);
            }
          `}
          fragmentShader={`
            uniform float time;
            varying vec2 vUv;

            void main(){
              vec2 uv = vUv * 2.0 - 1.0;

              float dist = length(uv);

              float lens = 1.5 / (dist + 0.3);
              uv += uv * lens * 0.6;

              float d = length(uv);

              float inner = smoothstep(0.15,0.45,d);
              float outer = smoothstep(0.5,1.1,d);
              float disk = inner * (1.0 - outer);

              float angle = atan(uv.y, uv.x);
              float swirl = sin(angle * 10.0 + time * 4.0);

              float intensity = disk * 1.8 + swirl * 0.12;

              float coreGlow = 1.0 / (d * 10.0 + 0.1);
              intensity += coreGlow * 0.6;

              vec3 orange = vec3(1.0,0.5,0.1);
              vec3 red = vec3(0.4,0.05,0.02);

              vec3 color = mix(red, orange, intensity);
              color += coreGlow * 1.2;

              float photonDist = abs(d - 0.2);
              float photonRing = exp(-photonDist * 130.0);

              color += vec3(1.0) * photonRing * 5.0;

              float shadow = smoothstep(0.15,0.35,dist);
              color *= shadow;

              float alpha = clamp(disk + photonRing * 0.3,0.0,1.0);

              gl_FragColor = vec4(color, alpha);
            }
          `}
        />
      </mesh>
    </>
  );
}

function BlackHoleCore() {
  return (
    <>
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="black" />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.72, 24, 24]} />
        <meshBasicMaterial
          color="black"
          transparent
          opacity={0.15}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.9, 24, 24]} />
        <meshBasicMaterial
          color="#220022"
          transparent
          opacity={0.05}
        />
      </mesh>
    </>
  );
}

export default function SceneBlack() {
  const [opacity, setOpacity] = useState(1);

    useEffect(() => {
    const onScroll = () => {
      const maxScroll = 1200;

      const currentScroll = window.scrollY;

      // Calcula opacidad entre 1 y 0
      const fade = Math.max(0, 1 - currentScroll / maxScroll);

      setOpacity(fade);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        transition: "opacity 0.1s linear"
      }}
    >
      <Canvas
        dpr={[1, 1.3]} // 🔥 antes usaba resolución completa
        gl={{
          antialias: false,
          powerPreference: "high-performance"
        }}
        camera={{
          position: [0, 1.5, 6],
          fov: 45
        }}
      >
        <ambientLight intensity={0.2} />

        <CameraController />
        <Stars />

        <group
          position={[-2, -(1 - opacity) * 1.5, 0]}
          scale={[opacity, opacity, opacity]}
          visible={opacity > 0.01}
        >

          <BlackHoleCore />
          <AccretionDisk />
        </group>
      </Canvas>
    </div>
  );
}