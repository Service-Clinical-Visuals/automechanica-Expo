"use client";

import React from "react";
import { Youtube, Facebook, Instagram, Twitter } from "lucide-react";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      {/* Top Section */}
      <div className="w-full bg-primary pt-12 xl:pt-16 pb-10 xl:pb-12">
        <div className="custom-container max-w-[1920px] grid grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 xl:gap-8">

          {/* Column 1: Man Image & Socials */}
          <div className="col-span-2 xl:col-span-1 flex flex-col gap-6 xl:gap-8 items-start xl:pl-8">
            <img src="/moto/hasting/man.png" alt="Tough Guy Tech Support" className="w-[150px] xl:w-[180px] min-[3800px]:w-[350px] object-contain" data-aos="fade-up" />
            <div className="flex items-center gap-4 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="100">
              <a href="#" className="w-10 h-10 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-white transition-colors shadow-md">
                <Youtube className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" />
              </a>
              <a href="#" className="w-10 h-10 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-white transition-colors shadow-md">
                <Facebook className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" />
              </a>
              <a href="#" className="w-10 h-10 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-white transition-colors shadow-md">
                <Instagram className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" />
              </a>
              <a href="#" className="w-10 h-10 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-white transition-colors shadow-md">
                <Twitter className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" />
              </a>
            </div>
          </div>

          {/* Column 2: Our Solutions */}
          <div className="col-span-1 flex flex-col gap-5 xl:gap-6">
            <Typography variant="h3" color="white" className="font-bold" data-aos="fade-up">Our Solutions</Typography>
            <div className="flex flex-col gap-3 xl:gap-4" data-aos="fade-up" data-aos-delay="100">
              <a href="#products" className="footer-body text-white hover:text-secondary transition-colors text-[14px] xl:text-[15px]">Piston Rings</a>
              <a href="#products" className="footer-body text-white hover:text-secondary transition-colors text-[14px] xl:text-[15px]">Aftermarket</a>
              <a href="#products" className="footer-body text-white hover:text-secondary transition-colors text-[14px] xl:text-[15px]">OEM</a>
              <a href="#help" className="footer-body text-white hover:text-secondary transition-colors text-[14px] xl:text-[15px]">Tough Guy Tech Support</a>
              <a href="#catalogs" className="footer-body text-white hover:text-secondary transition-colors text-[14px] xl:text-[15px]">Catalogs & Cross Reference</a>
              <a href="#buy" className="footer-body text-white hover:text-secondary transition-colors text-[14px] xl:text-[15px]">Where to Buy</a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="col-span-1 flex flex-col gap-5 xl:gap-6">
            <Typography variant="h3" color="white" className="font-bold" data-aos="fade-up">Quick Links</Typography>
            <div className="flex flex-col gap-3 xl:gap-4" data-aos="fade-up" data-aos-delay="100">
              <a href="#about" className="footer-body text-white hover:text-secondary transition-colors text-[14px] xl:text-[15px]">About</a>
              <a href="#careers" className="footer-body text-white hover:text-secondary transition-colors text-[14px] xl:text-[15px]">Careers</a>
              <a href="#contact" className="footer-body text-white hover:text-secondary transition-colors text-[14px] xl:text-[15px]">Contact</a>
              <a href="#catalog" className="footer-body text-white hover:text-secondary transition-colors text-[14px] xl:text-[15px]">Web Catalog</a>
              <a href="#performance" className="footer-body text-white hover:text-secondary transition-colors text-[14px] xl:text-[15px]">Hastings Performance</a>
              <a href="#hq" className="footer-body text-white hover:text-secondary transition-colors text-[14px] xl:text-[15px]">European Headquarters</a>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-2 xl:col-span-1 flex flex-col gap-5 xl:gap-6">
            <Typography variant="h3" color="white" className="font-bold" data-aos="fade-up">Contact Info</Typography>
            <div className="flex flex-col gap-6 min-[3800px]:gap-10" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-secondary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <Typography variant="p" color="white" className="leading-relaxed text-[15px]">
                  Hastings Manufacturing Company<br />
                  325 N. Hanover St. Hastings, MI 49058 USA
                </Typography>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <Typography variant="p" color="white" className="text-[15px]">
                  1 (800) 776-1088
                </Typography>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                <Typography variant="p" color="white" className="text-[15px]">
                  +1 269 945 2491
                </Typography>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section - Copyright inside blue section */}
        <div className="custom-container max-w-[1920px] mt-16 pt-8 border-t border-white/20 flex justify-center items-center">
          <Typography variant="p" color="white" className="text-sm">
            Hastings Manufacturing Company | © All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
