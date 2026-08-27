"use client";
import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f5] pt-12 md:pt-15 pb-4">
      <div className="custom-container flex flex-col px-8 md:px-12 lg:px-28">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 xl:grid-cols-12 gap-x-4 gap-y-10 lg:gap-8 xl:gap-12 mb-10">
          
          {/* Col 1: Logo & About */}
          <div className="col-span-2 md:col-span-1 xl:col-span-2 flex flex-col items-start" data-aos="fade-up" data-aos-delay="0">
            <Link href="/" className="mb-6 inline-block">
              <img 
                src="/moto/jb-germanoil/logo.png" 
                alt="JB Germanoil Logo" 
                className="h-14 md:h-20 w-auto object-contain mix-blend-multiply"
              />
            </Link>
            <p className="akshar-font section-text text-[#4a4a4a] leading-relaxed">
              Trusted in over 51 countries, JB GERMANOIL combines German quality, advanced technology, and decades of expertise to power every journey.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-span-1 xl:col-span-3 flex flex-col items-start xl:pl-20" data-aos="fade-up" data-aos-delay="100">
            <h4 className="aldrich-font card-title1 text-[#2a2a2a] mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "About Us", "Oilfinder", "Sustainability & HSSE", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link href="#" className="akshar-font section-text text-[#4a4a4a] hover:text-[var(--primary)] transition-colors duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div className="col-span-1 xl:col-span-2 flex flex-col items-start" data-aos="fade-up" data-aos-delay="200">
           <h4 className="aldrich-font card-title1 text-[#2a2a2a] mb-6">Legal</h4>
            <ul className="flex flex-col gap-3">
              {["Imprint", "Privacy Policy", "Terms & Conditions", "Legal Notice", "Right of Withdrawal"].map((link) => (
                <li key={link}>
                  <Link href="#" className="akshar-font section-text text-[#4a4a4a] hover:text-[var(--primary)] transition-colors duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="col-span-2 md:col-span-1 xl:col-span-2 flex flex-col items-start" data-aos="fade-up" data-aos-delay="300">
            <h4 className="aldrich-font card-title1 text-[#2a2a2a] mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
               <img src="/moto/jb-germanoil/phone.png" alt="Location" className="w-4 h-4" />
                <span className="akshar-font section-text text-[#4a4a4a]">+49 (0) 38852 - 90620</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/jb-germanoil/mail.png" alt="Location" className="w-4 h-4" />
                <Link href="mailto:info@jb-germanoil.de" className="akshar-font section-text text-[#4a4a4a] hover:text-[var(--primary)] transition-colors">
                  info@jb-germanoil.de
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/jb-germanoil/location.png" alt="Location" className="w-4 h-4" />
                <span className="akshar-font section-text text-[#4a4a4a] leading-relaxed">
                  JB GERMAN OIL GmbH<br/>Wölzower Weg 27<br/>19243 Wittenburg
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Subscribe */}
          <div className="col-span-2 md:col-span-2 xl:col-span-3 flex flex-col items-start" data-aos="fade-up" data-aos-delay="400">
            <h4 className="aldrich-font card-title1 text-[#2a2a2a] mb-6">Subscribe For More Information</h4>
            <p className="akshar-font section-text text-[#4a4a4a] leading-relaxed mb-6">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from JB GERMAN OIL GmbH
            </p>
            <div className="w-full flex items-center bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden p-1.5 focus-within:border-gray-300 focus-within:shadow-md transition-all duration-300 drop-shadow-md">
              <input 
                type="email" 
                placeholder="Email Address...." 
                className="flex-grow akshar-font section-text text-[#4a4a4a] px-3 py-1.5 outline-none bg-transparent placeholder-gray-400 "
              />
              <button 
                className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[var(--primary)] hover:bg-[#c91d20] rounded-sm flex items-center justify-center text-white transition-colors duration-300"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <hr className="w-full border-gray-300 mb-6" />
        <div className="w-full flex justify-center items-center">
          <p className="akshar-font section-text text-[#4a4a4a] text-center">
            © 2026 All rights Reserved. Design by JB GERMAN OIL GmbH
          </p>
        </div>

      </div>
    </footer>
  );
}
