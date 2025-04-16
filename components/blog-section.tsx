"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of IoT: Trends to Watch in 2025",
    excerpt:
      "Explore the upcoming trends in IoT technology that will shape the industry and redefine how we interact with connected devices.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Alex Johnson",
    date: "June 15, 2024",
    readTime: "8 min read",
    category: "IoT",
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Learn how to leverage Next.js to build high-performance, scalable web applications that deliver exceptional user experiences.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Samantha Lee",
    date: "May 28, 2024",
    readTime: "12 min read",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Edge Computing and Its Impact on IoT Architecture",
    excerpt:
      "Discover how edge computing is transforming IoT systems by reducing latency and improving real-time processing capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Michael Chen",
    date: "May 12, 2024",
    readTime: "10 min read",
    category: "Edge Computing",
  },
  {
    id: 4,
    title: "Designing Intuitive Interfaces for Complex IoT Dashboards",
    excerpt:
      "Tips and strategies for creating user-friendly interfaces that make complex IoT data accessible and actionable.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Elena Rodriguez",
    date: "April 30, 2024",
    readTime: "7 min read",
    category: "UI/UX",
  },
]

export function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Latest <span className="text-primary orange-glow">Insights</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with our latest articles, tutorials, and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="bg-card/30 backdrop-blur-sm border-primary/10 overflow-hidden transition-all duration-300 hover:translate-y-[-5px]"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCard === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute top-3 right-3 bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">{post.excerpt}</CardDescription>

                <div className="flex items-center text-xs text-gray-400 space-x-4">
                  <div className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="link" className="text-primary p-0 group">
                  Read article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 text-black">
          <Button variant="outline" className="group border-primary">
            View all articles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
