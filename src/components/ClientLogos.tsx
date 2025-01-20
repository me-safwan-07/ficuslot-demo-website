"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "Client 1", logo: "/baxiezirideindiapvtltd_logo.jpeg" },
  { name: "Client 2", logo: "/logo2.png" },
  { name: "Client 3", logo: "/Screenshot 2025-01-20 093720.png" },
  { name: "Client 4", logo: "/Screenshot 2025-01-20 093741.png" },
  { name: "Client 5", logo: "/Screenshot 2025-01-20 093810.png" },
  { name: "Client 6", logo: "/Screenshot 2025-01-20 093840.png" },
//   { name: "Client 7", logo: "" },
//   { name: "Client 8", logo: "" },
]

export default function ClientLogos() {
  return (
    <section className="py-24 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Our Clients
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Trusted by leading companies worldwide</p>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10" />
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex space-x-12"
        >
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="flex-shrink-0">
             <img
  src={client.logo || "/placeholder.svg"}
  alt={client.name}
  width={200}
  height={80}
  className="h-20 w-auto object-contain rounded-md"
/>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}