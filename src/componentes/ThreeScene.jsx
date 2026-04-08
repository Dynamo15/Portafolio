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
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // RENDER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio, 1.5); // ✅ AQUÍ
    mountRef.current.appendChild(renderer.domElement);

    let animationId;
    let lastTime = 0;
    
      loader.load(
      "/textures/earth.jpg",
      

      (texture) => {
        console.log("imagen cargada ✅"); 
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

        const material = new THREE.PointsMaterial({
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

        

        const animate = (time) => {
          animationId = requestAnimationFrame(animate);

          if (time - lastTime < 16) return;

          
          lastTime = time;

          points.rotation.y += 0.003;
          renderer.render(scene, camera);
        };

        animate();
      },

      undefined,

      (error) => {
        console.error("error cargando imagen ❌", error); 
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