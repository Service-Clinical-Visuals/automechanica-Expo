"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[#F5F7FA] pt-14">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-0 pb-12">
          {/* Left Column */}
          <div data-aos="fade-right" className="w-full xl:w-[40%] xl:pr-12 xl:pr-20 relative">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/moto/celikis/logo.png" 
                alt="Celikis Logo" 
                className="w-[180px] h-auto object-contain" 
              />
            </Link>
            
            <p className="section-text text-[#4B5563] font-bold mb-6 ">
              At the Technological and Quality Standards of OEM Products
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-sm">
              <input 
                type="email" 
                placeholder="Please enter your email" 
                className="w-full px-4 py-2 bg-transparent border border-[#A0B0C0] rounded text-[#333333] focus:outline-none focus:border-primary font-cabin text-sm placeholder:text-[#666666]"
              />
              <Button 
                href="#" 
                variant="primary" 
                hasArrow
                className="whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <img src="/moto/celikis/fb.png" alt="Facebook" className="w-6 h-6 object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <img src="/moto/celikis/insta.png" alt="Instagram" className="w-6 h-6 object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <img src="/moto/celikis/youtube.png" alt="YouTube" className="w-6 h-6 object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <img src="/moto/celikis/linkedin.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
              </Link>
            </div>

            {/* Vertical Divider for Desktop */}
            <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-[1px] bg-gray-200"></div>
          </div>
          
          {/* Right Columns */}
          <div data-aos="fade-left" className="w-full xl:w-[60%] xl:pl-12 xl:pl-20 grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div>
              <h4 className="footer-text font-semibold text-[#121C22] mb-6 font-cabin">Quick Links</h4>
              <ul className="flex flex-col gap-4 font-cabin text-[15px]">
                <li><Link href="#" className="section-text text-[#005CA9] underline decoration-[#005CA9] font-semibold hover:text-[#005CA9] transition-colors">Home</Link></li>
                <li><Link href="#" className="section-text text-[#4B5563] hover:text-[#005CA9] hover:underline hover:decoration-[#005CA9] transition-colors">About Us</Link></li>
                <li><Link href="#" className="section-text text-[#4B5563] hover:text-[#005CA9] hover:underline hover:decoration-[#005CA9] transition-colors">Products</Link></li>
                <li><Link href="#" className="section-text text-[#4B5563] hover:text-[#005CA9] hover:underline hover:decoration-[#005CA9] transition-colors">Technologies</Link></li>
                <li><Link href="#" className="section-text text-[#4B5563] hover:text-[#005CA9] hover:underline hover:decoration-[#005CA9] transition-colors">News & Event</Link></li>
                <li><Link href="#" className="section-text text-[#4B5563] hover:text-[#005CA9] hover:underline hover:decoration-[#005CA9] transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Our Company */}
            <div>
              <h4 className="footer-text font-semibold text-[#121C22] mb-6 font-cabin">Our Company</h4>
              <ul className="flex flex-col gap-4 font-cabin text-[15px]">
                <li><Link href="#" className="section-text text-[#4B5563] font-semibold hover:text-[#005CA9] transition-colors">Cookie Policy</Link></li>
                <li><Link href="#" className="section-text text-[#4B5563] font-semibold hover:text-[#005CA9] transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="footer-text font-semibold text-[#121C22] mb-6 font-cabin">Contact Info</h4>
              <ul className="flex flex-col gap-5 font-cabin text-[15px]">
                <li className="flex items-center gap-3">
                  <img src="/moto/celikis/mail.png" alt="Mail" className="w-[18px] h-[18px] object-contain" />
                  <a href="mailto:celikis@celikis.com.tr" className="section-text text-[#4B5563] font-semibold hover:text-[#005CA9] transition-colors">celikis@celikis.com.tr</a>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/moto/celikis/phone.png" alt="Phone" className="w-[18px] h-[18px] object-contain" />
                  <a href="tel:+02323767820" className="section-text text-[#4B5563] font-semibold hover:text-[#005CA9] transition-colors">+02323767820</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div data-aos="fade-up" className="bg-white py-5">
        <div className="custom-container flex flex-col items-center justify-center text-center">
          <p className="card-title text-[#4B5563] font-normal mb-6 ">
            Copyright 1962 - 2024 | Tüm Hakları Saklıdır | Powered by <span className="underline underline-offset-1 decoration-[#92A1B0]">Çelikiş Dişli Otomotiv Sanayi ve Ticaret A.Ş.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
