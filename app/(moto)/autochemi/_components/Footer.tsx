"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Facebook, Youtube, ArrowRight } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F3F3F3] pt-16 lg:pt-24 pb-8 border-t border-gray-200">
      <div className="custom-container flex flex-col gap-12 lg:gap-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-12 gap-10 xl:gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6 xl:col-span-3" data-aos="fade-up" data-aos-delay="100">
             <Link href="#" className="w-full">
               <img src="/moto/autochemi/logo.png" alt="AutoChemie Logo" className="w-[60%] sm:w-[50%] md:w-[60%] h-auto object-contain object-left" />
             </Link>
             <Typography variant="p" color="muted" className="footer-body mt-2 leading-relaxed max-w-[90%] font-medium">
               Trusted worldwide for premium lubricants that deliver superior protection, efficiency, and consistent performance.
             </Typography>
             <div className="flex gap-3 items-center mt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
                  <Linkedin className="w-5 h-5 fill-current" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
                  <Facebook className="w-5 h-5 fill-current" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
                  <Youtube className="w-5 h-5 fill-current" />
                </a>
             </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 xl:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h4" color="dark" className="footer-heading">
              Quick Links
            </Typography>
            <div className="w-full h-px bg-gray-300 -mt-2 mb-2"></div>
            <ul className="flex flex-col gap-4">
              {['Home', 'Company', 'Products', 'Private label', 'Our Projects'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors group">
                    <Typography variant="span" color="muted" className="footer-body group-hover:text-primary font-medium">
                      {item}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products & Info */}
          <div className="flex flex-col gap-6 xl:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h4" color="dark" className="footer-heading">
              Products
            </Typography>
            <div className="w-full h-px bg-gray-300 -mt-2 mb-2"></div>
            <div className="grid grid-cols-2 gap-4">
              <ul className="flex flex-col gap-4">
                {['Motor oils', 'Transmission oils', 'Antifreezes & Coolants', 'Brake fluids', 'Screenwashes'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-primary transition-colors group">
                      <Typography variant="span" color="muted" className="footer-body group-hover:text-primary font-medium">
                        {item}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-4">
                {['FAQ', 'Private label', 'Innovations'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-primary transition-colors group">
                      <Typography variant="span" color="muted" className="footer-body group-hover:text-primary font-medium">
                        {item}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-6 xl:col-span-2" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="h4" color="dark" className="footer-heading">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-5 mt-2">
              <li>
                <a href="tel:+493494621470" className="flex items-start gap-3 hover:text-primary transition-colors group">
                  <Phone className="w-5 h-5 text-primary shrink-0" strokeWidth={2} />
                  <Typography variant="span" color="muted" className="footer-body group-hover:text-primary font-medium">
                    +49 (3494) 62147-0
                  </Typography>
                </a>
              </li>
              <li>
                <a href="mailto:relations@autocb.de" className="flex items-start gap-3 hover:text-primary transition-colors group">
                  <Mail className="w-5 h-5 text-primary shrink-0" strokeWidth={2} />
                  <Typography variant="span" color="muted" className="footer-body group-hover:text-primary font-medium">
                    relations@autocb.de
                  </Typography>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" strokeWidth={2} />
                  <Typography variant="span" color="muted" className="footer-body font-medium leading-relaxed">
                    AUTOCHEMIE BITTERFELD GMBH<br/>
                    Guardianstraße 16<br/>
                    06766 Bitterfeld-Wolfen OT<br/>
                    Thalheim Deutschland
                  </Typography>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe */}
          <div className="flex flex-col gap-6 xl:col-span-3" data-aos="fade-up" data-aos-delay="500">
            <Typography variant="h4" color="dark" className="footer-heading">
              Subscribe For More Information
            </Typography>
            <Typography variant="p" color="muted" className="footer-body font-medium leading-relaxed mt-2">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from AutoChemie Bitterfeld GmbH
            </Typography>
            <form className="mt-2 w-full flex border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
              <input 
                type="email" 
                placeholder="Email Address..." 
                className="w-full px-4 py-3 outline-none text-[#131312] footer-body"
                required
              />
              <button 
                type="submit" 
                className="bg-primary px-4 py-3 flex items-center justify-center text-white hover:bg-opacity-90 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-gray-300 flex flex-col items-center justify-center text-center">
          <Typography variant="p" color="muted" className="footer-body font-medium">
            AutoChemie Bitterfeld GmbH © 2013 - 2026
          </Typography>
        </div>
        
      </div>
    </footer>
  );
}
