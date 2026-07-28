"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 lg:pt-24 pb-8 border-t border-gray-200">
      <div className="custom-container flex flex-col gap-12 lg:gap-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6 lg:col-span-3" data-aos="fade-up" data-aos-delay="100">
             <Link href="#" className="w-full">
               <img src="/moto/tomex/logo.png" alt="Tomex Logo" className="w-[70%] sm:w-[50%] md:w-[45%] lg:w-[80%] h-auto object-contain object-left" />
             </Link>
             <p className="text-[#4A4A4A] text-sm xl:text-base leading-relaxed max-w-[90%] font-medium">
               Engineering safer journeys with certified, high-quality brake components trusted for performance, reliability, and lasting safety.
             </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5 lg:col-span-2 lg:pl-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-black font-bold text-lg mb-2">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'Tomex', 'Products', 'Services', 'Quality and technology'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors group">
                    <span className="text-[#4A4A4A] group-hover:text-primary font-medium text-sm xl:text-base">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-5 lg:col-span-3" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-black font-bold text-lg mb-2">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {['Brake pads and discs', 'Brake shoes and accessory kits', 'ABS sensors', 'Brake chemicals', 'Brake pads for trucks and buses'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors group">
                    <span className="text-[#4A4A4A] group-hover:text-primary font-medium text-sm xl:text-base">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-5 lg:col-span-2" data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-black font-bold text-lg mb-2">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+48672843675" className="flex items-start gap-3 hover:text-primary transition-colors group">
                  <Phone className="w-5 h-5 text-gray-700 group-hover:text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-[#4A4A4A] group-hover:text-primary font-medium text-sm xl:text-base">
                    +48 67 284 36 75
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@tomexbrakes.pl" className="flex items-start gap-3 hover:text-primary transition-colors group">
                  <Mail className="w-5 h-5 text-gray-700 group-hover:text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-[#4A4A4A] group-hover:text-primary font-medium text-sm xl:text-base">
                    info@tomexbrakes.pl
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-700 shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-[#4A4A4A] font-medium text-sm xl:text-base leading-snug">
                    TOMEX Brakes Sp. Z O.O. Sp.K.<br />
                    Os. Cechowe 8<br />
                    64-840 Budzyń
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe */}
          <div className="flex flex-col gap-5 lg:col-span-2" data-aos="fade-up" data-aos-delay="500">
            <h4 className="text-black font-bold text-lg mb-2">
              Subscribe For More Information
            </h4>
            <p className="text-[#4A4A4A] text-sm xl:text-base leading-relaxed font-medium">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from TOMEX Brakes sp. z o.o. sp.k.
            </p>
            <div className="mt-2 w-full">
              <input 
                type="email" 
                placeholder="Email Address..." 
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-700 text-sm"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-6 border-t border-gray-200 flex flex-col items-center justify-center text-center">
          <p className="text-gray-500 font-medium text-xs md:text-sm">
            © All rights reserved. TOMEX Brakes sp. z o.o. sp.k.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
