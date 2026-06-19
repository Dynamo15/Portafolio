import TechLabel from "./TechLabel";

export default function SatelliteMenu({ menuOpen }) {

    if (!menuOpen) return null;

    const items = [

        {
            text: "GitHub",
            position: [0, 1.1, 0],
            url: "https://github.com/Dynamo15"
        },

        {
            text: "LinkedIn",
            position: [-1.3, 0, 0],
            url: "https://www.linkedin.com/in/s%C3%A1nchez-herrera-ricardo-396413225/?skipRedirect=true"
        },

        {
            text: "CV",
            position: [1.3, 0, 0],
            url: "/cv.pdf"
        },

        {
            text: "Email",
            position: [0, -1.1, 0],
            url: "ricardosah19gmail.com"
        }

    ];

    return (

        <group>

            {

                items.map((item) => (

                    <group
                        key={item.text}
                        position={item.position}
                        onClick={(e) => {

                            e.stopPropagation();
                            window.open(item.url, "_blank");

                        }}
                    >
                        

                        {/* Esquinas */}

                        {/* Superior izquierda */}
                        <mesh position={[-0.33, 0.08, -0.02]}>
                            <boxGeometry args={[0.08, 0.01, 0.001]} />
                            <meshBasicMaterial color="#38bdf8" />
                        </mesh>

                        <mesh position={[-0.365, 0.045, -0.02]}>
                            <boxGeometry args={[0.01, 0.08, 0.001]} />
                            <meshBasicMaterial color="#38bdf8" />
                        </mesh>

                        {/* Superior derecha */}

                        <mesh position={[0.33, -0.08, -0.02]}>
                            <boxGeometry args={[0.08, 0.01, 0.001]} />
                            <meshBasicMaterial color="#38bdf8" />
                        </mesh>

                        <mesh position={[0.365, -0.045, -0.02]}>
                            <boxGeometry args={[0.01, 0.08, 0.001]} />
                            <meshBasicMaterial color="#38bdf8" />
                        </mesh>

                        {/* Inferior izquierda */}

                        <mesh position={[-0.33, 0.08, -0.02]}>
                            <boxGeometry args={[0.08, 0.01, 0.001]} />
                            <meshBasicMaterial color="#38bdf8" />
                        </mesh>

                        <mesh position={[-0.365, 0.045, -0.02]}>
                            <boxGeometry args={[0.01, 0.08, 0.001]} />
                            <meshBasicMaterial color="#38bdf8" />
                        </mesh>

                        {/* Inferior derecha */}

                        <mesh position={[0.33, -0.08, -0.02]}>
                            <boxGeometry args={[0.08, 0.01, 0.001]} />
                            <meshBasicMaterial color="#38bdf8" />
                        </mesh>

                        <mesh position={[0.365, -0.045, -0.02]}>
                            <boxGeometry args={[0.01, 0.08, 0.001]} />
                            <meshBasicMaterial color="#38bdf8" />
                        </mesh>

                        <TechLabel position={[0, 0, 0]}>
                            {item.text}
                        </TechLabel>

                    </group>

                ))

            }

        </group>

    );

}