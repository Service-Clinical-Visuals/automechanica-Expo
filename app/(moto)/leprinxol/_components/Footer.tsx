import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5]">
      <div className="custom-container pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8">

          {/* Column 1: Logo, Text & Subscribe */}
          <div className="flex flex-col gap-6 col-span-1 md:col-span-2 xl:col-span-5 xl:pr-6">
            <Link href="#">
              <img
                src="/moto/leprinxol/logo.png"
                alt="Leprinxol Logo"
                className="w-[180px] object-contain"
              />
            </Link>
            <p className="text-[#333333] header-sublink leading-relaxed lato-font">
              Leprinxol is an authorized partner of Petro-Canada, one of largest producers of high
              performance base oils and a producer of high quality finished lubricant products.
            </p>
            <div className="flex flex-row w-full gap-2 sm:gap-3">
              <input
                type="email"
                placeholder="Please enter your email"
                className="flex-1 bg-[#E8E8E8] border border-[#E8E8E8] rounded-md px-4 py-2.5 max-w-[280px] text-[14px] text-gray-700 focus:outline-none focus:border-[#0D3374] focus:ring-1 focus:ring-[#0D3374] transition-all oswald-font section-text"
              />
              <Link
                href="#"
                className="bg-[#0D3374] flex-shrink-0 section-text font-medium text-white rounded-md w-auto px-6 py-2.5 flex items-center justify-center text-center oswald-font hover:bg-[#0a2a5e] transition-colors"
              >
                Subscribe
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 col-span-1 xl:col-span-2">
            <h3 className="footer-heading oswald-font font-medium number-text text-[#212121]  mb-2 tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-[#0D3374] header-sublink lato-font underline underline-offset-2 transition-colors">Home</Link></li>
              <li><Link href="#" className="text-[#333333] header-sublink lato-font transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-[#333333] header-sublink lato-font transition-colors">Products</Link></li>
              <li><Link href="#" className="text-[#333333] header-sublink lato-font transition-colors">Technologies</Link></li>
              <li><Link href="#" className="text-[#333333] header-sublink lato-font transition-colors">News &amp; Event</Link></li>
              <li><Link href="#" className="text-[#333333] header-sublink lato-font transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Company */}
          <div className="flex flex-col gap-4 col-span-1 xl:col-span-2">
            <h3 className="oswald-font font-medium number-text text-[#212121] mb-2 tracking-wide">Our Company</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-[#333333] header-sublink lato-font transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="text-[#333333] header-sublink lato-font transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4 col-span-1 md:col-span-2 xl:col-span-3">
            <h3 className="oswald-font font-medium number-text text-[#212121] mb-2 tracking-wide">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <Phone className="w-[18px] h-[18px] text-[#0D3374] flex-shrink-0" />
                <span className="text-[#333333] header-sublink lato-font">celikis@celikis.com.tr</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-[18px] h-[18px] text-[#0D3374] flex-shrink-0" />
                <span className="text-[#333333] header-sublink lato-font">+02323767820</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-[18px] h-[18px] text-[#0D3374] flex-shrink-0 mt-0.5" />
                <span className="text-[#333333] header-sublink leading-relaxed lato-font">
                  Fahrenheitstraße 11<br />
                  28359 Bremen<br />
                  Germany
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white py-5">
        <p className="text-center text-[#333333] header-link oswald-font font-normal">
          © 2026 All rights reserved &ndash; <Link href="#" className="text-[#0D3374] underline underline-offset-2">LEPRINXOL</Link>
        </p>
      </div>
    </footer>
  );
}
