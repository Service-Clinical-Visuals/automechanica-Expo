"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#171717] pt-16 lg:pt-24 pb-8 ">
      <div className="custom-container flex flex-col gap-12 lg:gap-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
             <Link href="#" className="w-full">
               <img src="/moto/et-engine/logo1.png" alt="ET Engine Logo" className="w-[60%] sm:w-[50%] md:w-[45%] lg:w-[65%] xl:w-[50%] h-auto object-contain object-left" />
             </Link>
             <p className="footer-body text-white  mt-2 leading-relaxed max-w-[90%]">
               ET ENGINETEAM delivers premium engine components, innovative repair kits, and trusted automotive solutions backed by quality, reliability, and a global distribution network.
             </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 lg:pl-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading text-white mb-2">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'News', 'Dealers', 'Catalog', 'Contacts'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors group">
                    <span className="footer-body text-white group-hover:opacity-100">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading text-white mb-2">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {['Timing parts', 'Camshafts', 'Pistons / liners / rings', 'Pumps', 'Cylinder heads', 'Electric parts'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors group">
                    <span className="footer-body text-white group-hover:opacity-100">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="400">
            <h4 className="footer-heading text-white mb-2">
              legal
            </h4>
            <ul className="flex flex-col gap-3">
              {['Privacy Policy', 'Cookie Policy', 'Terms & Conditions', 'Disclaimer', 'Sitemap'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors group">
                    <span className="footer-body text-white group-hover:opacity-100">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="500">
            <h4 className="footer-heading text-white mb-2">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:00420475209033" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 text-white group-hover:opacity-100" strokeWidth={2} />
                  <span className="footer-body text-white group-hover:opacity-100">
                    00420 475 209 033
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:Info@Engineteam.Com" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 text-white group-hover:opacity-100" strokeWidth={2} />
                  <span className="footer-body text-white group-hover:opacity-100">
                    Info@Engineteam.Com
                  </span>
                </a>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <MapPin className="w-5 h-5 text-white group-hover:opacity-100" strokeWidth={2} />
                  <span className="footer-body text-white group-hover:opacity-100">
                    Dealers
                  </span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/50 flex flex-col items-center justify-center text-center"  >
          <p className="footer-body text-white ">
            Copyright © 2026 ET Engineteam - All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
