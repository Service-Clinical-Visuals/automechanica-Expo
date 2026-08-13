"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Globe, Facebook, Linkedin, Instagram, Twitter, Youtube, Search } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative bg-[#0F172A] text-white rubik-font pt-10 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/moto/fcs/bg2.png')" }}
    >
      <div className="custom-container relative z-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap- lg:gap-6 mb-10">

          {/* Column 1: Logo & Text */}
          <div className="lg:col-span-4 flex flex-col gap-3 lg:pr-6" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/fcs/logo.png"
                alt="FCS Auto Logo"
                className="w-auto h-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-[#F7941D] font-bold text-3xl oswald-font tracking-wide">FCS AUTO</span>' }}
              />
            </Link>
            <p className="text-white font-regular rubik-font section-text leading-relaxed">
              FCS Auto Parts delivers reliable ride control solutions with OE-quality performance, advanced engineering, and lasting durability.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="lg:col-span-1 flex flex-col gap-2" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-xl font-bold oswald-font text-white">Links</h4>
            <ul className="flex flex-col gap-2 text-white rubik-font font-regular text-[14px]">
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">Tech Resources</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">News</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">Support</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">Find A Part</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-2 flex flex-col gap-3" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xl font-bold oswald-font text-white">Products</h4>
            <ul className="flex flex-col gap-2 text-white rubik-font font-regular text-[14px]">
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">HD Fleet Gas Shocks</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">HD Fleet Air Springs</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">Complete strut assemblies</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">Bare Struts & Shock Absorber</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">Lift Supports</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">Electric Lift Supports</Link></li>
              <li><Link href="#" className="hover:text-[#F7941D] transition-colors">Air Suspension</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-2 flex flex-col gap-3" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-xl font-bold oswald-font text-white">Contact</h4>
            <ul className="flex flex-col gap-2 text-white rubik-font font-regular text-[14px]">
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-white" />
                <a href="tel:+18667084554" className="hover:text-[#F7941D] transition-colors">
                  (866) 708-4554
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={16} className="flex-shrink-0 text-white" />
                <a href="https://www.fcsautoparts.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7941D] transition-colors">
                  www.fcsautoparts.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-white" />
                <span className="leading-relaxed">
                  31800 Research Park Dr.<br />
                  Madison Heights, MI<br />
                  48071
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe */}
          <div className="lg:col-span-3 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-xl font-bold oswald-font text-white">Subscribe for more information</h4>
            <p className="text-white rubik-font font-regular text-[14px] leading-relaxed mb-1">
              Stay updated with FCSauto latest products, news, and innovations.
            </p>
            <div className="flex items-center w-full bg-white rounded-[10px] overflow-hidden p-1">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-grow px-2 py-1 text-[#4B5563] text-[14px] outline-none bg-transparent"
              />
              <button className="bg-[#163683] w-8 h-8 flex items-center justify-center rounded-[4px] flex-shrink-0 hover:bg-[#112b6b] transition-colors">
                <Search size={16} className="text-white" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-white py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Youtube size={20} /></Link>
          </div>
          <p className="text-center">
            Designed & Developed by <a href="#" className="underline hover:text-white">Pro Management Inc.</a>
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Condition</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
