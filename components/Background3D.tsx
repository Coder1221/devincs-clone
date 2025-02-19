
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create multiple geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(15, 1),
      new THREE.TorusGeometry(25, 1, 16, 100)
    ];

    const materials = [
      new THREE.MeshPhongMaterial({
        color: 0x2A7FFF,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({
        color: 0x00FF9D,
        wireframe: true,
        transparent: true,
        opacity: 0.2,
        shininess: 100
      })
    ];

    const meshes = geometries.map((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index]);
      scene.add(mesh);
      return mesh;
    });

    // Add multiple lights for better effect
    const lights = [
      new THREE.DirectionalLight(0x00FF9D, 1),
      new THREE.DirectionalLight(0x2A7FFF, 1),
      new THREE.AmbientLight(0xffffff, 0.2)
    ];

    lights[0].position.set(1, 1, 1);
    lights[1].position.set(-1, -1, -1);
    lights.forEach(light => scene.add(light));

    camera.position.z = 50;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate meshes with different speeds and axes
      meshes[0].rotation.x += 0.002;
      meshes[0].rotation.y += 0.003;
      meshes[1].rotation.x += 0.003;
      meshes[1].rotation.z += 0.002;

      // Add subtle movement based on mouse position
      meshes.forEach(mesh => {
        mesh.rotation.x += mouseY * 0.001;
        mesh.rotation.y += mouseX * 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', height: '100%' }} />;
}
