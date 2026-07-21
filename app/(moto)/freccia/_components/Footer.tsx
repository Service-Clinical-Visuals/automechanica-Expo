"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="w-full bg-[#262626] text-white pt-16 pb-8 ">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8 mb-16">
          
          {/* Column 1: Logo & Desc */}
          <div className="flex flex-col gap-6 xl:col-span-3" data-aos="fade-up">
            <img src="/moto/freccia/logo.png" alt="Freccia Logo" className="h-10 w-auto object-contain brightness-0 invert self-start" />
            <p className="footer-body text-white">
              Freccia International is an Italian automotive manufacturer focused on valve train technology, producing OEM-quality components known for reliability, precision, and performance worldwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 xl:col-span-2" data-aos="fade-up" data-aos-delay="100">
            <h4 className="footer-heading text-white border-b border-primary/80 pb-2 w-max">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {["Home", "About Us", "Products", "News", "Gallery", "Contact Us"].map((link) => (
                <Link key={link} href={`#${link.toLowerCase().replace(' ', '')}`} className="footer-body text-white hover:text-primary transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-6 xl:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading text-white border-b border-primary/80 pb-2 w-max">Products</h4>
            <div className="flex flex-col gap-4">
              {["Camshaft", "Cylinder head", "Valves", "Tappets"].map((product) => (
                <Link key={product} href="#products" className="footer-body text-white hover:text-primary transition-colors">
                  {product}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-6 xl:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading text-white border-b border-primary/80 pb-2 w-max">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                <span className="footer-body text-white">
                  Freccia International,<br />
                  San Vittore Olona (MI)<br />
                  Italy
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="footer-body text-white">+39 0331 515317</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="footer-body text-white">info@freccia.com</span>
              </div>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="flex flex-col gap-6 xl:col-span-3" data-aos="fade-up" data-aos-delay="400">
            <h4 className="footer-heading text-white border-b border-primary/80 pb-2 w-max">Stay Updated</h4>
            <div className="flex flex-col xl:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent placeholder-white border border-gray-600 rounded-md px-4 py-2.5 footer-body text-white w-full focus:outline-none focus:border-primary transition-colors"
              />
              <Button text="Subscribe" showIcon={true} className="py-2.5 whitespace-nowrap !rounded-md" />
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="footer-body text-white text-sm">
            2026 Freccia International. All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((link) => (
              <Link key={link} href="#" className="footer-body text-white text-sm hover:text-white transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
