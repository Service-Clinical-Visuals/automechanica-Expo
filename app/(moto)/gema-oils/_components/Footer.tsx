"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05111D] text-white source-sans-font">
      <div className="custom-container pt-20 pb-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-12 gap-10 xl:gap-6 mb-5">

          {/* Column 1: Logo & Text */}
          <div className="xl:col-span-3 flex flex-col gap-6" data-aos="fade-up">
            <Link href="#" className="flex items-center gap-3">
              <img
                src="/moto/gema-oils/logo.png"
                alt="Gema Oils Logo"
                className="w-[180px] h-auto object-contain"
              />
            </Link>
            <p className="text-[#CCCCCC] text-[13px] leading-relaxed pr-4">
              GEMAOIL is a trusted producer of high-performance engine oils and lubricants, delivering reliable protection, efficiency, and long-lasting performance for modern engines.
            </p>
            <div className="flex items-center gap-5 mt-2">
              <Link href="#" className="hover:-translate-y-1 transition-transform">
                <img src="/moto/gema-oils/fb.png" alt="Social" className="w-auto h-auto object-contain" />
              </Link>
              <Link href="#" className="hover:-translate-y-1 transition-transform">
                <img src="/moto/gema-oils/twitter.png" alt="Twitter" className="w-auto h-auto object-contain" />
              </Link>
              <Link href="#" className="hover:-translate-y-1 transition-transform">
                <img src="/moto/gema-oils/linked.png" alt="LinkedIn" className="w-auto h-auto object-contain" />
              </Link>
              <Link href="#" className="hover:-translate-y-1 transition-transform">
                <img src="/moto/gema-oils/insta.png" alt="Instagram" className="w-auto h-auto object-contain" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="xl:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-[15px] font-medium">Quick Links</h4>
              <div className="w-8 h-[2px] bg-[#FEC52E]"></div>
            </div>
            <ul className="flex flex-col gap-3.5 text-[13px] font-medium text-[#FFFFFF]">
              <li><Link href="#" className="hover:text-[#FEC52E] transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-[#FEC52E] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#FEC52E] transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-[#FEC52E] transition-colors">News</Link></li>
              <li><Link href="#" className="hover:text-[#FEC52E] transition-colors">Career</Link></li>
              <li><Link href="#" className="hover:text-[#FEC52E] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="xl:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-[15px] font-medium">Products</h4>
              <div className="w-8 h-[2px] bg-[#FEC52E]"></div>
            </div>
            <ul className="flex flex-col gap-3.5 text-[13px] font-medium text-[#FFFFFF]">
              <li><Link href="#" className="hover:text-[#FEC52E] transition-colors">Passenger Car Engine Oils</Link></li>
              <li><Link href="#" className="hover:text-[#FEC52E] transition-colors">Commercial Vehicle Engine oil</Link></li>
              <li><Link href="#" className="hover:text-[#FEC52E] transition-colors">Motorcycle Oils</Link></li>
              <li><Link href="#" className="hover:text-[#FEC52E] transition-colors">Greases</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="xl:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-[15px] font-medium">Contact</h4>
              <div className="w-8 h-[2px] bg-[#FEC52E] mt-1"></div>
            </div>
            <div className="flex flex-col gap-4 text-[13px] font-medium text-[#FFFFFF]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">Acıdereosb Mah.<br />Abdullah Gül Blvd.<br />No:6 Sarıçam, Adana / TURKEY</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <p>+90 322 502 44 31</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <p>info@gemaoil.com</p>
              </div>
            </div>
          </div>

          {/* Column 5: Stay Updated */}
          <div className="xl:col-span-3 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-[15px] font-medium">Stay Updated</h4>
              <div className="w-8 h-[2px] bg-[#FEC52E] "></div>
            </div>
            <div className="flex flex-row items-center gap-3 mt-2 w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border border-gray-500 text-white px-3 py-2 w-full text-sm focus:outline-none focus:border-[#FEC52E] rounded"
              />
              <button className="bg-[#FEC52E] text-[#FFFFFF] px-4 py-2 font-medium text-sm flex items-center justify-center gap-1.5 rounded hover:bg-[#e0b029] transition-colors whitespace-nowrap">
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Row - Copyright */}
      <div className="border-t border-gray-700/50 py-6 w-full">
        <div className="custom-container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A3A3A3] text-[13px]">
            Copyright 2025 Gema Oil All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[#A3A3A3] text-[13px]">
            <Link href="#" className="hover:text-[#FEC52E] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#FEC52E] transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-[#FEC52E] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
