"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Phone, Mail, MapPin, ArrowRight, Linkedin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] border-t border-[#333333] pt-16 pb-8">
      <div className="custom-container flex flex-col">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <Link href="/magma-brakes">
              <img
                src="/moto/magma-brakes/footerlogo.png"
                alt="Magma Brakes Logo"
                className="h-12 h-[70%] object-contain"
              />
            </Link>
            <Typography variant="h6" color="white" className="font-oswald footer-body max-w-[80%] leading-relaxed text-[#c1c1c1]">
              MAGMA Brakes is the manufacturer behind the manufacturer...many of the leading friction and rotor brands in the US and around the world buy their brake parts from us.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Typography variant="h5" color="white" weight="bold" className="font-oswald uppercase tracking-wider footer-heading">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-4">
              {['Home', 'Catalog', 'Our Products', 'About us', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:text-[var(--color-primary)] transition-colors group">
                    <Typography variant="h6" color="white" className="font-oswald footer-body group-hover:text-[var(--color-primary)] transition-colors">
                      {link}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Typography variant="h5" color="white" weight="bold" className="font-oswald uppercase tracking-wider footer-heading">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                <span className="font-oswald text-white footer-body">
                  (323) 73MAGMA & (323) 736-2462
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                <span className="font-oswald text-white footer-body">
                  Info@Magmabrakes.Com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                <span className="font-oswald text-white footer-body leading-snug">
                  12865 Ann St<br />
                  Santa Fe Springs, CA 90670
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe & Socials */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <Typography variant="h5" color="white" weight="bold" className="font-oswald uppercase tracking-wider footer-heading">
              Subscribe For More Information
            </Typography>
            <Typography variant="h6" color="white" className="font-oswald footer-body leading-relaxed text-[#c1c1c1]">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from Magma Brakes
            </Typography>

            {/* Visual Subscribe Input */}
            <div className="flex w-full bg-white rounded-md overflow-hidden p-1 shadow-inner h-12">
              <input
                type="email"
                placeholder="Email Address..."
                className="flex-grow bg-transparent border-none outline-none px-4 text-[#111111] font-oswald text-[14px]"
                disabled
              />
              <button
                type="button"
                className="w-10 h-full bg-[var(--color-primary)] rounded flex items-center justify-center shrink-0 hover:bg-orange-600 transition-colors cursor-default"
              >
                <ArrowRight size={18} className="text-white" />
              </button>
            </div>

          </div>

          {/* Column 5: Social Links */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Typography variant="h5" color="white" weight="bold" className="font-oswald uppercase tracking-wider footer-heading">
              Social Media Links
            </Typography>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, name: "LinkedIn" },
                { icon: Instagram, name: "Instagram" },
                { icon: Facebook, name: "Facebook" },
                { icon: Youtube, name: "Youtube" },
                { icon: Twitter, name: "Twitter" }
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href="#"
                  aria-label={social.name}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center hover:bg-[#333333] transition-colors group"
                >
                  <social.icon size={16} className="text-[var(--color-primary)] group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <hr className="w-full border-t border-[#333333] mb-6" />
        <div className="w-full flex justify-center text-center">
          <Typography variant="span" color="white" className="font-oswald footer-body text-[#c1c1c1] tracking-wide">
            ©2026 MAGMA. All Rights Reserved. | Privacy Policy
          </Typography>
        </div>

      </div>
    </footer>
  );
}
