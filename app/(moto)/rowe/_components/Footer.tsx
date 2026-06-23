"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaAngleDown } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white pt-10  overflow-hidden">
     

      <div className="custom-container relative z-10">
        
        {/* Top Row: Logo & Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          {/* Logo */}
          <img src="/moto/rowe/logo.png" className="w-48 md:w-56 lg:w-[280px] h-auto object-contain" alt="ROWE Logo"/>
          
          {/* Newsletter */}
          <div className="flex w-full md:w-auto min-w-0 sm:min-w-[320px] lg:min-w-[420px]">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white text-black px-4 md:px-5 py-3 md:py-3.5 outline-none text-sm md:text-[15px] placeholder-gray-400 font-sans"
            />
            <button className="bg-[#e61919] px-4 md:px-6 flex items-center justify-center hover:bg-[#cc1616] transition-colors border-2">
              <img src="/moto/rowe/send.png" alt="Subscribe" className="w-4 h-4 md:w-5 md:h-5 filter brightness-0 invert object-contain" />
            </button>
          </div>
        </div>

        {/* Middle Row: Links & Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 mb-12 md:mb-16">
          
          {/* Col 1: ROWE Mineralölwerk GmbH */}
          <div className="flex flex-col gap-4 md:gap-5 items-start">
            <h4 className="text-base md:text-lg lg:text-[18px] font-medium orbitron text-white tracking-wide inline-block underline underline-offset-4">ROWE Mineralölwerk GmbH</h4>
            <ul className="flex flex-col gap-3 md:gap-4 text-white text-sm md:text-[15px] font-sans w-full sm:w-48 lg:w-52 mt-1">
              <li><Link href="#" className="hover:text-[#e61919] transition-colors flex items-center gap-2 group !font-dm-sans">Distributors <img  src="/moto/rowe/Vector.png"></img></Link></li>
              <li><Link href="#" className="hover:text-[#e61919] transition-colors flex items-center gap-2 group !font-dm-sans">Private Customers <img src="/moto/rowe/Vector.png"></img></Link></li>
              <li><Link href="#" className="hover:text-[#e61919] transition-colors flex items-center gap-2 group !font-dm-sans">Workshops <img src="/moto/rowe/Vector.png"></img></Link></li>
              <li><Link href="#" className="hover:text-[#e61919] transition-colors flex items-center gap-2 group !font-dm-sans">Industry <img src="/moto/rowe/Vector.png"></img></Link></li>
              <li><Link href="#" className="hover:text-[#e61919] transition-colors flex items-center gap-2 group !font-dm-sans">About ROWE <img src="/moto/rowe/Vector.png"></img></Link></li>
              <li><Link href="#" className="hover:text-[#e61919] transition-colors flex items-center gap-2 !font-dm-sans">Sustainability</Link></li>
            </ul>
          </div>

          {/* Col 2: Legal */}
          <div className="flex flex-col gap-4 md:gap-5 lg:pl-8">
            <h4 className="text-base md:text-lg lg:text-[18px] font-medium orbitron text-white tracking-wide underline underline-offset-4 ">Legal</h4>
            <ul className="flex flex-col gap-3 md:gap-4 text-white text-sm md:text-[15px] font-sans">
              <li><Link href="#" className="hover:text-[#e61919] transition-colors  !font-dm-sans">Legal Notice</Link></li>
              <li><Link href="#" className="hover:text-[#e61919] transition-colors  !font-dm-sans">Data Protection</Link></li>
              <li><Link href="#" className="hover:text-[#e61919] transition-colors  !font-dm-sans">GTC</Link></li>
              <li><Link href="#" className="hover:text-[#e61919] transition-colors  !font-dm-sans">AEB</Link></li>
              <li><Link href="#" className="hover:text-[#e61919] transition-colors  !font-dm-sans">Code of Conduct</Link></li>
            </ul>
          </div>

          {/* Col 3: Socials & Certified By */}
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-4 md:gap-5">
              <h4 className="text-base md:text-lg lg:text-[18px] font-medium orbitron text-white tracking-wide underline underline-offset-4">Socials</h4>
              <div className="flex gap-3">
                <img src="/moto/rowe/facebook.png" alt="Facebook" className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:opacity-80 transition-opacity object-contain" />
                <img src="/moto/rowe/twitter.png" alt="Twitter" className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:opacity-80 transition-opacity object-contain" />
                <img src="/moto/rowe/linkedin.png" alt="Linkedin" className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:opacity-80 transition-opacity object-contain" />
                <img src="/moto/rowe/instagram.png" alt="Instagram" className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:opacity-80 transition-opacity object-contain" />  
              </div>
            </div>
            
            <div className="flex flex-col gap-4 md:gap-5">
              <h4 className="text-base md:text-lg lg:text-[18px] font-medium orbitron text-white tracking-wide underline underline-offset-4">Certified By</h4>
              <div className="flex gap-3">
                <img src="/moto/rowe/certify1.png" alt="TUV PROFi CERT" className="h-[50px] md:h-[60px] w-auto object-contain" />
                <img src="/moto/rowe/certify2.png" alt="TUV PROFi CERT" className="h-[50px] md:h-[60px] w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Col 4: We Support & Payment methods */}
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-4 md:gap-5">
              <h4 className="text-base md:text-lg lg:text-[18px] font-medium orbitron text-white tracking-wide underline underline-offset-4">We Support</h4>
              <div className="flex gap-3">
                <img src="/moto/rowe/support1.png" alt="Aktion" className="h-[50px] md:h-[60px] w-auto object-contain" />
                <img src="/moto/rowe/support2.png" alt="BVB Champion Partner" className="h-[50px] md:h-[60px] w-auto object-contain" />
              </div>
            </div>
            
            <div className="flex flex-col gap-4 md:gap-5">
              <h4 className="text-base md:text-lg lg:text-[18px] font-medium font-sans text-white tracking-wide underline underline-offset-4">Payment methods</h4>
              <div className="flex flex-wrap items-center gap-4">
                <img src="/moto/rowe/paypal.png" alt="PayPal" className="h-5 md:h-6 w-auto object-contain" />
                <img src="/moto/rowe/visa.png" alt="Visa" className="h-3.5 md:h-4 w-auto object-contain" />
                <img src="/moto/rowe/mastercard.png" alt="Mastercard" className="h-5 md:h-6 w-auto object-contain" />
                <img src="/moto/rowe/sepa.png" alt="SEPA" className="h-3.5 md:h-4 w-auto object-contain" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="text-center pb-6 md:pb-8 text-white text-xs md:text-[13px] dmsans font-sans tracking-wide">
          ROWE Mineralölwerk GmbH - All Rights Reserved ©2026
        </div>

      </div>
    </footer>
  );
}
