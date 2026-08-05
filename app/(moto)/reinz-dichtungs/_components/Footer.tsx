"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] pt-16 font-poppins" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-in-out">
      <div className="custom-container px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8">
          
          {/* Column 1: Logo and Text */}
          <div className="xl:col-span-4">
            <img src="/moto/reinz-dichtungs/logo.png" alt="Reinz Logo" className="w-32 mb-6 object-contain" />
            <p className="text-white section-text leading-relaxed">
              Combining advanced technology, precision engineering, and uncompromising quality to deliver trusted automotive solutions across global markets.
            </p>
          </div>

          {/* Mobile Group Wrapper for Quick Links & Contact Us */}
          <div className="xl:col-span-4 grid grid-cols-2 gap-4 xl:gap-0">
            {/* Column 2: Quick Links */}
            <div className="xl:pl-10 2xl:pl-20">
              <h3 className="font-oswald font-semibold text-white product-title mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-white section-text ">Home</Link></li>
                <li><Link href="#" className="text-white section-text">About Us</Link></li>
                <li><Link href="#" className="text-white section-text">Products</Link></li>
                <li><Link href="#" className="text-white section-text">News</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div>
              <h3 className="font-oswald font-semibold text-white product-title mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <img src="/moto/reinz-dichtungs/ph.png" alt="Phone" className="w-5 h-5 object-contain" />
                  <span className="text-white section-text">+49 (0) 731 70 46 - 0</span>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/moto/reinz-dichtungs/mail.png" alt="Email" className="w-5 h-5 object-contain" />
                  <a href="mailto:reinz.info@dana.com" className="text-white section-text underline decoration-white underline-offset-4 break-words">reinz.info@dana.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Social */}
          <div className="xl:col-span-1">
             <h3 className="font-oswald font-semibold text-white product-title mb-6">Social</h3>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity"><img src="/moto/reinz-dichtungs/ins.png" alt="Instagram" className="w-7 h-7 object-contain" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><img src="/moto/reinz-dichtungs/fb.png" alt="Facebook" className="w-7 h-7 object-contain" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><img src="/moto/reinz-dichtungs/u.png" alt="YouTube" className="w-7 h-7 object-contain" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><img src="/moto/reinz-dichtungs/in.png" alt="LinkedIn" className="w-7 h-7 object-contain" /></a>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="xl:col-span-3">
            <h3 className="font-oswald font-semibold text-white product-title mb-6">Subscribe to Newsletter :</h3>
            <p className="text-white section-text leading-relaxed mb-6">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </p>
            <form className="flex items-center bg-white rounded-md p-1 overflow-hidden shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter Your E-Mail Id" 
                className="flex-grow bg-transparent outline-none px-3 text-sm text-gray-800 placeholder-gray-400 w-full min-w-0"
                required
              />
              <button type="submit" className="bg-[var(--primary)] text-white font-oswald font-medium text-sm px-6 py-2 rounded-sm flex-shrink-0 hover:bg-[#007fb5] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-white py-5 border-t border-gray-200">
        <div className="custom-container px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black section-text font-normal">© 2026 Reinz. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-700 hover:text-[var(--primary)] section-text transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-700 hover:text-[var(--primary)] section-text transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
