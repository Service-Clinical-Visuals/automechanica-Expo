"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-auto bg-[#39383B]">
      {/* Top Section */}
      <div className="w-full pt-16 pb-12 min-[2100px]:pt-24 min-[3800px]:pt-25">
        <div className="custom-container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[4fr_1.5fr_1.5fr_2fr_3fr] gap-10 xl:gap-6 min-[2100px]:gap-12 min-[3800px]:gap-16">

          {/* Column 1: Logo & Welcome */}
          <div className="col-span-2 xl:col-span-1 flex flex-col gap-6" data-aos="fade-up">
            <img
              src="/moto/auto-gh/logo1.png"
              alt="Auto GH"
              className="w-[120px] min-[2100px]:w-[160px] min-[3800px]:w-[200px] object-contain brightness-0 invert"
            />
            <Typography variant="p" color="white" className="footer-body leading-relaxed xl:max-w-[95%] xl:pr-4" data-aos="fade-up" data-aos-delay="100">
              GH Parts is a supplier of spare parts for passenger cars and light commercial vehicles, focused on reliable quality, wide product availability, and fast delivery. The company supports aftermarket partners with efficient solutions for everyday automotive needs.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="h4" color="white" className="footer-heading">Quick Links</Typography>
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
          <div className="col-span-1 flex flex-col gap-6 xl:items-start" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h4" color="white" className="footer-heading">Products</Typography>
            <div className="flex flex-col gap-4">
              <a href="#products" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Brake Pads</Typography></a>
              <a href="#products" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Axle Beam</Typography></a>
              <a href="#products" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Ball Joint</Typography></a>
              <a href="#products" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Bolt</Typography></a>
              <a href="#products" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">Bracket</Typography></a>
              <a href="#products" className="hover:text-primary transition-colors"><Typography variant="span" color="white" className="footer-body">circlip</Typography></a>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-1 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h4" color="white" className="footer-heading">Contact</Typography>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-white shrink-0 mt-0.5" />
                <Typography variant="p" color="white" className="footer-body leading-relaxed">
                  Centrala Lublin, Polska<br />
                  Kazimierzówka 160<br />
                  21-040 Świdnik
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-white shrink-0" />
                <Typography variant="p" color="white" className="footer-body">
                  +48 81 745 88 26
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10  text-white shrink-0" />
                <Typography variant="p" color="white" className="footer-body">
                  info@gh-parts.eu
                </Typography>
              </div>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="col-span-1 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="h4" color="white" className="footer-heading leading-tight">Do you want to receive information about news? Subscribe to newsletter!</Typography>
            <div className="self-start">
              <Button text="Subscribe to newsletter" variant="secondary" showIcon={false} className="button hover:text-secondary transition-colors duration-300" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full border-t border-white/20 py-6">
        <div className="custom-container flex flex-col items-center justify-center gap-4">
          <Typography variant="p" color="white" className="footer-body text-center">
            copyright © 2023 GH-PARTS.EU
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
