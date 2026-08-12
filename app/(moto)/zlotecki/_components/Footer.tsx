"use client";

import React from "react";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-8">
      {/* Top Section with Background */}
      <div className="w-full bg-primary text-white pt-16 pb-16">
        <div className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 min-[3800px]:gap-16">
          
          {/* Column 1: Logo & Subscription (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8 min-[3800px]:gap-16">
            {/* Logo */}
            <img 
              src="/zlotecki/logo.png" 
              alt="Zlotecki Logo" 
              className="w-[200px] min-[3800px]:w-[400px] object-contain brightness-0 invert" 
              data-aos="fade-up" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            
            {/* Inline Links */}
            <div className="flex flex-wrap items-center gap-3 min-[3800px]:gap-6" data-aos="fade-up" data-aos-delay="100">
              <a href="#products" className="footer-body text-white hover:text-secondary underline underline-offset-4 decoration-1">Pistons</a>
              <a href="#products" className="footer-body text-white hover:text-secondary underline underline-offset-4 decoration-1">Pins</a>
              <a href="#products" className="footer-body text-white hover:text-secondary underline underline-offset-4 decoration-1">Cylinder kits</a>
              <a href="#products" className="footer-body text-white hover:text-secondary underline underline-offset-4 decoration-1">Product verification</a>
            </div>

            {/* Newsletter Input */}
            <div className="flex flex-col sm:flex-row gap-3 min-[3800px]:gap-6 w-full max-w-md min-[3800px]:max-w-3xl" data-aos="fade-up" data-aos-delay="200">
              <input 
                type="email" 
                placeholder="Please enter your email" 
                className="flex-1 bg-white text-dark rounded-md min-[3800px]:rounded-xl py-3 px-4 min-[3800px]:py-6 min-[3800px]:px-8 focus:outline-none focus:ring-2 focus:ring-secondary placeholder:text-gray-400 placeholder:text-sm min-[3800px]:placeholder:text-2xl"
              />
              <button className="bg-white text-dark font-bold rounded-md min-[3800px]:rounded-xl py-3 px-6 min-[3800px]:py-6 min-[3800px]:px-12 hover:bg-gray-100 transition-colors shrink-0 text-sm min-[3800px]:text-2xl">
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6 min-[3800px]:gap-12 lg:pl-4">
            <h4 className="footer-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Quick Links</h4>
            <div className="flex flex-col gap-4 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="200">
              <a href="#home" className="footer-body text-white hover:text-secondary transition-colors">Home</a>
              <a href="#about" className="footer-body text-white hover:text-secondary transition-colors">About Us</a>
              <a href="#offer" className="footer-body text-white hover:text-secondary transition-colors">Offer</a>
              <a href="#quality" className="footer-body text-white hover:text-secondary transition-colors">Quality</a>
              <a href="#see-all" className="footer-body text-white hover:text-secondary transition-colors font-semibold">See All</a>
            </div>
          </div>

          {/* Column 3: Product Categories (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6 min-[3800px]:gap-12">
            <h4 className="footer-heading text-white font-bold" data-aos="fade-up" data-aos-delay="200">Product Categories</h4>
            <div className="flex flex-col gap-4 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="300">
              <a href="#products" className="footer-body text-white hover:text-secondary transition-colors">Pistons</a>
              <a href="#products" className="footer-body text-white hover:text-secondary transition-colors">Cylinder Kits</a>
              <a href="#products" className="footer-body text-white hover:text-secondary transition-colors">Pins</a>
            </div>
          </div>

          {/* Column 4: Contact Info (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 min-[3800px]:gap-12">
            <h4 className="footer-heading text-white font-bold" data-aos="fade-up" data-aos-delay="300">Contact Info</h4>
            <div className="flex flex-col gap-4 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center gap-3 min-[3800px]:gap-6">
                <Phone className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0" />
                <span className="footer-body text-white">+48 52 354 7612</span>
              </div>
              <div className="flex items-center gap-3 min-[3800px]:gap-6">
                <Mail className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0" />
                <span className="footer-body text-white">office@zlotecki.pl</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full bg-white flex justify-center items-center py-6 min-[3800px]:py-12 border-t border-gray-200">
        <p className="text-[#484848] footer-body text-center opacity-80 min-[3800px]:text-2xl">
          The project is co-financed by the European Union. #EUFunds #EuropeanFunds
        </p>
      </div>
    </footer>
  );
};

export default Footer;
