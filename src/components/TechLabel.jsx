import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function TechLabel({

    position,
    children

}) {

    const ref = useRef();
    const glowRef = useRef();

    const { camera } = useThree();

    useFrame((state) => {

        if (!ref.current || !glowRef.current) return;

        ref.current.lookAt(camera.position);
        glowRef.current.lookAt(camera.position);

        const pulse =
            0.75 +
            Math.sin(state.clock.elapsedTime * 2) * 0.15;

        glowRef.current.material.opacity = pulse;

    });

    return (

        <>

            {/* Glow */}

            <Text
                ref={ref}
                position={position}
                fontSize={0.16}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"

                renderOrder={100}

            >
                {children}
            </Text>

            {/* Texto principal */}

            <Text

                ref={ref}
                position={position}
                fontSize={0.16}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"

            >

                {children}
                <meshBasicMaterial
                  depthTest={false}
                  depthWrite={false}
                  toneMapped={false}
                />

            </Text>

        </>

    );

}