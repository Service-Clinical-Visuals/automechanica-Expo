"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Car parts & services", href: "#" },
    { name: "Diesel particulate filter", href: "#" },
    { name: "catalyst", href: "#" },
    { name: "About us", href: "#" }
  ];

  return (
    <footer className="w-full bg-white pt-16 xl:pt-">
      <div className="custom-container px-4 xl:px-15 ">
        
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-12 gap-x-4 gap-y-10 xl:gap-8 pb-12">
          
          {/* Logo & Intro (Col 1) */}
          <div className="col-span-2 md:col-span-1 xl:col-span-2 flex flex-col gap-6" data-aos="fade-up">
            <Link href="#">
              <img src="/moto/ahg/logo.png" alt="AHG Logo" className="h-25 w-auto object-contain" />
            </Link>
            <p className="section-text font-normal oswald-font text-[#212121] leading-[1.6] tracking-wider">
              Over 15 years of delivering reliable automotive components, innovative solutions, and trusted global service.
            </p>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="col-span-1 md:col-span-1 xl:col-span-3 flex flex-col gap-6 xl:ml-8 xl:justify-center xl:items-center" data-aos="fade-up" data-aos-delay="100">
            <h4 className="card-title font-bold tracking-wide oswald-font text-[#212121]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="section-text font-normal oswald-font text-[#212121] hover:text-[#00A1FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us (Col 3) */}
          <div className="col-span-1 md:col-span-1 xl:col-span-3 flex flex-col gap-6 xl:justify-center xl:items-center" data-aos="fade-up" data-aos-delay="200">
           <h4 className="card-title font-bold tracking-wide oswald-font text-[#212121]">
              Contact Us
            </h4>
            <div className="flex flex-col gap-5">
              <a href="tel:+49070312024790" className="flex items-start gap-3 group">
                <img src="/moto/ahg/phone.png" alt="Phone" className="w-5 h-5 object-contain mt-0.5 flex-shrink-0" />
                <span className="section-text font-normal oswald-font text-[#212121] hover:text-[#00A1FF] transition-colors break-words tracking-wider">
                  +49 (0) 7031 / 2024790
                </span>
              </a>
              <a href="mailto:info@ahg-welt.de" className="flex items-start gap-3 group">
                <img src="/moto/ahg/mail.png" alt="Mail" className="w-5 h-5 object-contain mt-0.5 flex-shrink-0" />
                <span className="section-text font-normal oswald-font text-[#212121] hover:text-[#00A1FF] transition-colors break-words tracking-wider">
                  info@ahg-welt.de
                </span>
              </a>
              <div className="flex items-start gap-3">
                <img src="/moto/ahg/location.png" alt="Location" className="w-5 h-5 object-contain mt-1 flex-shrink-0" />
                <span className="section-text font-normal oswald-font text-[#212121] hover:text-[#00A1FF] transition-colors leading-[1.6] tracking-wider">
                  AHG GmbH<br />
                  Hanns-Klemm-Straße 40<br />
                  71034 Böblingen
                </span>
              </div>
            </div>
          </div>

          {/* Subscribe (Col 4) */}
          <div className="col-span-2 md:col-span-1 xl:col-span-4 flex flex-col gap-6 xl:ml-8 items-start" data-aos="fade-up" data-aos-delay="300">
            <h4 className="card-title font-bold tracking-wide oswald-font text-[#212121]">
              Subscribe For More Information
            </h4>
            <p className="section-text font-normal oswald-font text-[#212121]  transition-colors leading-[1.6]">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from AHG-Autoteile GmbH.
            </p>
            
            <form className="relative w-full max-w-sm mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address..." 
                className="w-full h-[52px] bg-white border border-gray-200 rounded-[10px] pl-4 pr-16 text-[15px] oswald-font text-[#212121] outline-none focus:border-[#00A1FF] focus:ring-1 focus:ring-[#00A1FF]/20 transition-all shadow-sm drop-shadow-md placeholder:text-gray-400"
                required
              />
              <button 
                type="submit" 
                className="absolute right-1.5 top-1.5 bottom-1.5 w-10 bg-[#00A1FF] rounded-[8px] flex items-center justify-center text-white hover:bg-[#008FDF] transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </form>
          </div>
          
        </div>

        {/* Copyright Section */}
        <div className="py-6 border-t border-gray-200 flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
          <p className="section-text font-normal oswald-font text-[#212121]  transition-colors">
            Copyright © 2026. AHG-Autoteile GmbH. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
