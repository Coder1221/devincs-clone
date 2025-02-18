
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

const GeometricShape = () => {
  const meshRef = useRef()

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#00ff9d"
          wireframe
          emissive="#00ff9d"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div style={{ height: '400px' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <GeometricShape />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
