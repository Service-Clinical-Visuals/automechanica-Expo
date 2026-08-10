"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#383838] text-white inter-font pt-16">
      <div className="custom-container">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 mb-12">

          {/* Column 1: Logo & Text */}
          <div className="xl:col-span-4 flex flex-col gap-6 xl:pr-10" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/efitaller/flogo.png"
                alt="Efitaller Logo"
                className="w-auto md:w-auto h-auto object-contain"
              />
            </Link>
            <p className="text-white/80 font-regular section-text leading-relaxed">
              EFITaller Automoción is a provider of advanced diagnostic solutions and workshop equipment, delivering innovative tools for vehicle diagnostics, ADAS calibration, and repair. The company focuses on precision, efficiency, and supporting modern automotive service needs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="xl:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="100">
            <h4 className="card-title font-semibold sora-font">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-white/80 font-regular section-text">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="xl:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="card-title font-semibold sora-font">Products</h4>
            <ul className="flex flex-col gap-3 text-white/80 font-regular section-text">
              <li><Link href="#" className="hover:text-white transition-colors">ADAS</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Alignment</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">ATF</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Batteries</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Diagnostics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Emissions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="xl:col-span-2 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
            <h4 className="card-title font-semibold sora-font">Contact</h4>
            <ul className="flex flex-col gap-4 text-white/80 font-regular section-text">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-white" />
                <span className="leading-relaxed">
                  Avenida Doña Ana,<br />
                  nave 6 - 29130 Alhaurin de la Torre,<br />
                  Málaga, Spain
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-white" />
                <a href="tel:+34951108660" className="hover:text-white transition-colors">
                  +34 951 108 660
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-white" />
                <a href="mailto:info@efitaller.com" className="hover:text-white transition-colors">
                  info@efitaller.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Logos & Social */}
          <div className="xl:col-span-2 flex flex-col gap-8" data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img src="/moto/efitaller/eco-raee.png" alt="Eco Raee" className="h-auto w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-green-500 font-bold text-xl flex items-center"><span class="mr-1">eco</span>raee\'s</span><span class="text-xs ml-2 italic">Gestión Sostenible</span>' }} />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="card-title font-semibold sora-font">Follow Us On</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="text-white hover:text-[#C2D500] transition-colors"><Globe size={20} /></a>
                <a href="#" className="text-white hover:text-[#C2D500] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#C2D500] transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-white hover:text-[#C2D500] transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-white/80 py-6 text-center">
        <p className="text-white/80 section-text">
          &copy; 2026 EfiTaller is a registered trademark
        </p>
      </div>
    </footer>
  );
}
