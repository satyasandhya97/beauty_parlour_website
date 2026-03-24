"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-beige/90 via-beige/70 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Beautiful nail extensions and beauty care"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-rose-gold/20 text-rose-gold text-sm font-semibold tracking-wider mb-6 uppercase">
              Premium Salon Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading text-charcoal leading-tight mb-6"
          >
            Luxury Nail Extensions & <span className="text-gold italic">Beauty Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 font-light mb-10 max-w-lg leading-relaxed text-balance"
          >
            Enhance your beauty with stunning nail art, elegant extensions, and professional treatments by master technicians.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-lg w-full sm:w-auto">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="text-lg w-full sm:w-auto bg-white/50 backdrop-blur-sm">
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-charcoal/60">Scroll Down</span>
        <div className="w-[1px] h-12 bg-charcoal/30 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-charcoal block"
          />
        </div>
      </motion.div>
    </section>
  );
}
