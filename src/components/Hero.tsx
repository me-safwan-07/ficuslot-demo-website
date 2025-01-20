"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover ">
          <source src="https://ficuslot.com/images/ficuslot1.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      {/* <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <div className="max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl"
            >
              Creating Digital Experiences That Matter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-gray-300"
            >
              We transform ideas into powerful digital solutions, helping businesses thrive in the modern digital
              landscape
            </motion.p>
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                View Our Work
              </Button>
            </motion.div> */}
            
          {/* </motion.div>
        </div>
      </div> */}
    </section>
  )
}

