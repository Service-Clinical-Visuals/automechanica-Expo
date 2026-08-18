"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-screen relative left-1/2 -translate-x-1/2 bg-[#011689] text-white pt-16 pb-6 overflow-hidden">
      <div className="custom-container flex flex-col gap-10 px-4 lg:px-8 max-w-[1300px] mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Column 1: Logo & Description (Span 4) */}
          <div className="flex flex-col gap-6 lg:col-span-3" data-aos="fade-up" data-aos-delay="100">
            <Link href="#" className="inline-block">
              <img src="/moto/racingoil/h-logo.png" alt="Racing Oil Logo" className="h-auto w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </Link>
            <p className="font-secondary section-text text-white leading-relaxed max-w-sm">
              Racing Oil S.L. es un sueño hecho realidad, una empresa de nueva generación fruto de los conocimientos y la experiencia atesorada durante más de 10 años en el sector de los lubricantes.
            </p>
          </div>

          {/* Column 2: Company (Span 2) */}
          <div className="flex flex-col gap-5 lg:col-span-2 lg:ml-auto" data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-primary font-bold section-text text-white">
              Company
            </h4>
            <ul className="flex flex-col gap-3 font-secondary">
              <li><Link href="#" className="section-text text-medium text-white hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="section-text text-white hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="section-text text-white hover:text-white transition-colors">News</Link></li>
              <li><Link href="#" className="section-text text-white hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="section-text text-white hover:text-white transition-colors">Business Area</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal (Span 2) */}
          <div className="flex flex-col gap-5 lg:col-span-2 lg:mx-auto" data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-primary font-bold section-text text-white">
              Legal
            </h4>
            <ul className="flex flex-col gap-3 font-secondary">
              <li><Link href="#" className="section-text text-white hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="#" className="section-text text-white hover:text-white transition-colors">Legal Notice</Link></li>
              <li><Link href="#" className="section-text text-white hover:text-white transition-colors">Cookies</Link></li>
              <li><Link href="#" className="section-text text-white hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us (Span 2) */}
          <div className="flex flex-col gap-5 lg:col-span-2 lg:pl-4" data-aos="fade-up" data-aos-delay="400">
            <h4 className="font-primary font-bold section-text text-white">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 font-secondary">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ffb000] shrink-0 mt-0.5" />
                <span className="section-text text-white">972861956</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ffb000] shrink-0 mt-0.5" />
                <span className="section-text text-white leading-relaxed max-w-[180px]">
                  Urbanització Torres Pujals,<br />Arbúcies, Cataluña 17401, ES
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media (Span 2) */}
          <div className="flex flex-col gap-5 lg:col-span-2 lg:ml-auto" data-aos="fade-up" data-aos-delay="500">
            <h4 className="font-primary font-bold section-text text-white">
              Social Media Links
            </h4>
            <div className="flex items-center gap-3">
              <Link href="#" className="w-10 h-10 rounded-full bg-[#ffb000] flex items-center justify-center hover:bg-white group transition-colors">
                <Linkedin className="w-6 h-6 text-white group-hover:text-[#011689]" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#ffb000] flex items-center justify-center hover:bg-white group transition-colors">
                <Instagram className="w-6 h-6 text-white group-hover:text-[#011689]" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-4 flex flex-col items-center justify-center">
          <p className="font-secondary section-text text-white text-center">
            © 2026 Racing Oil. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
