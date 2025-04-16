import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { AboutUs } from "@/components/about-us"
import { Testimonials } from "@/components/testimonials"
import { TechStack } from "@/components/tech-stack"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Services />
      <Portfolio />
      <AboutUs />
      <Testimonials />
      <TechStack />
      <ContactForm />
      <Footer />
    </main>
  )
}
