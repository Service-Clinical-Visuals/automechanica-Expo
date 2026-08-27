"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="w-full bg-primary pt-16 lg:pt-20 pb-6 text-white ">
      <div className="custom-container">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">

          {/* Col 1: About */}
          <div className="flex flex-col gap-6" data-aos="fade-up">
            <Link href="/" className="inline-block mb-2">
              <img src="/moto/eurogielle/logo.png" alt="Eurogielle Logo" className="h-auto w-[70%]  object-contain" />
            </Link>
            <span className="footer-body leading-relaxed max-w-[90%] ">
              Eurogielle is an Italian family-run company specializing in cabin air filters, delivering excellence through continuous innovation.
            </span>
            <div className="mt-2">
              <span className="footer-heading block mb-4">Follow Us</span>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors shadow-sm">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors shadow-sm">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors shadow-sm">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <span className="footer-heading pb-4 border-b border-white/40 inline-block w-full">Quick Links</span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {['Home', 'Why Choose Us', 'About us', 'Quality', 'Catalogue', 'Genius Partner', 'Technologies', 'News & Events', 'Cabin Filters', 'Contact Us'].map((link) => (
                <Link key={link} href="#" className="footer-body  hover:opacity-100 hover:text-secondary transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Contact Us */}
          <div className="flex flex-col lg:items-center gap-6" data-aos="fade-up" data-aos-delay="200">
            <span className="footer-heading lg:pl-[24%] pb-4 border-b border-transparent inline-block w-full">Contact Us</span>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="footer-body ">+39 0426 902303</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="footer-body  leading-relaxed">
                  Operational Headquarters<br />
                  Località Smergoncino, 11<br />
                  45011 Adria (RO)<br />
                  Italy
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Subscribe */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <span className="footer-heading">Subscribe For More Information</span>
            <span className="footer-body  leading-relaxed">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from Eurogielle s.r.l.
            </span>
            <form className="flex w-full relative mt-2 group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full bg-white text-gray-800 rounded-lg px-4 py-3 pr-14 outline-none focus:ring-2 focus:ring-secondary footer-body transition-shadow"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-12 bg-primary rounded-md flex items-center justify-center text-white hover:bg-secondary transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="w-full flex justify-center items-center pt-8 border-t border-white/40">
          <span className="footer-body text-center  text-sm">
            Copyright &copy; 2026 Eurogielle s.r.l. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
