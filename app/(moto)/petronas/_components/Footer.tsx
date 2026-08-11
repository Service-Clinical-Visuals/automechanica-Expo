"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Youtube } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  const corporateLinks = ['About Us', 'Careers', 'Technology', 'Leadership', 'History'];
  const brandsLinks = ['Petronas Syntium', 'Petronas Urania', 'Petronas Sprinta', 'Petronas Tutela', 'Petronas Iona'];
  const supportLinks = ['Health, Safety, Security & Environment', 'Cookie Policy', 'Privacy Policy', 'Legal Notice', 'Terms & Conditions'];

  return (
    <footer className="w-full bg-background pt-16 lg:pt-24 pb-8 border-t border-white/5">
      <div className="custom-container flex flex-col gap-12 lg:gap-20">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-12 gap-x-4 gap-y-10 lg:gap-8 xl:gap-4">

          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 xl:col-span-4" data-aos="fade-up" data-aos-delay="100">
            <Link href="#" className="inline-block">
              <div className="flex items-center w-fit">
                <img src="/moto/petronas/logo.png" alt="PETRONAS Logo" className="w-32 sm:w-40 md:w-[55%] h-auto object-contain" />
              </div>
            </Link>
            <Typography variant="footer-body" color="white" className="mt-2 leading-relaxed xl:max-w-[70%] pr-4 text-sm ">
              Driven by innovation and technical excellence, PETRONAS Lubricants International provides advanced lubrication solutions that power industries, mobility, and sustainable progress around the world.
            </Typography>
          </div>

          {/* Column 2: Corporate */}
          <div className="flex flex-col gap-4 xl:pl-4 col-span-1 xl:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white" className="mb-2 font-semibold">
              Corporate
            </Typography>
            <ul className="flex flex-col gap-3">
              {corporateLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors group inline-block">
                    <Typography variant="footer-body" color="white" className="  hover:text-primary">
                      {item}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Brands */}
          <div className="flex flex-col gap-4 col-span-1 xl:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white" className="mb-2 font-semibold">
              Our Brands
            </Typography>
            <ul className="flex flex-col gap-3">
              {brandsLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors group inline-block">
                    <Typography variant="footer-body" color="white" className="  hover:text-primary">
                      {item}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="flex flex-col gap-4 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-2" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="white" className="mb-2 font-semibold">
              Support
            </Typography>
            <ul className="flex flex-col gap-3">
              {supportLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors group inline-block">
                    <Typography variant="footer-body" color="white" className="  hover:text-primary">
                      {item}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Social Media Links */}
          <div className="flex flex-col gap-4 col-span-1 xl:col-span-2" data-aos="fade-up" data-aos-delay="500">
            <Typography variant="footer-heading" color="white" className="mb-4 font-semibold whitespace-nowrap">
              Social Media Links
            </Typography>
            <div className="flex items-center gap-5">
              <a href="#" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,169,157,0.5)] hover:shadow-[0_0_25px_rgba(0,169,157,0.8)] hover:scale-105 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-white" strokeWidth={2.5} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,169,157,0.5)] hover:shadow-[0_0_25px_rgba(0,169,157,0.8)] hover:scale-105 transition-all duration-300">
                <Youtube className="w-6 h-6 text-white" strokeWidth={2} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/40 flex flex-col items-center justify-center text-center">
          <Typography variant="footer-body" color="white" className="text-sm ">
            Copyright © 2025 PETRONAS Lubricants International. All rights reserved.
          </Typography>
        </div>

      </div>
    </footer>
  );
}
