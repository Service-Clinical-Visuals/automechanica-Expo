"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2b2b2b] pt-16 pb-8">
      <div className="custom-container relative">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-8 lg:gap-6 mb-12">
          
          {/* Column 1: About */}
          <div className="col-span-2 md:col-span-4 xl:col-span-4 flex flex-col pr-0 lg:pr-8" data-aos="fade-up">
            <Link href="/" className="mb-6">
              <img src="/moto/iruna/footerlogo.png" alt="Iruna Logo" className="w-[180px] md:w-[250px] h-auto object-contain " />
            </Link>
            <p className="sora text-[#ffffff] section-text leading-[1.8]">
              To provide optimised brake system solutions that lead to a
              distinct improvement and differentiate our customers in their
              business group. Secure, optimised feel, adjusted to installation
              fit and innovation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 md:col-span-2 xl:col-span-2 flex flex-col lg:pl-8 xl:pl-12" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-white font-semibold card-title mb-6 oxanium tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3 sora-font">
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">Home</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">About us</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">Products</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">Industry We serve</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">Our Brands</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="col-span-1 md:col-span-2 xl:col-span-2 flex flex-col lg:pl-6 xl:pl-10" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-semibold card-title mb-6 oxanium tracking-wide">Products</h4>
            <ul className="flex flex-col gap-3 sora-font">
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">Master Cylinder</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">Hydraulic Booster</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">Power Brake Valve</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">Charge Priority Valve</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text  font-semibold transition-colors">See More...</Link></li>
            </ul>
          </div>

          {/* Column 4: Our Brands */}
          <div className="col-span-1 md:col-span-2 xl:col-span-2 flex flex-col lg:pl-4 xl:pl-8" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-white font-semibold card-title mb-6 oxanium tracking-wide">Our Brands</h4>
            <ul className="flex flex-col gap-3 sora">
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">Iruna</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">Stbi</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">Wrakynson</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="col-span-1 md:col-span-2 xl:col-span-2 flex flex-col" data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-white font-semibold card-title mb-6 oxanium tracking-wide">Contact</h4>
            <ul className="flex flex-col gap-4 sora">
              <li className="flex items-start gap-3">
                <img src="/moto/iruna/location.png" alt="Location" className="w-[24px] h-[24px] object-contain shrink-0 mt-0.5 " />
                <span className="text-[#ffffff] hover:text-[#CF0A2C] section-text leading-relaxed">
                  Pol. Ind. Comarca, 2. Calle E,<br />
                  nº 9, E-31191 Barbatain<br />
                  (Navarra), SPAIN
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/moto/iruna/phone.png" alt="Phone" className="w-[20px] h-[20px] object-contain shrink-0" />
                <a href="tel:+34948214000" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">
                  +34 948 214 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <img src="/moto/iruna/mail.png" alt="Mail" className="w-[22px] h-[22px] object-contain shrink-0" />
                <a href="mailto:marketing@irunabrakes.com" className="text-[#ffffff] hover:text-[#CF0A2C] section-text transition-colors">
                  marketing@irunabrakes.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Socials & Certifications Row */}
        <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-end mb-6">
          {/* Socials */}
          <div className="flex flex-col mb-8 lg:mb-0" data-aos="fade-up">
            <h4 className="text-white font-semibold card-title mb-4 oxanium tracking-wide">Socials</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/moto/iruna/in.png" alt="LinkedIn" className="w-7 h-7 object-contain" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                {/* Assuming fb.png or youtube equivalent icon here */}
                <img src="/moto/iruna/fb.png" alt="Social" className="w-7 h-7 object-contain" />
              </a>
            </div>
          </div>
          
          {/* Certifications */}
          <div data-aos="fade-up" data-aos-delay="200">
            <img src="/moto/iruna/certified.png" alt="Certifications" className="h-[75px] md:h-[90px] lg:h-[100px] object-contain" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-gray-100/50 pt-4 flex flex-col xl:flex-row items-center justify-between gap-4 text-center xl:text-left" data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
          <p className="sora text-[#ffffff] section-text font-normal">
            Copyrights @ 2026 iruna. All Rights Reserved
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sora text-[#ffffff] section-text font-normal">
            <Link href="#" className="hover:text-[#CF0A2C]  transition-colors font-normal">Privacy</Link>
            <Link href="#" className="hover:text-[#CF0A2C] transition-colors font-normal">Terms of Use</Link>
            <Link href="#" className="hover:text-[#CF0A2C]  transition-colors font-normal">Cookies Policy</Link>
            <Link href="#" className="hover:text-[#CF0A2C] transition-colors font-normal">Quality</Link>
            <Link href="#" className="hover:text-[#CF0A2C]  transition-colors font-normal">Whistle Blowing</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
