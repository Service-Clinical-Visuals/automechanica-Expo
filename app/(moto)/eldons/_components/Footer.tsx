import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f5f5] pt-16 pb-8 border-t border-gray-200">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">

          {/* Logo & Description */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <img src="/moto/eldons/logo.png" alt="Eldon's Logo" className="w-[200px] [@media(min-width:2500px)]:w-[280px] [@media(min-width:3800px)]:w-[360px] mb-6" />
            <Typography variant="p" color="muted" className="footer-body leading-relaxed">
              Since 1975, ELDON'S has delivered premium lubricants and specialty fluids, trusted worldwide for quality, reliability, and performance.
            </Typography>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <Typography variant="h4" color="dark" className="footer-heading mb-6">Quick Links</Typography>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Products', 'News', 'Contact Us'].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="footer-body text-gray-500 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-1">
            <Typography variant="h4" color="dark" className="footer-heading mb-6">Our Products</Typography>
            <ul className="flex flex-col gap-3">
              {['Automotive Lubricants', 'Industrial Lubricants', 'Greases & Pastes', 'Food Grade Lubricants', 'Marine Lubricants'].map((product, idx) => (
                <li key={idx}>
                  <Link href="#" className="footer-body text-gray-500 hover:text-primary transition-colors">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <Typography variant="h4" color="dark" className="footer-heading mb-6">Contact Us</Typography>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 footer-body">
                <Phone className="w-[1.25em] h-[1.25em] text-primary shrink-0 mt-0.5" />
                <a href="tel:+302102594400" className="text-gray-500 hover:text-primary transition-colors">
                  +30 210 259 4400
                </a>
              </li>
              <li className="flex items-start gap-3 footer-body">
                <Mail className="w-[1.25em] h-[1.25em] text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@eldons.gr" className="text-gray-500 hover:text-primary transition-colors">
                  info@eldons.gr
                </a>
              </li>
              <li className="flex items-start gap-3 footer-body">
                <MapPin className="w-[1.25em] h-[1.25em] text-primary shrink-0 mt-0.5" />
                <span className="text-gray-500 leading-snug">
                  20 Souliou Str., Nea Halkidona<br />143 43 - Athens, Greece
                </span>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="lg:col-span-1">
            <Typography variant="h4" color="dark" className="footer-heading mb-6">Subscribe For More Information</Typography>
            <Typography variant="p" color="muted" className="footer-body leading-relaxed mb-6">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from eldons.gr.
            </Typography>
            <form className="flex w-full bg-white rounded shadow-sm overflow-hidden border border-gray-200 footer-body">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full px-4 py-3 outline-none text-gray-700 bg-transparent placeholder-gray-400"
              />
              <button
                type="button"
                className="bg-primary hover:bg-primary-hover transition-colors px-4 py-3 flex items-center justify-center shrink-0"
              >
                <ArrowRight className="text-white w-[1.25em] h-[1.25em]" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 text-center">
          <Typography variant="p" color="muted" className="footer-body">
            2020 © eldons.gr. All Rights Reserved. Developed by Totalweb®. Designed by Nicholas Faraklas
          </Typography>
        </div>
      </div>
    </footer>
  );
}
