"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white pt-16 pb-6 overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Column 1: Logo & Description (Span 4) */}
          <div className="flex flex-col gap-6 lg:col-span-4" data-aos="fade-up" data-aos-delay="100">
            <Link href="#" className="inline-flex items-center gap-2">
              <span className="font-primary font-bold text-4xl tracking-wide">HANN</span>
              <span className="font-secondary text-sm leading-tight text-white/90 border-l border-white/30 pl-2">
                A⁺ Reliable<br />Filter
              </span>
            </Link>
            <p className="font-secondary text-white/80 text-sm leading-relaxed pr-4">
              When Your Air Filter Is Not Cleaned Regularly, Your Engine Is Forced To Work Harder, Resulting In Poor Fuel Economy, Higher Emissions, And, In The Long Run, A Loss Of Engine Power.
            </p>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="flex flex-col gap-5 lg:col-span-2 lg:pl-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-primary font-bold text-lg text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3.5 font-secondary">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products (Span 2) */}
          <div className="flex flex-col gap-5 lg:col-span-3" data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-primary font-bold text-lg text-white">
              Products
            </h4>
            <ul className="flex flex-col gap-3.5 font-secondary">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  Oil Filters
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  Fuel Filters
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  Air Filters
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (Span 4) */}
          <div className="flex flex-col gap-5 lg:col-span-3" data-aos="fade-up" data-aos-delay="400">
            <h4 className="font-primary font-bold text-lg text-white">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4 font-secondary text-white/80 text-sm">
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="leading-relaxed">
                    Umurbey Mahallesi, 9 No'lu Sokak, Bursa, Gemlik 16600, TR
                  </span>
                </div>
              </li>
              <li>
                <a href="mailto:info@hannfilter.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 text-white shrink-0" strokeWidth={1.5} />
                  <span>info@hannfilter.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+902245121223" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 text-white shrink-0" strokeWidth={1.5} />
                  <span>+90 224 512 12 23</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-[#D9D9D9] mt-2"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-center text-white text-xs sm:text-sm font-secondary gap-4 pb-2">
          <p>
            Copyright© 2026 HANN Filter. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
