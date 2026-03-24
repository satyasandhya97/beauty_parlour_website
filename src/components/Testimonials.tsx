"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Regular Client",
    content: "Absolutely love my nail extensions! The staff here is so professional and the attention to detail is unmatched. My nails have never looked better and they last for weeks.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Bride-to-be",
    content: "I got my bridal makeup and pre-wedding treatments done at Aura. They made me feel like royalty! The makeup was flawless and exactly what I dreamed of. Highly recommend.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Taylor",
    role: "First-time Visitor",
    content: "The gel polish manicure is incredible. The salon itself is gorgeous, clean, and so relaxing. It's officially my new go-to place for all beauty needs in the city.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-rose-gold/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading text-charcoal mb-4"
          >
            Client <span className="text-gold italic">Impressions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Don't just take our word for it. Here's what our beautiful clients have to say about their experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
            >
              <FaQuoteLeft className="text-rose-gold/20 text-4xl absolute top-6 right-6 group-hover:text-rose-gold/40 transition-colors duration-300" />
              
              <div className="flex gap-1 text-gold mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              
              <p className="text-gray-700 italic font-light leading-relaxed mb-8 text-balance">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-beige"
                />
                <div>
                  <h4 className="font-heading text-charcoal font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-light/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blush/20 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
