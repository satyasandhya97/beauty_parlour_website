"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "nail-extensions",
    title: "Nail Extensions",
    description: "Custom acrylic and gel extensions with expert shaping for durable length and strength.",
    image: "/service-image1.jpg",
  },
  {
    id: "nail-art",
    title: "Nail Art Design",
    description: "Unique hand-painted nail art — florals, geometrics, and seasonal styles.",
    image: "/service-image2.jpg",
  },
  {
    id: "mani-pedi",
    title: "Manicure & Pedicure",
    description: "Spa manicures and pedicures with exfoliation, massage, and polish finish.",
    image: "/service-image3.jpg",
  },
  {
    id: "gel-polish",
    title: "Gel Polish",
    description: "High-gloss, long-lasting gel polish cured for superior chip resistance.",
    image: "/service-image4.jpg",
  },
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    description: "Bridal and event makeup tailored to your style for a flawless finish.",
    image: "/service-image5.avif",
  },
  {
    id: "beauty-treatments",
    title: "Beauty Treatments",
    description: "Facials, waxing, and targeted skincare treatments for radiant skin.",
    image: "/service-image6.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading text-charcoal mb-4"
          >
            Our <span className="text-gold italic">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Indulge in our comprehensive range of premium beauty and nail treatments designed to make you look and feel your absolute best.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-beige cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-4/3 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-gray-900 via-gray-900/80 to-transparent text-white z-20">
                <h3 className="text-2xl font-heading mb-2 transform translate-y-2 group-hover:translate-y-0 group-hover:text-gold transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
