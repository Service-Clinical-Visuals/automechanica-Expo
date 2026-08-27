"use client";

import React from "react";
import { Search, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-8">
      {/* Top Section */}
      <div className="w-full bg-[#F6F6F6] pt-16 pb-16">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-6">
          
          {/* Column 1: Logo & Description (Span 4) */}
          <div className="xl:col-span-4 flex flex-col gap-6" data-aos="fade-up">
            <img src="/moto/lpr-srl/logo.png" alt="LPR Logo" className="w-[120px] min-[2100px]:w-[180px] min-[3800px]:w-[300px] object-contain" />
            <p className="footer-body text-gray-600 leading-relaxed max-w-[90%]">
              Precision-engineered automotive components manufacturer specializing in advanced casting, machining, and innovative solutions for OEM, OES, and aftermarket markets worldwide.
            </p>
          </div>

          {/* Column 2: Links (Span 2) */}
          <div className="xl:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <h4 className="footer-heading text-foreground font-bold">Links</h4>
            <div className="flex flex-col gap-4">
              {['Home', 'Company', 'Products', 'Catalogues', 'Communication', 'Careers', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="footer-body text-gray-600 hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact (Span 3) */}
          <div className="xl:col-span-3 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading text-foreground font-bold">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#71BA86] shrink-0 mt-0.5" />
                <span className="footer-body text-gray-600">+39.0523.780511</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#71BA86] shrink-0 mt-0.5" />
                <span className="footer-body text-gray-600">info@lpr.it</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#71BA86] shrink-0 mt-0.5" />
                <span className="footer-body text-gray-600">
                  Strada Rivasso, 37<br />
                  Agazzano, 29010<br />
                  Piacenza (Italia)
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Subscribe (Span 3) */}
          <div className="xl:col-span-3 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading text-foreground font-bold">Subscribe for more information</h4>
            <p className="footer-body text-gray-600 leading-relaxed">
              Stay updated with LPR's latest products, news, and innovations.
            </p>
            
            {/* Visual Input Field */}
            <div className="relative w-full mt-2">
              <input 
                type="text" 
                placeholder="Email Address..." 
                className="w-full bg-white border border-gray-200 text-gray-800 rounded-lg py-3.5 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-500 footer-body"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#71BA86] flex items-center justify-center cursor-pointer hover:bg-primary transition-colors shadow-sm">
                <Search className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full bg-white py-6">
        <div className="custom-container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 footer-body tracking-wide text-center md:text-left">
            © 2026 LPR S.r.l. All Rights Reserved.
          </p>
          <a href="#cookies" className="text-gray-500 hover:text-primary transition-colors footer-body tracking-wide text-center md:text-right">
            Cookies usage policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
