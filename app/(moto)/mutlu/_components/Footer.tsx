"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Phone, MapPin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-primary pt-16 lg:pt-20 pb-8 border-t border-white/10">
      <div className="custom-container flex flex-col gap-12 lg:gap-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-white/20 pb-12 lg:pb-16">
          
          <div className="flex flex-col gap-6 lg:col-span-4 lg:pr-8" data-aos="fade-up" data-aos-delay="100">
             <Link href="#" className="w-full flex justify-start">
               <img src="/moto/mutlu/logo.png" alt="Mutlu Logo" className="w-[70%] sm:w-[60%] md:w-[70%] lg:w-[65%] h-auto object-contain object-left brightness-0 invert" />
             </Link>
             <p className="footer-body text-white mt-2 leading-relaxed opacity-95">
               Mutlu Akü ve Malzemeleri San. A.Ş. has been powering vehicles since 1945 with reliable, high-performance battery solutions engineered for durability, innovation, and trusted OEM quality worldwide.
             </p>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-4" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h3" color="white" className="footer-heading">
              Institutional
            </Typography>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              <ul className="flex flex-col gap-4">
                {['About Us', 'R&D Center & Investments', 'History', 'Vision And Mission', 'Our Brands'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:opacity-80 transition-opacity group">
                      <p className="footer-body text-white">
                        {item}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-4">
                {['Human Resources', 'Our policies', 'Export', 'Social Responsibility Projects', 'Media'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:opacity-80 transition-opacity group">
                      <p className="footer-body text-white">
                        {item}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h3" color="white" className="footer-heading">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-6">
              <li>
                <a href="tel:02165816200" className="flex items-start gap-3 hover:opacity-80 transition-opacity group">
                  <Phone className="w-5 h-5 text-white shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="footer-body text-white">
                    0216 581 62 00
                  </p>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-white shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="footer-body text-white leading-relaxed">
                    Tepeören Neighborhood, Eski Ankara Asfaltı Street, No: 210, Postal Code: 34959, Tuzla - Istanbul
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2" data-aos="fade-up" data-aos-delay="400">
            <Typography variant="h3" color="white" className="footer-heading text-left w-full">
              Social Media Links
            </Typography>
            <div className="flex gap-3 w-full justify-start">
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5 text-primary" strokeWidth={2} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 text-primary" strokeWidth={2} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5 text-primary" strokeWidth={2} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                <Youtube className="w-5 h-5 text-primary" strokeWidth={2} />
              </Link>
            </div>
          </div>

        </div>

        <div className="w-full flex flex-col items-center justify-center text-center">
          <p className="footer-body text-white opacity-90">
            © 2026 Mutlu Battery | All Rights Reserved. Terms of Use and Privacy Policy
          </p>
        </div>
        
      </div>
    </footer>
  );
}
