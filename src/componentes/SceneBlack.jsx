/* global Math */
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Group } from "three/examples/jsm/libs/tween.module.js";





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

    const count = 1000;

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

            <pointsMaterial 
                size={0.02}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
}


function AccretionDisk() {
    const meshRef1 = useRef();
    const materialRef1 = useRef();

    /*const meshRefUpper = useRef();
    const materialRefUpper = useRef();;*/
    

    useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (materialRef1.current && meshRef1.current) {
        materialRef1.current.uniforms.time.value += 0.01;

        meshRef1.current.rotation.z += 0.002 + Math.sin(t) * 0.001;
    }


    /*if (materialRefUpper.current && meshRefUpper.current) {
            materialRefUpper.current.uniforms.time.value += 0.01;
            meshRefUpper.current.rotation.z += 0.015;
        }*/
        
});
    return (

            <>

                //DISCO INFERIOR A NIVEL DE CAMARA


                {/* Glow */}
                <mesh rotation={[Math.PI / 2.2, 0.6, 0.3]}>
                    <planeGeometry args={[10, 10, 256, 256]} />
                    <meshBasicMaterial 
                        color="#c8611c"
                        transparent
                        opacity={0.06}
                    />
                </mesh>


                
                <mesh 
                    ref={meshRef1}
                    position={[0, 0, 0]}
                    rotation={[Math.PI / 2, 7, 5]}
                >
                    <planeGeometry args={[12, 12, 256, 256]} />
                    <shaderMaterial 
                    
                    shaderMaterial ref={materialRef1}
                    side={THREE.DoubleSide}
                    uniforms={{
                    time: { value: 0 }
                }}
                vertexShader={`
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
                    }
                `}
                fragmentShader={`
                    uniform float time;
                    varying vec2 vUv;

                    void main() {
                        vec2 uv = vUv * 2.0 - 1.0;

                        float dist = length(uv);

                        // 🌀 LENTE GRAVITACIONAL FUERTE
                        float lens = 1.5 / (dist + 0.3);
                        uv += uv * lens * 0.6;

                        float newDist = length(uv);
                        

                        // 🌌 DISCO GRUESO REALISTA
                        float inner = smoothstep(0.15, 0.45, newDist);
                        float outer = smoothstep(0.5, 1.1, newDist);
                        float disk = inner * (1.0 - outer);

                        // 🔥 TURBULENCIA (simula gas)
                        float angle = atan(uv.y, uv.x);
                        float swirl = sin(angle * 10.0 + time * 4.0);
                        float turbulence = swirl * 0.15;

                        float intensity = disk * 1.8 + turbulence * 0.3;
                        

                        // 💥 BOOST CENTRO
                        float coreGlow = 1.0 / (newDist * 10.0 + 0.1);
                        intensity += coreGlow * 0.6;

                        // 🌈 COLOR INTERSTELLAR
                        vec3 white = vec3(1.0, 1.0, 1.0);
                        vec3 orange = vec3(1.0, 0.5, 0.1);
                        vec3 red = vec3(0.4, 0.05, 0.02);

                        vec3 color = mix(red, orange, intensity);
                        //color = mix(color, #830404, pow(intensity, 3.0));

                        // 🌟 GLOW EXTERNO
                        color += coreGlow * 1.2;

                        // 🌟 PHOTON RING PRO
                        float photonDist = abs(newDist - 0.2);

                        // base ultra delgada
                        float photonRing = exp(-photonDist * 140.0);

                        // núcleo más intenso (centro del anillo)
                        float photonCore = exp(-photonDist * 300.0);

                        // color físico (más blanco en el centro)
                        vec3 photonColor = vec3(1.0, 0.95, 0.85) * photonRing * 5.0;
                        photonColor += vec3(1.0, 1.0, 1.0) * photonCore * 8.0;

                        // 🔥 añadir al color
                        color += photonColor;

                        
                        
                        // 🌑 EVENT HORIZON SHADOW
                        float shadow = smoothstep(0.15, 0.35, dist);
                        color *= shadow;

                        // ✨ TRANSPARENCIA
                        float alpha = clamp(disk * 0.9 + photonRing * 0.3, 0.0, 1.0);

                        gl_FragColor = vec4(color, alpha);
                    }
                `}
                transparent
                depthTest={true}    
                depthWrite={false}
            />
        </mesh> 





        {/*
        <mesh
            ref={meshRefUpper}
            position={[0, 0.6, 0]}   // 👈 centrado con el agujero
            scale={[1, 0.6, 1]}      // 👈 menos aplastado
            rotation={[Math.PI / 2.6, 0.8, 0.3]}
        >
            <planeGeometry args={[12, 12, 256, 256]} />
            <shaderMaterial
                ref={materialRefUpper}
                uniforms={{
                    time: { value: 0 }
                }}
                vertexShader={`
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
                    }
                `}
                
                fragmentShader={`
                    uniform float time;
                    varying vec2 vUv;

                    void main() {
                        vec2 uv = vUv * 2.0 - 1.0;
                        uv.y += uv.x * uv.x * 0.5;

                        float dist = length(uv);
                        

                        // 🌀 LENTE GRAVITACIONAL FUERTE
                        float lens = 1.5 / (dist + 0.3);
                        uv += uv * lens * 0.6;

                        float newDist = length(uv);

                        // 🌌 DISCO GRUESO REALISTA
                        float inner = smoothstep(0.15, 0.4, newDist);
                        float outer = smoothstep(0.5, 1.0, newDist);
                        float disk = inner * (1.0 - outer);

                        // 🔥 TURBULENCIA (simula gas)
                        float angle = atan(uv.y, uv.x);
                        float swirl = sin(angle * 10.0 + time * 4.0);
                        float turbulence = swirl * 0.15;
                        

                        float intensity = disk + turbulence;

                        // 🔥 DISCO SUPERIOR REAL (NO círculo)

                        vec2 warped = uv;

                        // distorsión gravitacional fuerte
                        float lens2 = 2.5 / (length(warped) + 0.2);
                        warped += warped * lens2 * 0.8;

                        // curva tipo parábola (esto crea el arco)
                        warped.y += warped.x * warped.x * 2.5 + 0.8;

                        // banda horizontal (NO radial)
                        float band = exp(-pow(warped.y, 2.0) * 20.0);

                        // limitar ancho (forma de anillo)
                        float ringMask = smoothstep(0.2, 0.5, abs(warped.x)) *
                                        (1.0 - smoothstep(0.5, 0.9, abs(warped.x)));

                        float upper = band * ringMask;

                        // solo parte superior visible
                        upper *= smoothstep(-0.3, 0.4, uv.y);

                        // sumar al disco
                        intensity += upper * 2.0;

                        // 💥 BOOST CENTRO
                        float coreGlow = 1.0 / (newDist * 10.0 + 0.1);
                        intensity += coreGlow * 0.6;

                        // 🌈 COLOR INTERSTELLAR
                        vec3 white = vec3(1.0, 1.0, 1.0);
                        vec3 orange = vec3(1.0, 0.5, 0.1);
                        vec3 red = vec3(0.4, 0.05, 0.02);

                        vec3 color = mix(red, orange, intensity);
                        //color = mix(color, #830404, pow(intensity, 3.0));

                        // 🌟 GLOW EXTERNO
                        color += coreGlow * 1.2;

                        // 🌑 EVENT HORIZON SHADOW
                        float shadow = smoothstep(0.15, 0.35, dist);
                        color *= shadow;

                        // ✨ TRANSPARENCIA
                        float alpha = clamp(disk * 0.9 + upper * 0.6, 0.0, 1.0);

                        // 🌑 agujero negro (ocultamiento)
                        float hole = length(uv);
                        float holeMask = smoothstep(0.05, 0.25, hole);
                        float centerFade = smoothstep(0.0, 0.3, newDist);
                        color *= centerFade;
                        float holeShadow = smoothstep(0.2, 0.5, length(uv));
                        color *= holeShadow;

                        // aplicar recorte
                        alpha *= mix(1.0, holeMask, 0.5);

                        gl_FragColor = vec4(color, alpha);
                    }
                `}
                transparent
                depthWrite={false}
                side={THREE.DoubleSide}
            />
        </mesh>
        */}
                
            </>

            
    );



}







function BlackHoleCore() {
    return (
        <>
            {/* 🕳️ Núcleo (event horizon) */}
            <mesh>
                <sphereGeometry args={[0.6, 64, 64]} />
                <meshBasicMaterial color="black" />
            </mesh>

            {/* 🌑 Halo gravitacional sutil */}
            <mesh>
                <sphereGeometry args={[0.72, 64, 64]} />
                <meshBasicMaterial 
                    color="black" 
                    transparent 
                    opacity={0.15} 
                />
            </mesh>

            {/* ✨ Glow interno (muy leve, opcional pero pro) */}
            <mesh>
                <sphereGeometry args={[0.9, 64, 64]} />
                <meshBasicMaterial 
                    color="#220022"
                    transparent
                    opacity={0.05}
                />
            </mesh>
            
        </>

        
    );

}

export default function SceneBlack({ progress = 0 }) {
  return (
    <div
        style={{
        opacity: 1,
        pointerEvents: "none",
        position: "absolute", // 👈 importante
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0
        }}
    >
      <Canvas
        gl={{ antialias: true }}
        camera={{ position: [0, 1.5, 6], fov: 45 }}
      >
        <ambientLight intensity={0.2} />
        <CameraController />
        <Stars />
        <group position={[-2.0, 0, 0]}>
          <BlackHoleCore />
          <AccretionDisk />
        </group>
      </Canvas>
    </div>
  );
}

