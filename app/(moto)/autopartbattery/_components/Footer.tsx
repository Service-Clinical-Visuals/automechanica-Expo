"use client";
import React from "react";
import Link from "next/link";
import { Phone, Mail, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#15468e] text-white overflow-hidden pt-12 md:pt-16 border-t border-white/10" data-aos="fade-up" data-aos-delay="200">
      <div className="custom-container pb-12 md:pb-16">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 text-left">
          
          {/* Column 1: Logo & Company Overview */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-start">
            <Link href="#" className="flex-shrink-0 mb-6 inline-block">
              <img 
                src="/moto/autopartbattery/logo.png" 
                alt="AutoPart BATTERY Logo" 
                className="h-12 md:h-14 w-auto object-contain" 
                              />
             
            </Link>

            <p className="lato-font text-white section-text leading-relaxed pr-2">
              AUTOPART is a leading Polish manufacturer of premium starter batteries, delivering reliable, high-performance energy solutions for automotive, commercial, agricultural, and marine applications since 1982.
            </p>
          </div>

          {/* Quick Links & Contact Us Wrapper (2 columns on mobile side-by-side) */}
          <div className="grid grid-cols-2 gap-0 sm:gap-0 lg:gap-8 lg:col-span-4 xl:col-span-4 w-full">
            {/* Column 2: Quick Links */}
            <div className="flex flex-col lg:pl-12 xl:pl-16">
              <h3 className="oswald-font card-title1 font-medium text-white mb-6 tracking-wide">
                Quick Links
              </h3>
              
              <ul className="flex flex-col gap-3.5 lato-font text-white section-text font-normal">
                <li>
                  <Link href="#" className="hover:text-white hover:underline transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:underline transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:underline transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:underline transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="flex flex-col">
              <h3 className="oswald-font card-title1 font-medium text-white mb-6 tracking-wide">
                Contact Us
              </h3>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="tel:+48175845730" 
                  className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white transition-colors group"
                >
                  <img src="/moto/autopartbattery/phone.png" alt="Contact" className="w-5 h-5 flex-shrink-0" />
                  <span className="lato-font section-text font-normal break-all sm:break-normal">+48 17 584 57 30</span>
                </a>

                <a 
                  href="mailto:autopart@autopart.pl" 
                  className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white transition-colors group"
                >
                  <img src="/moto/autopartbattery/mail.png" alt="Contact" className="w-5 h-5 flex-shrink-0" />
                  <span className="lato-font section-text font-normal break-all sm:break-normal">autopart@autopart.pl</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Social */}
          <div className="lg:col-span-2 xl:col-span-2 flex flex-col">
            <h3 className="oswald-font card-title1 font-medium text-white mb-6 tracking-wide">
              Social
            </h3>
            
            <div className="flex items-center gap-3 text-white">
              <a 
                href="#" 
                className="p-1.5 rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <img src="/moto/autopartbattery/f3.png" alt="Contact" className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-1.5 rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
                aria-label="Twitter / X"
              >
                <img src="/moto/autopartbattery/f4.png" alt="Contact" className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-1.5 rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <img src="/moto/autopartbattery/f5.png" alt="Contact" className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-1.5 rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <img src="/moto/autopartbattery/f6.png" alt="Contact" className="w-6 h-5" />
              </a>
            </div>
          </div>

          {/* Column 5: Subscribe to Newsletter */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
            <h3 className="oswald-font card-title1 font-medium text-white mb-6 tracking-wide">
              Subscribe to Newsletter :
            </h3>
            
            <p className="lato-font section-text font-normal text-white leading-relaxed mb-6">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="w-[90%] sm:w-[92%] max-w-sm mt-10">
              <div className="relative flex items-center w-full">
                <input 
                  type="email" 
                  placeholder="Enter Your E-Maild id" 
                  className="bg-white rounded-xl border border-white/20 outline-none text-[#333333] pl-5 pr-32 py-2.5 section-text w-full lato-font placeholder:text-gray-400 shadow-md focus:ring-2 focus:ring-white/50"
                  required
                />
                <button 
                  type="submit"
                  className="absolute -right-10 sm:-right-16 top-1/2 -translate-y-1/2 bg-[#E11938] hover:bg-[#c81631] text-white font-normal oswald-font btn-text py-1 sm:py-1.5 px-4 sm:px-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer tracking-wide  active:scale-95"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>

      {/* Bottom Copyright & Policy Strip (White Background) */}
      <div className="w-full bg-white text-[#444444] py-6 border-t border-gray-200" data-aos="fade-up" data-aos-delay="200">
        <div className="custom-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs section-text lato-font font-normal">
          <p>© 2017 AUTOPART. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#15468e] hover:underline transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#15468e] hover:underline transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
