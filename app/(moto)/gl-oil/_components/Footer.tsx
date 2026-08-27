"use client";

import React from "react";
import { Facebook, Youtube, Linkedin, Instagram } from "lucide-react";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-[var(--color-background)] pt-10 min-[2500px]:pt-14 min-[3800px]:pt-18 ">
      <div className="custom-container flex flex-col">

        {/* Top Section - Newsletter */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 pb-12 border-b border-white/50">
          <Typography variant="h2" color="white" weight="bold" className="font-primary min-[2500px]:text-4xl min-[3800px]:text-5xl leading-tight">
            Subscribe Our<br className="hidden xl:block" /> Newsletter
          </Typography>

          <div className="flex w-full xl:w-auto max-w-lg">
            <input
              type="text"
              placeholder="Subscribe to Our Newsletter"
              className="flex-1 bg-[#e5e5e5] text-white footer-body py-3 px-4 focus:outline-none placeholder:text-sm font-secondary placeholder:text-gray-500"
            />
            <button className="bg-primary hover:bg-primary-hover text-black footer-body font-bold py-3 px-8 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="py-12 border-b border-white/50 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8">

          {/* Column 1: Brand & Socials (Span 5) */}
          <div className="xl:col-span-5 flex flex-col gap-6 pr-0 xl:pr-12">
            <Typography variant="h2" color="white" weight="bold" className="font-primary text-3xl min-[2500px]:text-4xl min-[3800px]:text-5xl tracking-wide uppercase">
              GL OIL
            </Typography>
            <Typography variant="p" color="white" className="footer-body leading-relaxed font-secondary">
              Hello! I hope this message finds you well. I would like to request a catalog of your products and any additional services you offer. If you could send that my way, I would greatly appreciate it. Thank you!
            </Typography>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[#2a2a2a] hover:bg-primary flex justify-center items-center text-white  hover:text-black transition-colors duration-300">
                <Facebook className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-8 min-[3800px]:h-8" />
              </a>
              <a href="#" className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[#2a2a2a] hover:bg-primary flex justify-center items-center text-white   hover:text-black transition-colors duration-300">
                <Youtube className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-8 min-[3800px]:h-8" />
              </a>
              <a href="#" className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[#2a2a2a] hover:bg-primary flex justify-center items-center text-white    hover:text-black transition-colors duration-300">
                <Linkedin className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-8 min-[3800px]:h-8" />
              </a>
              <a href="#" className="w-10 h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[#2a2a2a] hover:bg-primary flex justify-center items-center text-white   hover:text-black transition-colors duration-300">
                <Instagram className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-8 min-[3800px]:h-8" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="xl:col-span-2 flex flex-col gap-6 xl:pl-4">
            <Typography variant="h4" color="white" className="footer-heading">Quick Links</Typography>
            <div className="flex flex-col gap-4">
              <a href="#" className="footer-body  hover:text-primary transition-colors font-secondary">Home</a>
              <a href="#" className="footer-body  hover:text-primary transition-colors font-secondary">Our Products</a>
              <a href="#" className="footer-body  hover:text-primary transition-colors font-secondary">Who We Are</a>
              <a href="#" className="footer-body  hover:text-primary transition-colors font-secondary">Certifications</a>
              <a href="#" className="footer-body  hover:text-primary transition-colors font-secondary">Blog</a>
            </div>
          </div>

          {/* Column 3: Support (Span 2) */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            <Typography variant="h4" color="white" className="footer-heading">Support</Typography>
            <div className="flex flex-col gap-4">
              <a href="#" className="footer-body  hover:text-primary transition-colors font-secondary font-normal">Contacts</a>
              <a href="#" className="footer-body  hover:text-primary transition-colors font-secondary font-normal">Work with us</a>
            </div>
          </div>

          {/* Column 4: Languages (Span 3) */}
          <div className="xl:col-span-3 flex flex-col gap-6">
            <Typography variant="h4" color="white" className="footer-heading">Languages</Typography>
            <div className="flex flex-col gap-4">
              <a href="#" className="footer-body  hover:text-primary transition-colors font-secondary font-normal">Italian</a>
              <a href="#" className="footer-body  hover:text-primary transition-colors font-secondary font-normal">English</a>
              <a href="#" className="footer-body  hover:text-primary transition-colors font-secondary font-normal">German</a>
              <a href="#" className="footer-body  hover:text-primary transition-colors font-secondary font-normal">French</a>
              <a href="#" className="footer-body  hover:text-primary transition-colors font-secondary font-normal">Spanish</a>
            </div>
          </div>

        </div>

        {/* Bottom Section - Copyright */}
        <div className="w-full py-8 flex justify-center items-center">
          <Typography variant="span" color="white" className="footer-body font-secondary font-normal text-center">
            © 2026 GL Oil. All rights reserved.
          </Typography>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
