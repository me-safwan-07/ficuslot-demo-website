"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const stats = [
  { label: "Happy Clients", value: 100 },
  { label: "Projects Completed", value: 150 },
  { label: "Served States", value: 10 },
  { label: "Years of Experience", value: 8 },
];

export default function ClientNumbers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Delivering results that speak for themselves</p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <AnimatedNumber value={stat.value} inView={inView} />
              <div className="text-xl text-gray-400 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface AnimatedNumberProps {
  value: number;
  inView: boolean;
}

function AnimatedNumber({ value, inView }: AnimatedNumberProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (inView) {
      const start = 0;
      const end = value;
      const duration = 2000;
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [value, inView]);

  return (
    <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
      {count}+
    </div>
  );
}
