"use client"

import { useState } from "react"
import { Globe, Activity, CloudCog, Database, Brain, Network } from "lucide-react"

const serviceData = [
  {
    icon: Network,
    title: "Emdedded Development",
    description: "We deliver robust, high-performance embedded software solutions to power your devices and systems.",
    features: [
      "Custom Embedded Software Development",
      "Firmware Updates",
      "IoT Embedded Solutions",
      "IoT Security"
    ],
  },
  {
    icon: Globe,
    title: "Mobile & Web Development",
    description:
      "Custom web applications built with cutting-edge technologies to deliver exceptional user experiences.",
    features: ["Progressive Web Apps", "Custom mobile apps", "API Integrations", "Low Code & No code Solutions"],
  },
  {
    icon: Brain,
    title: "AI/ML Services",
    description: "Unlock the power of artificial intelligence and machine learning to transform your business.",
    features: [
      "Custom AI/ML Solutions",
      "Natural Language Processing",
      "AI/ML Integration",
      "Model Training & Optimization"
    ],
  },
  {
    icon: Activity,
    title: "Cybersecurity Services",
    description: "Protect your business from evolving cyber threats with our comprehensive cybersecurity solutions.",
    features: ["Penetration Testing", "Vulnerability Assessments", "OSEP, OSCP certifications", "Cybersecurity Training"],
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our advanced analytics solutions.",
    features: ["Big Data Processing", "Predictive Analytics", "Data Visualization", "Custom Dashboards"],
  },
  {
    icon: Activity,
    title: "DevOps Services",
    description: "Streamline your development process with our comprehensive DevOps solutions.",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Containerization"],
  },
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-primary orange-glow">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business with the latest technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-xl p-6 transition-all duration-300 bg-[#111111]/80 backdrop-blur-lg border border-primary/10 hover:bg-[#1A1A1A]/80"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,153,19,0.1)] pointer-events-none" />

              <div
                className={`relative z-10 text-primary mb-5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 bg-primary/10 ${
                  hoveredIndex === index ? "animate-pulse-glow" : ""
                }`}
              >
                <service.icon size={28} />
              </div>

              <h3 className="relative z-10 text-2xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="relative z-10 text-gray-300 mb-5">{service.description}</p>

              <ul className="relative z-10 space-y-3 mb-6">
                {service.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
