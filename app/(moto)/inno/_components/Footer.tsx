"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f0f0f0] text-[#4B5563] pt-16 border-t border-gray-200">
      <div className="custom-container">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">

          {/* Left Column: Logo & Text */}
          <div className="w-full lg:w-[70%] mr-20 flex flex-col gap-6" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/inno/logo.png"
                alt="Inno Piston Logo"
                className="w-auto h-auto object-contain"
              />
            </Link>
            <p className="text-[#111111] section-text inter-font font-regular leading-relaxed pr-8">
              Inno Piston is a trusted manufacturer of precision-engineered engine components, specializing in pistons, piston rings, and cylinder liners. Combining advanced technology, quality craftsmanship, and rigorous testing, we deliver reliable solutions that enhance engine performance and durability across global automotive and industrial markets.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="text-gray-500 hover:text-[#F25C27]">
                <img src="/moto/cevam/social_insta.png" alt="Insta" className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/174/174855.png' }} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#F25C27]">
                <img src="/moto/cevam/social_fb.png" alt="FB" className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/733/733547.png' }} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#F25C27]">
                <img src="/moto/cevam/social_yt.png" alt="YT" className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' }} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#F25C27]">
                <img src="/moto/cevam/social_li.png" alt="LI" className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png' }} />
              </Link>
            </div>
          </div>

          {/* Center Columns */}
          <div className="w-full lg:w-[15%] flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-[#000000] card-title font-medium exo2-font">Quick Links</h4>
            <ul className="text-[#000000] section-text font-regular inter-font flex flex-col gap-4">
              <li><Link href="#" className="hover:text-[#F25C27] transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-[#F25C27] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#F25C27] transition-colors">Products</Link></li>
            </ul>
          </div>

          <div className="w-full lg:w-[15%] flex flex-col gap-6" data-aos="fade-up" data-aos-delay="150">
            <h4 className="text-[#000000] card-title font-medium exo2-font">Quality</h4>
            <ul className="text-[#000000] section-text font-regular inter-font flex flex-col gap-4">
              <li><Link href="#" className="hover:text-[#F25C27] transition-colors">Laboratory</Link></li>
              <li><Link href="#" className="hover:text-[#F25C27] transition-colors">Engineering</Link></li>
            </ul>
          </div>

          {/* Right Column: Contact */}
          <div className="w-full lg:w-[25%] flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-[#000000] card-title font-medium exo2-font">Contact Us</h4>
            <ul className="text-[#000000] section-text font-regular inter-font flex flex-col gap-5">
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+903322361111" className="hover:text-[#F25C27] transition-colors">
                  +90 332 236 11 11
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@innopiston.com" className="hover:text-[#F25C27] transition-colors">
                  info@innopiston.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Fevziçakmak Mh. 10642.<br />
                  Sk. No:32 42210 Karatay/<br />
                  Konya
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Subscribe to Newsletter */}
        <div className="flex flex-col md:flex-row items-center justify-end gap-4 mb-8" data-aos="fade-up" data-aos-delay="300">
          <span className="text-[#000000] card-title font-medium exo2-font">Subscribe to Newsletter :</span>
          <div className="flex items-center bg-[#151515] p-1 rounded overflow-hidden w-full max-w-[400px]">
            <input type="email" placeholder="Enter Your E-Mail id" className="flex-grow px-4 py-2 bg-transparent text-white outline-none text-[16px]" />
            <button className="bg-[#F25C27] text-white px-6 py-2 rounded text-[16px] hover:bg-[#d95222] transition-colors">Subscribe</button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-gray-300 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[#000000]">
          <p className="inter-font font-regular section-text">
            &copy; 2026 Inno Piston All rights reserved.
          </p>
          <div className="flex items-center gap-6 section-text inter-font font-regular">
            <Link href="#" className="hover:text-[#000000] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#000000] transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
