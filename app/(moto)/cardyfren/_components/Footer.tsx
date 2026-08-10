"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";


export default function Footer() {
  return (
    <footer className="w-full font-body">
      {/* Top Dark Section */}
      <div className="bg-[#111111] pt-16 pb-12">
        <div className="custom-container">
          
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-6 lg:gap-8 mb-16">
            
            {/* Column 1: Logo & Text */}
            <div className="col-span-2 md:col-span-1 lg:col-span-4 flex flex-col space-y-6">
              <Link href="/cardyfren" className="inline-block w-[180px]">
                <Image
                  src="/moto/cardyfren/logo.png"
                  alt="Cardyfren Logo"
                  width={200}
                  height={60}
                  className="w-full h-auto object-contain"
                />
              </Link>
              <p className="text-white section-text leading-relaxed pr-0 lg:pr-8">
                Cardyfren is a trusted manufacturer and supplier of precision-engineered driveline components, specializing in CV joints, cardan shafts, universal joints, and transmission solutions. With decades of industry expertise, the company delivers reliable, high-quality products for the automotive, industrial, agricultural, marine, railway, construction, and wind energy sectors worldwide.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-span-1 lg:col-span-2 lg:pl-20">
              <h4 className="text-white footer-title font-normal font-heading mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-white section-text">Home</Link></li>
                <li><Link href="#" className="text-white section-text">About Us</Link></li>
                <li><Link href="#" className="text-white section-text">Products</Link></li>
              </ul>
            </div>

            {/* Column 3: Your Account */}
            <div className="col-span-1 lg:col-span-3 lg:pl-20">
      <h4 className="text-white footer-title font-normal font-heading mb-6">Your Account</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-white section-text">Personal Info</Link></li>
                <li><Link href="#" className="text-white section-text">Orders</Link></li>
                <li><Link href="#" className="text-white section-text">Vouchers</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="col-span-2 md:col-span-1 lg:col-span-3">
              <h4 className="text-white footer-title font-normal font-heading mb-6">Contact Us</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-[18px] h-[18px] relative mt-0.5">
                     <Image src="/moto/cardyfren/ph.png" alt="Phone" fill className="object-contain" />
                  </div>
                  <span className="text-white section-text">961665179</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-[18px] h-[18px] relative mt-0.5">
                     <Image src="/moto/cardyfren/mail.png" alt="Mail" fill className="object-contain" />
                  </div>
                  <span className="text-white section-text">info@cardyfren.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-[18px] h-[18px] relative mt-0.5">
                     <Image src="/moto/cardyfren/location.png" alt="Location" fill className="object-contain" />
                  </div>
                  <span className="text-white section-text leading-relaxed">
                    Calle N-III SubPoligono<br/>Ind. El Oliveral Fase<br/>Turia Spain
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom of Top Section: Socials & Newsletter */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-4">
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-center lg:justify-start">
              <Link href="#" className="w-8 h-8 relative hover:opacity-80 transition-opacity cursor-pointer">
                <Image src="/moto/cardyfren/ins.png" alt="Instagram" fill className="object-contain" />
              </Link>
              <Link href="#" className="w-8 h-8 relative hover:opacity-80 transition-opacity cursor-pointer">
                <Image src="/moto/cardyfren/fb.png" alt="Facebook" fill className="object-contain" />
              </Link>
              <Link href="#" className="w-8 h-8 relative hover:opacity-80 transition-opacity cursor-pointer">
                <Image src="/moto/cardyfren/u.png" alt="YouTube" fill className="object-contain" />
              </Link>
              <Link href="#" className="w-8 h-8 relative hover:opacity-80 transition-opacity cursor-pointer">
                <Image src="/moto/cardyfren/in.png" alt="LinkedIn" fill className="object-contain" />
              </Link>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
              <h4 className="text-white font-normal font-heading footer-title ">
                Subscribe to Newsletter :
              </h4>
              <div className="flex items-start justify-between w-full md:w-[350px] h-[48px] bg-white rounded-[6px] p-[2px]">
                <input
                  type="email"
                  placeholder="Enter Your E-Mail id"
                  className="flex-1 bg-transparent px-4 h-full text-[#111111] section-text outline-none"
                />
                <div className="h-full flex items-start pl-2 mt-0.5 ">
                    <Button 
                      className="bg-[#28b7ff] hover:bg-[#1fa1e6] text-white px-6 h-[40px] font-normal font-heading section-text transition-colors rounded-md whitespace-nowrap border-3 border-black w-auto"
                  
                    >
                      Subscribe
                    </Button>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>

      {/* Bottom White Section */}
      <div className="bg-white py-5 border-t border-gray-200">
        <div className="custom-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#111111] section-text font-normal">
            <p>© 2026 Cardyfren All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
