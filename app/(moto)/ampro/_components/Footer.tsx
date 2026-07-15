"use client";

import React from "react";
import { Search } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-8 ">
      {/* Top Section with Background */}
      <div className="w-full relative bg-[url('/moto/ampro/bg.png')] bg-cover bg-center bg-no-repeat text-white pt-16 pb-16">
        <div className="absolute inset-0 bg-primary/25 z-0"></div>

        <div className="custom-container relative z-10 grid grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-6">
          
          {/* Column 1: Logo & Welcome (Span 4) */}
          <div className="col-span-2 xl:col-span-4 flex flex-col gap-6">
            <img src="/moto/ampro/logo.png" alt="Ampro Logo" className="w-[40%] object-contain" data-aos="fade-up" />
            <p className="footer-body text-white leading-relaxed max-w-[95%]" data-aos="fade-up" data-aos-delay="100">
              Welcome to AMPRO - your trusted partner for high-quality NOx sensors and advanced exhaust system solutions. We deliver reliable emission control technologies engineered for performance, durability, and compliance with modern automotive standards.
            </p>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6 xl:pl-4">
            <h4 className="footer-heading text-white uppercase" data-aos="fade-up" data-aos-delay="100">QUICK LINKS</h4>
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
              <a href="#home" className="footer-body text-white hover:text-secondary transition-colors">Home</a>
              <a href="#about" className="footer-body text-white hover:text-secondary transition-colors">About Us</a>
              <a href="#products" className="footer-body text-white hover:text-secondary transition-colors">Products</a>
              <a href="#sustainability" className="footer-body text-white hover:text-secondary transition-colors">Sustainability</a>
              <a href="#news" className="footer-body text-white hover:text-secondary transition-colors">News</a>
              <a href="#contact" className="footer-body text-white hover:text-secondary transition-colors">Contact</a>
            </div>
          </div>

          {/* Column 3: Products (Span 2) */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6">
            <h4 className="footer-heading text-white uppercase" data-aos="fade-up" data-aos-delay="200">PRODUCTS</h4>
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
              <a href="#products" className="footer-body text-white hover:text-secondary transition-colors">NOx sensors</a>
              <a href="#products" className="footer-body text-white hover:text-secondary transition-colors">Urea dosing modules</a>
              <a href="#products" className="footer-body text-white hover:text-secondary transition-colors">Urea pumps</a>
            </div>
          </div>

          {/* Column 4: Address (Span 2) */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6">
            <h4 className="footer-heading text-white uppercase" data-aos="fade-up" data-aos-delay="300">ADDRESS</h4>
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="400">
              <p className="footer-body text-white leading-relaxed">
                AMPRO Technologie GmbH<br />
                Heuserweg 14, DE 53842 Troisdorf<br />
                info@ampro-tec.de
              </p>
              <p className="footer-body text-white mt-2">
                +49 22412326685
              </p>
            </div>
          </div>

          {/* Column 5: Newsletter (Span 2) */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6">
            <h4 className="footer-heading text-white uppercase" data-aos="fade-up" data-aos-delay="400">Newsletter</h4>
            <p className="footer-body text-white leading-relaxed" data-aos="fade-up" data-aos-delay="500">
              Subscribe to our newsletter to receive updates on the latest news! Subscribe with us...
            </p>
            
            {/* Visual Input Field */}
            <div className="relative w-full mt-2" data-aos="fade-up" data-aos-delay="600">
              <input 
                type="text" 
                placeholder="SUBSCRIBE WITH US....." 
                className="w-full bg-white text-primary rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-secondary placeholder:text-gray-500 placeholder:text-sm font-semibold"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full bg-white flex justify-center items-center py-6 border-t border-gray-200">
        <p className="text-gray-500 footer-body tracking-wide text-center">
          © 2026 All rights reserved - <span className="text-secondary underline font-semibold">CR-HNP</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
