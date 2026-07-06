"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c3274] text-white pt-8 md:pt-10 pb-6 overflow-hidden">
      <div className="custom-container">
        
        {/* Footer Top Section */}
        <div className="grid grid-cols-2 xl:grid-cols-12 gap-8 gap-y-10 xl:gap-8 mb-10">
          
          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col col-span-2 md:col-span-1 xl:col-span-3">
            <Link href="#" className="mb-8">
              <img src="/moto/bbt/logo1.png" alt="BBT Logo" className="w-[200px] h-auto object-contain" />
            </Link>
            <p className="linkheadings font-medium oswald-font  mb-4">Social</p>
            <Link href="#" className="w-10 h-10 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img src="/moto/bbt/insta.png" alt="Instagram" className="w-7 h-7 object-contain" />
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col xl:col-span-1">
            <h4 className="font-medium oswald-font linkheadings mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2 lato-font text-white font-normal footer-links">
              <Link href="#" className="hover:text-gray-300 hover:font-semibold transition-colors">Home</Link>
              <Link href="#" className="hover:text-gray-300 hover:font-semibold transition-colors">About us</Link>
              <Link href="#" className="hover:text-gray-300 hover:font-semibold transition-colors">Products</Link>
              <Link href="#" className="hover:text-gray-300 hover:font-semibold transition-colors">Downloads</Link>
              <Link href="#" className="hover:text-gray-300 hover:font-semibold transition-colors">Career</Link>
            </nav>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col xl:col-span-3">
            <h4 className="font-medium oswald-font linkheadings mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-4 lato-font text-white font-normal footer-links">
              <div className="flex items-start gap-3">
                <img src="/moto/bbt/phone.png" alt="Phone" className="w-4 h-4 object-contain flex-shrink-0 mt-1" />
                <span className='hover:text-gray-300 hover:font-semibold cursor-default'>+49 (0) 9802 - 95211-0</span>
              </div>
              <div className="flex items-start gap-3">
                <img src="/moto/bbt/mail.png" alt="Mail" className="w-4 h-4 object-contain flex-shrink-0 mt-1" />
                <a href="mailto:info@bbt-automotive.de" className="hover:text-gray-300 hover:font-semibold transition-colors">info@bbt-automotive.de</a>
              </div>
              <div className="flex items-start gap-3">
                <img src="/moto/bbt/location.png" alt="Location" className="w-4 h-4 object-contain flex-shrink-0 mt-1" />
                <span className='hover:text-gray-300 hover:font-semibold cursor-default'>Gewerbering 12, 91629 Weihenzell<br/>Germany</span>
              </div>
            </div>
          </div>

          {/* Column 4: Links */}
          <div className="flex flex-col col-span-2 md:col-span-1 xl:col-span-2 whitespace-nowrap">
            <h4 className="font-medium oswald-font linkheadings mb-4">Links</h4>
            <nav className="flex flex-col space-y-2 lato-font text-white font-normal footer-links">
              <Link href="#" className="text-white hover:font-semibold transition-colors">Imprint</Link>
              <Link href="#" className="text-white hover:font-semibold transition-colors">Privacy Policy</Link>
            </nav>
          </div>

          {/* Column 5: Newsletter */}
          <div className="flex flex-col col-span-2 xl:col-span-3">
            <h4 className="font-medium oswald-font linkheadings mb-6">Subscribe For More Information</h4>
            <p className="lato-font text-white font-normal footer-links leading-[1.6] mb-6">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from bbt-automotive
            </p>
            <form className="flex w-full bg-white rounded-lg p-1" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address..." 
                className="flex-1 bg-transparent border-none outline-none text-[#333333] px-3 py-1.5 lato-font footer-links"
                required
              />
              <button type="submit" className="bg-[#0c3274] w-10 h-10 rounded flex items-center justify-center text-white hover:bg-blue-800 transition-colors flex-shrink-0">
                <ArrowRight size={18} strokeWidth={2} />
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-t border-white mb-6" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="oswald-font text-white font-normal section-text">
            Copyright © bbt-automotive. 2026
          </p>
        </div>

      </div>
    </footer>
  );
}
