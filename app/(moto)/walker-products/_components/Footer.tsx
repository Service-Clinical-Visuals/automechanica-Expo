"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  const quickLinksCol1 = [
    { name: "Home", href: "#" },
    { name: "Product Categories", href: "#product-categories" },
    { name: "E-Catalog", href: "#" },
    { name: "Instruction Sheets", href: "#" },
    { name: "Resources", href: "#" }
  ];

  const quickLinksCol2 = [
    { name: "About Us", href: "#about" },
    { name: "Media", href: "#" },
    { name: "Where To Buy", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Policies", href: "#" }
  ];

  return (
    <footer className="w-full bg-[#2C2C2C] pt-16 lg:pt-20 pb-8 border-t border-white/10">
      <div className="custom-container flex flex-col gap-12 lg:gap-14">
        
        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-8 xl:gap-12">
          
          {/* Column 1: Logo & Description */}
          <div className="w-full lg:w-[26%] flex flex-col gap-4" data-aos="fade-up">
            <Link href="#" className="inline-block">
              <img 
                src="/moto/walker-products/walker-logo.png" 
                alt="Walker Products Logo" 
                className="w-48 sm:w-56 lg:w-60 h-auto object-contain object-left" 
              />
            </Link>
            <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-xs sm:text-sm md:text-base font-normal max-w-sm">
              Built on decades of innovation and manufacturing excellence, our products deliver precise fitment, reliable performance, and lasting durability for vehicles around the world.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-full lg:w-[35%] flex flex-col" data-aos="fade-up" data-aos-delay="100">
            <div className="border-b border-white/50 pb-2 mb-4 w-full">
              <Typography variant="h3" color="white" className="font-semibold text-lg md:text-xl lg:text-2xl">
                Quick Links
              </Typography>
            </div>

            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-2.5 pt-1">
              <ul className="flex flex-col gap-2.5">
                {quickLinksCol1.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="text-white/85 hover:text-[#F9EA4F] transition-colors inline-block">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-col gap-2.5">
                {quickLinksCol2.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="text-white/85 hover:text-[#F9EA4F] transition-colors inline-block">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="w-full lg:w-[22%] flex flex-col gap-3" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h3" color="white" className="font-semibold text-lg md:text-xl lg:text-2xl mb-1">
              Contact Us
            </Typography>

            <ul className="flex flex-col gap-3.5 pt-1">
              <li>
                <a href="tel:6362572400" className="flex items-center gap-3 text-white/85 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-[#F9EA4F] shrink-0" />
                  <span>636-257-2400</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@walkerproducts.com" className="flex items-center gap-3 text-white/85 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-[#F9EA4F] shrink-0" />
                  <span>info@walkerproducts.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/85">
                <MapPin className="w-4 h-4 text-[#F9EA4F] shrink-0 mt-1" />
                <span className="leading-snug">
                  525 W Congress Street Pacific, MO 63069 US
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media Links (Fixed 1-row icons) */}
          <div className="w-full lg:w-[17%] flex flex-col gap-3 shrink-0" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h3" color="white" className="font-semibold whitespace-nowrap mb-1">
              Social Media Links
            </Typography>

            <div className="flex items-center gap-2.5 sm:gap-3 pt-1 flex-nowrap">
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F9EA4F] text-black flex items-center justify-center hover:scale-110 hover:shadow-lg transition-transform shrink-0"
              >
                <Linkedin className="w-4 h-4 fill-current text-black" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F9EA4F] text-black flex items-center justify-center hover:scale-110 hover:shadow-lg transition-transform shrink-0"
              >
                <Instagram className="w-4 h-4 text-black" strokeWidth={2.2} />
              </a>
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F9EA4F] text-black flex items-center justify-center hover:scale-110 hover:shadow-lg transition-transform shrink-0"
              >
                <Facebook className="w-4 h-4 fill-current text-black" />
              </a>
              <a 
                href="#" 
                aria-label="YouTube"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F9EA4F] text-black flex items-center justify-center hover:scale-110 hover:shadow-lg transition-transform shrink-0"
              >
                <Youtube className="w-4 h-4 fill-current text-black" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Divider & Copyright */}
        <div className="w-full pt-8 border-t border-white/50 flex flex-col items-center justify-center text-center">
          <Typography variant="p" color="white" className="text-white/70">
            © 2026 | Walker Products. All Rights Reserved. Terms of Use and Privacy Policy
          </Typography>
        </div>
        
      </div>
    </footer>
  );
}


