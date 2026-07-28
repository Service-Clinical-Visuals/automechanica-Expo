"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2D3B6F] text-white pt-10 md:pt-14 pb-4 overflow-hidden">
      <div className="custom-container flex flex-col gap-5">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Column 1: Logo & Description (Span 4) */}
          <div className="flex flex-col gap-5 lg:col-span-4" data-aos="fade-up" data-aos-delay="100">
            <Link href="#" className="inline-block">
              <img
                src="/moto/swd/logo.png"
                alt="Rheinol Logo"
                className="w-[180px] sm:w-[220px] h-auto object-contain object-left"
                onError={(e) => {
                  e.currentTarget.src = "/moto/tomex/logo.png";
                }}
              />
            </Link>
            <p className="font-secondary text-white/90 text-sm sm:text-base pr-2">
              With a production capacity of 80,000 tons of lubricants per year, SWD is one of the largest independent lubricant manufacturers in Germany. In our own production facilities, we develop and manufacture high-quality automotive lubricants, industrial lubricants, and specialty products to the highest quality standards.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3.5 text-white">
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="flex flex-col gap-4 lg:col-span-2 lg:pl-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-primary font-bold text-lg text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 font-secondary">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base inline-flex items-center">
                  Products <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Oil Finder
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products (Span 2) */}
          <div className="flex flex-col gap-4 lg:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-primary font-bold text-lg text-white">
              Products
            </h4>
            <ul className="flex flex-col gap-3 font-secondary">
              {['Automotive', 'Additive', 'Vehicle care', 'Industry', 'Agriculture'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (Span 4) */}
          <div className="flex flex-col gap-4 lg:col-span-4" data-aos="fade-up" data-aos-delay="400">
            <h4 className="font-primary font-bold text-lg text-white">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4 font-secondary text-white/90 text-sm sm:text-base">
              <li>
                <a href="tel:+490203319190" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 text-white shrink-0" strokeWidth={2} />
                  <span>+49 (0)203 3 19 19–0</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="leading-relaxed">
                    Am Schlütershof 26–28 47059 Duisburg Germany
                  </span>
                </div>
              </li>
              <li>
                <a href="mailto:info@swdrheinol.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 text-white shrink-0" strokeWidth={2} />
                  <span>info@swdrheinol.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-white/20"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-white/80 text-xs sm:text-sm font-secondary gap-4">
          <p>
            © 2026 SWD Lubricants GmbH &amp; Co.KG.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">imprint</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
