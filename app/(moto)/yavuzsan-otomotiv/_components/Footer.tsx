"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "Technical information", href: "#" },
    { name: "Media", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-[#0B1F33] text-white">
      <div className="custom-container pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* Column 1: Logo & Description (Spans 4) */}
          <div className="flex flex-col i tems-start lg:col-span-4 lg:pr-6 lg:border-r lg:border-white/20">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/moto/yavuzsan-otomotiv/logo.png"
                alt="Yavuzsan Logo"
                className="h-auto sm:h-14 w-auto object-contain "
              />
            </Link>
            <Typography variant="p" className="rubik text-[#D1D5DB] text-sm sm:text-base leading-relaxed max-w-sm">
              Yavuzsan is a trusted manufacturer of premium brake system components, delivering innovative, reliable, and high-quality solutions for the global automotive industry.
            </Typography>
          </div>

          {/* Column 2: Links (Spans 2) */}
          <div className="flex flex-col lg:col-span-2 lg:pl-6">
            <Typography variant="h4" className="oswald font-bold text-xl text-white mb-5">
              Links
            </Typography>
            <ul className="flex flex-col gap-3 rubik text-[#D1D5DB] text-sm sm:text-base">
              {links.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (Spans 3) */}
          <div className="flex flex-col lg:col-span-3">
            <Typography variant="h4" className="oswald font-bold text-xl text-white mb-5">
              Contact
            </Typography>
            <ul className="flex flex-col gap-4 rubik text-[#D1D5DB] text-sm sm:text-base">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white shrink-0" />
                <a href="tel:+903322392200" className="hover:text-white transition-colors">
                  +903322392200
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white shrink-0" />
                <a href="mailto:info@yavuzsan.com" className="hover:text-white transition-colors">
                  info@yavuzsan.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-white shrink-0" />
                <span>Mon-Sat 8am-6pm</span>
              </li>
            </ul>
          </div>

          {/* Column 4: News letter (Spans 3) */}
          <div className="flex flex-col lg:col-span-3">
            <Typography variant="h4" className="oswald font-bold text-xl text-white mb-5">
              News letter
            </Typography>
            <Typography variant="p" className="rubik text-[#D1D5DB] text-sm sm:text-base leading-relaxed mb-4">
              Subscribe to our newsletter to receive updates on the latest news!
            </Typography>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <input
                type="email"
                placeholder="Subscribe with us...."
                className="w-full bg-[#F3F4F6] text-[#1F2937] placeholder-[#6B7280] px-4 py-3 rounded-md rubik text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5AA6]"
              />
              <button className="bg-[#0F5AA6] hover:bg-[#0c4885] text-white font-medium px-6 py-2.5 rounded-md rubik text-sm transition-all shadow-sm w-fit">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white text-[#272727] py-4 border-t border-gray-200 text-center">
        <div className="custom-container">
          <Typography variant="p" className="rubik text-xs sm:text-sm font-medium !text-[#272727]">
            Copyright © 2026 Yavuzsan Automotive All Rights Reserved. Designed by
          </Typography>
        </div>
      </div>
    </footer>
  );
}
