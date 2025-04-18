"use client"
import { Award, CheckCircle, Users } from "lucide-react"

const stats = [
  { value: "50+", label: "Completed Projects", icon: CheckCircle },
  { value: "12+", label: "Years Experience", icon: Award },
  { value: "20+", label: "Happy Clients", icon: Users },
]

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-primary orange-glow">Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leading the convergence of web development and IoT technologies since 2010
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Pioneering the Future of <span className="text-primary">Connected Solutions</span>
            </h3>

            <p className="text-gray-300 mb-6">
              Devincs was founded with a vision to bridge the gap between the digital and physical worlds. Our team of
              experts specializes in creating seamless integrations between web applications and IoT devices, enabling
              businesses to leverage the full potential of their data.
            </p>

            <p className="text-gray-300 mb-6">
              With a proven track record of successful projects across industries including manufacturing, healthcare,
              smart cities, and retail, we pride ourselves on delivering solutions that drive innovation and business
              growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6"
                >
                  <stat.icon className="text-primary mb-3 w-8 h-8" />
                  <span className="text-3xl font-bold mb-1">{stat.value}</span>
                  <span className="text-gray-400 text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dosanhfjc/image/upload/v1744473683/WhatsApp_Image_2024-03-05_at_8.38.57_PM_z3oeou.jpg"
                  alt="About FutureConnect"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
