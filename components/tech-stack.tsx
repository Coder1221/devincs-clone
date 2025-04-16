"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"

// Tech stack data with color assignments
const techStack = [
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Next.js", category: "frontend" },
  // Removed Three.js from frontend category
  { name: "MongoDB", category: "database" },
  { name: "GraphQL", category: "api" },
  { name: "MQTT", category: "iot" },
  { name: "AWS IoT", category: "iot" },
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "TensorFlow", category: "ai" },
  { name: "PyTorch", category: "ai" },
  { name: "PostgreSQL", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Express", category: "backend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "WebSockets", category: "api" },
  { name: "Raspberry Pi", category: "iot" },
  { name: "Arduino", category: "iot" },
  { name: "Terraform", category: "devops" },
  { name: "Vue.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Python", category: "backend" },
  { name: "Go", category: "backend" },
]

// Category colors (orange variations and complementary colors)
const categoryColors = {
  frontend: "#FF9913", // primary orange
  backend: "#3A86FF", // blue
  database: "#8338EC", // purple
  api: "#FF006E", // pink
  iot: "#FB5607", // dark orange
  devops: "#00B4D8", // teal
  ai: "#06D6A0", // green
}

function TechCloud() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  // Create positions in a spherical arrangement
  const createPositions = (count) => {
    const positions = []
    const radius = 5

    for (let i = 0; i < count; i++) {
      // Use golden ratio for even distribution on sphere
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5)

      positions.push([
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ])
    }

    return positions
  }

  const positions = createPositions(techStack.length)

  return (
    <group ref={groupRef}>
      {techStack.map((tech, i) => (
        <Float
          key={tech.name}
          speed={1 + Math.random() * 2}
          rotationIntensity={0.2}
          floatIntensity={0.5}
          position={positions[i]}
        >
          <Text
            color={categoryColors[tech.category]}
            fontSize={0.5 + Math.random() * 0.5}
            maxWidth={2}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign="center"
          >
            {tech.name}
          </Text>
        </Float>
      ))}
    </group>
  )
}

export function TechStack() {
  const [filter, setFilter] = useState("frontend")

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "api", name: "API" },
    { id: "iot", name: "IoT" },
    { id: "devops", name: "DevOps" },
    { id: "ai", name: "AI & ML" },
  ]

  const filteredTech = filter === "all" ? techStack : techStack.filter((tech) => tech.category === filter)

  return (
    <section id="tech" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-primary orange-glow">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We utilize cutting-edge technologies to build robust, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden bg-card/10 backdrop-blur-sm border border-primary/5 shadow-lg h-[500px]">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <TechCloud />
            </Canvas>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Expertise Across the Full Technology Stack</h3>

            <p className="text-gray-300 mb-6">
              Our team brings together experts from various domains to deliver comprehensive solutions. From frontend
              development to IoT hardware integration, we have the skills and knowledge to handle every aspect of your
              project.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "default" : "outline"}
                  onClick={() => setFilter(category.id)}
                  className={`${
                    filter === category.id ? "bg-primary text-black" : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {filteredTech.map((tech) => (
                <div
                  key={tech.name}
                  className="rounded-lg p-3 border border-primary/10 bg-card/20 backdrop-blur-sm"
                  style={{
                    borderLeftColor: categoryColors[tech.category],
                    borderLeftWidth: "3px",
                  }}
                >
                  <span className="text-base font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
