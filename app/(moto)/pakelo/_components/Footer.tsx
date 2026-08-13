"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const quickLinksLeft = [
    "HOME", "PRODUCTS", "LAB AND SERVICES", "CHECK-UP AND DIAGNOSIS", "R & D", "CONSULTANCY AND TRAINING"
  ];
  const quickLinksRight = [
    "FIND YOUR OIL", "FIND A DEALER", "PAKELO MAGAZINE", "CAREERS", "PRIVACY", "CUSTOMER PRIVACY NOTICE"
  ];

  const sectorsLeft = [
    "CAR & RACING", "MOTORCYCLE", "CONSTRUCTION", "AGRICULTURE"
  ];
  const sectorsRight = [
    "TRUCKS", "INDUSTRY", "FOOD INDUSTRY", "BOATING AND MARINE"
  ];

  const dealers = [
    "ITALY", "REST OF THE WORLD"
  ];

  return (
    <footer className="bg-[#242424] text-white">
      <div className="custom-container py-14 md:pt-20 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-10">
          
          {/* Column 1: Logo & Quick Links (Span 5 on large screens) */}
          <div data-aos="fade-up" className="md:col-span-2 xl:col-span-5 flex flex-col pr-0 xl:pr-8 order-1 xl:order-none">
            <Link href="/" className="mb-12 inline-block">
              <img 
                src="/moto/pakelo/logo.png" 
                alt="Pakelo Logo" 
                className="w-[160px] md:w-[200px] object-contain " 
              />
            </Link>

            <h4 className="oswald card-title uppercase font-medium mb-4">Quick Links</h4>
            <div className="w-full h-[1px] bg-white/50 mb-6"></div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              <div className="flex flex-col gap-4">
                {quickLinksLeft.map((link, idx) => (
                  <Link key={idx} href="#" className="dm-sans font-normal header-btn text-white hover:text-[#E41513] transition-colors tracking-wide uppercase">
                    {link}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {quickLinksRight.map((link, idx) => (
                  <Link key={idx} href="#" className="dm-sans font-normal header-btn text-white hover:text-[#E41513] transition-colors tracking-wide uppercase">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Sectors & Dealers (Span 4) */}
          <div className="md:contents xl:col-span-4 xl:flex xl:flex-col xl:pr-8">
            <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col order-2 xl:order-none mb-12 xl:mb-0">
              <h4 className="oswald card-title uppercase font-medium mb-4">Sectors</h4>
              <div className="w-full h-[1px] bg-white/50 mb-6"></div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-4 xl:mb-12">
                <div className="flex flex-col gap-4">
                  {sectorsLeft.map((link, idx) => (
                    <Link key={idx} href="#" className="dm-sans font-normal header-btn text-white hover:text-[#E41513] transition-colors tracking-wide uppercase">
                      {link}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  {sectorsRight.map((link, idx) => (
                    <Link key={idx} href="#" className="dm-sans font-normal header-btn text-white hover:text-[#E41513] transition-colors tracking-wide uppercase">
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col order-4 xl:order-none xl:pr-8">
              <h4 className="oswald card-title uppercase font-medium mb-4">Dealers</h4>
              <div className="w-full h-[1px] bg-white/50 mb-6"></div>
              
              <div className="flex flex-col gap-4">
                {dealers.map((link, idx) => (
                  <Link key={idx} href="#" className="dm-sans font-normal header-btn text-white hover:text-[#E41513] transition-colors tracking-wide uppercase">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Socials & Certifications (Span 3) */}
          <div className="md:contents xl:col-span-3 xl:flex xl:flex-col">
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col order-5 xl:order-none">
              <h4 className="oswald card-title uppercase font-medium mb-4">Socials</h4>
              <div className="w-full h-[1px] bg-white/50 mb-6"></div>
              
              <div className="flex items-center gap-4 xl:mb-12">
              <a href="#" className="text-primary hover:opacity-80 transition-opacity">
                <img src="/moto/pakelo/facebook.png" alt="Facebook" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="text-primary hover:opacity-80 transition-opacity">
                <img src="/moto/pakelo/instagram.png" alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="text-primary hover:opacity-80 transition-opacity">
                <img src="/moto/pakelo/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="text-primary hover:opacity-80 transition-opacity">
                <img src="/moto/pakelo/youtube.png" alt="YouTube" className="w-5 h-5 object-contain" />
              </a>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col order-3 xl:order-none mb-12 xl:mb-0">
              <h4 className="oswald card-title uppercase font-medium mb-4">Certifications</h4>
              <div className="w-full h-[1px] bg-white/50 mb-6"></div>
            
            <div className="flex flex-wrap items-center gap-4">
              <img src="/moto/pakelo/footer1.png" alt="Certification 1" className="h-15 object-contain" />
              <img src="/moto/pakelo/footer2.png" alt="Certification 2" className="h-15 object-contain" />
              <img src="/moto/pakelo/footer3.png" alt="Certification 3" className="h-15 object-contain" />
            </div>
          </div>

        </div>
      </div>

      </div>
        {/* Bottom Bar */}
          <div className="bg-white py-3 px-4 text-center">
        <p className="dm-sans header-link font-bold text-[#242424] uppercase ">
          © PAKELO MOTOR OIL S.P.A. A S.U. 2026 - ALL RIGHTS RESERVED - P.IVA 01876150234
        </p>
      </div>
    </footer>
  );
}
