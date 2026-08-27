"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1c1d21] text-white dmsans">
      <div className="custom-container pt-16 pb-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

          {/* Column 1: Logo & Text (takes more space) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pr-12 border-r-0 lg:border-r border-gray-600" data-aos="fade-up">
            <Link href="#" className="flex items-center gap-3">
              <img
                src="/moto/alkim-petrokimya/footer-logo.png"
                alt="Alkim Petrokimya Logo"
                className="h-auto md:h-auto object-contain px-2"
              />
            </Link>
            <p className="text-[#FFFFFF] dmsans text-[13px]">
              Alkim Petrokimya is a trusted manufacturer of premium lubricants and process oils, delivering high-performance solutions for automotive, industrial, marine, and manufacturing applications with a commitment to quality, innovation, and reliability.
            </p>
          </div>

          {/* Column 2: Corporate */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:px-6">
            <h4 className="text-base md:text-lg orbitron font-medium tracking-wide">Corporate</h4>
            <ul className="flex flex-col gap-5 text-sm text-[#cccccc]">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Brands */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:px-6">
            <h4 className="text-base md:text-lg orbitron font-medium tracking-wide">Our Brands</h4>
            <ul className="flex flex-col gap-5 text-sm text-[#cccccc]">
              <li><Link href="#" className="hover:text-white transition-colors">Aksoil</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Matador</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Brentol</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:pl-6">
            <h4 className="text-base md:text-lg orbitron font-medium tracking-wide">Contact Us</h4>
            <div className="flex flex-col gap-6 text-sm text-[#cccccc]">
              <div className="flex items-center gap-3">
                <img src="/moto/alkim-petrokimya/phone.png" alt="Phone" className="w-auto h-auto flex-shrink-0 object-contain" />
                <span>0216 593 24 61</span>
              </div>
              <div className="flex items-start gap-3">
                <img src="/moto/alkim-petrokimya/loc.png" alt="Location" className="w-auto h-auto flex-shrink-0 object-contain mt-1" />
                <span className="leading-relaxed">
                  Kimya Sanayicileri OSB<br />
                  Melek Aras Bulvarı,<br />
                  Aromatik Cd. No:61, 34956<br />
                  Aydınlı-KOSB/Tuzla/<br />
                  İstanbul
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Row */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10">

          {/* Social */}
          <div className="flex flex-col items-center xl:items-start gap-4">
            <span className="orbitron font-normal tracking-wide">Social</span>
            <div className="flex items-center gap-4">
              <Link href="#"><img src="/moto/sigam/music.png" alt="Tiktok" className="h-[15px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/fb.png" alt="Facebook" className="h-[15px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/in.png" alt="LinkedIn" className="h-[15px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/x.png" alt="X" className="h-[15px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/insta..png" alt="Instagram" className="h-[15px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/you.png" alt="YouTube" className="h-[15px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto justify-center xl:justify-end">
            <span className="orbitron font-normal text-white text-[15px] ">Subscribe to Newsletter:</span>
            <div className="flex w-full xl:w-auto bg-white p-[3px]">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="bg-white px-2 py-1 w-full sm:w-[200px] text-[#333333] outline-none dmsans text-xs placeholder:text-[#999999]"
              />
              <button className="bg-[#EA203B] text-white px-3 py-1 font-medium btn-text hover:bg-red-700 transition-colors flex-shrink-0 dmsans">
                Explore More
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Row - Copyright */}
      <div className="bg-white py-5 w-full flex items-center justify-center">
        <p className="text-[#212121] dmsans font-semibold text-sm ">
          Copyright © 2026 Alkim Petrokimya
        </p>
      </div>
    </footer>
  );
}
