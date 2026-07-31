"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f1e2e] pt-12 pb-6 text-white font-rubik overflow-hidden">
      <div className="custom-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 mb-12">
          
          {/* Column 1: About */}
          <div className="col-span-2 md:col-span-1 xl:col-span-4" data-aos="fade-up">
            <Link href="#" className="block mb-6">
              <img 
                src="/moto/amc-amadeo/logo.png" 
                alt="AMC Logo" 
                className="h-12 xl:h-16 object-contain" 
              />
            </Link>
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed max-w-sm">
              Precision-engineered automotive components manufacturer specializing in advanced casting, machining, and innovative solutions for OEM, OES, and aftermarket markets worldwide.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="col-span-1 md:col-span-1 xl:col-span-2" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-white oswald font-semibold footer-text mb-6">Links</h4>
            <ul className="space-y-4 text-white section-text font-normal rubik">
              <li><Link href="#" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Manufacturing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">After Market</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">3D Modelling</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">News</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-span-1 md:col-span-1 xl:col-span-3" data-aos="fade-up" data-aos-delay="200">
           <h4 className="text-white oswald font-semibold footer-text mb-6">Contact</h4>
            <ul className="space-y-5 text-gray-300 section-text font-normal">
              <li className="flex items-start gap-3">
                <img src="/moto/amc-amadeo/ph.png" alt="pin"  />
                <a href="tel:+34964659494" className="text-white section-text font-normal rubik">
                  +34 964 65 94 94
                </a>
              </li>
              <li className="flex items-start gap-3">
                 <img src="/moto/amc-amadeo/mail.png" alt="pin"  />
                <a href="mailto:dpto.ventas@amc.es" className="text-white section-text font-normal rubik">
                  dpto.ventas@amc.es
                </a>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/amc-amadeo/loc.png" alt="pin"  />
                <span className="text-white section-text font-normal rubik">
                  Ctra. Villavieja, 76<br />
                  12520 Nules –<br />
                  Castellón<br />
                  España
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-span-2 md:col-span-1 xl:col-span-3" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-white oswald font-semibold footer-text mb-6">News Letter</h4>
            <p className="text-white section-text font-normal leading-relaxed mb-6">
              Subscribe to our newsletter to receive updates on the latest news!
            </p>
            
            <form className="relative flex items-center w-full bg-white rounded-md overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address...." 
                className="flex-grow w-full bg-white text-gray-800 px-4 py-3 section-text font-normal rubik focus:outline-none min-w-0"
                required
              />
              <button 
                type="submit"
                className="shrink-0 bg-primary text-white p-2.5 rounded-md hover:bg-red-700 transition-colors m-1 flex items-center justify-center"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-8 text-center" data-aos="fade-up" data-aos-offset="0">
          <p className="text-white section-text font-normal rubik">
            &copy; 2026 AMC Amadeo Martí Carbonell S.A.
          </p>
        </div>

      </div>
    </footer>
  );
}
