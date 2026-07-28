"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1B] text-white dmsans-font py-12 lg:py-16">
      <div className="custom-container">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 mb-12">

          {/* Column 1: Logo & Text */}
          <div className="flex flex-col gap-6 pr-0 lg:pr-10" data-aos="fade-up">
            <Link href="#" className="flex items-center gap-3">
              <img
                src="/moto/sm-motorenteile-gmbh/footerlogo.png"
                alt="SM Motorenteile Logo"
                className="w-12 h-12 md:w-14 md:h-14 object-contain  rounded-full"
              />
              <span className="card-title font-semibold orbitron-font tracking-wide">SM Motorenteile</span>
            </Link>
            <p className="section-text text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Driven by innovation and advanced manufacturing. SM Motorenteile GmbH produces precision engine components designed to ensure long-lasting performance, accurate fitment, and dependable reliability.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5 lg:border-r border-gray-600 px-0 lg:px-10">
            <h4 className="card-title orbitron-font font-semibold" data-aos="fade-up" data-aos-delay="100">Quick Links</h4>
            <ul className="flex flex-col gap-4 section-text text-gray-300" data-aos="fade-up" data-aos-delay="200">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Column 3: Awards */}
          <div className="flex flex-col gap-5 lg:border-r border-gray-600 px-0 lg:px-10">
            <h4 className="card-title orbitron-font font-semibold" data-aos="fade-up" data-aos-delay="200">Awards</h4>
            <ul className="flex flex-col gap-4 section-text text-gray-300" data-aos="fade-up" data-aos-delay="300">
              <li><Link href="#" className="hover:text-white transition-colors">AEO</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Die Familienunternehmer</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">GBA 2025</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">EAC</Link></li>
              <li><Link href="#" className="text-[#ED1C24] hover:text-red-500 transition-colors">See All...</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Contact */}
          <div className="flex flex-col gap-5 px-0 lg:px-10">
            <h4 className="card-title orbitron-font font-semibold" data-aos="fade-up" data-aos-delay="300">Quick Contact</h4>
            <div className="flex flex-col gap-5 section-text text-gray-300 mt-1" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  SM Motorenteile GmbH<br />
                  Alleenstrasse 7071679 Asperg,<br />
                  Germany
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+49 (0)7141 - 20 47 0</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-700 mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">

          {/* Social */}
          <div className="flex flex-col items-center xl:items-start gap-4">
            <span className="card-title orbitron-font font-semibold" data-aos="fade-up" data-aos-delay="400">Socials</span>
            <div className="flex items-center gap-5" data-aos="fade-up" data-aos-delay="500">
              <Link href="#"><img src="/moto/sigam/music.png" alt="Tiktok" className="h-[18px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/fb.png" alt="Facebook" className="h-[18px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/in.png" alt="LinkedIn" className="h-[18px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/x.png" alt="X" className="h-[18px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/insta..png" alt="Instagram" className="h-[18px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/you.png" alt="YouTube" className="h-[18px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto justify-center xl:justify-end" data-aos="fade-up" data-aos-delay="600">
            <span className="btn-text dmsans-font text-gray-200">Subscribe to Newsletter :</span>
            <div className="flex w-full xl:w-auto">
              <input 
                type="email" 
                placeholder="Email Id" 
                className="bg-transparent border border-[#333333] px-4 py-2 w-full sm:w-[250px] text-[#333333] outline-none dmsans-font btn-text placeholder:text-[#999999]"
              />
              <button className="bg-[#ED1C24] text-white px-5 py-2 font-normal btn-text hover:bg-red-700 transition-colors flex-shrink-0 dmsans-font">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
