"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Printer, Search } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F3F5F7] text-[#555] pt-16 pb-8 border-t border-gray-200">
      <div className="custom-container">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">

          {/* Left Column: Logo & Text */}
          <div className="flex flex-col gap-6" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/orijin/logo.png"
                alt="Orjin Automotive Logo"
                className="w-auto h-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="font-bold text-2xl text-[#222]">Orjin Automotive</span>' }}
              />
            </Link>
            <p className="section-text text-[#4B5563] rubik-font font-regular leading-relaxed">
              Orjin Automotive delivers high-quality steering and suspension solutions with a commitment to innovation, reliability, and customer satisfaction.
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-2 ml-40" data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-semibold text-[#272727] card-title oswald-font mb-2">Links</h4>
            <ul className="rubik-font text-[#4B5563] section-text font-regular flex flex-col gap-3">
              <li><Link href="#" className="hover:text-[#F39200] transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-[#F39200] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#F39200] transition-colors">Corporate</Link></li>
              <li><Link href="#" className="hover:text-[#F39200] transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-[#F39200] transition-colors">Department</Link></li>
              <li><Link href="#" className="hover:text-[#F39200] transition-colors">Media</Link></li>
              <li><Link href="#" className="hover:text-[#F39200] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-semibold text-[#272727] card-title oswald-font mb-2">Contact</h4>
            <ul className="rubik-font text-[#4B5563] section-text font-regular flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#F39200] flex-shrink-0" />
                <a href="tel:+902244834949" className="hover:text-[#F39200] transition-colors">+90(224)4834949</a>
              </li>
              <li className="flex items-center gap-3">
                <Printer size={16} className="text-[#F39200] flex-shrink-0" />
                <span className="hover:text-[#F39200] transition-colors">+90 (224) 483 50 80</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#F39200] flex-shrink-0" />
                <a href="mailto:info@orjinautomotive.com" className="hover:text-[#F39200] transition-colors">info@orjinautomotive.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F39200] flex-shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Hasanağa Organize Sanayi<br />
                  Bölgesi 3. Cadde No:9<br />
                  Nilüfer / Bursa / TÜRKİYE
                </span>
              </li>
            </ul>
          </div>

          {/* Subscribe Column */}
          <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-semibold text-[#272727] card-title oswald-font mb-2">Subscribe for more information</h4>
            <p className="rubik-font text-[#4B5563] section-text font-regular leading-relaxed mb-2">
              Receive the most up to date news from ORJİN. You can register in our e-mail list.
            </p>
            <div className="flex items-center bg-white p-1 rounded-[10px] overflow-hidden shadow-[0px_3px_8px_0px_#0000003D] h-10 w-full max-w-[280px]">
              <input type="email" placeholder="Email Address..." className="flex-grow px-3 py-2 bg-transparent text-[#4B5563] section-text font-regular outline-none" />
              <button className="bg-[#F39200] text-white px-3 h-full flex items-center justify-center hover:bg-[#d98b04] transition-colors">
                <Search size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-black pt-3 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="w-7 h-7 bg-[#F39200] rounded-full flex items-center justify-center text-white hover:bg-[#d98b04] transition-colors">
              <span className="font-bold text-sm">f</span>
            </Link>
            <Link href="#" className="w-7 h-7 bg-[#F39200] rounded-full flex items-center justify-center text-white hover:bg-[#d98b04] transition-colors">
              <span className="font-bold text-sm">in</span>
            </Link>
            <Link href="#" className="w-7 h-7 bg-[#F39200] rounded-full flex items-center justify-center text-white hover:bg-[#d98b04] transition-colors">
              <span className="font-bold text-sm">ig</span>
            </Link>
            <Link href="#" className="w-7 h-7 bg-[#F39200] rounded-full flex items-center justify-center text-white hover:bg-[#d98b04] transition-colors">
              <span className="font-bold text-sm">X</span>
            </Link>
          </div>

          {/* Copyright */}
          <p className="rubik-font section-text text-[#4B5563] text-center">
            Copyrights &copy; 2026 Orjin Automotive - Powered By <Link href="#" className="underline hover:text-[#F39200]">IDESOFT</Link>
          </p>

          {/* Privacy Policy */}
          <Link href="#" className="rubik-font section-text text-[#4B5563] hover:text-black transition-colors">
            Privacy Policy
          </Link>

        </div>

      </div>
    </footer>
  );
}
