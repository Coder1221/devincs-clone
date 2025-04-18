"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from "lucide-react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.PerspectiveCamera | null
    renderer: THREE.WebGLRenderer | null
    controls: OrbitControls | null
  }>({
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
  })
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize the scene
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    // Get accurate container dimensions
    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(0, 0, 6)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5

    // Store references for cleanup and resize
    sceneRef.current = {
      scene,
      camera,
      renderer,
      controls,
    }

    // Grid of nodes
    const nodeCount = 150
    const nodeGeometry = new THREE.SphereGeometry(0.025, 16, 16)
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })

    // Orange accent for some nodes
    const accentMaterial = new THREE.MeshBasicMaterial({ color: 0xff9913 })

    const nodes = new THREE.Group()
    scene.add(nodes)

    // Create nodes in a grid pattern
    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(nodeGeometry, Math.random() > 0.8 ? accentMaterial : nodeMaterial)

      // Position in 3D space in a sphere-like formation
      const radius = 3.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      mesh.position.x = radius * Math.sin(phi) * Math.cos(theta)
      mesh.position.y = radius * Math.sin(phi) * Math.sin(theta)
      mesh.position.z = radius * Math.cos(phi)

      nodes.add(mesh)
    }

    // Create connections between nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x444444,
      transparent: true,
      opacity: 0.3,
    })

    const nodePositions = nodes.children.map((node) => node.position)

    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        // Only connect if they're close enough
        const distance = nodePositions[i].distanceTo(nodePositions[j])
        if (distance < 1.5) {
          const geometry = new THREE.BufferGeometry().setFromPoints([nodePositions[i], nodePositions[j]])
          const line = new THREE.Line(geometry, lineMaterial)
          nodes.add(line)
        }
      }
    }

    // Add a central sphere for IoT hub
    const hubGeometry = new THREE.SphereGeometry(0.3, 32, 32)
    const hubMaterial = new THREE.MeshBasicMaterial({
      color: 0xff9913,
      transparent: true,
      opacity: 0.8,
    })
    const hub = new THREE.Mesh(hubGeometry, hubMaterial)
    scene.add(hub)

    setIsInitialized(true)

    return () => {
      // Cleanup
      if (sceneRef.current.scene) {
        sceneRef.current.scene.clear()
      }
      if (sceneRef.current.renderer) {
        sceneRef.current.renderer.dispose()
      }
      if (sceneRef.current.controls) {
        sceneRef.current.controls.dispose()
      }
    }
  }, [])

  // Animation loop - separate from initialization to avoid re-creating the scene
  useEffect(() => {
    if (!isInitialized) return

    const { scene, camera, renderer, controls } = sceneRef.current
    if (!scene || !camera || !renderer || !controls) return

    // Force a resize immediately after initialization
    handleResize()

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()

      // Find the hub (last added mesh)
      const hub = scene.children.find(
        (child) =>
          child instanceof THREE.Mesh &&
          child.geometry instanceof THREE.SphereGeometry &&
          child.geometry.parameters.radius === 0.3,
      )

      if (hub) {
        // Subtle pulsing of the hub
        const time = Date.now() * 0.001
        hub.scale.set(1 + Math.sin(time) * 0.1, 1 + Math.sin(time) * 0.1, 1 + Math.sin(time) * 0.1)
      }

      renderer.render(scene, camera)
    }

    const animationId = requestAnimationFrame(animate)

    // Handle resize
    function handleResize() {
      if (!containerRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      if (camera) {
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      }

      if (renderer) {
        renderer.setSize(width, height)
      }
    }

    // Add resize listener
    window.addEventListener("resize", handleResize)

    // Force a resize after a short delay to ensure proper sizing
    const resizeTimeout = setTimeout(() => {
      handleResize()
    }, 100)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      clearTimeout(resizeTimeout)
    }
  }, [isInitialized])

  return (
    <section className="relative h-screen w-full overflow-hidden" ref={containerRef}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }} // Ensure canvas is block-level
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Dev</span>
            <span className="text-primary orange-glow">incs</span>: Innovating the Future with Smart Web & IoT Solutions
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Connecting businesses to the future with cutting-edge web applications and IoT ecosystems that transform
            data into actionable insights.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="glow-effect group">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button variant="outline" size="lg" className="group border-primary bg-transparent backdrop-blur-sm">
              View Solutions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
