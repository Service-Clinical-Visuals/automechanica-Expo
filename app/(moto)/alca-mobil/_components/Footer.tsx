"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F9F9F9] pt-16 min-[3800px]:pt-25 pb-8 overflow-hidden font-inter border-t border-gray-200">
      <div className="custom-container flex flex-col gap-12">
        
        {/* Top Section - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-6">
          
          {/* Column 1: Brand & Social (Span 4) */}
          <div className="xl:col-span-4 flex flex-col gap-6" data-aos="fade-up">
            <Link href="/" className="inline-block">
              <img
                src="/moto/alca-mobil/logo.png"
                alt="Alca Mobil Logo"
                className="h-10 sm:h-15 w-auto object-contain min-[2100px]:h-20 min-[3800px]:h-28"
              />
            </Link>
            <p className="footer-body text-[#414141] leading-relaxed xl:max-w-[60%]">
              A well-established German automotive brand known for delivering high-quality vehicle accessories and car care solutions. With a strong focus on innovation, reliability, and practical design.
            </p>
            <div className="flex items-center gap-4 text-[#414141] min-[2100px]:gap-6 min-[3800px]:gap-8">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5 min-[2100px]:w-7 min-[2100px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" />
              </a>
              <a href="#" className="hover:text-primary transition-colors flex items-center justify-center">
                <span className="font-bold text-lg min-[2100px]:text-2xl min-[3800px]:text-4xl leading-none mt-[-2px]">X</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5 min-[2100px]:w-7 min-[2100px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5 min-[2100px]:w-7 min-[2100px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="xl:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="100">
            <h4 className="footer-heading text-[#404040]">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {["Home", "About Us", "Products", "News", "Gallery", "Contact Us"].map((link) => (
                <Link key={link} href="#" className="footer-body text-[#414141] hover:text-primary transition-colors">
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Products (Span 2) */}
          <div className="xl:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading text-[#404040]">Products</h4>
            <nav className="flex flex-col gap-3">
              {["Compressor", "Condenser", "Heater Core", "Evaporator", "Storage Solutions"].map((item) => (
                <Link key={item} href="#products" className="footer-body text-[#414141] hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact (Span 2) */}
          <div className="xl:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading text-[#404040]">Contact</h4>
            <div className="flex flex-col gap-4 footer-body text-[#414141]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="footer-body">Kurzer Weg 1-5,<br/>15859 Storkow,<br/>Germany</div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <div className="footer-body">+49 336786870</div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" />
                <div className="footer-body">info@alca-germany.de</div>
              </div>
            </div>
          </div>

          {/* Column 5: Stay Updated (Span 2) */}
          <div className="xl:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="400">
            <h4 className="footer-heading text-[#404040]">Stay Updated</h4>
            <form className="flex flex-col gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md footer-body outline-none focus:border-primary transition-colors bg-white text-[#414141]"
                required
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto self-start bg-primary text-white px-5 py-2 rounded-md font-semibold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
              >
                Subscribe <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm footer-body text-[#414141]" >
          <p>© 2026 alca mobil logistics + services gmbh</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
