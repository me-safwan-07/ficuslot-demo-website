"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Brand Identity Design",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Projects() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest work and see how we help businesses succeed
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-gray-800/50 border-gray-700">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative h-64">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover" />
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

