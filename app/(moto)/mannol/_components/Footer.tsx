"use client";
import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F2A44] pt-16 flex flex-col">
      <div className="custom-container">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1 xl:col-span-6 flex flex-col gap-4 pr-4" data-aos="fade-up">
            <Link href="#">
              <img 
                src="/moto/mannol/log.png" 
                alt="MANNOL Logo" 
                className="h-8 md:h-10 w-auto object-contain mb-2" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden sora-font font-bold text-3xl text-[#FFC107] mb-2">
                MANNOL
              </span>
            </Link>
            <p className="poppins-font text-[#ffffff] header-link leading-relaxed max-w-xl">
              MANNOL is a globally trusted German lubricant brand, delivering high-performance engine oils and automotive fluids engineered for maximum protection, efficiency, and reliability
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col gap-5 xl:pl-10" data-aos="fade-up" data-aos-delay="100">
            <h4 className="sora-font font-semibold text-white card-text">Quick Links</h4>
            <ul className="flex flex-col gap-4 poppins-font text-[#ffffff] header-link">
              <li><Link href="#" className="hover:text-[#FCC917] transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-[#FCC917] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#FCC917] transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-[#FCC917] transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col gap-5" data-aos="fade-up" data-aos-delay="200">
            <h4 className="sora-font font-semibold text-white card-text">Contact Us</h4>
            <div className="flex flex-col gap-4 poppins-font text-[#ffffff] header-link">
              <div className="flex items-start gap-3 group cursor-pointer transition-colors">
                <img src="/moto/mannol/phone.png" alt=""  />
                <span className="header-link  transition-colors">0823.821035</span>
              </div>
              <div className="flex items-start gap-3 group cursor-pointer transition-colors">
                <img src="/moto/mannol/mail.png" alt="" />
                <div className="flex flex-col gap-1">
                  <span className="header-link  transition-colors">SCT Vertriebs GmbH</span>
                  <span className="header-link  transition-colors">Feldstrasse 154</span>
                  <span className="header-link transition-colors">22880 Wedel, Germany</span>
                  <a href="mailto:info@sct-germany.de" className="underline  mt-1 transition-colors">
                    info@sct-germany.de
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Address */}
          <div className="col-span-2 md:col-span-1 xl:col-span-2 flex flex-col gap-5" data-aos="fade-up" data-aos-delay="300">
           <h4 className="sora-font font-semibold text-white card-text">Address</h4>
            <div className="flex items-start gap-3 poppins-font text-[#ffffff] group cursor-pointer transition-colors ">
              <img src="/moto/mannol/location.png" alt="" />
              <div className="flex flex-col gap-1 ">
                <span className="header-link  transition-colors">CT Vertriebs GmbH</span>
                <span className="header-link  transition-colors">Feldstrasse 154</span>
                <span className="header-link  transition-colors">22880 Wedel, Germany</span>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Section: Social & Newsletter */}
        <div className="border-t border-gray-300 py-6 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8" data-aos="fade-up" data-aos-delay="400">
          
          {/* Social */}
          <div className="flex flex-col gap-3">
            <h4 className="sora-font font-bold text-white footer-link ">Social</h4>
            <div className="flex items-center gap-4 text-white">
              {/* TikTok */}
             <img src="/moto/mannol/f1.png" alt="" />
             <img src="/moto/mannol/f2.png" alt="" />
             <img src="/moto/mannol/f3.png" alt="" />
             <img src="/moto/mannol/f4.png" alt="" />
             <img src="/moto/mannol/f5.png" alt="" />
             <img src="/moto/mannol/f6.png" alt="" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full xl:w-auto">
            <span className="poppins-font text-[#ffffff] header-link font-normal whitespace-nowrap">Subscribe to Newsletter :</span>
            <div className="flex bg-white p-1 rounded-sm w-full max-w-full sm:w-[500px] md:w-[600px] xl:w-[500px] 2xl:w-[600px]">
              <input 
                type="email" 
                placeholder="Enter Your E-Maild id" 
                className="flex-grow min-w-0 w-full px-3 sm:px-4 py-2 outline-none text-[#121212] poppins-font header-link"
              />
              <button className="bg-[#FFC107] flex-shrink-0 text-[#1F2A44] font-semibold poppins-font header-link px-4 sm:px-6 py-2 hover:bg-[#e0a800] transition-colors whitespace-nowrap rounded-sm">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="w-full bg-white py-5" data-aos="fade-up" data-aos-delay="500">
        <div className="custom-container">
          <p className="poppins-font text-center text-[#121212] footer-links font-normal ">
            @ 2026 SUDHEIMER CAR TECHNIK-VERTRIEBS GMBH
          </p>
        </div>
      </div>
    </footer>
  );
}
