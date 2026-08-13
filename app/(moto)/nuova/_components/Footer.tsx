"use client";

import React from "react";
import { Search, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-[#272727] text-white mt-12">
      <div className="custom-container pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8">

        {/* Column 1: Logo & Text (Span 4) */}
        <div className="col-span-1 md:col-span-2 xl:col-span-4 flex flex-col gap-6 xl:pr-8">
          <img src="/moto/nuova/logo.png" alt="Nuova Tecnodelta" className="w-[60%] sm:w-[40%] xl:w-[60%] object-contain" />
          <p className="footer-body text-white leading-relaxed max-w-full">
            Nuova Tecnodelta is a trusted Italian manufacturer of high-quality automotive components, delivering reliable, innovative, and precision-engineered solutions for OEM and aftermarket markets.
          </p>
        </div>

        {/* Column 2: Links (Span 2) */}
        <div className="col-span-1 xl:col-start-6 xl:col-span-2 flex flex-col gap-6">
          <h4 className="footer-heading text-white">Links</h4>
          <div className="flex flex-col gap-3">
            <a href="#home" className="footer-body text-white hover:text-white transition-colors">Home</a>
            <a href="#about" className="footer-body text-white hover:text-white transition-colors">Company</a>
            <a href="#activities" className="footer-body text-white hover:text-white transition-colors">Activities</a>
            <a href="#csr" className="footer-body text-white hover:text-white transition-colors">CSR</a>
            <a href="#media" className="footer-body text-white hover:text-white transition-colors">Media</a>
            <a href="#catalogues" className="footer-body text-white hover:text-white transition-colors">Catalogues</a>
            <a href="#careers" className="footer-body text-white hover:text-white transition-colors">Work with us</a>
            <a href="#contact" className="footer-body text-white hover:text-white transition-colors">Contacts</a>
          </div>
        </div>

        {/* Column 3: Contact (Span 2) */}
        <div className="col-span-1 xl:col-start-8 xl:col-span-2 flex flex-col gap-6">
          <h4 className="footer-heading text-white">Contact</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 min-[3800px]:w-16 min-[3800px]:h-16 text-primary shrink-0 mt-0.5" />
              <span className="footer-body text-white whitespace-nowrap">+39 0141 668111</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 min-[3800px]:w-16 min-[3800px]:h-16 text-primary shrink-0 mt-0.5" />
              <a href="mailto:nuovatecnodeltaspa@pec.it" className="footer-body text-white hover:text-white transition-colors">
                nuovatecnodeltaspa@pec.it
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 min-[3800px]:w-16 min-[3800px]:h-16 text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 whitespace-nowrap">
                <span className="footer-body text-white">Fraz. Pocola, 62</span>
                <span className="footer-body text-white">14016 Tigliole (AT)</span>
                <span className="footer-body text-white">Italy</span>
                <span className="footer-body text-white mt-2">VAT number: 00808310056</span>
                <span className="footer-body text-white">Fiscal code:</span>
                <span className="footer-body text-white">AT02324240015</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Newsletter (Span 3) */}
        <div className="col-span-1 xl:col-start-10 xl:col-span-3 flex flex-col gap-6 xl:pl-4">
          <h4 className="footer-heading text-white">Subscribe for more information</h4>
          <p className="footer-body text-white leading-relaxed">
            Stay updated with Nuova Tecnodelta latest products,news, and innovations.
          </p>

          {/* Visual Input Field */}
          <div className="relative w-full mt-2 bg-white rounded flex items-center h-[46px] p-1">
            <input
              type="email"
              placeholder="Email Address..."
              className="flex-1 w-full min-w-0 bg-transparent text-gray-800 px-3 focus:outline-none placeholder:text-gray-500 font-sans footer-body"
            />
            <button className="w-9 h-9 bg-primary hover:opacity-80 flex items-center justify-center rounded-full transition-opacity shrink-0">
              <Search className="w-4 h-4 min-[3800px]:w-12 min-[3800px]:h-12 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full">
        <div className="custom-container border-t border-white/40 grid grid-cols-1 md:grid-cols-3 items-center py-6 gap-4">
          <div className="hidden md:block"></div> {/* Spacer for center alignment */}
          <p className="footer-body text-white tracking-wide text-center">
            © 2026 Nuova Tecnodelta All Rights Reserved.
          </p>
          <div className="flex items-center justify-center md:justify-end gap-6">
            <a href="#" className="footer-body text-white hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="footer-body text-white hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
