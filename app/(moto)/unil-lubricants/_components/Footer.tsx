"use client";
import React from "react";
import Link from "next/link";
import { Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Footer (Dark) */}
      <div className="bg-[#111111] py-16 md:py-20 border-t border-gray-800">
        <div className="custom-container">
          <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-10 xl:gap-8">
            
            {/* Column 1: Brand & About */}
            <div className="col-span-2 md:col-span-6 xl:col-span-3 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
              <Link href="#" className="flex-shrink-0">
                <img 
                  src="/moto/unil-lubricants/logo.png" 
                  alt="Unil Lubricants" 
                  className="h-16 w-auto object-contain"
                 
                />
                <span className="hidden oswald-font font-bold text-2xl text-white">
                  UNIL LUBRICANTS
                </span>
              </Link>
             <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
                With more than a century of expertise, UNIL Lubricants develops high-quality lubrication solutions for automotive, industrial, and commercial applications. Driven by innovation, advanced technology, and rigorous quality standards, the company delivers reliable products that enhance performance and protect equipment in demanding environments.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-span-1 md:col-span-2 xl:col-span-2 xl:ml-12 flex flex-col gap-6 lg:pl-15" data-aos="fade-up" data-aos-delay="200">
              <h3 className="oswald-font font-medium text-white card-text">Quick Links</h3>
              <ul className="flex flex-col gap-4">
                {['Home', 'About Us', 'Products', 'Blogs'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="lato-font text-[#ffffff] section-text font-normal hover:text-[#ED3024] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="col-span-1 md:col-span-2 xl:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
              <h3 className="oswald-font font-medium text-white card-text">Contact Us</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-3">
                  <img src="/moto/unil-lubricants/phone.png" alt="phone" />
                  <span className="lato-font text-[#ffffff] section-text font-normal">+32 2 365 02 00</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/moto/unil-lubricants/fax.png" alt="fax" />
                  <span className="lato-font text-[#ffffff] section-text font-normal">
                    Bergensesteenweg 713<br/>1600 Sint-Pieters-Leeuw
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div className="col-span-2 md:col-span-2 xl:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="400">
              <h3 className="oswald-font font-medium text-white card-text">Social</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-[#0A2B52] transition-colors">
                  <Linkedin size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-[#0A2B52] transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-[#0A2B52] transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-[#0A2B52] transition-colors">
                  <Youtube size={20} />
                </Link>
              </div>
            </div>

            {/* Column 5: Newsletter */}
            <div className="col-span-2 md:col-span-6 xl:col-span-3 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="500">
              <h3 className="oswald-font font-medium text-white card-text">Subscribe to Newsletter :</h3>
              <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
                Stay informed with the latest product launches, industry news, technical updates, and innovations
              </p>
              
              <div className="bg-white rounded-md p-1.5 flex items-center w-full mt-2">
                <input 
                  type="email" 
                  placeholder="Enter Your E-Maild id" 
                  className="flex-grow px-3 text-sm text-gray-800 outline-none lato-font min-w-0 bg-transparent" 
                />
                <button className="flex-shrink-0 bg-[#0A2B52] hover:bg-[#071D3A] text-white section-text oswald-font font-semibold py-2.5 px-5 rounded transition-colors flex items-center gap-2">
                  Subscribe <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer (White) */}
      <div className="bg-white py-5">
        <div className="custom-container flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="lato-font text-[#000000] section-text font-normal leading-relaxed">
            Copyright © 2026 UNIL All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="#" className="lato-font text-[#000000] section-text font-normal leading-relaxed">
              Privacy Policy
            </Link>
            <Link href="#" className="lato-font text-[#000000] section-text font-normal leading-relaxed">
              Terms & Conditions
            </Link>
            <Link href="#" className="lato-font text-[#000000] section-text font-normal leading-relaxed">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
