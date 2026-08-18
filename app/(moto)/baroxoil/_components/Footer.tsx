import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F2469] text-white pt-14 md:pt-14 pb-6 overflow-hidden">
      <div className="custom-container flex flex-col gap-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-10 xl:gap-6">
          
          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col ">
              <h4 className="odibee-sans-font section-subtitle font-normal tracking-wide text-[#FFFFFF]">Quick Links</h4>
              <div className="w-15 h-[3px] bg-[#F79320]"></div>
            </div>
            <ul className="flex flex-col gap-4 instrument-sans-font text-white section-text leading-normal">
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-[#F79320] transition-colors flex items-center gap-1">Product Groups <span className="text-[10px]"><ChevronDown size={18} /></span></Link></li>
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">Become a Distributor</Link></li>
            </ul>
          </div>

          {/* Product Groups */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col ">
              <h4 className="odibee-sans-font section-subtitle font-normal tracking-wide text-[#FFFFFF]">Product Groups</h4>
              <div className="w-15 h-[3px] bg-[#F79320]"></div>
            </div>
            <ul className="flex flex-col gap-4 instrument-sans-font text-white section-text leading-normal">
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">Passenger Cars (ULTRA)</Link></li>
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">Commercial Vehicles (VIATA)</Link></li>
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">Motorbike (MOTA)</Link></li>
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">Hydraulic Oils (BOOSTA)</Link></li>
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">View All Products</Link></li>
            </ul>
          </div>

          {/* Center Logo & Socials */}
          <div className="flex flex-col items-center justify-center gap-8 xl:order-none order-first sm:col-span-2 xl:col-span-1">
            <img 
              src="/moto/baroxoil/logo.png" 
              alt="Barox Oil Logo" 
              className="w-48 md:w-56 h-auto object-contain" 
            />
            <div className="flex items-center gap-8">
         
                <img src="/moto/baroxoil/fb.png" alt="Facebook" className="w-6 h-6 object-contain brightness-0 invert" />
             
                <img src="/moto/baroxoil/x.png" alt="X" className="w-6 h-6 object-contain brightness-0 invert" />
        
                <img src="/moto/baroxoil/in.png" alt="LinkedIn" className="w-6 h-6 object-contain brightness-0 invert" />
          
                <img src="/moto/baroxoil/ins.png" alt="Instagram" className="w-6 h-6 object-contain brightness-0 invert" />
            </div>
          </div>

          {/* Business */}
          <div className="flex flex-col gap-6 xl:pl-15">
            <div className="flex flex-col items-start">
              <h4 className="odibee-sans-font section-subtitle font-normal tracking-wide text-[#FFFFFF]">Business</h4>
             <div className="w-15 h-[3px] bg-[#F79320]"></div>
            </div>
            <ul className="flex flex-col gap-4 instrument-sans-font text-white section-text leading-normal">
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">Become a Distributor</Link></li>
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">Cookies Policy</Link></li>
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-[#F79320] transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 xl:pl-15">
            <div className="flex flex-col">
              <h4 className="odibee-sans-font section-subtitle font-normal tracking-wide text-[#FFFFFF]">Our Contact Info</h4>
              <div className="w-15 h-[3px] bg-[#F79320]"></div>
            </div>
            <ul className="flex flex-col gap-4 instrument-sans-font text-white section-text leading-normal">
              <li className="flex items-start gap-3">
                <img src="/moto/baroxoil/location.png" alt="Location" className="w-5 h-5 object-contain shrink-0 mt-0.5 brightness-0 invert" />
                <span className="leading-relaxed">
                  Sandfeldring 11a<br />
                  86650 Wemding, Germany
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/moto/baroxoil/mail.png" alt="Email" className="w-5 h-5 object-contain shrink-0 brightness-0 invert" />
                <a href="mailto:sales@barox-oil.de" className="hover:text-white transition-colors underline">
                  sales@barox-oil.de
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="flex flex-col gap-6 items-center">
          <div className="w-full h-[1px] bg-white/60"></div>
          <p className="instrument-sans-font text-white section-text ">
            © BAROX GmbH - 2026. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
