"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto z-10">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bfcbaa6362d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Beautiful salon interior"
                className="w-full h-full object-cover rounded-t-full rounded-b-lg shadow-2xl"
              />
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-soft-pink rounded-full blur-3xl -z-10 opacity-60" />
            
            {/* Floating badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 md:right-0 bg-white p-6 rounded-xl shadow-xl z-20 glass-effect border-t-2 border-gold"
            >
              <p className="text-4xl font-heading text-gold mb-1">10+</p>
              <p className="text-sm text-charcoal font-medium">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-rose-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Our Parlour
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-charcoal mb-6 leading-tight">
              We provide <span className="text-gold italic">professional</span> beauty services
            </h2>
            
            <div className="space-y-4 text-gray-600 font-light mb-8 text-lg leading-relaxed text-balance">
              <p>
                Welcome to Aura Beauty, where elegance meets professional care. We specialize in premium nail extensions, intricate nail art, and comprehensive beauty services designed to enhance your natural grace.
              </p>
              <p>
                Our team of dedicated professionals uses industry-leading products and techniques to ensure long-lasting, beautiful results in a relaxing, luxurious environment. We believe every client deserves to feel pampered and confident.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-charcoal font-medium">
              {[
                "Premium Products",
                "Certified Professionals",
                "Relaxing Environment",
                "Long-lasting Results"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <Button size="lg">Read Our Story</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
