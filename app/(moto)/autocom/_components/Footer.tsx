"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary pt-16 lg:pt-24 pb-8 border-t border-white/10">
      <div className="custom-container flex flex-col gap-12 lg:gap-20">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6 lg:col-span-4" data-aos="fade-up" data-aos-delay="100">
            <Link href="#" className="w-full">
              <img src="/moto/autocam/logo.png" alt="Autocom Logo" className="w-[60%] sm:w-[50%] md:w-[45%] lg:w-[65%] xl:w-[60%] h-auto object-contain " />
            </Link>
            <p className="footer-body text-white mt-2 leading-relaxed max-w-[90%]">
              Autocom delivers advanced vehicle diagnostic solutions with intelligent software, reliable hardware, and accurate vehicle data for workshops around the world every day.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 lg:pl-4 lg:col-span-2 " data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Products', 'Customised Solutions', 'Distributors', 'Releases'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors group">
                    <span className="footer-body text-white group-hover:opacity-100  transition-opacity">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading text-white">
              Resources
            </h4>
            <ul className="flex flex-col gap-4">
              {['Media Center', 'Product Catalogue', 'Manuals', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors group">
                    <span className="footer-body text-white group-hover:opacity-100  transition-opacity">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us & Socials */}
          <div className="flex flex-col gap-10 lg:col-span-2 " data-aos="fade-up" data-aos-delay="400">

            <div className="flex flex-col gap-6">
              <h4 className="footer-heading text-white">
                Contact Us
              </h4>
              <ul className="flex flex-col gap-5">
                <li>
                  <a href="mailto:info@autocom.se" className="flex items-center gap-3 hover:text-white transition-colors group">
                    <Mail className="w-5 h-5 text-white  group-hover:opacity-100" strokeWidth={2} />
                    <span className="footer-body text-white  group-hover:opacity-100">
                      info@autocom.se
                    </span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-white  shrink-0 mt-1" strokeWidth={2} />
                    <span className="footer-body text-white  leading-relaxed">
                      Grafitvägen 23B<br />
                      SE - 461 38 Trollhättan<br />
                      Sweden
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Column 5: Social Media Links */}
          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="500">
            <h4 className="footer-heading text-white">
              Social Media Links
            </h4>
            <div className="flex gap-4 flex-wrap">
              {[
                { name: "linkedin", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" },
                { name: "instagram", path: "M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm5.5-9a1.5 1.5 0 1 1-1.5-1.5A1.5 1.5 0 0 1 17.5 7z" },
                { name: "facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { name: "youtube", path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z M9.75 15.02V8.48l5.75 3.27z" }
              ].map((social, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 rounded-full bg-[#23C8FA] flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={social.name === 'linkedin' || social.name === 'youtube' ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={social.path} />
                    {social.name === "instagram" && <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0" />}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/40 flex flex-col items-center justify-center text-center">
          <p className="footer-body text-white ">
            Copyright© Copyright 2024 Autocom. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
