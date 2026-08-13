"use client";

import React from "react";
import { Phone, Mail, MapPin, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-8 bg-secondary">
      {/* Top Section */}
      <div className="w-full text-white pt-16 pb-16">
        <div className="custom-container grid grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-12 min-[3800px]:gap-24">

          {/* Column 1: Logo & Welcome */}
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1 xl:col-span-4 pr-0 xl:pr-8 min-[3800px]:pr-16">
            <img src="/moto/donmez/logo.png" alt="Donmez Logo" className="w-[60%] xl:w-[45%] object-contain" data-aos="fade-up" />
            <Typography variant="p" color="white" className="leading-relaxed text-sm xl:text-base text-gray-300" data-aos="fade-up" data-aos-delay="100">
              Dönmez Debriyaj is a trusted manufacturer of high-quality clutch systems and turbo solutions for commercial vehicles, delivering precision-engineered products to customers in over 80 countries worldwide.
            </Typography>
            <div className="flex gap-6 mt-2" data-aos="fade-up" data-aos-delay="200">
              <a href="#" className="text-white hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 col-span-1 xl:col-span-2 xl:pl-4">
            <Typography variant="h4" color="white" className="font-semibold text-lg" data-aos="fade-up" data-aos-delay="100">Quick Links</Typography>
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
              <a href="#home" className="footer-body text-white hover:text-primary transition-colors">Home</a>
              <a href="#about" className="footer-body text-white hover:text-primary transition-colors">About Us</a>
              <a href="#products" className="footer-body text-white hover:text-primary transition-colors">Products</a>
              <a href="#news" className="footer-body text-white hover:text-primary transition-colors">Blogs</a>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col gap-6 col-span-1 xl:col-span-3">
            <Typography variant="h4" color="white" className="font-semibold text-lg" data-aos="fade-up" data-aos-delay="200">Contact Us</Typography>
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
              <div className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0 mt-0.5" />
                <Typography variant="span" color="white" className="footer-body text-gray-300">
                  +90 232 376 87 66
                </Typography>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                <Typography variant="span" color="white" className="footer-body text-gray-300">
                  info@donmezdebriyaj.com.tr
                </Typography>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <Typography variant="span" color="white" className="footer-body leading-relaxed text-gray-300">
                  Kemalpaşa/İzmir,<br />
                  Halilbeyli OSB Mah. Ege Cad.<br />
                  No:6 Bağyurdu Organized<br />
                  Industrial Zone
                </Typography>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1 xl:col-span-3">
            <Typography variant="h4" color="white" className="font-semibold" data-aos="fade-up" data-aos-delay="300">Subscribe to Newsletter :</Typography>
            <Typography variant="p" color="white" className="leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </Typography>

            {/* Visual Input Field */}
            <div className="relative w-full mt-2 bg-white rounded-xl p-1.5 flex items-center" data-aos="fade-up" data-aos-delay="500">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="w-full bg-transparent text-gray-800 rounded-md py-2 pl-4 pr-2 focus:outline-none placeholder:text-gray-400 placeholder:text-sm font-medium"
              />
              <div className="shrink-0">
                <Button text="Subscribe" variant="primary" showIcon={false} className="py-2 px-6 rounded-lg text-sm" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full py-6 border-t border-white/40">
        <div className="custom-container flex flex-col md:flex-row justify-between items-center gap-4">
          <Typography variant="span" color="white" className="">
            © 2026 Dönmez Debriyaj All rights reserved.
          </Typography>
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white hover:text-white transition-colors text-sm">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
