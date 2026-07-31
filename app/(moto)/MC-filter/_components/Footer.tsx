"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-[#272727]">
      {/* Top Section */}
      <div className="w-full pt-16 pb-12">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8">

          {/* Column 1: Logo & Welcome (Span 5) */}
          <div className="xl:col-span-5 flex flex-col gap-6">
            <img src="/moto/MC-filter/logo.png" alt="Baltic Filter Logo" className="w-[200px] object-contain brightness-0 invert" data-aos="fade-up" />
            <p className="footer-body text-white leading-relaxed max-w-[90%]" data-aos="fade-up" data-aos-delay="100">
              Baltic Filter UAB is a Lithuania-based manufacturer of automotive and industrial filters, offering a wide range of high-quality filtration solutions. With decades of experience and advanced production technologies.
            </p>
            <div className="flex items-center gap-4 text-white mt-2" data-aos="fade-up" data-aos-delay="200">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            <h4 className="footer-heading text-white" data-aos="fade-up" data-aos-delay="100">Quick Links</h4>
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
              <a href="#home" className="footer-body text-white hover:text-primary transition-colors">Home</a>
              <a href="#about" className="footer-body text-white hover:text-primary transition-colors">About Us</a>
              <a href="#products" className="footer-body text-white hover:text-primary transition-colors">Products</a>
              <a href="#news" className="footer-body text-white hover:text-primary transition-colors">News</a>
              <a href="#gallery" className="footer-body text-white hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="footer-body text-white hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Column 3: Products (Span 2) */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            <h4 className="footer-heading text-white" data-aos="fade-up" data-aos-delay="200">Products</h4>
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
              <a href="#products" className="footer-body text-white hover:text-primary transition-colors">Cabin Filter</a>
              <a href="#products" className="footer-body text-white hover:text-primary transition-colors">Air Filter</a>
              <a href="#products" className="footer-body text-white hover:text-primary transition-colors">Fuel Filter</a>
              <a href="#products" className="footer-body text-white hover:text-primary transition-colors">Oil Filter</a>
            </div>
          </div>

          {/* Column 4: Contact (Span 3) */}
          <div className="xl:col-span-3 flex flex-col gap-6">
            <h4 className="footer-heading text-white" data-aos="fade-up" data-aos-delay="300">Contact</h4>
            <div className="flex flex-col gap-5" data-aos="fade-up" data-aos-delay="400">

              <div className="flex items-start gap-3 text-white">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <p className="footer-body">
                  Alekniskis 9, Sirvintos distr.<br />
                  LT-19212, Lithuania
                </p>
              </div>

              <div className="flex items-center gap-3 text-white">
                <Phone className="w-5 h-5 shrink-0" />
                <p className="footer-body">+370 382 30016</p>
              </div>

              <div className="flex items-center gap-3 text-white">
                <Mail className="w-5 h-5 shrink-0" />
                <p className="footer-body">info@mfilter.lt</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full border-t border-white/20">
        <div className="custom-container flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          <p className="footer-body text-white">
            Copyright © Baltic Filter UAG reserved
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="footer-body text-white hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="footer-body text-white hover:text-primary transition-colors">Terms & Conditions</a>
            <a href="#" className="footer-body text-white hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
