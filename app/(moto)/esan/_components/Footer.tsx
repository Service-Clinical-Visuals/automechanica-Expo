"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaInstagram, FaThreads } from "react-icons/fa6";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-auto bg-[#212529]">
      {/* Top Section */}
      <div className="w-full pt-16 pb-12 min-[2100px]:pt-24 min-[3800px]:pt-32">
        <div className="custom-container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[3fr_1.5fr_1.5fr_2fr_1.5fr] gap-10 xl:gap-8 min-[2100px]:gap-12 min-[3800px]:gap-16">

          {/* Column 1: Logo & Welcome */}
          <div className="col-span-2 xl:col-span-1 flex flex-col gap-6 xl:border-r border-white/20 xl:pr-8" data-aos="fade-up">
            <img
              src="/esan/logo1.png"
              alt="Esan Aku"
              className="w-[140px] min-[2100px]:w-[180px] min-[3800px]:w-[240px] object-contain"
            />
            <Typography variant="p" color="white" className="footer-body leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Esan Akü is a producer of automotive and industrial batteries, delivering reliable energy solutions for a wide range of applications. The company focuses on quality manufacturing, durability, and consistent performance to meet modern power demands.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="h4" color="white" className="footer-heading font-medium">Quick Links</Typography>
            <div className="flex flex-col gap-4">
              <a href="#home" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Home</Typography></a>
              <a href="#about" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">About Us</Typography></a>
              <a href="#products" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Products</Typography></a>
              <a href="#news" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">News</Typography></a>
              <a href="#gallery" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Gallery</Typography></a>
              <a href="#contact" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Contact Us</Typography></a>
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="col-span-1 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h4" color="white" className="footer-heading font-medium">Products</Typography>
            <div className="flex flex-col gap-4">
              <a href="#products" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">AGM Battery</Typography></a>
              <a href="#products" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Marine Battery</Typography></a>
              <a href="#products" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Car Battery</Typography></a>
              <a href="#products" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Industrial Battery</Typography></a>
              <a href="#products" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Van Battery</Typography></a>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-1 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h4" color="white" className="footer-heading font-medium">Contact</Typography>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                <Typography variant="p" color="white" className="footer-body leading-relaxed">
                  Dilovası OSB 4. Kısım D 4011 Sok. No: 7<br />
                  Gebze 41455 Kocaeli - Turkiye
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0" strokeWidth={1.5} />
                <Typography variant="p" color="white" className="footer-body">
                  +90 262 502 17 40
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0" strokeWidth={1.5} />
                <Typography variant="p" color="white" className="footer-body">
                  esan@esanaku.com
                </Typography>
              </div>
            </div>
          </div>

          {/* Column 5: Social */}
          <div className="col-span-1 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="h4" color="white" className="footer-heading font-medium">Follow Us On</Typography>
            <div className="flex items-center gap-5">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaThreads className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaXTwitter className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaLinkedin className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaInstagram className="w-5 h-5 min-[3800px]:w-8 min-[3800px]:h-8" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full border-t border-white/20 py-6 min-[3800px]:py-10">
        <div className="custom-container flex flex-col items-center justify-center gap-4">
          <Typography variant="p" color="white" className="footer-body text-center">
            © Copyright 2021. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
