"use client";

import React from "react";
import { Search, Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-8">
      {/* Top Section with Background */}
      <div className="w-full bg-[#111827] text-white py-16 min-[2100px]:py-24 min-[3800px]:py-32">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 min-[2100px]:gap-16 min-[3800px]:gap-24">

          {/* Column 1: Logo & Welcome (Span 4) */}
          <div className="col-span-1 md:col-span-2 xl:col-span-4 flex flex-col gap-6 min-[2100px]:gap-10 min-[3800px]:gap-14">
            <img src="/moto/gameroil/logo.png" alt="Gameroil Logo" className="w-[60%] md:w-[40%] xl:w-[50%] min-[2100px]:w-[60%] min-[3800px]:w-[70%] object-contain" />
            <Typography variant="p" color="none" className="footer-body text-white leading-relaxed max-w-[95%] text-sm min-[2100px]:text-xl min-[3800px]:text-3xl">
              Precision-engineered automotive components manufacturer specializing in advanced casting, machining, and innovative solutions for OEM, OES, and aftermarket markets worldwide.
            </Typography>
            <div className="flex items-center gap-4 mt-2 min-[2100px]:gap-6 min-[3800px]:gap-8 min-[2100px]:mt-6 min-[3800px]:mt-10">
              <div className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
                <Facebook className="w-4 h-4 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-[#111827]" fill="currentColor" stroke="none" />
              </div>
              <div className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
                <Linkedin className="w-4 h-4 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-[#111827]" fill="currentColor" stroke="none" />
              </div>
              <div className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shrink-0">
                <Instagram className="w-4 h-4 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-[#111827]" />
              </div>
            </div>
          </div>

          {/* Column 2: Links (Span 2) */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6 xl:pl-4 min-[2100px]:gap-10 min-[3800px]:gap-14">
            <Typography variant="h4" color="white" className="footer-heading font-bold text-lg min-[2100px]:text-3xl min-[3800px]:text-5xl">Links</Typography>
            <div className="flex flex-col gap-3 min-[2100px]:gap-6 min-[3800px]:gap-8">
              {['Home', 'About', 'Catalog', 'Services', 'News', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="footer-body text-sm min-[2100px]:text-xl min-[3800px]:text-3xl text-white hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact (Span 3) */}
          <div className="col-span-1 xl:col-span-3 flex flex-col gap-6 min-[2100px]:gap-10 min-[3800px]:gap-14">
            <Typography variant="h4" color="white" className="footer-heading font-bold text-lg min-[2100px]:text-3xl min-[3800px]:text-5xl">Contact</Typography>
            <div className="flex flex-col gap-4 min-[2100px]:gap-8 min-[3800px]:gap-12">
              <div className="flex items-center gap-3 min-[2100px]:gap-6 min-[3800px]:gap-8 footer-body text-sm min-[2100px]:text-xl min-[3800px]:text-3xl text-white">
                <Phone className="w-6 h-6 min-[2100px]:w-8 min-[2100px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-[#E53935] shrink-0" fill="currentColor" stroke="none" />
                <div>+34-672-208-350</div>
              </div>
              <div className="flex items-center gap-3 min-[2100px]:gap-6 min-[3800px]:gap-8 footer-body text-sm min-[2100px]:text-xl min-[3800px]:text-3xl text-white">
                <Mail className="w-6 h-6 min-[2100px]:w-8 min-[2100px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-[#E53935] shrink-0 text-[#0F172A]" fill="currentColor" stroke="none" />
                <div>info@gameroil.es</div>
              </div>
              <div className="flex items-start gap-3 min-[2100px]:gap-6 min-[3800px]:gap-8 footer-body text-sm min-[2100px]:text-xl min-[3800px]:text-3xl text-white">
                <MapPin className="w-6 h-6 min-[2100px]:w-8 min-[2100px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-[#E53935] shrink-0 mt-1 min-[2100px]:mt-2" fill="currentColor" stroke="none" />
                <div className="leading-relaxed">Pol. Ind. El Prado, C/<br />Valladolid 10. 06800 Mérida<br />(Extremadura)</div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter (Span 3) */}
          <div className="col-span-1 xl:col-span-3 flex flex-col gap-6 min-[2100px]:gap-10 min-[3800px]:gap-14">
            <Typography variant="h4" color="white" className="footer-heading font-bold text-lg min-[2100px]:text-3xl min-[3800px]:text-5xl">Subscribe for more information</Typography>
            <Typography variant="p" color="none" className="footer-body text-white leading-relaxed text-sm min-[2100px]:text-xl min-[3800px]:text-3xl">
              Stay updated with Gameroil latest products, news, and innovations.
            </Typography>

            {/* Visual Input Field */}
            <div className="relative w-full mt-2 min-[2100px]:mt-6 min-[3800px]:mt-8">
              <input
                type="text"
                placeholder="Email Address..."
                className="w-full bg-white text-gray-900 rounded-full py-3 min-[2100px]:py-5 min-[3800px]:py-8 pl-4 min-[2100px]:pl-8 min-[3800px]:pl-10 pr-12 min-[2100px]:pr-20 min-[3800px]:pr-24 focus:outline-none focus:ring-2 focus:ring-[#E53935] placeholder:text-gray-500 placeholder:text-sm min-[2100px]:placeholder:text-xl min-[3800px]:placeholder:text-3xl text-sm min-[2100px]:text-xl min-[3800px]:text-3xl"
              />
              <button className="absolute right-1 min-[2100px]:right-2 min-[3800px]:right-3 top-1/2 -translate-y-1/2 bg-[#E53935] hover:bg-red-700 transition-colors w-10 h-10 min-[2100px]:w-14 min-[2100px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full flex items-center justify-center text-white">
                <Search className="w-4 h-4 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-10 min-[3800px]:h-10" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full bg-white border-t border-gray-200">
        <div className="custom-container flex flex-col md:flex-row justify-between items-center py-4 min-[2100px]:py-8 min-[3800px]:py-12">
          <Typography variant="p" color="none" className="footer-body text-gray-600 text-sm min-[2100px]:text-xl min-[3800px]:text-3xl text-center md:text-left mb-4 md:mb-0">
            Copyright © 2026 GAMEROIL SAL | Designed by NT Aplicaciones 2020 SL
          </Typography>
          <div className="flex gap-6 min-[2100px]:gap-10 min-[3800px]:gap-14">
            <a href="#" className="footer-body text-gray-600 hover:text-[#E53935] text-sm min-[2100px]:text-xl min-[3800px]:text-3xl transition-colors">Legal Notice</a>
            <a href="#" className="footer-body text-gray-600 hover:text-[#E53935] text-sm min-[2100px]:text-xl min-[3800px]:text-3xl transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
