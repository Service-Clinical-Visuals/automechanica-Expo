"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <footer 
      className="w-full bg-[#111111] pt-20 bg-no-repeat bg-left-bottom"
      style={{ backgroundImage: "url('/moto/repairify/bg.png')" }} data-aos="fade-up" data-aos-delay="200" 
    >
      <div className="custom-container relative z-10">
        
        <div className="grid grid-cols-2 xl:grid-cols-12 gap-x-4 gap-y-10 md:gap-12 pb-10">
          
          {/* Left - Brand */}
          <div className="col-span-2 md:col-span-1 xl:col-span-5 flex flex-col items-start gap-6">
            <img src="/moto/repairify/logo.png" alt="Repairify Logo" className="h-10 w-auto object-contain" />
            <p className="inter-font section-text text-white leading-relaxed max-w-md">
              Repairify is a leading provider of automotive diagnostics, ADAS calibration, and intelligent repair solutions, empowering workshops with innovative technology, OEM-level expertise, and connected services for safer, more efficient vehicle repairs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6">
            <h4 className="adlam-font card-text text-white">Quick Links</h4>
            <div className="flex flex-col gap-4">
              <Link href="#" className="inter-font section-text text-white ">Home</Link>
              <Link href="#about" className="inter-font section-text text-white">About Us</Link>
              <Link href="#products" className="inter-font section-text text-white">Products</Link>
              <Link href="#news" className="inter-font section-text text-white">News</Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="col-span-1 xl:col-span-3 flex flex-col gap-6">
            <h4 className="adlam-font card-text text-white">Contact Us</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img src="/moto/repairify/ph.png" alt="Phone" className="w-5 h-5 flex-shrink-0" />
                <a href="tel:01923882392" className="inter-font section-text text-white">
                  01923 882392
                </a>
              </div>
              <div className="flex items-center gap-3">
                <img src="/moto/repairify/mail.png" alt="Email" className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:enquiries@repairify.com" className="inter-font section-text text-white break-all">
                  enquiries@repairify.com
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="col-span-2 md:col-span-1 xl:col-span-2 flex flex-col gap-6">
            <h4 className="adlam-font card-text text-white">Social</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/moto/repairify/ins.png" alt="Instagram" className="w-6 h-6 object-contain" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/moto/repairify/fb.png" alt="Facebook" className="w-6 h-6 object-contain" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/moto/repairify/u.png" alt="YouTube" className="w-6 h-6 object-contain" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/moto/repairify/in.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>
          
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-center justify-end gap-4 pb-12 border-b border-gray-800">
          <span className="adlam-font card-text text-white mr-2">Subscribe to Newsletter :</span>
          <div className="flex w-full md:w-auto bg-white rounded-full p-1 min-w-[300px]">
            <input 
              type="email" 
              placeholder="Enter Your E-Maild id" 
              className="flex-grow px-4 py-2 text-sm text-[#222] bg-transparent outline-none inter-font"
            />
            <Button className="px-6 py-2 !section-text !adlam-font !rounded-full">
              Subscribe
            </Button>
          </div>
        </div>

      </div>
      
      {/* Copyright Bottom Bar */}
      <div className="w-full bg-white py-5">
        <div className="custom-container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="inter-font section-text text-black">
            © 2026 Repairify All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="inter-font section-text text-black ">Privacy Policy</Link>
            <Link href="#" className="inter-font section-text text-black ">Terms & Conditions</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
