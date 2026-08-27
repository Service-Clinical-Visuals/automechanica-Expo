"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] pt-16 lg:pt-24 pb-8 border-t border-white/10">
      <div className="custom-container flex flex-col gap-12 lg:gap-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6 lg:col-span-4 lg:pr-8" data-aos="fade-up" data-aos-delay="100">
             <Link href="#" className="w-full">
               <img src="/moto/elvis/logo.png" alt="Elwis Royal Logo" className="w-[60%] sm:w-[50%] md:w-[60%] lg:w-[70%] h-auto object-contain object-left" />
             </Link>
             <p className="footer-body text-white mt-2 leading-relaxed ">
               Delivering OEM-quality sealing solutions and trusted gasket technology with decades of expertise, serving the global automotive aftermarket with reliability and precision.
             </p>
          </div>

          {/* Column 2: Corporate */}
          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h3" color="white" className="footer-heading">
              Corporate
            </Typography>
            <ul className="flex flex-col gap-4">
              {['About Elwis', 'Product Categories', 'Catalogues', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors group">
                    <p className="footer-body text-white  group-hover:opacity-100">
                      {item}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h3" color="white" className="footer-heading">
              Products
            </Typography>
            <ul className="flex flex-col gap-4">
              {['Cylinder Head Gaskets', 'Oil pan gaskets', 'Other Gasket Spareparts', 'Conversion Sets', 'See More'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors group">
                    <p className="footer-body text-white  group-hover:opacity-100 font-medium">
                      {item}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="h3" color="white" className="footer-heading">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-5">
              <li>
                <a href="tel:+4545877255" className="flex items-start gap-3 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 text-[#C21217] shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="footer-body text-white  group-hover:opacity-100">
                    (+45) 45 87 72 55
                  </p>
                </a>
              </li>
              <li>
                <a href="mailto:sales@elwis.com" className="flex items-start gap-3 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 text-[#C21217] shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="footer-body text-white  group-hover:opacity-100">
                    sales@elwis.com
                  </p>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C21217] shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="footer-body text-white  leading-relaxed">
                    Sandtoften 11, 2820<br />Gentofte, Denmark
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media */}
          <div className="flex flex-col gap-6 lg:col-span-2 lg:items-end" data-aos="fade-up" data-aos-delay="500">
            <Typography variant="h3" color="white" className="footer-heading text-left  w-full">
              Social Media Links
            </Typography>
            <div className="flex gap-4 w-full lg:justify-start">
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#C21217]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#C21217]" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/20 flex flex-col items-center justify-center text-center"  >
          <p className="footer-body text-white ">
            Copyright © 2026 Elwis Royal. All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
