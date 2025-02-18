
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    containerRef.current.appendChild(renderer.domElement);

    // Create geometric shapes
    const shapes: THREE.Mesh[] = [];
    const geometries = [
      new THREE.TetrahedronGeometry(1),
      new THREE.OctahedronGeometry(1),
      new THREE.IcosahedronGeometry(1)
    ];

    for (let i = 0; i < 5; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff9d,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const shape = new THREE.Mesh(geometry, material);
      
      shape.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 15
      );
      shapes.push(shape);
      scene.add(shape);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      shapes.forEach(shape => {
        shape.rotation.x += 0.005;
        shape.rotation.y += 0.005;
        shape.position.y += Math.sin(Date.now() * 0.001) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ 
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    opacity: 0.7
  }} />;
};

export default BackgroundAnimation;
