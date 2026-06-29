"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import Container from "./Container";
import Typography from "./Typography";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full" id="footer">
      
      {/* 1. Newsletter Banner: Get In Touch */}
      <div className="w-full bg-[url('/moto/melle-sp/cta-bg.png')] text-white py-10 relative overflow-hidden bg-cover bg-center">

        <Container className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Left Text */}
          <div className="max-w-xl text-left space-y-2">
            <Typography variant="h3" color="white" weight="bold" className="font-montserrat text-2xl sm:text-3xl text-white">
              Get In Touch
            </Typography>
            <Typography variant="body" color="muted" className="text-[14px] leading-relaxed text-white font-normal">
              Connect with our team to learn more about our products and discover the right solution for your needs.
            </Typography>
          </div>

          {/* Right Input (Slanted) */}
          <div className="flex flex-row items-center gap-1 sm:gap-2 shrink-0 w-full sm:w-auto" data-aos="fade-left">
            <div className="flex items-center w-full sm:w-[280px] md:w-[320px] bg-white transform -skew-x-[20deg] px-5 py-2.5 shadow-sm border border-white">
              <input
                type="email"
                placeholder="Enter Your E-Mail Id"
                className="transform skew-x-[20deg] w-full outline-none text-dark bg-transparent text-xs md:text-sm font-medium"
              />
            </div>
            <button className="bg-primary hover:bg-primary-hover active:scale-98 transition-all text-white font-montserrat font-bold text-xs md:text-sm tracking-wider uppercase py-3 px-6 sm:px-8 transform -skew-x-[20deg] border border-primary cursor-pointer shrink-0">
              <span className="transform skew-x-[20deg] block">Subscribe</span>
            </button>
          </div>
        </Container>
      </div>

      {/* 2. Main Footer Box */}
      <div className="w-full bg-[#fbebe5] text-dark pt-16 pb-8 border-t border-red-100">
        <Container>
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-red-200/50">
            
            {/* Column 1: Brand description and Socials */}
            <div className="lg:col-span-4 space-y-6">
              <Link 
                href="#" 
                onClick={handleScrollToTop}
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <img src="/moto/melle-sp/k2-logo.png" alt="Logo" className="w-24" />
              </Link>
              <Typography variant="body" color="none" className="text-[14px] leading-relaxed text-gray-600 font-normal max-w-sm">
                A modern logistics system and optimized warehouse operations enable fast, efficient distribution, allowing us to deliver products reliably every day.
              </Typography>
              
              {/* Social links */}
              <div className="space-y-2">
                <Typography variant="h6" color="primary" weight="bold" className="font-montserrat text-sm uppercase tracking-wider">
                  Socials
                </Typography>
                <div className="flex items-center gap-4 text-primary">
                  <a href="#" className="hover:scale-110 transition-transform">
                    <Youtube size={22} className="stroke-[2.5] stroke-current fill-none" />
                  </a>
                  <a href="#" className="hover:scale-110 transition-transform">
                    <Facebook size={19} className="stroke-[2.5] stroke-current fill-none" />
                  </a>
                  <a href="#" className="hover:scale-110 transition-transform">
                    <Instagram size={19} className="stroke-[2.5] stroke-current fill-none" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 lg:pl-10 space-y-4">
              <Typography variant="h5" color="primary" weight="semibold" className="font-montserrat text-sm tracking-wider">
                Quick Links
              </Typography>
              <ul className="space-y-4 text-[16px] font-normal text-[#484848]">
                <li>
                  <a href="#" onClick={handleScrollToTop} className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-primary transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#standards-distribution" className="hover:text-primary transition-colors">
                    Certifications
                  </a>
                </li>
                <li>
                  <a href="#footer" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="lg:col-span-2 lg:pl-4 space-y-4">
              <Typography variant="h5" color="primary" weight="semibold" className="font-montserrat text-sm tracking-wider">
                Products
              </Typography>
              <ul className="space-y-4 text-[16px] font-normal text-[#484848]">
                <li>
                  <a href="#product-categories" className="hover:text-primary transition-colors">
                    New Products
                  </a>
                </li>
                <li>
                  <a href="#product-categories" className="hover:text-primary transition-colors">
                    Automotive
                  </a>
                </li>
                <li>
                  <a href="#product-categories" className="hover:text-primary transition-colors">
                    Industry
                  </a>
                </li>
                <li>
                  <a href="#product-categories" className="hover:text-primary transition-colors">
                    Agriculture
                  </a>
                </li>
                <li className="pt-1">
                  <a href="#product-categories" className="text-primary hover:text-primary-hover hover:underline transition-colors uppercase font-bold text-xs">
                    See More...
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact info details */}
            <div className="lg:col-span-3 space-y-4">
              <Typography variant="h5" color="primary" weight="semibold" className="font-montserrat text-sm tracking-wider">
                Contact
              </Typography>
              <ul className="space-y-4 text-[16px] font-normal text-[#484848]">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="leading-snug">Melle Sp. Z O.O. Stary Staw 9 63-400, Ostrow Wielkopolski, Poland, Europe</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <a href="tel:+48627378803" className="hover:text-primary transition-colors">
                    + 48 62 737 88 03
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a href="mailto:Sales@Melle.Com" className="hover:text-primary transition-colors">
                    Sales@Melle.Com
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[14px] text-[#484848] font-semibold">
            <p>Copyrights@2026 k2.All Rights Reserved</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Terms and conditions</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy and Policy</a>
            </div>
          </div>
        </Container>
      </div>

    </footer>
  );
}
