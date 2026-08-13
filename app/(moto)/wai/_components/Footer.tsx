"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-1.1 0-2 .9-2 2v1h3l-1 3h-2v6.8C18.56 20.87 22 16.84 22 12z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.99 15V9l5.99 3-5.99 3z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[#F5F5F5] pt-16 pb-8 border-t border-gray-200">
      <div className="custom-container flex flex-col gap-12">
        
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/moto/wai/logo.png"
                alt="WAI Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="footer-body text-gray-600 leading-relaxed">
              Engineering high-quality aftermarket automotive parts with precision, reliability, and trusted performance worldwide.
            </p>
            
            {/* Social Icons matching the design (dark blue) */}
            <div className="flex items-center gap-5 mt-2">
              <Link href="#" className="text-[#192E59] hover:opacity-80 transition-opacity">
                <FacebookIcon className="w-8 h-8" />
              </Link>
              <Link href="#" className="text-[#192E59] hover:opacity-80 transition-opacity">
                <WhatsAppIcon className="w-[30px] h-[30px]" />
              </Link>
              <Link href="#" className="text-[#192E59] hover:opacity-80 transition-opacity">
                <LinkedinIcon className="w-8 h-8" />
              </Link>
              <Link href="#" className="text-[#192E59] hover:opacity-80 transition-opacity">
                <YoutubeIcon className="w-[38px] h-8" />
              </Link>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col gap-5 xl:pl-10">
            <h4 className="footer-heading text-gray-900">
              Links
            </h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'Products', 'Components', 'Market', 'Resources', 'Company'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="footer-body text-gray-600 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="footer-heading text-gray-900">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" strokeWidth={2} />
                <span className="footer-body">
                  1-800-877-3340
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-1" strokeWidth={2} />
                <span className="footer-body">
                  info@waiglobal.com
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" strokeWidth={2} />
                <span className="footer-body leading-relaxed">
                  2841 Corporate Way,<br />
                  Miramar, FL 33025
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-5">
            <h4 className="footer-heading text-gray-900">
              News Letter
            </h4>
            <p className="footer-body text-gray-600 leading-relaxed">
              Subscribe to our newsletter to receive updates on the latest news!
            </p>
            
            <form className="mt-2 relative flex items-center w-full">
              <input 
                type="email" 
                placeholder="Email Address...." 
                className="footer-body w-full bg-white border border-gray-300 rounded-lg py-3 px-4 pr-14 outline-none focus:border-primary transition-colors text-gray-700 placeholder:text-gray-400"
                required
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1 bottom-1 bg-primary hover:bg-primary-hover text-white rounded-md px-3 flex items-center justify-center transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-300">
          <span className="footer-body text-gray-500">
            ©WAI Global 2026, All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="#" className="footer-body text-gray-500 hover:text-primary transition-colors">
              Terms & Condition
            </Link>
            <Link href="#" className="footer-body text-gray-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
