"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-4 border-[#005484] pt-16 pb-6">
      <div className="custom-container px-4 xl:px-16">
        
        {/* Top Section - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-12 mb-12">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col space-y-6 xl:col-span-3">
            <Link href="/amadini" className="inline-block">
              <img
                src="/moto/amadini/footerlogo.png" // using footerlogo.png based on previous directory list
                alt="Amadini Logo"
                className="h-12 xl:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-[#4a4a4a] section-text leading-relaxed pr-4 font-normal">
              Delivering premium OEM and aftermarket automotive components with trusted quality, innovation, and reliable performance worldwide.
            </p>
          </div>

          {/* Quick Links & Legal Wrapper for mobile side-by-side */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 xl:gap-12 xl:col-span-4 w-full">
            {/* Column 2: Quick Links */}
            <div className="flex flex-col space-y-4">
              <h4 className="footer-link font-semibold text-[#2a2a2a] mb-2">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/amadini" className="text-[#4a4a4a] section-text font-normal hover:text-[#005484] transition-colors">Home</Link></li>
                <li><Link href="/amadini/about" className="text-[#4a4a4a] section-text font-normal hover:text-[#005484] transition-colors">About Us</Link></li>
                <li><Link href="/amadini/products" className="text-[#4a4a4a] section-text font-normal hover:text-[#005484] transition-colors">Products</Link></li>
                <li><Link href="/amadini/news" className="text-[#4a4a4a] section-text font-normal hover:text-[#005484] transition-colors">News</Link></li>
                <li><Link href="/amadini/record" className="text-[#4a4a4a] section-text font-normal hover:text-[#005484] transition-colors">Record</Link></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="flex flex-col space-y-4">
             <h4 className="footer-link font-semibold text-[#2a2a2a] mb-2">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/amadini/legal-notice" className="text-[#4a4a4a] section-text font-normal hover:text-[#005484] transition-colors">Legal Notice</Link></li>
                <li><Link href="/amadini/privacy-policy" className="text-[#4a4a4a] section-text font-normal hover:text-[#005484] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/amadini/cookie-policy" className="text-[#4a4a4a] section-text font-normal hover:text-[#005484] transition-colors">Cookie Policy</Link></li>
                <li><Link className="text-[#4a4a4a] section-text font-normal hover:text-[#005484] transition-colors" href={""}>RII - AEE: 23060</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col space-y-4 xl:col-span-2">
          <h4 className="footer-link font-semibold text-[#2a2a2a] mb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 text-[#005484]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <Link className="text-[#4a4a4a] section-text font-normal " href={""}>+39 0116807933</Link>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 text-[#005484]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <Link className="text-[#4a4a4a] section-text font-normal leading-relaxed" href={""}>info@newcre.eu</Link>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 text-[#005484]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <Link className="text-[#4a4a4a] section-text font-normal leading-relaxed" href={""}>Via Calatafimi, 7, 10042<br/>Nichelino-Torino</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe */}
          <div className="flex flex-col space-y-4 xl:col-span-3">
           <h4 className="footer-link font-semibold text-[#2a2a2a] mb-2">Subscribe For More Information</h4>
            <p className="text-[#4a4a4a] section-text font-normal leading-relaxed mb-4">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from Amadini SA
            </p>
            <form className="flex items-center w-full bg-white shadow-md rounded-lg p-1.5 border border-gray-100 focus-within:border-[#005484]/30 focus-within:shadow-lg transition-all mt-2">
              <input 
                type="email" 
                placeholder="Email Address..." 
                className="w-full px-4 py-2 text-[#4a4a4a] section-text font-normal outline-none bg-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-[#005484] hover:bg-[#003d61] text-white w-[46px] h-[46px] flex-shrink-0 rounded-md transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="text-center text-[#4a4a4a] section-text font-normal">
            Copyright &copy; Amadini SA All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
