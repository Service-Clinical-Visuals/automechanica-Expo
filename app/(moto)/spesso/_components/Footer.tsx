import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f5] pt-16 md:pt-20 pb-8 border-t border-gray-200 px-4 lg:px-16">
      <div className="custom-container">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 xl:gap-12 mb-16">
          
          {/* Column 1: Logo & Text */}
          <div className="flex flex-col lg:col-span-1">
            <img 
              src="/moto/spesso/logo.png" 
              alt="Spesso Logo" 
              className="w-40 md:w-60 mb-6 object-contain" 
            />
            <p className="overpass-font text-[#5e5e5e] section-text leading-relaxed">
              Engineering safer journeys with certified, high-quality brake components trusted for performance, reliability, and lasting safety.
            </p>
          </div>

          {/* Columns 2 & 3: Info & Company (Side-by-side on Mobile) */}
          <div className="grid grid-cols-2 gap-4 lg:gap-8 xl:gap-12 col-span-1 lg:col-span-2">
            
            {/* Info */}
            <div className="flex flex-col lg:pl-16">
              <h4 className="anton-font text-[#333333] footer-txt mb-6 tracking-wide">Info</h4>
              <ul className="flex flex-col gap-4">
                {['Privacy & IS', 'Policies', 'Whistleblowing', 'Sustainability Report'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="overpass-font text-[#5e5e5e] hover:text-[var(--primary)] section-text transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <h4 className="anton-font text-[#333333] footer-txt mb-6 tracking-wide">Company</h4>
              <ul className="flex flex-col gap-4">
                {['Original Equipment', 'Hydrogen', 'Certifications', 'Sustainability', 'Contacts'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="overpass-font text-[#5e5e5e] hover:text-[var(--primary)] section-text transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col lg:col-span-1">
            <h4 className="anton-font text-[#333333] footer-txt mb-6 tracking-wide">Contact Us</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[var(--primary)] mt-0.5 flex-shrink-0" />
                <span className="overpass-font text-[#5e5e5e] section-text">0114508111</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[var(--primary)] mt-0.5 flex-shrink-0" />
                <span className="overpass-font text-[#5e5e5e] section-text">info@spesso.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--primary)] mt-0.5 flex-shrink-0" />
                <span className="overpass-font text-[#5e5e5e] section-textleading-snug">Str. Del Francese, 133<br />- 10156 Torino</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe */}
          <div className="flex flex-col lg:col-span-1">
         <h4 className="anton-font text-[#333333] footer-txt mb-6 tracking-wide">Subscribe For More Information</h4>
            <p className="overpass-font text-[#5e5e5e] section-text leading-relaxed mb-5">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from Spesso s.r.l.
            </p>
            
            {/* Newsletter Input */}
            <div className="w-full flex items-center bg-white border border-gray-300 rounded p-1 shadow-sm focus-within:border-[var(--primary)] transition-colors">
              <input 
                type="email" 
                placeholder="Email Address..." 
                className="w-full px-3 py-2 outline-none overpass-font text-[14px] text-[#333] bg-transparent"
              />
              <button className="bg-[var(--primary)] hover:bg-[#007a3a] text-white w-10 h-10 flex items-center justify-center rounded shrink-0 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
        </div>

        {/* Bottom Copyright */}
        <hr className="w-full border-gray-200 mb-6" />
        <div className="flex justify-center text-center">
          <p className="overpass-font text-[#5e5e5e] section-text">
            © 2026 All rights Reserved. Design by Spesso s.r.l.
          </p>
        </div>

      </div>
    </footer>
  );
}
