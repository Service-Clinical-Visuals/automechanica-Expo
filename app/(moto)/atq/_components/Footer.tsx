"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, Youtube, Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col mt-auto bg-[#171717]">
      {/* Top Section */}
      <div className="w-full relative text-white py-16 md:py-20 lg:py-24">
        <div className="custom-container relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-12 xl:gap-8">
          
          {/* Column 1: Logo, Text & Socials (Span 5) */}
          <div className="col-span-1 md:col-span-2 xl:col-span-5 flex flex-col gap-6 lg:pr-8">
            <img 
              src="/moto/atq/logo.png" 
              alt="ATQ Germany Logo" 
              className="h-15 sm:h-12 max-h-[2100]:h-20 w-auto object-contain self-start" 
              data-aos="fade-up" 
            />
            <p className="footer-body text-white leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              ATQ Germany is a trusted supplier of premium automotive aftermarket parts, delivering OEM-quality solutions for passenger and commercial vehicles. With a strong focus on quality, reliability, and customer satisfaction, the company offers an extensive product range designed to meet the demands of the global automotive market
            </p>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6">
            <h4 className="footer-heading text-white" data-aos="fade-up" data-aos-delay="100">
              Quick Links
            </h4>
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
              <a href="#home" className="footer-body text-white hover:text-primary transition-colors">Home</a>
              <a href="#about" className="footer-body text-white hover:text-primary transition-colors">About Us</a>
              <a href="#products" className="footer-body text-white hover:text-primary transition-colors">Products</a>
              <a href="#news" className="footer-body text-white hover:text-primary transition-colors">News</a>
            </div>
          </div>

          {/* Column 3: Contact Us (Span 3) */}
          <div className="col-span-1 xl:col-span-3 flex flex-col gap-6">
            <h4 className="footer-heading text-white" data-aos="fade-up" data-aos-delay="200">
              Contact Us
            </h4>
            <div className="flex flex-col gap-5" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-white mt-0.5 shrink-0" />
                <span className="footer-body text-white">+49 (0) 6227 39 59 364</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-white mt-0.5 shrink-0" />
                <span className="footer-body text-white leading-tight">Altrottstr. 31, 69190<br/>Walldorf, Germany</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-white mt-0.5 shrink-0" />
                <a href="mailto:info@atq-germany.com" className="footer-body text-white hover:text-primary transition-colors">
                  info@atq-germany.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Miscellaneous (Span 2) */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6">
            <h4 className="footer-heading text-white" data-aos="fade-up" data-aos-delay="300">
              Miscellaneous
            </h4>
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="400">
              <a href="#" className="footer-body text-white hover:text-primary transition-colors">General Terms & Conditions</a>
              <a href="#" className="footer-body text-white hover:text-primary transition-colors">Legal Notes</a>
              <a href="#" className="footer-body text-white hover:text-primary transition-colors">Data Privacy</a>
            </div>
          </div>

        </div>

        {/* Bottom Row of Top Section: Socials & Newsletter */}
        <div className="custom-container relative z-10 mt-16 md:mt-20" data-aos="fade-up">
           <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pt-0">
              
              {/* Social Icons */}
              <div className="flex items-center gap-5">
                <a href="#" className="text-white hover:text-white transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="#" className="text-white hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                </a>
                <a href="#" className="text-white hover:text-white transition-colors">
                  <Instagram size={22} />
                </a>
                <a href="#" className="text-white hover:text-white transition-colors">
                  <Youtube size={22} />
                </a>
              </div>

              {/* Newsletter */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
                <span className="footer-heading text-white whitespace-nowrap">Subscribe to Newsletter :</span>
                <div className="relative flex items-center max-w-md w-full sm:w-[380px] bg-white rounded-sm p-1 pl-4">
                  <input 
                    type="email" 
                    placeholder="Enter Your E-Mail id" 
                    className="w-full bg-transparent text-black outline-none placeholder:text-gray-400 font-medium px-2 py-2"
                  />
                  <Button text="Subscribe" className="rounded-sm" />
                  
                </div>
              </div>

           </div>
        </div>
      </div>
      {/* Bottom Section - Copyright */}
      <div className="w-full bg-white flex justify-center items-center py-5">
        <p className="text-black footer-body font-medium text-center">
          © 2026 ATQ Germany
        </p>
      </div>
    </footer>
  );
}
