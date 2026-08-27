"use client";

import React from "react";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-primary mt-8">
      {/* Top Section */}
      <div className="w-full pt-16 pb-8">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6">

          {/* Column 1: Logo & Description (Span 4) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col gap-6 lg:pr-8">
            <img src="/moto/mc-filter/footerlogo.png" alt="MC Filter Logo" className="w-[30%] lg:w-[40%] object-contain" data-aos="fade-up" />
            <p className="footer-body text-white leading-relaxed text-sm" data-aos="fade-up" data-aos-delay="100">
              Our goal is to become a leading and indispensable brand in the national market and a recognized brand in the international market, by providing the highest level of customer satisfaction.
            </p>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
            <h4 className="footer-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Quick Links</h4>
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
              <a href="#industrial" className="footer-body text-white hover:text-secondary transition-colors text-sm">Industrial</a>
              <a href="#products" className="footer-body text-white hover:text-secondary transition-colors text-sm">Products</a>
              <a href="#news" className="footer-body text-white hover:text-secondary transition-colors text-sm">News</a>
              <a href="#communication" className="footer-body text-white hover:text-secondary transition-colors text-sm">Communication</a>
            </div>
          </div>

          {/* Column 3: Product Range (Span 2) */}
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
            <h4 className="footer-heading text-white font-bold" data-aos="fade-up" data-aos-delay="200">Product Range</h4>
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
              <a href="#air" className="footer-body text-white hover:text-secondary transition-colors text-sm">Air Filters</a>
              <a href="#oil" className="footer-body text-white hover:text-secondary transition-colors text-sm">Oil Filters</a>
              <a href="#fuel" className="footer-body text-white hover:text-secondary transition-colors text-sm">Fuel Filters</a>
              <a href="#cabin" className="footer-body text-white hover:text-secondary transition-colors text-sm">Cabin Filters</a>
            </div>
          </div>

          {/* Column 4: Contact Info (Span 3) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-6">
            <h4 className="footer-heading text-white font-bold" data-aos="fade-up" data-aos-delay="300">Contact Info</h4>
            <div className="flex flex-col gap-5" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-start gap-3 text-white">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-white" />
                <span className="footer-body text-sm leading-relaxed">Çay Mahallesi Büyüklü Bulvarı No:61 Tekkeköy/Samsun/Türkiye</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Mail className="w-5 h-5 shrink-0 text-white" />
                <span className="footer-body text-sm">info@mcfiltre.com</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Phone className="w-5 h-5 shrink-0 text-white" />
                <span className="footer-body text-sm">903622667986</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright & Socials */}
      <div className="w-full border-t border-white/10">
        <div className="custom-container flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          <p className="text-white footer-body text-sm text-center md:text-left">
            © 2026 MC Filtre SAN. VE TİC. A.Ş. | Filters and Filter Systems
          </p>

          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-white transition-colors group">
              <Facebook className="w-4 h-4 text-primary group-hover:text-primary transition-colors fill-current" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-white transition-colors group">
              <Twitter className="w-4 h-4 text-primary group-hover:text-primary transition-colors fill-current" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-white transition-colors group">
              <Instagram className="w-4 h-4 text-primary group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-white transition-colors group">
              <Linkedin className="w-4 h-4 text-primary group-hover:text-primary transition-colors fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
