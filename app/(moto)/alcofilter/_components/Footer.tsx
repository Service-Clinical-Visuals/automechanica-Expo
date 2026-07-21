"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[#050D14]  pt-16 pb-6 w-full">
      <div className="custom-container">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Logo & About */}
          <div className="lg:col-span-3 flex flex-col gap-6 ">
            <Link href="#">
              <img 
                src="/moto/alcofilter/logo.png" 
                alt="ALCO Logo" 
                className="w-[200px] h-auto object-cover"
              />
            </Link>
            <p className="outfit-font text-[#ffffff] section-text mb-4 leading-[1.6] font-normal">
              For over 50 years, ALCO Filters has been delivering reliable and high-performance filtration solutions for automotive and industrial applications worldwide.
            </p>
          </div>

          {/* Links Wrapper for Mobile Row Layout */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {/* Quick Links */}
            <div className="flex flex-col gap-4 xl:pl-4">
              <div className="flex flex-col gap-2 mb-2">
                <h4 className="oswald-font font-medium footer-link text-white ">Quick Links</h4>
                <div className="w-[70px] h-[2px] bg-[#E10600]"></div>
              </div>
              <ul className="flex flex-col gap-3">
                {['Home', 'About Us', 'Products', 'News', 'Gallery', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="outfit-font text-[#ffffff] section-text hover:text-[#E10600] hover:pl-1 transition-all ">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 mb-2">
                <h4 className="oswald-font font-medium footer-link text-white">Products</h4>
                <div className="w-[60px] h-[2px] bg-[#E10600]"></div>
              </div>
              <ul className="flex flex-col gap-3">
                {['Oil Filter', 'Cabin Filter', 'Air Filter', 'Fuel Filter', 'Hydraulic Filter'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="outfit-font text-[#ffffff] section-text hover:text-[#E10600] hover:pl-1 transition-all">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex flex-col gap-2 mb-2">
              <h4 className="oswald-font font-medium footer-link text-white">Contact</h4>
              <div className="w-[60px] h-[2px] bg-[#E10600]"></div>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                 <img src="/moto/alcofilter/location.png" alt="mail" className="w-6 h-6  flex-shrink-0" />
                <span className="outfit-font text-[#ffffff] section-text hover:text-[#E10600] hover:pl-1 transition-all">
                  Alco Filters (Cyprus) Ltd,<br />
                  34 Tripoleos Str.,<br />
                  2235 Latsia
                </span>
              </li>
              <li className="flex items-center gap-3">
                 <img src="/moto/alcofilter/phone.png" alt="mail" className="w-6 h-6 text-gray-400 flex-shrink-0" />
                <span className="outfit-font text-[#ffffff] section-text hover:text-[#E10600] hover:pl-1 transition-all">
                  +357-22-467667
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/moto/alcofilter/mail.png" alt="mail" className="w-6 h-6 text-gray-400 flex-shrink-0" />
                <span className="outfit-font text-[#ffffff] section-text hover:text-[#E10600] hover:pl-1 transition-all">
                  marketing@alcofilter.com
                </span>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="flex flex-col gap-2 mb-2">
              <h4 className="oswald-font font-medium footer-link text-white">Stay Updated</h4>
             <div className="w-[70px] h-[2px] bg-[#E10600]"></div>
            </div>
            <form className="flex flex-col gap-3 w-full">
              <div className="flex w-full gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-transparent border border-gray-300 text-white placeholder:text-gray-100 rounded-[4px] px-4 py-2 outline-none focus:border-gray-500 transition-colors w-full outfit-font header-sublink"
                />
                <button type="submit" className="bg-[#E10600] text-white px-4 py-2 rounded-[4px] hover:bg-[#b30500] transition-colors flex items-center gap-2 outfit-font header-sublink whitespace-nowrap font-medium">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-[#ffffff]/70 mt-6 pt-6">
        <div className="custom-container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="outfit-font text-[#A3A3A3] header-link font-normal">
            2026 ALCO Filters. All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms & Conditions', 'Sitemap'].map((link) => (
              <Link key={link} href="#" className="outfit-font text-[#A3A3A3] hover:text-white transition-colors header-link font-normal">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
