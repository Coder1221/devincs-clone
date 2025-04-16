"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, Globe, Cpu, Brain, Smartphone } from "lucide-react"

// Define category constants to ensure consistency
const CATEGORY = {
  WEB: "web",
  IOT: "iot",
  AI: "ai",
  MOBILE: "mobile",
}

const categories = [
  { id: CATEGORY.WEB, label: "Web", icon: Globe },
  { id: CATEGORY.IOT, label: "IoT", icon: Cpu },
  { id: CATEGORY.AI, label: "AI", icon: Brain },
  { id: CATEGORY.MOBILE, label: "Mobile", icon: Smartphone },
]

const projects = [
  {
    id: 1,
    title: "Smart Factory Dashboard",
    description: "Real-time monitoring system for industrial IoT sensors with predictive maintenance capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    categories: [CATEGORY.IOT, CATEGORY.WEB],
    technologies: ["React", "Node.js", "MQTT", "TensorFlow", "AWS IoT"],
    metrics: [
      "35% reduction in equipment downtime",
      "50% faster response to maintenance issues",
      "20% increase in overall efficiency",
    ],
    testimonial: {
      quote:
        "The dashboard has transformed how we monitor our factory floor. Real-time insights have significantly improved our operational efficiency.",
      author: "Sarah Chen",
      position: "Operations Director",
      company: "TechManufacturing Inc.",
    },
    links: {
      live: "https://example.com",
      case_study: "https://example.com/case-study",
    },
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered E-commerce Platform",
    description: "Full-featured online store with AI-powered product recommendations and inventory management.",
    image: "/placeholder.svg?height=600&width=800",
    categories: [CATEGORY.WEB, CATEGORY.AI],
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Redis"],
    metrics: ["45% increase in customer engagement", "28% higher conversion rate", "3x faster inventory turnover"],
    testimonial: {
      quote:
        "The AI recommendations have dramatically improved our sales. The system learns and adapts to customer preferences remarkably well.",
      author: "Michael Roberts",
      position: "Digital Marketing Head",
      company: "FashionFirst",
    },
    links: {
      live: "https://example.com",
      case_study: "https://example.com/case-study",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Connected Healthcare System",
    description:
      "Comprehensive healthcare management platform with IoT device integration and real-time patient monitoring.",
    image: "/placeholder.svg?height=600&width=800",
    categories: [CATEGORY.IOT, CATEGORY.AI],
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "TensorFlow"],
    metrics: ["40% reduction in response time", "60% improvement in patient monitoring", "90% staff satisfaction rate"],
    testimonial: {
      quote:
        "This system has revolutionized how we monitor and care for our patients. The real-time alerts and AI predictions are invaluable.",
      author: "Dr. Emily Wilson",
      position: "Chief of Medicine",
      company: "Metropolitan Hospital",
    },
    links: {
      live: "https://example.com",
      case_study: "https://example.com/case-study",
    },
    featured: true,
  },
  {
    id: 4,
    title: "Mobile Banking Application",
    description:
      "Secure and intuitive mobile banking application with biometric authentication and real-time notifications.",
    image: "/placeholder.svg?height=600&width=800",
    categories: [CATEGORY.MOBILE, CATEGORY.WEB],
    technologies: ["React Native", "Node.js", "GraphQL", "PostgreSQL", "AWS"],
    metrics: [
      "98% user satisfaction rating",
      "35% increase in mobile transactions",
      "40% reduction in customer service calls",
    ],
    testimonial: {
      quote:
        "The mobile app has transformed our digital banking experience. Our customers love the intuitive interface and seamless transaction process.",
      author: "James Martinez",
      position: "Digital Banking Director",
      company: "Metro Financial",
    },
    links: {
      live: "https://example.com",
      case_study: "https://example.com/case-study",
    },
    featured: false,
  },
]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY.WEB)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [filteredProjects, setFilteredProjects] = useState(projects)

  // Effect to filter projects whenever the selected category changes
  useEffect(() => {
    const filtered = projects.filter((project) => project.categories.includes(selectedCategory))
    setFilteredProjects(filtered)
  }, [selectedCategory])

  // Debug logging to verify filtering is working correctly
  useEffect(() => {
    console.log("Selected category:", selectedCategory)
    console.log("Filtered projects:", filteredProjects)
  }, [selectedCategory, filteredProjects])

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-primary orange-glow">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our innovative solutions that drive digital transformation across industries
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative group px-6 py-2 ${
                  selectedCategory === category.id ? "bg-primary text-black" : "bg-white text-black hover:bg-gray-100"
                }`}
                variant={selectedCategory === category.id ? "default" : "outline"}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </div>
                {selectedCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary -z-10 rounded-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" ref={containerRef}>
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <Card className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />

                      {/* Featured Badge */}
                      {project.featured && (
                        <Badge className="absolute top-4 left-4 bg-primary text-black">Featured Project</Badge>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-gray-800/50 text-primary border-primary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Client Testimonial */}
                      <blockquote className="border-l-2 border-primary pl-4 mb-6">
                        <p className="text-gray-400 italic mb-2">{project.testimonial.quote}</p>
                        <footer className="text-sm">
                          <strong className="text-white">{project.testimonial.author}</strong>
                          <br />
                          <span className="text-gray-500">
                            {project.testimonial.position}, {project.testimonial.company}
                          </span>
                        </footer>
                      </blockquote>

                      {/* Action Links */}
                      <div className="flex flex-wrap gap-3">
                        <Button asChild variant="default" className="group">
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4 mr-2" />
                            View Live
                            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-gray-400 text-lg">No projects found in this category.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
