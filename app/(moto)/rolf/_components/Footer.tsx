"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#171717] pt-16  pb-8 ">
      <div className="custom-container flex flex-col gap-12 lg:gap-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-10 lg:gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
             <Link href="#" className="w-full">
               <img src="/moto/rolf/logo.png" alt="ROLF Logo" className="w-[60%] sm:w-[50%] md:w-[45%] lg:w-[65%] xl:w-[50%] h-auto object-contain object-left" />
             </Link>
             <p className="footer-body text-white mt-2 leading-relaxed max-w-[90%]">
               ROLF Lubricants combines advanced technology and expert engineering to develop high-performance lubricants trusted for quality and reliability.
             </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 lg:pl-4 lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading text-white mb-2">
              ROLF Lubricants GmbH
            </h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Main areas of activity', 'Approvals', 'Ultra', 'Catalog', 'News'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors group">
                    <span className="footer-body text-white/90 group-hover:text-white group-hover:opacity-100">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-4 lg:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading text-white mb-2">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {['imprint', 'Privacy Policy', 'Change privacy settings', 'History of privacy settings', 'revoke consent'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors group">
                    <span className="footer-body text-white/90 group-hover:text-white group-hover:opacity-100">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-4 lg:col-span-2" data-aos="fade-up" data-aos-delay="400">
            <h4 className="footer-heading text-white mb-2">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+494074060861" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 text-white/90 group-hover:text-white" strokeWidth={2} />
                  <span className="footer-body text-white/90 group-hover:text-white">
                    +49 40 7406 0861
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:Contact@Rolfoil.De" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 text-white/90 group-hover:text-white" strokeWidth={2} />
                  <span className="footer-body text-white/90 group-hover:text-white">
                    Contact@Rolfoil.De
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 mt-1">
                  <MapPin className="w-5 h-5 text-white/90 shrink-0 mt-1" strokeWidth={2} />
                  <span className="footer-body text-white/90 leading-relaxed">
                    ROLF Lubricants GmbH,<br/>
                    Building 9115, Chempark Leverkusen,<br/>
                    Friedrich-Ebert-Str. B8 325,<br/>
                    51373 Leverkusen, Germany
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/20 flex flex-col items-center justify-center text-center"  >
          <p className="footer-body text-white ">
            Copyright© 2025 ROLF Lubricants GmbH- All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
