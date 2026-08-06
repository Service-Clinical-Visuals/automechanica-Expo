"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fa] pt-16 md:pt-20">
      <div className="custom-container grid grid-cols-2 md:grid-cols-2 xl:grid-cols-12 gap-x-4 gap-y-10 md:gap-10 xl:gap-8 pb-16 md:pb-20">
        
        {/* Column 1: Logo, Text, Newsletter */}
        <div className="col-span-2 md:col-span-1 xl:col-span-6 max-w-md flex flex-col gap-6" data-aos="fade-up">
          <Link href="#">
            <img 
              src="/moto/birlik/logo.png" 
              alt="Birlik Conta Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          <p className="manrope-font section-text text-[#444444] leading-relaxed">
            Sitede kullanılan marka, modeller ve orjinal parça numaralarının herhangi bir yükümlülüğü yoktur sadece referans olarak kullanılmaktadır.
          </p>
          
          <form className="flex mt-2 w-full max-w-sm gap-2">
            <input 
              type="email" 
              placeholder="Please Enter your email" 
              className="w-full bg-white border border-gray-200 section-text sora-font px-4 py-3 outline-none focus:border-[#1f5dd2] transition-colors rounded-l-sm"
              required
            />
            <button 
              type="submit" 
              className="bg-[#1f5dd2] hover:bg-[#1546a3] text-white section-text sora-font font-normal px-6 py-3 transition-colors rounded-r-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Column 2: Quick Links */}
        <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
          <h4 className="sora-font card-title font-semibold text-[#212121]">
            Quick Links
          </h4>
          <div className="flex flex-col gap-4">
            <Link href="#" className="manrope-font section-text text-[#444444]  hover:text-[#1f5dd2] transition-colors">
              About Us
            </Link>
            <Link href="#" className="manrope-font section-text text-[#444444]  hover:text-[#1f5dd2] transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="manrope-font section-text text-[#444444]  hover:text-[#1f5dd2] transition-colors">
              Photo Gallery
            </Link>
            <Link href="#" className="manrope-font section-text text-[#444444]  hover:text-[#1f5dd2] transition-colors">
              PDF Catalogue
            </Link>
          </div>
        </div>

        {/* Column 3: My Account */}
        <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
          <h4 className="sora-font card-title font-semibold text-[#212121]">
            My Account
          </h4>
          <div className="flex flex-col gap-4">
            <Link href="#" className="manrope-font section-text text-[#444444]  hover:text-[#1f5dd2] transition-colors">
              Login
            </Link>
            <Link href="#" className="manrope-font section-text text-[#444444]  hover:text-[#1f5dd2] transition-colors">
              Order History
            </Link>
            <Link href="#" className="manrope-font section-text text-[#444444]  hover:text-[#1f5dd2] transition-colors">
              My Wishlist
            </Link>
            <Link href="#" className="manrope-font section-text text-[#444444]  hover:text-[#1f5dd2] transition-colors">
              Track Order
            </Link>
          </div>
        </div>

        {/* Column 4: Contact Info */}
        <div className="col-span-2 md:col-span-1 xl:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
          <h4 className="sora-font card-title font-semibold text-[#212121]">
            Our Contact Info
          </h4>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <img src="/moto/birlik/map.png" alt="Phone Icon" className="w-5 h-5 mt-1 flex-shrink-0" />
              <p className="manrope-font section-text text-[#444444]  leading-relaxed">
                Adil Mah. Ekol Cad. Pelitoren Sok. No:2 Pk:34935 SULTANBEYLI - ISTANBUL / TURKEY
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src="/moto/birlik/ph.png" alt="Phone Icon" className="w-5 h-5 mt-1 flex-shrink-0" />
              <a href="tel:+902166690902" className="manrope-font section-text text-[#444444]  hover:text-[#1f5dd2] transition-colors">
                +90 216 669 09 02
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bottom Strip */}
      <div className="w-full bg-white py-6 border-t border-gray-200">
        <div className="custom-container flex justify-center text-center">
          <p className="manrope-font section-text text-[#444444] font-semibold">
            © 2026 Birlik Conta | Silcon • Consil • Perking • Erking Gasket
          </p>
        </div>
      </div>
    </footer>
  );
}
