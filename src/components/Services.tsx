"use client"

import { motion } from "framer-motion"
import { Code2, Palette, BarChart, Globe, Smartphone, Camera } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Spotlight } from "./ui/Spotlight"

const services = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technology",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Intuitive and engaging user experiences that drive results",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your online presence",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "SEO Optimization",
    description: "Improve your visibility and rankings in search engines",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Content Creation",
    description: "Engaging visual content that tells your brand story",
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive digital solutions to help your business grow</p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-all duration-300">
                  <Spotlight
                className='from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-200 dark:via-blue-300 dark:to-blue-400'
        size={124}
      />
                <CardHeader>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors"
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
