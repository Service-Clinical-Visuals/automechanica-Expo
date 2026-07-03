"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Quality", href: "#" },
    { name: "Wholesale", href: "#" },
    { name: "Workshops", href: "#" },
  ];

  const legalLinks = [
    { name: "Legal Notice", href: "#" },
    { name: "Data Protection", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Marketing Materials", href: "#" },
  ];

  return (
    <footer className="bg-[var(--color-primary)] pt-16 pb-8 border-t border-white/10" id="contact">
      <div className="custom-container" data-aos="fade-up">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start" >

          {/* Col 1: Logo & Info */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <img
              src="/moto/meyle/footer-logo.png"
              alt="MEYLE Logo"
              className="h-[90%] object-contain object-left w-max brightness-0 invert mb-2"
            />
            <div className="footer-body font-lato text-white/90 leading-relaxed pr-4">
              MEYLE AG engineers, manufactures and markets premium-quality replacement parts for the independent automotive aftermarket.
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="footer-heading font-oswald tracking-tight text-white mb-6">
              Quick Links
            </div>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="footer-body font-lato text-white hover:text-gray-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Policies */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="footer-heading tracking-tight font-oswald font-bold text-white mb-6">
              Legal & Policies
            </div>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="footer-body font-lato text-white hover:text-gray-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Subscribe */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="footer-heading tracking-tight font-oswald font-bold text-white mb-4">
              Subscribe For More Information
            </div>
            <span className="footer-body font-lato text-white/90 leading-relaxed mb-4">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from MEYLE AG
            </span>
            <div className="flex w-full bg-white rounded overflow-hidden p-1">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-1 px-3 py-2 text-black text-sm outline-none font-lato"
              />
              <button className="bg-[var(--color-primary)] w-10 h-10 flex items-center justify-center rounded hover:bg-[#003662] transition-colors">
                <ArrowRight size={18} color="white" />
              </button>
            </div>
          </div>

          {/* Col 5: Social Media Links */}
          <div className="lg:col-span-2 flex flex-col lg:pl-6">
            <div className="footer-heading tracking-tight font-oswald font-bold text-white mb-6">
              Social Media Links
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[#86BCE6] flex items-center justify-center hover:bg-white hover:text-[#7CA2C4] transition-colors text-white">
                <Linkedin size={18} fill="currentColor" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#86BCE6] flex items-center justify-center hover:bg-white hover:text-[#7CA2C4] transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#86BCE6] flex items-center justify-center hover:bg-white hover:text-[#7CA2C4] transition-colors text-white">
                <Facebook size={18} fill="currentColor" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#86BCE6] flex items-center justify-center hover:bg-white hover:text-[#7CA2C4] transition-colors text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Separator */}
        <hr className="w-full border-t border-white/20 mt-16 mb-6" />

        {/* Bottom Section */}
        <div className="text-center" >
          <div className="footer-body font-lato text-white">
            InterCar S.p.A. - Via Bonfadina, 2/4 - 25046 Cazzago San Martino (BS) - Italy - C.F. 00300510179 - P.I.00552580987 - Copyright 2026 ©
          </div>
        </div>

      </div>
    </footer>
  );
}
