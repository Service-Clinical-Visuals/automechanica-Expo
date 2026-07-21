"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer className="bg-[#242424] text-[#E0E0E0] font-['Open_Sans'] text-sm">
      <div className="custom-container pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-6 mb-4">

          {/* Column 1: Logo & Info (Spans 3) */}
          <div className="flex flex-col gap-6 xl:col-span-3" data-aos="fade-up">
            <Link href="/" className="inline-block">
              {/* Note: Update the src below if the logo file name is different */}
              <img src="/moto/bg-automotive/Logo 2.png" alt="BGA Logo" className="w-[280px] h-auto object-contain" />
            </Link>
            <Typography variant="p" className="max-w-[330px] leading-relaxed text-[15px] text-[#CCCCCC]">
              BGA is a leading British supplier with 95 years of OEM heritage, delivering premium Engine and Steering parts that are engineered and tested in the UK to meet or exceed OE quality standards.
            </Typography>
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <img src="/moto/bg-automotive/fb.png" alt="Facebook" className="w-auto h-auto object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <img src="/moto/bg-automotive/twitter.png" alt="Twitter" className="w-auto h-auto object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <img src="/moto/bg-automotive/linkedin.png" alt="LinkedIn" className="w-auto h-auto object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <img src="/moto/bg-automotive/insta.png" alt="Instagram" className="w-auto h-auto object-contain" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 2) */}
          <div className="flex flex-col gap-6 xl:col-span-2 lg:pl-8" data-aos="fade-up" data-aos-delay="100">
            <div className="inline-flex flex-col mb-1">
              <Typography variant="h4" className="font-['Source_Sans_3'] font-normal text-white text-[18px] pb-1">Quick Links</Typography>
              <div className="w-11 h-[2px] bg-[#185E2D] self-start"></div>
            </div>
            <ul className="flex flex-col gap-4 text-[12px] font-['Source_Sans_3'] font-normal text-[#FFFFFF]">
              <Typography variant="li" color="none"><Link href="#" className="hover:text-white transition-colors">Home</Link></Typography>
              <Typography variant="li" color="none"><Link href="#" className="hover:text-white transition-colors">About Us</Link></Typography>
              <Typography variant="li" color="none"><Link href="#" className="hover:text-white transition-colors">Products</Link></Typography>
              <Typography variant="li" color="none"><Link href="#" className="hover:text-white transition-colors">News</Link></Typography>
              <Typography variant="li" color="none"><Link href="#" className="hover:text-white transition-colors">Career</Link></Typography>
              <Typography variant="li" color="none"><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></Typography>
            </ul>
          </div>

          {/* Column 3: Products (Spans 2) */}
          <div className="flex flex-col gap-6 xl:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <div className="inline-flex flex-col mb-1">
              <Typography variant="h4" className="font-['Source_Sans_3'] font-normal text-white text-[18px] pb-1">Products</Typography>
              <div className="w-11 h-[2px] bg-[#185E2D] self-start"></div>
            </div>
            <ul className="flex flex-col gap-4 text-[12px] font-['Source_Sans_3'] font-normal text-[#FFFFFF]">
              <Typography variant="li" color="none"><Link href="#" className="hover:text-white transition-colors">Camshaft</Link></Typography>
              <Typography variant="li" color="none"><Link href="#" className="hover:text-white transition-colors">Cylinder head</Link></Typography>
              <Typography variant="li" color="none"><Link href="#" className="hover:text-white transition-colors">Valves</Link></Typography>
              <Typography variant="li" color="none"><Link href="#" className="hover:text-white transition-colors">Tappets</Link></Typography>
            </ul>
          </div>

          {/* Column 4: Contact (Spans 2) */}
          <div className="flex flex-col gap-6 xl:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <div className="inline-flex flex-col mb-1">
              <Typography variant="h4" className="font-['Source_Sans_3'] font-normal text-white text-[18px] pb-1">Contact</Typography>
              <div className="w-11 h-[2px] bg-[#185E2D] self-start"></div>
            </div>
            <div className="flex flex-col gap-4 text-[12px] font-['Source_Sans_3'] font-normal text-[#FFFFFF]">
              <div className="flex items-start gap-3">
                <svg className="w-[18px] h-[18px] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <Typography variant="span" color="none">Swindon, Wiltshire</Typography>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <Typography variant="span" color="none">01793 491 777</Typography>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <a href="mailto:marketing@bgautomotive.co.uk" className="hover:text-white transition-colors"><Typography variant="span" color="none">marketing@bgautomotive.co.uk</Typography></a>
              </div>
            </div>
          </div>

          {/* Column 5: Stay Updated (Spans 3) */}
          <div className="flex flex-col gap-6 xl:col-span-3" data-aos="fade-up" data-aos-delay="400">
            <div className="inline-flex flex-col mb-1">
              <Typography variant="h4" className="font-['Source_Sans_3'] font-normal text-white text-[18px] pb-1">Stay Updated</Typography>
              <div className="w-11 h-[2px] bg-[#185E2D] self-start"></div>
            </div>
            <div className="flex flex-col xl:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-transparent border border-[#666666] rounded-md px-4 py-2.5 text-[13px] text-white outline-none placeholder:text-[#999999] w-full focus:border-white transition-colors"
              />
              <Button href="#" variant="primary" className="!bg-[#185E2D] hover:!bg-[#154620] !text-white !font-['Montserrat'] !font-medium !rounded-md !px-5 !py-2.5 !text-[13px] inline-flex items-center justify-center gap-2 flex-shrink-0 border border-[#185E2D]">
                Subscribe
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#444444]">
        <div className="custom-container py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[15px] text-[#999999]">
          <Typography variant="p">2026 BG Automotive Limited. All Rights Reserved</Typography>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors"><Typography variant="span">Privacy Policy</Typography></Link>
            <Link href="#" className="hover:text-white transition-colors"><Typography variant="span">Terms & Conditions</Typography></Link>
            <Link href="#" className="hover:text-white transition-colors"><Typography variant="span">Sitemap</Typography></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
