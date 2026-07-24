"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#242424] text-white inter responsive-text-sm">
      <div className="custom-container pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 mb-4">

          {/* Column 1: Logo & Info (Spans 4) */}
          <div className="flex flex-col gap-6 xl:col-span-4" data-aos="fade-up">
            <Link href="/" className="inline-block">
              <img src="/moto/proquisur-sl/logo.png" alt="Proquisur Logo" className="responsive-logo object-contain" />
            </Link>
            <Typography variant="p" className="max-w-[320px] 3xl:max-w-md leading-relaxed responsive-text-sm text-white">
              Proquisur is a supplier of chemical solutions, offering lubricants, additives, and fluids that enhance performance and efficiency.
            </Typography>
            <div className="flex items-center gap-5 mt-2">
              <Link href="#">
                <img src="/moto/proquisur-sl/fb.png" alt="Facebook" className="w-4 h-4 object-contain brightness-0 invert" />
              </Link>
              <Link href="#">
                <img src="/moto/proquisur-sl/twitter.png" alt="Twitter (X)" className="w-4 h-4 object-contain brightness-0 invert" />
              </Link>
              <Link href="#">
                <img src="/moto/proquisur-sl/linkedin.png" alt="LinkedIn" className="w-4 h-4 object-contain brightness-0 invert" />
              </Link>
              <Link href="#">
                <img src="/moto/proquisur-sl/insta.png" alt="Instagram" className="w-4 h-4 object-contain brightness-0 invert" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 2) */}
          <div className="flex flex-col gap-5 xl:col-span-2" data-aos="fade-up" data-aos-delay="100">
            <div className="inline-flex flex-col mb-1">
              <Typography variant="h4" className="font-medium text-white responsive-text-base pb-1">Quick Links</Typography>
              <div className="w-8 h-[2px] bg-[#6FB420] self-start"></div>
            </div>
            <ul className="flex flex-col gap-3 responsive-text-sm text-white">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Products</Link></li>
              <li><Link href="#">News</Link></li>
              <li><Link href="#">Career</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Products (Spans 2) */}
          <div className="flex flex-col gap-5 xl:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <div className="inline-flex flex-col mb-1">
              <Typography variant="h4" className="font-medium text-white responsive-text-base pb-1">Products</Typography>
              <div className="w-8 h-[2px] bg-[#6FB420] self-start"></div>
            </div>
            <ul className="flex flex-col gap-3 responsive-text-sm text-white">
              <li><Link href="#">Engine Oil</Link></li>
              <li><Link href="#">Lubricants</Link></li>
              <li><Link href="#">Coolants</Link></li>
              <li><Link href="#">Hydraulic Oils</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact (Spans 2) */}
          <div className="flex flex-col gap-5 xl:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <div className="inline-flex flex-col mb-1">
              <Typography variant="h4" className="font-medium text-white responsive-text-base pb-1">Contact</Typography>
              <div className="w-8 h-[2px] bg-[#6FB420] self-start"></div>
            </div>
            <ul className="flex flex-col gap-4 responsive-text-sm text-white">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white mt-0.5 shrink-0" />
                <span className="leading-relaxed">Polígono Industrial La Salina, Parcelas 26-27<br />14960-Rute (Córdoba)<br />ESPAÑA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white shrink-0" />
                <a href="tel:+34957538743" className="underline underline-offset-4 decoration-white">+34 957 538 743</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white shrink-0" />
                <a href="mailto:info@proquisur.com" className="underline underline-offset-4 decoration-white">info@proquisur.com</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Stay Updated (Spans 2) */}
          <div className="flex flex-col gap-5 xl:col-span-2" data-aos="fade-up" data-aos-delay="400">
            <div className="inline-flex flex-col mb-1">
              <Typography variant="h4" className="font-medium text-white responsive-text-base pb-1">Stay Updated</Typography>
              <div className="w-8 h-[2px] bg-[#6FB420] self-start"></div>
            </div>
            <div className="flex items-center gap-[10px] mt-1 w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border border-white text-white placeholder-white responsive-text-sm px-4 py-2 h-auto min-h-[44px] w-full max-w-[300px] 3xl:max-w-[400px] rounded-[5px] focus:outline-none focus:border-[#6FB420] transition-colors"
              />
              <button className="bg-[#6FB420] hover:bg-[#5a931a] text-white responsive-text-sm font-semibold h-auto min-h-[44px] px-4 rounded-[5px] flex items-center justify-center gap-2 transition-colors shrink-0 whitespace-nowrap">
                Subscribe <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#444444]">
        <div className="custom-container py-5 flex flex-col md:flex-row items-center justify-between gap-4 responsive-text-sm !text-white">
          <Typography variant="p" className="!text-white">2026 BG Automotive Limited. All Rights Reserved</Typography>
          <div className="flex items-center gap-8">
            <Link href="#"><Typography variant="span" className="!text-white">Privacy Policy</Typography></Link>
            <Link href="#"><Typography variant="span" className="!text-white">Terms & Conditions</Typography></Link>
            <Link href="#"><Typography variant="span" className="!text-white">Sitemap</Typography></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
