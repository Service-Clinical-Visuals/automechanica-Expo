"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer className="w-full bg-[#27292A] pt-16 lg:pt-24 pb-8 border-t border-white/5">
      <div className="custom-container flex flex-col gap-12 lg:gap-20">

        {/* Top Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-12 gap-x-4 gap-y-10 lg:gap-8 xl:gap-4">

          {/* Column 1: Logo & Description (span 3 in 12 cols) */}
          <div className="flex flex-col gap-6 col-span-2 sm:col-span-1 xl:col-span-3" data-aos="fade-up" data-aos-delay="100">
            <Link href="#" className="inline-block">
              <div className="bg-primary px-5 py-2 md:px-7 md:py-2.5 rounded-full flex items-center justify-center shadow-sm w-fit">
                <img src="/moto/koneks/logo2.png" alt="KONEKS Logo" className="w-28 sm:w-32 md:w-36 lg:w-40 h-auto object-contain" />
              </div>
            </Link>
            <Typography variant="footer-body" color="white" className="mt-2 leading-relaxed pr-4">
              Since 1992, KONEKS has been manufacturing premium engine components, delivering high-quality pistons, liners, and piston pins trusted for precision, durability, and reliable performance worldwide.
            </Typography>
          </div>

          {/* Column 2: Corporate (span 2 in 12 cols) */}
          <div className="flex flex-col gap-4 lg:pl-8 col-span-1 sm:col-span-1 xl:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white" className="mb-2">
              Corporate
            </Typography>
            <ul className="flex flex-col gap-3">
              {['Home', 'Corporate', 'Production', 'Documents', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors group inline-block">
                    <Typography variant="footer-body" color="white" className="group-hover:opacity-100 transition-opacity">
                      {item}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products (span 2 in 12 cols) */}
          <div className="flex flex-col gap-4 col-span-1 sm:col-span-1 xl:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white" className="mb-2">
              Products
            </Typography>
            <ul className="flex flex-col gap-3">
              {['Piston', 'Liner', 'Piston Ring'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors group inline-block">
                    <Typography variant="footer-body" color="white" className="group-hover:opacity-100 transition-opacity">
                      {item}
                    </Typography>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#" className="hover:text-white transition-colors group inline-block mt-2">
                  <Typography variant="footer-body" color="white" className="opacity-100 font-semibold underline decoration-2 underline-offset-4">
                    See More
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (span 3 in 12 cols) */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1 xl:col-span-3" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="white" className="mb-2">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+903322390800" className="flex items-start gap-3 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" strokeWidth={2} />
                  <Typography variant="footer-body" color="white" className="group-hover:opacity-100 transition-opacity">
                    +90 332 239 08 00
                  </Typography>
                </a>
              </li>
              <li>
                <a href="mailto:koneks@koneks.com.tr" className="flex items-start gap-3 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" strokeWidth={2} />
                  <Typography variant="footer-body" color="white" className="group-hover:opacity-100 transition-opacity">
                    koneks@koneks.com.tr
                  </Typography>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 group cursor-pointer">
                  <MapPin className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" strokeWidth={2} />
                  <Typography variant="footer-body" color="white" className="group-hover:opacity-100 transition-opacity leading-relaxed max-w-[90%]">
                    Aksaray Mah. Tiryaki Hasan Paşa<br />
                    Sk. 57/3 Fatih / ISTANBUL /<br />
                    TURKIYE
                  </Typography>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media Links (span 2 in 12 cols) */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1 xl:col-span-2" data-aos="fade-up" data-aos-delay="500">
            <Typography variant="footer-heading" color="white" className="mb-2 whitespace-nowrap">
              Social Media Links
            </Typography>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full border-2 border-primary flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-secondary fill-primary group-hover:fill-secondary group-hover:text-primary  " strokeWidth={2} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/20 flex flex-col items-center justify-center text-center">
          <Typography variant="footer-body" color="white" className="">
            Copyright © 2026 Koneks Piston and Liner Manufacturing Company - All rights reserved. Powered by Stayup.team
          </Typography>
        </div>

      </div>
    </footer>
  );
}
