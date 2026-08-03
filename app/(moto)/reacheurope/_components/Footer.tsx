"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Instagram, Youtube, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1b365d] text-white lato-font pt-16">
      <div className="custom-container">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12 xl:gap-20 mb-16">

          {/* Column 1: Logo & Text */}
          <div className="w-full lg:w-[40%] xl:w-[35%] flex flex-col gap-6" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/reacheurope/flogo.png"
                alt="REACH Logo"
                className="w-32 md:w-40 object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </Link>
            <p className="section-text text-white leading-relaxed">
              For over 25 years, REACH has combined advanced engineering, global expertise, and uncompromising quality to deliver world-class automotive cooling solutions trusted in more than 176 countries.
            </p>
          </div>

          {/* Columns 2, 3, 4 Wrapper */}
          <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col sm:flex-row justify-end gap-10 sm:gap-12 lg:gap-16 xl:gap-30">

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-5" data-aos="fade-up" data-aos-delay="100">
              <h4 className="card-title font-bold rajdhani-font mb-2">Quick Links</h4>
              <ul className="flex flex-col gap-4 section-text text-white">
                <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">News</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="flex flex-col gap-5" data-aos="fade-up" data-aos-delay="200">
              <h4 className="card-title font-bold rajdhani-font mb-2">Contact Us</h4>
              <ul className="flex flex-col gap-4 section-text text-white">
                <li className="flex items-start gap-3">
                  <img src="/moto/reacheurope/phone.png" alt="Location" className="w-auto h-auto mt-1 object-contain flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                  <span>+49 (0) 6227 39 59 364</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/moto/reacheurope/f.png" alt="Location" className="w-auto h-auto mt-1 object-contain flex-shrink-0" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                  <div className="flex flex-col gap-2">
                    <span>• Miami, Florida</span>
                    <span>• Suffolk, Virginia</span>
                    <span>• Houston, Texas</span>
                    <span>• Las Vegas, Nevada</span>
                    <span>• Toronto, Ontario</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 4: Miscellaneous */}
            <div className="flex flex-col gap-5" data-aos="fade-up" data-aos-delay="300">
              <h4 className="card-title font-bold rajdhani-font mb-2">Miscellaneous</h4>
              <ul className="flex flex-col gap-4 section-text text-white">
                <li><Link href="#" className="hover:text-white transition-colors">General Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Legal Notes</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Data Privacy</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Newsletter & Socials Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-12" data-aos="fade-up" data-aos-delay="400">

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
            <Link href="#" className="hover:text-white transition-colors font-bold text-lg leading-none">X</Link>
            <Link href="#" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Youtube size={24} /></Link>
          </div>

          {/* Newsletter Subscribe */}
          <div className="flex items-center gap-4">
            <span className="font-bold rajdhani-font card-title hidden sm:block">Subscribe to Newsletter :</span>
            <div className="flex bg-white overflow-hidden p-1">
              <input
                type="email"
                placeholder="Enter Your E-Maild id"
                className="px-4 py-2 text-black section-text outline-none min-w-[220px]"
              />
              <button className="bg-[#ED1C24] hover:bg-red-700 text-white px-4 btn-text transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-white py-4 text-center">
        <p className="text-[#000000] section-text font-regular tracking-wide uppercase">
          @ 2026 REACH COOLING GROUP USA ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
