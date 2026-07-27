"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Linkedin, Twitter, Instagram, Youtube, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary pt-16 border-t border-white/10 relative overflow-hidden">
      
      {/* Main Footer Content */}
      <div className="custom-container relative z-10 pb-16">
        <div className="flex flex-col min-[1440px]:flex-row gap-12 min-[1440px]:gap-8 justify-between">
          
          {/* Col 1: Logo & Socials */}
          <div className="flex flex-col gap-6 w-full min-[1440px]:w-1/4 min-[1440px]:pr-8">
            <Link href="/" className="inline-block max-w-[180px] min-[2100px]:max-w-[240px] min-[3800px]:max-w-[320px]">
              <img
                src="/moto/confinas/logo.png"
                alt="FULBAT Logo"
                className="w-full h-auto object-contain"
              />
            </Link>
            <Typography variant="span" className="footer-body text-white">
              Driven by innovation and certified quality, FULBAT designs and manufactures reliable battery solutions that power vehicles, equipment, and industries with confidence.
            </Typography>
            <div className="flex items-center gap-5 mt-2">
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              {/* X icon is usually rendered differently, using Twitter for now */}
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Col 2 & 3 wrapper for better mobile layout */}
          <div className="flex flex-col sm:flex-row gap-12 min-[1440px]:gap-16 w-full min-[1440px]:w-1/3">
            
            {/* Col 2: Quick Links */}
            <div className="flex flex-col gap-6 flex-1">
              <Typography variant="h4" color="white" className="footer-heading">
                Quick Links
              </Typography>
              <ul className="flex flex-col gap-4">
                {["Home", "About Us", "Products", "News"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="footer-body text-white hover:text-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact Us */}
            <div className="flex flex-col gap-6 flex-1">
              <Typography variant="h4" color="white" className="footer-heading">
                Contact Us
              </Typography>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-white shrink-0" />
                  <Typography variant="span" className="footer-body text-white">
                    +49 (0) 173 581 6688
                  </Typography>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white shrink-0" />
                  <Typography variant="span" className="footer-body text-white">
                    6950 Bryan Dairy Road,<br />
                    Suite A Largo, Florida<br />
                    33777, USA
                  </Typography>
                </div>
              </div>
            </div>

          </div>

          {/* Vertical Divider (Hidden on Mobile) */}
          <div className="hidden min-[1440px]:block w-px bg-white/20 ml-4 mr-4 min-[1440px]:ml-8 min-[1440px]:mr-8 shrink-0"></div>

          {/* Col 4: Newsletter */}
          <div className="flex flex-col gap-6 w-full min-[1440px]:w-[28%] shrink-0 pt-8 min-[1440px]:pt-0 border-t border-white/20 min-[1440px]:border-t-0">
             <Typography variant="h4" color="white" className="footer-heading">
               Subscribe to Newsletter :
             </Typography>
             <Typography variant="span" className="footer-body text-white">
               Be the first to know about new collections and exclusive offers.
             </Typography>
             
             <form className="mt-2 w-full flex flex-row gap-0 overflow-hidden bg-white shadow-sm h-12">
               <input 
                 type="email" 
                 placeholder="Enter Your E-Mail id" 
                 className="flex-1 bg-transparent px-3 py-3 text-dark font-lato outline-none min-w-0 text-sm"
                 required
               />
               <button 
                 type="submit" 
                 className="bg-primary text-white font-sora font-semibold px-4 py-3 hover:bg-primary-hover transition-colors whitespace-nowrap text-sm"
               >
                 Subscribe
               </button>
             </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-white py-4 mt-4">
        <div className="custom-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <Typography variant="span" className="footer-body text-dark">
            2026 COFINAS Sas All rights reserved
          </Typography>
          <div className="flex items-center gap-6">
            <Link href="#" className="footer-body text-dark hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="footer-body text-dark hover:text-primary transition-colors">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
