import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[#F8AC1A]">
    <line x1="4" y1="4" x2="20" y2="20"></line>
    <line x1="20" y1="4" x2="4" y2="20"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#131313] pt-16 md:pt-20 pb-8 border-t border-white/5">
      <div className="custom-container px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-10 xl:gap-12 pb-12">
          
          {/* Logo & Description */}
          <div className="flex flex-col gap-6 sm:col-span-2 xl:col-span-2">
            <Link href="#">
              <img 
                src="/moto/kalebalata/logo.png" 
                alt="Kale Balata Logo" 
                className="h-14 md:h-22 w-auto object-contain"
               
              />
            </Link>
            <p className="oswald-font text-white headr-text font-normal leading-relaxed tracking-wide mt-2 max-w-sm">
              Kale Balata delivers premium braking solutions with advanced technology, certified quality, and trusted engineering expertise.
            </p>
          </div>

          {/* Corporate */}
          <div className="flex flex-col gap-6">
            <h4 className="anton-font text-white  tracking-wide card-title1">Corporate</h4>
            <ul className="flex flex-col gap-4 oswald-font text-white header-link tracking-wide">
              <li><Link href="#" className="hover:text-[#F8AC1A] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#F8AC1A] transition-colors">Our Board Of Directors</Link></li>
              <li><Link href="#" className="hover:text-[#F8AC1A] transition-colors">Message From The Chairman</Link></li>
              <li><Link href="#" className="hover:text-[#F8AC1A] transition-colors">Our Group Companies</Link></li>
              <li><Link href="#" className="hover:text-[#F8AC1A] transition-colors">Our Quality</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-6">
            <h4 className="anton-font text-white tracking-wide card-title1">Products</h4>
      <ul className="flex flex-col gap-4 oswald-font text-white header-link tracking-wide">           
              <li><Link href="#" className="hover:text-[#F8AC1A] transition-colors">Disc Brake Pads</Link></li>
              <li><Link href="#" className="hover:text-[#F8AC1A] transition-colors">Brake Linings</Link></li>
              <li><Link href="#" className="hover:text-[#F8AC1A] transition-colors">Brake Shoe With Linings</Link></li>
              <li><Link href="#" className="hover:text-[#F8AC1A] transition-colors">Brake Discs</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-6">
            <h4 className="anton-font text-white tracking-wide card-title1">Contact Us</h4>
             <ul className="flex flex-col gap-4 oswald-font text-white header-link tracking-wide">
              <li className="flex items-start gap-3">
                <Phone className="text-[#F8AC1A] shrink-0 w-4 h-4 mt-0.5" />
                <a href="tel:+902627440386" className="hover:text-white transition-colors">+90 262 744 03 86</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#F8AC1A] shrink-0 w-4 h-4 mt-0.5" />
                <a href="mailto:Info@Kalebalata.Com" className="hover:text-white transition-colors">Info@Kalebalata.Com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#F8AC1A] shrink-0 w-4 h-4 mt-0.5" />
                <span className="leading-relaxed">
                  Cumhuriyet Mah. İstanbul Cad.<br/>No:3 41400 Gebze / Kocaeli - Türkiye
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col gap-6">
            <h4 className="anton-font text-white  tracking-wide whitespace-nowrap card-title1">Social Media Links</h4>
            <div className="flex items-center gap-2 xl:gap-3 flex-wrap">
              <a href="#" className="w-8 h-8 rounded-full bg-[#222] hover:bg-[#333] transition-colors flex items-center justify-center shrink-0">
                <Linkedin className="text-[#F8AC1A] w-4 h-4" strokeWidth={2.5} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#222] hover:bg-[#333] transition-colors flex items-center justify-center shrink-0">
                <Instagram className="text-[#F8AC1A] w-4 h-4" strokeWidth={2.5} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#222] hover:bg-[#333] transition-colors flex items-center justify-center shrink-0">
                <Facebook className="text-[#F8AC1A] w-4 h-4" strokeWidth={2.5} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#222] hover:bg-[#333] transition-colors flex items-center justify-center shrink-0">
                <Youtube className="text-[#F8AC1A] w-4 h-4" strokeWidth={2.5} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#222] hover:bg-[#333] transition-colors flex items-center justify-center shrink-0">
                <XIcon />
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-6 pb-2 flex items-center justify-center">
          <p className="oswald-font text-white header-link tracking-wide text-center">
            Copyright© 2026 Kale Balata. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
