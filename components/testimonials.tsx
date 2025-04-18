"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    content:
      "Devincs transformed our manufacturing process with their IoT integration. Real-time monitoring has increased our efficiency by 35% and significantly reduced downtime. Their team's expertise and support throughout the implementation was exceptional.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "GlobalTech Manufacturing",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
  },
  {
    id: 2,
    content:
      "The web application devincs built for our healthcare system has revolutionized how we manage patient data. The intuitive interface and seamless IoT device integration have improved our staff's efficiency and patient care quality. Truly a game-changer for our operations.",
    author: "Dr. Michael Chen",
    position: "Director of Innovation",
    company: "MediCare Solutions",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Working with devincs on our smart city initiative was a fantastic experience. Their team delivered a comprehensive platform that exceeded our expectations, integrating various urban systems into a cohesive dashboard. The analytics capabilities have provided invaluable insights for city planning.",
    author: "Alex Rodriguez",
    position: "Smart City Program Manager",
    company: "Metro Urban Development",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4,
  },
  {
    id: 4,
    content:
      "devincs helped us transition our retail analytics to a cloud-based solution with AI-powered insights. The implementation was smooth, and the results have been outstanding. Their team's technical knowledge and commitment to our success made all the difference.",
    author: "Emma Thompson",
    position: "Head of Digital",
    company: "RetailPrime",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left

  // Handle navigation
  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
    setAutoplay(false)
  }

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay])

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Hear from Our <span className="text-primary orange-glow">Satisfied Customers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover what our clients have to say about their experience working with us
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 text-primary opacity-20">
            <Quote size={80} />
          </div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 text-primary opacity-20 transform rotate-180">
            <Quote size={80} />
          </div>

          {/* Testimonial carousel */}
          <div className="relative overflow-hidden rounded-xl bg-[#111111]/80 backdrop-blur-lg border border-primary/10 p-8 md:p-12 min-h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-primary">
                      <img
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h4 className="font-bold text-xl">{testimonials[current].author}</h4>
                      <p className="text-primary">{testimonials[current].position}</p>
                      <p className="text-gray-400 text-sm">{testimonials[current].company}</p>
                      <div className="flex justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < testimonials[current].rating ? "text-primary" : "text-gray-600"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <blockquote className="text-gray-300 text-lg leading-relaxed italic">
                    "{testimonials[current].content}"
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <Button
                onClick={prev}
                variant="ghost"
                size="icon"
                className="bg-black/30 backdrop-blur-sm border border-primary/20 rounded-full h-12 w-12 pointer-events-auto hover:bg-primary/20"
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                onClick={next}
                variant="ghost"
                size="icon"
                className="bg-black/30 backdrop-blur-sm border border-primary/20 rounded-full h-12 w-12 pointer-events-auto hover:bg-primary/20"
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-primary w-8 shadow-[0_0_10px_rgba(255,153,19,0.5)]"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
