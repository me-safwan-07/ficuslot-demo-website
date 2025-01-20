"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const reasons = [
  "Innovative Solutions",
  "Expert Team",
  "Proven Track Record",
  "Client-Centric Approach",
  "Cutting-Edge Technology",
  "Timely Delivery",
]

export default function Reasons() {
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
            Why Choose Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the advantages of partnering with our digital agency
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-4"
            >
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="text-white text-lg">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

