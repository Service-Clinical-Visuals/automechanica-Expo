"use client";

import React from "react";
import { Linkedin, Twitter, Instagram, Youtube, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-auto bg-[#131118]">
      {/* Top Section */}
      <div className="w-full text-white pt-20 pb-16">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Bio (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <img src="/moto/ows/logo1.png" alt="OWS Logo" className="w-[180px] object-contain" />
            <p className="footer-body text-white leading-relaxed text-sm max-w-[95%]">
              With a commitment to German engineering and continuous innovation, OWS provides premium automotive products that deliver outstanding performance, durability, and reliable protection for vehicles worldwide.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-4 text-white">
              <a href="#" className="hover:text-[#9C76A2] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#9C76A2] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#9C76A2] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#9C76A2] transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="footer-heading text-white font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-4">
              <a href="#home" className="footer-body text-white hover:text-[#9C76A2] text-sm transition-colors">Home</a>
              <a href="#about" className="footer-body text-white hover:text-[#9C76A2] text-sm transition-colors">About Us</a>
              <a href="#products" className="footer-body text-white hover:text-[#9C76A2] text-sm transition-colors">Products</a>
              <a href="#quality" className="footer-body text-white hover:text-[#9C76A2] text-sm transition-colors">Quality</a>
            </div>
          </div>

          {/* Column 3: Contact Us (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 relative">
            <h4 className="footer-heading text-white font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-white shrink-0" />
                <span className="footer-body text-white text-sm leading-relaxed">+49 (0) 173 581 6688</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-white shrink-0" />
                <span className="footer-body text-white text-sm leading-relaxed">
                  Thurn-und-Taxis-Platz 6,<br />
                  60313 Frankfurt
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-white shrink-0" />
                <a href="mailto:klaus@ows-germany.com" className="footer-body text-white hover:text-[#9C76A2] text-sm transition-colors">
                  klaus@ows-germany.com
                </a>
              </div>
            </div>
            {/* Right Border separator (hidden on mobile) */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-white/10"></div>
          </div>

          {/* Column 4: Newsletter (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:pl-6">
            <h4 className="footer-heading text-white font-semibold">Subscribe to Newsletter :</h4>
            <p className="footer-body text-white text-sm leading-relaxed">
              Be the first to know about new collections and exclusive offers.
            </p>
            
            {/* Visual Input Field */}
            <div className="relative w-full mt-2 flex items-center bg-white rounded-full overflow-hidden p-1.5 shadow-md">
              <input 
                type="text" 
                placeholder="Enter Your E-Maild id" 
                className="w-full bg-transparent text-gray-800 py-2 px-4 focus:outline-none placeholder:text-gray-400 placeholder:text-sm text-sm"
              />
              <button className="bg-[#9C76A2] hover:bg-[#85638a] text-white text-sm font-semibold py-2 px-6 rounded-full transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full bg-white flex flex-col sm:flex-row justify-between items-center py-6 border-t border-gray-200">
        <div className="custom-container w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-black footer-body text-sm font-medium">
            © 2026, Oder Was Sonst GmbH
          </p>
          <div className="flex items-center gap-6">
             <a href="#" className="text-black footer-body text-sm font-medium hover:text-[#9C76A2] transition-colors">Terms & Conditions</a>
             <a href="#" className="text-black footer-body text-sm font-medium hover:text-[#9C76A2] transition-colors">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
