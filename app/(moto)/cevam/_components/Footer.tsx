"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Search } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white rubik-font pt-16">
      <div className="custom-container">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">

          {/* Left Column: Logo & Text */}
          <div className="w-full lg:w-[25%] lg:mr-30 flex flex-col gap-6 lg:pr-10 lg:border-r lg:border-white" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/cevam/logo.png"
                alt="CEVAM Logo"
                className="w-auto h-15 object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-[#0195DA] font-bold text-4xl oswald-font tracking-wide">CEVAM</span>' }}
              />
            </Link>
            <p className="text-white font-regular rubik-font section-text leading-relaxed">
              CEVAM delivers reliable remanufactured automotive solutions through expert standard exchange processes, quality-driven practices, and global customer support, ensuring dependable performance worldwide.
            </p>
          </div>

          {/* Center Left Column: Links */}
          <div className="w-full lg:w-[15%] flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-xl font-bold oswald-font text-white">Links</h4>
            <ul className="flex flex-col gap-4 text-white rubik-font font-regular">
              <li><Link href="#" className="hover:text-[#0195DA] transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-[#0195DA] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#0195DA] transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-[#0195DA] transition-colors">Implementation</Link></li>
              <li><Link href="#" className="hover:text-[#0195DA] transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-[#0195DA] transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Center Right Column: Contact */}
          <div className="w-full lg:w-[25%] flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xl font-bold oswald-font text-white">Contact</h4>
            <ul className="flex flex-col gap-5 text-white rubik-font font-regular">
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-white" />
                <a href="tel:+48697400501" className="hover:text-[#0195DA] transition-colors">
                  +48 697 400 501
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-white" />
                <a href="mailto:handlowy@cevam.com" className="hover:text-[#0195DA] transition-colors">
                  handlowy@cevam.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-white" />
                <span className="leading-relaxed">
                  Ul. Krakowska 22<br />
                  96-200 RAWA MAZOWIECKA<br />
                  POLAND
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column: Subscribe */}
          <div className="w-full lg:w-[25%] flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-xl font-bold oswald-font text-white">Subscribe for more information</h4>
            <p className="text-white rubik-font font-regular leading-relaxed">
              Stay updated with CEVAM SA latest products, news, and innovations.
            </p>

            <div className="flex items-center w-full bg-white rounded-[10px] overflow-hidden mt-2 p-1">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-grow px-3 py-2 text-[#4B5563] text-[16px] outline-none bg-transparent"
              />
              <button className="bg-[#0195DA] w-10 h-10 flex items-center justify-center rounded-[5px] flex-shrink-0 hover:bg-[#017bb5] transition-colors">
                <Search size={18} className="text-white" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-white/70 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>
            &copy; 2026 Cevam SA All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
