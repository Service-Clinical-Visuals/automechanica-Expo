"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-12 lg:pt-16 border-t border-gray-800">
      <div className="custom-container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Logo & About */}
          <div className="xl:col-span-4 flex flex-col">
            <div className=" mb-2 relative w-48 ">
              <img 
                src="/moto/asimco/logo.png" 
                alt="Asimco Logo" 
                className="object-contain "
              />
            </div>
            <p className="text-[#ffffff] inter-font section-text leading-relaxed mb-8 max-w-[500px]">
              ASIMCO Global is a leading manufacturer of automotive braking components, delivering OEM-quality brake pads, calipers, and braking solutions trusted by customers in over 80 countries.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-8 h-8 rounded hover:opacity-80 transition-opacity">
                <img src="/moto/asimco/in.png" alt="LinkedIn" width={24} height={24} className="w-full h-full object-contain" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded hover:opacity-80 transition-opacity">
                <img src="/moto/asimco/x.png" alt="X" width={24} height={24} className="w-full h-full object-contain" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded hover:opacity-80 transition-opacity">
                <img src="/moto/asimco/ins.png" alt="Instagram" width={24} height={24} className="w-full h-full object-contain" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded hover:opacity-80 transition-opacity">
                <img src="/moto/asimco/u.png" alt="YouTube" width={24} height={24} className="w-full h-full object-contain" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="xl:col-span-2 flex flex-col xl:pl-15">
            <h4 className="teko-font card-title font-normal mb-6 tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Products', 'News'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white hover:text-[#cb1020] transition-colors inter-font section-text">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="xl:col-span-3 flex flex-col xl:pl-15">
            <h4 className="teko-font card-title font-normal mb-6 tracking-wide text-white">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <img src="/moto/asimco/ph.png" alt="Phone" width={20} height={20} className="w-full h-full object-contain" />
                </div>
                <span className="text-white inter-font section-text">86 (25) 6902 2699.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <img src="/moto/asimco/mail.png" alt="Email" width={20} height={20} className="w-full h-full object-contain" />
                </div>
                <span className="text-white inter-font section-text">info@asimcoglobal.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="xl:col-span-3 flex flex-col">
            <h4 className="teko-font card-title font-normal mb-6 tracking-wide text-white">
              Subscribe to Newsletter :
            </h4>
            <p className="text-white inter-font section-text leading-relaxed mb-6">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </p>
            <form className="w-full relative flex items-center bg-white rounded-lg p-1" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter Your E-Mail id" 
                className="w-full bg-transparent text-gray-700 font-inter section-text px-4 outline-none border-none placeholder:text-gray-400"
                required
              />
              <button 
                type="submit" 
                className="flex-shrink-0 bg-[#cb1020] hover:bg-[#a00c19] text-white teko-font section-text px-5 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white py-5">
        <div className="custom-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black inter-font section-text font-medium">
              &copy;ASIMCO 2026 ALL RIGHTS RESERVED
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <Link href="#" className="text-black hover:text-[#cb1020] inter-font section-text">Privacy Policy</Link>
              <Link href="#" className="text-black hover:text-[#cb1020] inter-font section-text">Terms & Conditions</Link>
              <Link href="#" className="text-black hover:text-[#cb1020] inter-font section-text">Imprint</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
