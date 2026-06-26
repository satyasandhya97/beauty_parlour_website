import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-heading mb-6 flex items-center gap-2">
              <span className="text-gold">Aura</span> Beauty
            </h3>
            <p className="text-gray-300 font-light leading-relaxed mb-6">
              Aura Beauty — refined nail art and expert beauty care. Personalized treatments for every occasion, delivered with warmth and precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors">
                <FaRegEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 font-heading tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6 font-heading tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-gold shrink-0" />
                <span>123 Elegance Boulevard, Fashion District, City center, 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-gold shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaRegEnvelope className="text-gold shrink-0" />
                <span>tejinderkaur963@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; {currentYear} Aura Beauty Parlour. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
