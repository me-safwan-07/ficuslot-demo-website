"use client"

// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import { QuoteIcon } from "lucide-react"
import { TestimonialsSection } from "./TestimonialsSection"

const testimonials = [
  {
    author: {
      name: "Rajesh Iyer",
      handle: "@rajeshdesigns",
      avatar: "https://images.unsplash.com/photo-1502767089025-6572583495cc?w=150&h=150&fit=crop&crop=face"
    },
    text: "Ficuslot has completely revolutionized our brand's digital presence. Their innovative solutions helped us scale effectively and reach the right audience."
  },
  {
    author: {
      name: "Neha Kapoor",
      handle: "@nehatech",
      avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face"
    },
    text: "The team at Ficuslot is incredibly professional. From strategy to execution, they’ve provided exceptional support for our business."
  },
  {
    author: {
      name: "Amit Gupta",
      handle: "@amitbusiness",
      avatar: "https://images.unsplash.com/photo-1603415526960-f87d5da15967?w=150&h=150&fit=crop&crop=face"
    },
    text: "Thanks to Ficuslot’s expertise, we’ve seen a remarkable improvement in customer engagement and online sales. Highly recommend them!"
  }
];


export default function Testimonials() {
  return (
    <section className="py-2 bg-black text-white">
      <div className="container mx-auto px-4">
        <TestimonialsSection
          title="Loved by businesses and professionals"
          description="Discover why businesses trust Ficuslot to transform their ideas into reality. See what our clients have to say about our innovative and impactful solutions."
          testimonials={testimonials}
        />

      </div>
    </section>
  )
}

