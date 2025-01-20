"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <img src="/flogof.png" alt='' className='h-20 md:w-full w-lg mb-10' />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className=""
            >
              <h4 className="text-xl font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Design", "Development", "Online Marketing", "Terms & Conditions", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-white">Technologies</h4>
            <ul className="space-y-2">
              {["HTML, CSS, Bootstrap, JavaScript", "ReactJS Angular", "PHP, Codeigniter, Laravel", "WordPress, Shopify, WooCommerce", "Flutter", "Android", "IOS", "AWS, Google Coud"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-white">Get In Touch</h4>
            <address className="text-gray-400 not-italic">
              <p>Email: sales@ficuslot.in</p>
              <p>Phone: +91-8476812055</p>
              <p>Bengaluru, Karnataka</p>
              <p>Jasdan, Gujarat</p>
              <p>Patna, Bihar</p>
              <p>Port Blair, Andaman</p>
            </address>
          </motion.div>
          
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Ficuslot Innovation Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

