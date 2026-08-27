"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#D7D7D7]">
      <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Logo & Description */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <img src="/moto/brain-srl/logo.png" alt="Brain Logo" className="w-48 object-contain" />
            <Typography variant="footer-body" color="dark" font="lato" className="text-gray-700 leading-relaxed lg:pr-8">
              We build and regenerate particulate filters for any engine with reductions of over 90%.
            </Typography>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="primary" font="bebas" className="uppercase tracking-wide">
              QUICK LINKS
            </Typography>
            <ul className="flex flex-col gap-4">
              {['Home', 'Who We are', 'Technology', 'News', 'Catalogs', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors block">
                    <Typography variant="footer-body" color="none" font="lato" className="text-gray-600 inline-block">
                      {link}
                    </Typography>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="primary" font="bebas" className="uppercase tracking-wide">
              CONTACT
            </Typography>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <Typography variant="footer-body" color="none" font="lato" className="text-gray-600">
                  (+39) 0422.493176
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <Typography variant="footer-body" color="none" font="lato" className="text-gray-600">
                  commerciale@brainkat.it
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 text-primary mt-1" />
                <Typography variant="footer-body" color="none" font="lato" className="text-gray-600 leading-relaxed">
                  Via Brigata Treviso, 6<br />
                  31030 Dosson di Casier<br />
                  Treviso - Italy
                </Typography>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="footer-heading" color="primary" font="bebas" className="uppercase tracking-wide">
              SUBSCRIBE TO NEWSLETTER
            </Typography>
            <form className="flex w-full h-12 shadow-sm">
              <input
                type="email"
                placeholder="Please Enter Your Email"
                className="flex-grow bg-primary text-white placeholder-gray-400 px-4 focus:outline-none text-sm font-['Lato']"
              />
              <button
                type="button"
                className="w-12 h-full bg-white text-primary flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-white py-4 border-t border-gray-200">
        <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto text-center">
          <Typography variant="footer-body" color="dark" font="bebas" className="text-gray-800 uppercase tracking-wider">
            COPYRIGHT © 2026 BRAIN CATALYSTS - ALL RIGHTS RESERVED
          </Typography>
        </div>
      </div>
    </footer>
  );
}
