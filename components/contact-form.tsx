"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SendHorizonal, Mail, Phone, MapPin } from "lucide-react"

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  })

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3))
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    alert("Form submitted! We'll be in touch soon.")
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    })
    setStep(1)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@devincs.com",
      link: "mailto:contact@devincs.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Tech Avenue, Silicon Valley, CA",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-primary orange-glow">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to start your next project? Reach out to us and let's discuss how we can help
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-[#111111]/80 backdrop-blur-lg border-primary/10 shadow-xl">
            <CardHeader className="border-b border-gray-800 pb-6">
              <CardTitle className="text-white text-2xl">Contact Information</CardTitle>
              <CardDescription className="text-gray-300">Reach out to us via any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(255,153,19,0.2)]">
                      <item.icon className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{item.title}</h4>
                      <a href={item.link} className="text-gray-300 hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="font-medium text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {["twitter", "linkedin", "github", "facebook"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 rounded-full bg-[#222222] hover:bg-primary/80 flex items-center justify-center transition-colors shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#111111]/80 backdrop-blur-lg border-primary/10 shadow-xl">
            <CardHeader className="border-b border-gray-800 pb-6">
              <CardTitle className="text-white text-2xl">Request a Quote</CardTitle>
              <CardDescription className="text-gray-300">
                Fill out the form below and we'll get back to you
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        placeholder="John Doe"
                        className="bg-[#222222] border-gray-700 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary focus:ring-opacity-50 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder="john@example.com"
                        className="bg-[#222222] border-gray-700 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary focus:ring-opacity-50 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-white mb-2 block">
                        Company (Optional)
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => updateFormData("company", e.target.value)}
                        placeholder="Your Company"
                        className="bg-[#222222] border-gray-700 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary focus:ring-opacity-50 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block">
                        Phone Number (Optional)
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="bg-[#222222] border-gray-700 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary focus:ring-opacity-50 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="service" className="text-white mb-2 block">
                        Service Needed
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => updateFormData("service", value)}>
                        <SelectTrigger className="bg-[#222222] border-gray-700 text-white focus:ring-primary focus:ring-opacity-50 focus:border-primary shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1A1A] border-gray-700 text-white">
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="iot">IoT Integration</SelectItem>
                          <SelectItem value="cloud">Cloud Solutions</SelectItem>
                          <SelectItem value="ai">AI & Automation</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-white mb-2 block">Estimated Budget</Label>
                      <RadioGroup
                        value={formData.budget}
                        onValueChange={(value) => updateFormData("budget", value)}
                        className="mt-2 space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="<5k" id="budget1" className="border-gray-600 text-primary" />
                          <Label htmlFor="budget1" className="text-gray-300">
                            Less than $5,000
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="5k-10k" id="budget2" className="border-gray-600 text-primary" />
                          <Label htmlFor="budget2" className="text-gray-300">
                            $5,000 - $10,000
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="10k-25k" id="budget3" className="border-gray-600 text-primary" />
                          <Label htmlFor="budget3" className="text-gray-300">
                            $10,000 - $25,000
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="25k+" id="budget4" className="border-gray-600 text-primary" />
                          <Label htmlFor="budget4" className="text-gray-300">
                            $25,000+
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="message" className="text-white mb-2 block">
                        Project Details
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => updateFormData("message", e.target.value)}
                        placeholder="Tell us about your project and requirements"
                        className="bg-[#222222] border-gray-700 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary focus:ring-opacity-50 min-h-[150px] shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-4">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="border-gray-700 text-white hover:bg-[#222222] hover:text-white"
                    >
                      Previous
                    </Button>
                  )}

                  {step < 3 ? (
                    <Button
                      type="button"
                      className="ml-auto bg-primary text-black hover:bg-primary/90 shadow-[0_0_15px_rgba(255,153,19,0.4)]"
                      onClick={nextStep}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="ml-auto bg-primary text-black hover:bg-primary/90 shadow-[0_0_15px_rgba(255,153,19,0.4)] group"
                    >
                      Send Message
                      <SendHorizonal className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>

                <div className="text-center text-sm text-gray-400 pt-2">
                  Step {step} of 3
                  <div className="w-full bg-[#333333] h-1.5 mt-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-1.5 transition-all duration-300 rounded-full shadow-[0_0_10px_rgba(255,153,19,0.4)]"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
