"use client";

import React from "react";
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-auto bg-[#2B2B2B]">
      {/* Top Section */}
      <div className="w-full pt-16 pb-12 min-[2100px]:pt-24 min-[3800px]:pt-25">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 min-[2100px]:gap-12 min-[3800px]:gap-16">
          
          {/* Column 1: Logo & Welcome (Span 4) */}
          <div className="col-span-1 md:col-span-2 xl:col-span-5 flex flex-col gap-6" data-aos="fade-up">
            <img 
              src="/moto/celik/footerlogo.png" 
              alt="Celik Exhaust Systems" 
              className="w-[180px] min-[2100px]:w-[260px] min-[3800px]:w-[340px] object-contain" 
            />
            <p className="footer-body text-white leading-relaxed xl:max-w-[85%] xl:pr-10" data-aos="fade-up" data-aos-delay="100">
              With over 30 years of expertise in standard and performance exhaust systems, as well as pipe bending and forming, our company has the capability to design and manufacture its own machines and molds.
            </p>
            
            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-4 mt-2" data-aos="fade-up" data-aos-delay="200">
              <a href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-primary transition-colors">
                <Dribbble className="w-5 h-5" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 3) */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <h4 className="footer-heading text-white">Quick Links</h4>
            <div className="flex flex-col gap-4">
              <a href="#home" className="footer-body text-white hover:text-primary transition-colors">Home</a>
              <a href="#about" className="footer-body text-white hover:text-primary transition-colors">About Us</a>
              <a href="#products" className="footer-body text-white hover:text-primary transition-colors">Products</a>
              <a href="#news" className="footer-body text-white hover:text-primary transition-colors">News</a>
              <a href="#gallery" className="footer-body text-white hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="footer-body text-white hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Column 3: Products (Span 2) */}
          <div className="col-span-1 xl:col-span-2 xl:items-start flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading text-white">Products</h4>
            <div className="flex flex-col gap-4">
              <a href="#products" className="footer-body text-white hover:text-primary transition-colors">Catalytic Converter</a>
              <a href="#products" className="footer-body text-white hover:text-primary transition-colors">Standard Exhaust</a>
              <a href="#products" className="footer-body text-white hover:text-primary transition-colors">Performance Exhaust</a>
              <a href="#products" className="footer-body text-white hover:text-primary transition-colors">Pipe Bending</a>
            </div>
          </div>

          {/* Column 4: Contact (Span 3) */}
          <div className="col-span-1 md:col-span-2 xl:col-span-3 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading text-white">Contact</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <p className="footer-body text-white leading-relaxed">
                  Bağyurdu Organize Sanayi<br />
                  Halilbeyli Organize Sanayi Mah. Sanayi Cd. No:3<br />
                  35743 Kemalpaşa/İzmir/Türkiye
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <p className="footer-body text-white">
                  +90 232 880 70 77
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <p className="footer-body text-white">
                  celik@celikegzoz.com
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full border-t border-white/20 py-6">
        <div className="custom-container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="footer-body text-white text-center md:text-left">
            Copyright © 2023 www.celikexhaust.com
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
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
