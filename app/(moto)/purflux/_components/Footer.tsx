"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import Button from "./Button";
import { Facebook, Linkedin, Instagram, Youtube, Twitter, MapPin, Phone, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-auto bg-secondary">
      
      {/* Main Footer Content */}
      <div className="w-full py-16 min-[3800px]:py-25 border-b border-white/10">
        <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-12 xl:gap-8">
          
          {/* Col 1: Brand Info (Span 4) */}
          <div className="flex flex-col gap-6 xl:col-span-4 xl:pr-8" data-aos="fade-up">
            <Link href="/" className="inline-block w-40">
              <img src="/moto/purflux/logo.png" alt="Purflux Logo" className="w-full h-auto object-contain" />
            </Link>
            <p className="footer-body text-white/80 leading-relaxed">
              Driven by innovation and precision engineering, Purflux develops advanced filtration solutions that provide superior protection, reliability, and long-lasting performance.
            </p>
          </div>

          {/* Col 2: Quick Links (Span 2) */}
          <div className="flex flex-col gap-5 xl:col-span-2 xl:pl-4" data-aos="fade-up" data-aos-delay="100">
            <h4 className="footer-heading text-white mb-1">Quick Links</h4>
            <div className="flex flex-col gap-4">
              <Link href="#home" className="footer-body text-white/80 hover:text-primary transition-colors">Home</Link>
              <Link href="#about" className="footer-body text-white/80 hover:text-primary transition-colors">About Us</Link>
              <Link href="#products" className="footer-body text-white/80 hover:text-primary transition-colors">Products</Link>
              <Link href="#news" className="footer-body text-white/80 hover:text-primary transition-colors">News</Link>
            </div>
          </div>

          {/* Col 3: Quality (Span 3) */}
          <div className="flex flex-col gap-5 xl:col-span-3 xl:pl-8 xl:border-l border-white/20" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading text-white mb-1">Quality</h4>
            <div className="flex flex-col gap-4">
              <span className="footer-body text-white/80">OE-Quality Manufacturing</span>
              <span className="footer-body text-white/80">IATF 16949:2016 Certified</span>
              <span className="footer-body text-white/80">Rigorous Product Testing</span>
              <span className="footer-body text-white/80">Strict Quality Inspections</span>
              <Link href="#" className="footer-body text-primary hover:text-primary-hover transition-colors mt-1">See All ..</Link>
            </div>
          </div>

          {/* Col 4: Contact (Span 3) */}
          <div className="flex flex-col gap-5 xl:col-span-3 xl:pl-8 xl:border-l border-white/20" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading text-white mb-1">Contact</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <p className="footer-body text-white/80 leading-relaxed">
                  Renaissance Building<br/>1, avenue Claude Monet,<br/>78280 Guyancourt, France.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <p className="footer-body text-white/80">
                  +44 2890998877
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Socials and Newsletter Row */}
      <div className="w-full py-8">
        <div className="custom-container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Socials */}
          <div className="flex flex-col gap-3" data-aos="fade-right">
            <h4 className="footer-heading text-white">Socials</h4>
            <div className="flex items-center gap-5 mt-1">
              <Link href="#" className="text-white hover:text-primary transition-colors">
                {/* TikTok SVG */}
                <svg width="22" height="22" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                {/* Facebook Solid SVG */}
                <svg width="22" height="22" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                {/* LinkedIn Solid SVG */}
                <svg width="22" height="22" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                {/* X Icon (Twitter) */}
                <svg width="22" height="22" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.4 26.8 48H172.4L273 181.6 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                 {/* Instagram Outline SVG */}
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                {/* YouTube Solid SVG */}
                <svg width="24" height="24" viewBox="0 0 576 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 w-full lg:w-auto" data-aos="fade-left">
            <h4 className="footer-heading text-white whitespace-nowrap">Subscribe to Newsletter :</h4>
            <div className="flex flex-row items-center w-full lg:w-[420px] bg-white border border-primary p-1.5">
              <input 
                type="email" 
                placeholder="Enter Your E-Mail id" 
                className="w-full bg-transparent text-dark py-1 px-3 focus:outline-none placeholder:text-gray-400 placeholder:text-sm text-sm"
              />
              <Button text="Subscribe" showIcon={false} className="!py-2 !px-8 whitespace-nowrap !shadow-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-white py-4 flex items-center justify-center">
        <p className="footer-body text-dark font-medium">
          © 2026 Purflux Filtration All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
