"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  const leftLinks = [
    { name: "Home", href: "#" },
    { name: "Heritage&Roadmap", href: "#" },
    { name: "Our Passion", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Log-In", href: "#" },
  ];

  const rightLinks = [
    { name: "Media&News", href: "#" },
    { name: "Corporation", href: "#" },
    { name: "Values", href: "#" },
    { name: "Products", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#01195d] text-white pt-8 pb-4 lg:pt-16 lg:pb-8 overflow-hidden px-4 lg:px-16">
      <div className="custom-container">
        {/* Top 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start" data-aos="fade-up">
            <Link href="/aydoto" className="inline-block mb-5">
              <img
                src="/moto/aydoto/footerlogo.png"
                alt="AYD Automotive Industry"
                className="w-48 md:w-56 h-auto object-contain"
              />
            </Link>
            <p className="oswald-font font-normal text-white section-text leading-relaxed max-w-sm">
              Founded in 1975, AYD became Turkey&apos;s first manufacturer of suspension and steering components, setting industry standards for excellence.
            </p>
          </div>

          {/* Column 2: Corporate Links (4 cols) */}
          <div className="lg:col-span-4 flex flex-col lg:pl-15" data-aos="fade-up" data-aos-delay="100">
            <h3 className="oswald-font font-semibold text-white card-title1 tracking-wide mb-3">
              Corporate
            </h3>
            <div className="w-[75%] border-t border-white/20 mb-4" />

            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              <div className="flex flex-col gap-2.5">
                {leftLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="oswald-font font-normal text-white  section-text transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2.5">
                {rightLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="oswald-font font-normal text-white  section-text transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Contact Us (2.5 cols) */}
          <div className="lg:col-span-3 lg:col-span-3 flex flex-col" data-aos="fade-up" data-aos-delay="200">
            <h3 className="oswald-font font-semibold text-white card-title1 tracking-wide mb-3">
              Contact Us
            </h3>
            <div className="flex items-start gap-3 mt-1">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
               <img src="/moto/aydoto/location.png" alt="Location" />
              </div>
              <p className="oswald-font font-normal text-white section-text leading-relaxed">
                Büyükkayacık OSB Mah. <br/>Vali İhsandede Caddesi No:7, Konya, <br/>Selçuklu 42250, TR
              </p>
            </div>
          </div>

          {/* Column 4: Social Media Links (1.5 cols) */}
          <div className="lg:col-span-2 lg:col-span-1 flex flex-col" data-aos="fade-up" data-aos-delay="300">
           <h3 className="oswald-font font-semibold text-white card-title1 tracking-wide mb-3">
              Social Media Links
            </h3>
            <div className="flex items-center gap-3">
              
                <img
                  src="/moto/aydoto/in.png"
                  alt="LinkedIn"
                  className="w-12 h-12 object-contain"
                 
                />
               
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Divider */}
        <div className="w-full border-t border-white/15 my-6" />

        {/* Copyright Row */}
        <div className="flex justify-center items-center " data-aos="fade-up" data-aos-delay="400">
          <p className="oswald-font font-normal text-white section-text text-center tracking-wide">
            Copyright© 2026 aydtr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
