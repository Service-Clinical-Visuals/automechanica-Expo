"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] pt-16 xl:pt-20 pb-8 border-t border-[#1a1a1a]">
      <div className="custom-container px-5 xl:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-12 gap-x-6 gap-y-10 xl:gap-6 mb-16 xl:mb-20">
          
          {/* Column 1: Logo & Text */}
          <div className="col-span-2 md:col-span-2 xl:col-span-3 flex flex-col gap-6 xl:pr-6">
            <Link href="#" className="inline-block">
              <img src="/moto/kroon-oil/logo.png" alt="Kroon-Oil" className="h-24 w-auto object-contain" />
            </Link>
            <p className="text-[#ffffff] section-text leading-[1.8] font-normal oswald-font max-w-xs ">
              For over 100 years, Kroon-Oil has specialized in developing and manufacturing premium lubricants for reliable performance and lasting protection.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col gap-6">
            <h4 className="text-white footer-title  font-bold tracking-wider oswald-font">Quick Links</h4>
            <ul className="flex flex-col gap-3.5 ">
              {['Home', 'About Kroon-Oil', 'We Care', 'Blogs', 'News'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[#ffffff] hover:text-[#FEC80B] transition-colors section-text oswald-font">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col gap-6">
            <h4 className="text-white footer-title  font-bold tracking-wider oswald-font">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <img src="/moto/kroon-oil/phone.png" alt="Phone" className="w-4 h-4 object-contain mt-1" />
                <span className="text-[#ffffff] hover:text-[#FEC80B] section-text  oswald-font leading-[1.8]">+31 (0)546-818165</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/kroon-oil/mail.png" alt="Mail" className="w-4 h-4 object-contain mt-1" />
                <span className="text-[#ffffff] hover:text-[#FEC80B] section-text  oswald-font leading-[1.8]">Info@Kroon-Oil.nl</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/kroon-oil/location.png" alt="Location" className="w-4 h-4 object-contain mt-1 flex-shrink-0" />
                <span className="text-[#ffffff] hover:text-[#FEC80B] section-text  oswald-font leading-[1.8]">
                  Kroon-Oil<br/>B.V. Dollegoorweg 15,<br/>Almelo, 7602 EC, NL
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div className="col-span-2 md:col-span-1 xl:col-span-3 flex flex-col gap-6 xl:pr-6">
            <h4 className="text-white footer-title  font-bold tracking-wider oswald-font">Subscribe For More Information</h4>
            <p className="text-[#ffffff] section-text  leading-[1.8] oswald-font">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from Kroon-Oil.
            </p>
            <div className="relative mt-2 w-full md:w-[80%]">
              <input 
                type="email" 
                placeholder="Email Address..." 
                className="w-full bg-white text-black section-text rounded-xl pl-4 pr-14 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#FFCB05] oswald-font placeholder:text-gray-500"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 w-10 bg-[#FFCB05] hover:bg-[#e6b700] transition-colors rounded-lg flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Column 5: Social Media */}
          <div className="col-span-2 md:col-span-1 xl:col-span-2 flex flex-col gap-6">
            <h4 className="text-white footer-title  font-bold tracking-wider oswald-font">Social Media Links</h4>
            <div className="flex flex-nowrap gap-2">
              {[
                { icon: 'in.png', alt: 'LinkedIn' },
                { icon: 'insta.png', alt: 'Instagram' },
                { icon: 'fb.png', alt: 'Facebook' },
                { icon: 'you.png', alt: 'YouTube' }
              ].map(social => (
              
                  <img src={`/moto/kroon-oil/${social.icon}`} alt={social.alt} className="w-12 h-12 object-contain transition-transform group-hover:scale-110" />
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-[#ffffff]/40 pt-8 mt-8 flex justify-center">
          <p className="text-[#ffffff] section-text text-center oswald-font tracking-wide">
            © Kroon-Oil 2026 . All Rights Reserved. | Privacy Policy
          </p>
        </div>
        
      </div>
    </footer>
  );
}
