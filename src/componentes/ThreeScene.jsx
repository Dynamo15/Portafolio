import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef(null);
  const initialized = useRef(false);
  

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true; 
    const width = window.innerWidth;
    const height = window.innerHeight;
    const loader = new THREE.TextureLoader();
    

    // ESCENA
    const scene = new THREE.Scene();

    // CÁMARA
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.x = 4;  //mover la camara en eje x
    camera.position.z = 10.5;  //mover la camara en eje z
    camera.position.y = -1;    // MOVER LA CAMARA EN EJE Y 
    

    // RENDER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio, 1.5); 
    mountRef.current.appendChild(renderer.domElement);

    let animationId;
    let lastTime = 0;
    let dissolve = 0;

    window.addEventListener("scroll", () => {
          const scrollY = window.scrollY;
          const maxScroll = window.innerHeight;

          dissolve = Math.min(scrollY / maxScroll, 1);
        });
    
      loader.load("/textures/earth.jpg",(texture) => {
      
        console.log("imagen cargada"); 
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const particleTexture = new THREE.TextureLoader().load("/textures/particle.png");

        const img = texture.image;

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        

        const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

        const vertices = [];
        const radius = 1;
        const step = 6;

        for (let y = 0; y < img.height; y += step) {
          for (let x = 0; x < img.width; x += step) {
            const i = (y * img.width + x) * 4;
            const r = imageData[i];

            if (r > 150) {
              const u = 1 - (x / img.width);
              const v = y / img.height;

              const theta = u * Math.PI * 2;
              const phi = v * Math.PI;

              const px = radius * Math.sin(phi) * Math.cos(theta);
              const py = radius * Math.cos(phi);
              const pz = radius * Math.sin(phi) * Math.sin(theta);

              vertices.push(px, py, pz);
            }
          }
        }

        console.log("vertices:", vertices.length);

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(vertices, 3)
        );
        geometry.computeBoundingSphere();

        //const step = 8;

        const material = new THREE.PointsMaterial({            //materiales de puntos
            size: 0.03,
            map: particleTexture,
            transparent: true,
            alphaTest: 0.01,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            color: 0xffffff,
          });
        

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        


        //TARGET
                                        //x  y   z
        const target = new THREE.Vector3(4, 6, 2);
        const lineY = 3;     // altura (navbar)
        const lineWidth = 6; // ancho de la línea

        const targetMesh = new THREE.Mesh(               
          new THREE.SphereGeometry(0.05),
          new THREE.MeshBasicMaterial({ color: 0xff0000 })
        );

        targetMesh.position.copy(target);
        scene.add(targetMesh);             
        //



        //parte donde ocurre la animacion

        const animate = (time) => {                              
          animationId = requestAnimationFrame(animate);

          
          //dissolve effect
          const positions = geometry.attributes.position.array;

          for (let i = 0; i < positions.length; i += 3) {
            const factor = Math.random();

            if (factor < dissolve) {
              const px = positions[i];
              const py = positions[i + 1];
              const pz = positions[i + 2];

              // 🔥 destino en una línea horizontal
              const targetX = (Math.random() - 0.5) * lineWidth; // dispersión horizontal
              const targetY = lineY; // altura fija (navbar)
              const targetZ = 0;

              const dirX = targetX - px;
              const dirY = targetY - py;
              const dirZ = targetZ - pz;

              positions[i] += dirX * 0.02;
              positions[i + 1] += dirY * 0.02;
              positions[i + 2] += dirZ * 0.02;
            }
          }
          geometry.attributes.position.needsUpdate = true;
          ////////////////////////////////////////////////////////////////////

          if (time - lastTime < 16) return;

          
          lastTime = time;

          points.rotation.y += 0.003;
          points.position.x = 0; 
          renderer.render(scene, camera);
        };

        animate();
      },

      undefined,

      (error) => {
        console.error("error cargando imagen ", error); 
      }
    );

    
    

    // 🧹 CLEANUP
    return () => {
      cancelAnimationFrame(animationId); 

      if (mountRef.current) {
        mountRef.current.innerHTML = "";
      }

      renderer.dispose();
    };
  }, []);

  return (
    <div
        ref={mountRef}
        style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, 
        }}
    />
    );
}