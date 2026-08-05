"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  const corporateLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Company", href: "#" },
    { name: "Download", href: "#" },
    { name: "Contact Us", href: "#" }
  ];

  const productLinks = [
    { name: "Camshafts, Rocker Arms, Tappets", href: "#" },
    { name: "Complete Engines", href: "#" },
    { name: "Connecting rod", href: "#" },
    { name: "Crankshafts", href: "#" },
    { name: "See More", href: "#" }
  ];

  return (
    <footer className="w-full bg-[#1A1A1A] pt-16 lg:pt-20 pb-8 border-t border-white/10">
      <div className="custom-container flex flex-col gap-12 lg:gap-16">

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Column 1: Logo & Description */}
          <div className="w-auto h-auto lg:col-span-1 flex flex-col gap-6 " data-aos="fade-up">
            <Link href="#" className="inline-block">
              <img
                src="/moto/vitobello/logo.png"
                alt="Vitobello Ricambi Logo"
                className="w-auto sm:w-56 lg:w-72 h-auto object-contain object-left"
                onError={(e) => {
                  // Fallback logo text if image not available
                  (e.target as HTMLElement).style.display = 'none';
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent && parent.children.length === 1) {
                    const span = document.createElement('span');
                    span.innerText = 'Vitobello ricambi';
                    span.className = 'text-[#F47944] font-bold text-2xl';
                    parent.appendChild(span);
                  }
                }}
              />
            </Link>
            <Typography variant="p" color="white" className="text-white/70 leading-relaxed text-xs sm:text-sm font-normal">
              With over 50 years of expertise, Vitobello Ricambi S.r.l. delivers premium engines, gearboxes, and automotive components backed by quality, innovation, and reliable service.
            </Typography>
          </div>

          {/* Column 2: Corporate */}
          <div className="w-full flex flex-col gap-6 lg:pl-10  ml-50" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="h3" color="white" className="text-lg md:text-xl font-semibold">
              Corporate
            </Typography>
            <ul className="flex flex-col gap-4">
              {corporateLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="w-full flex flex-col gap-6  ml-40" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h3" color="white" className="text-lg md:text-xl font-semibold">
              Products
            </Typography>
            <ul className="flex flex-col gap-4">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="w-full flex flex-col gap-6  ml-40" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h3" color="white" className="text-lg md:text-xl font-semibold">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F47944] shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">+39 0547 52839 / 56209</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F47944] shrink-0" />
                <span className="text-white/70 text-sm">info@vitobello.it</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F47944] shrink-0 mt-1" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Via Luciano Lama, 28<br />
                  47020 Longiano (FC) - Italy
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media */}
          <div className="w-full flex flex-col gap-6 lg:items-center  ml-40" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="h3" color="white" className="text-lg md:text-xl font-semibold w-full">
              Social Media Links
            </Typography>
            <div className="flex items-center gap-3 w-full">
              <a href="#" className="w-9 h-9 rounded-full bg-[#F47944] flex items-center justify-center text-white hover:bg-[#F47944]/80 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#F47944] flex items-center justify-center text-white hover:bg-[#F47944]/80 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#F47944] flex items-center justify-center text-white hover:bg-[#F47944]/80 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-6 border-t border-white/50 flex items-center justify-center">
          <Typography variant="p" color="white" className="text-white/80 text-xs sm:text-sm text-center">
            Copyright © 2022 Vitobello Ricambi S.r.l. - All rights reserved. Powered by Stayup.team
          </Typography>
        </div>

      </div>
    </footer>
  );
}
