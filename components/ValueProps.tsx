
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { CircuitBoard, Shield, Globe } from "lucide-react";

const valueProps = [
  {
    title: "Full-Stack Mastery",
    description: "From PCB design to cloud APIs—we own the stack.",
    icon: CircuitBoard
  },
  {
    title: "Security Embedded by Design",
    description: "Hardened systems with zero-trust architecture for mission-critical applications.",
    icon: Shield
  },
  {
    title: "Scale with Precision",
    description: "Deploy IoT solutions that grow with your business, not against it.",
    icon: Globe
  }
];

export default function ValueProps() {
  return (
    <section className="py-12 sm:py-20 bg-[#0A1A2F]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
          Why Devincs?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="hover:border-[#00FF9D] transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF9D]/10 bg-[#0A1A2F]/80 border-[#2A7FFF]/20 h-full">
                <CardContent className="p-6">
                  <motion.div
                    className="transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <prop.icon className="w-12 h-12 mb-4 text-[#00FF9D] transform transition-transform duration-300 group-hover:rotate-12" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {prop.title}
                  </h3>
                  <p className="text-gray-300">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
