"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      className="relative bg text-white dmsans-font"
      style={{ backgroundImage: "url('/moto/sigam/bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      
      <div className="custom-container relative z-10 pt-14 pb-6">
        {/* Top Grid */}
        <div className="grid grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-12 mb-8">
          {/* Column 1: Logo & Text */}
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1 xl:col-span-6" data-aos="fade-up" data-aos-delay="0">
            <Link href="#" className="relative inline-block w-fit my-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[180px] h-[80px] md:h-[100px] bg-white blur-2xl rounded-full pointer-events-none z-0"></div>
              <img src="/moto/sigam/logo.png" alt="Sigam Logo" className="relative w-[150px] md:w-[180px] h-auto object-contain z-10" />
            </Link>
            <p className="section-text dmsans-font text-start text-white leading-relaxed max-w-xl">
              Get in touch with SIGAM for expert exhaust system solutions, product inquiries, or custom manufacturing requirements.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 col-span-1 xl:col-span-2" data-aos="fade-up" data-aos-delay="100">
            <h4 className="orbitron-font text-white card-title font-semibold">Quick Links</h4>
            <ul className="flex flex-col gap-4 dmsans-font section-text">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Quality</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col gap-6 col-span-1 xl:col-span-2" data-aos="fade-up" data-aos-delay="200">
             <h4 className="orbitron-font text-white card-title font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-5 dmsans-font section-text">
              <div className="flex items-center gap-3 dmsans-font section-text break-all">
                <img src="/moto/sigam/phone.png" alt="Phone" className="w-4 h-4 object-contain brightness-0 invert flex-shrink-0" />
                <span>0823.821035</span>
              </div>
              <div className="flex items-center gap-3 dmsans-font section-text break-all">
                <img src="/moto/sigam/email.png" alt="Email" className="w-5 h-5 object-contain brightness-0 invert flex-shrink-0" />
                <span>sigam@sigam.it</span>
              </div>
            </div>
          </div>

          {/* Column 4: Address */}
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1 xl:col-span-2" data-aos="fade-up" data-aos-delay="300">
             <h4 className="orbitron-font text-white card-title font-semibold">Address</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <img src="/moto/sigam/office.png" alt="Office" className="w-5 h-5 object-contain mt-0.5 brightness-0 invert flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium orbitron-font card-text">Office</span>
                  <span className="leading-relaxed text-[#ffffff] dmsans-font section-text">Via Cesare Rosaroll, 165<br/>80139 Napoli</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img src="/moto/sigam/factory.png" alt="Factory" className="w-5 h-5 object-contain mt-0.5 brightness-0 invert flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium orbitron-font card-text">Factory</span>
                  <span className="leading-relaxed text-[#ffffff] dmsans-font section-text">Zona Industriale A.S.I. Nord<br/>81025 Marcianise (CE)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/60 mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
          {/* Social */}
          <div className="flex flex-col items-center xl:items-start gap-3" data-aos="fade-up" data-aos-delay="400">
            <span className="orbitron-font text-white card-title font-semibold">Social</span>
            <div className="flex items-center gap-5">
              <Link href="#"><img src="/moto/sigam/music.png" alt="Tiktok" className="h-[18px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/fb.png" alt="Facebook" className="h-[18px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/in.png" alt="LinkedIn" className="h-[18px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/x.png" alt="X" className="h-[18px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/insta..png" alt="Instagram" className="h-[18px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
              <Link href="#"><img src="/moto/sigam/you.png" alt="YouTube" className="h-[18px] w-auto object-contain brightness-0 invert hover:scale-110 transition-transform" /></Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto justify-center xl:justify-end" data-aos="fade-up" data-aos-delay="500">
            <span className="orbitron-font text-white card-title font-semibold">Subscribe to Newsletter :</span>
            <div className="flex items-center w-full sm:w-[350px] bg-white p-[2px]">
              <input 
                type="text" 
                placeholder="Enter Your E-Maild id" 
                className="w-full bg-transparent px-4 py-2 text-[#333333] outline-none dmsans-font text-sm placeholder:text-[#999999]" 
              />
              <button className="bg-[#E30613] text-white px-6 py-2 font-normal orbitron-font hover:bg-red-700 transition-colors flex-shrink-0 section-text">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Strip */}
      <div className="w-full bg-white text-[#1d1d1b] text-center py-4 px-4 section-text dmsans-font font-normal relative z-20" data-aos="fade-up" data-aos-delay="600">
        © Sigam. P.IVA 06673840630 - Powered By <Link href="#" className="underline hover:text-black">Proger</Link> | Impresa finanziata con risorse POR Campania 2014-2020 C.D.I. 53128 (Credito Imposta L.208/2015)
      </div>
    </footer>
  );
}
