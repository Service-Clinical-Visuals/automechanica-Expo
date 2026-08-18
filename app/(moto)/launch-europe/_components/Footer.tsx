"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] pt-16">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 xl:gap-10 pb-16">
          
          {/* Column 1: About */}
          <div className="md:col-span-2 xl:col-span-4 flex flex-col pr-4 xl:pr-8">
            <Link href="#" className="mb-6 block">
              <img
                src="/moto/launch-europe/log.png"
                alt="Launch Europe"
                className="w-30 lg:w-40 h-auto object-contain"
              />
            </Link>
            <p className="text-white section-text  font-lato leading-relaxed">
              LAUNCH Europe GmbH is a leading provider of automotive diagnostic systems, ADAS calibration equipment, and professional workshop solutions, delivering innovative technology and reliable support to workshops across Europe.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="xl:col-span-2 flex flex-col xl:pl-10">
            <h4 className="text-white font-heading font-normal section-title1 mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 section-text font-lato">
              {['Home', 'About Us', 'Products', 'News'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white section-text  font-lato hover:text-[#e30613] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="xl:col-span-2 flex flex-col">
            <h4 className="text-white font-heading font-normal section-title1 mb-6">Contact Us</h4>
            <div className="flex flex-col items-start gap-5 font-lato section-text">
              <Link href="tel:+490227398750" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
              <img src="/moto/launch-europe/phone.png" alt="phone" />
                <span className="text-white section-text  font-lato ">+49 (0) 2273 / 98 75-0</span>
              </Link>
              <Link href="mailto:info@launch-europe.de" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
              <img src="/moto/launch-europe/mail.png" alt="mail" />
                <span className="text-white section-text  font-lato ">info@launch-europe.de</span>
              </Link>
            </div>
          </div>

          {/* Column 4: Social */}
          <div className="xl:col-span-1 flex flex-col">
            <h4 className="text-white font-heading font-normal section-title1 mb-6">Social</h4>
            <div className="flex items-center gap-4 font-lato section-text">
                <img src="/moto/launch-europe/in.png" alt="in" />
              <img src="/moto/launch-europe/x.png" alt="x" />
              <img src="/moto/launch-europe/ins.png" alt="ins" />
              <img src="/moto/launch-europe/you.png" alt="you" />
            </div>
          </div>

          {/* Column 5: Subscribe */}
          <div className="md:col-span-2 xl:col-span-3 flex flex-col xl:pl-10">
           <h4 className="text-white font-heading font-normal section-title1 mb-6">Subscribe to Newsletter :</h4>
            <p className="text-white section-text font-lato leading-relaxed mb-6">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </p>
            <form className="flex w-full bg-white rounded-xl p-1 overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter Your E-Mail id" 
                className="flex-grow px-3 bg-transparent section-text text-[#111111] outline-none placeholder-gray-400 min-w-0"
                required
              />
              <button 
                type="submit" 
                className="bg-[#e30613] hover:bg-[#c81017] text-white px-6 py-[8px] rounded-xl section-text font-normal font-heading transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-white py-5">
        <div className="custom-container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#000000] section-text font-lato font-normal">
            © 2026 All Rights Reserved | LAUNCH Europe GmbH
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="text-[#000000] hover:text-[#e30613] section-text font-lato font-bold transition-colors">
              Privacy Policy
            </Link>
          <Link href="#" className="text-[#000000] hover:text-[#e30613] section-text font-lato font-bold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-[#000000] hover:text-[#e30613] section-text font-lato font-bold transition-colors">
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
