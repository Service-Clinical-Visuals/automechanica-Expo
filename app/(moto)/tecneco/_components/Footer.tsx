"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full font-lato" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200">
      {/* Main Footer */}
      <div className="bg-[#111111] pt-16 pb-12">
        <div className="custom-container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8">
            
            {/* Column 1: About */}
            <div className="xl:col-span-3">
              <Link href="#" className="block mb-6">
                {/* Apply brightness/invert if logo.png is black text to make it white for dark footer */}
                <img 
                  src="/moto/tecneco/footerlogo.png" 
                  alt="Tecneco Logo" 
                  className="w-60 md:w-80 lg:w-120 h-auto object-contain" 
                />
              </Link>
              <p className="text-white section-text lato font-normal leading-relaxed mb-6 ">
                Tecneco Filtri is a leading Italian manufacturer of premium filtration solutions, delivering OE-quality air, oil, fuel, cabin, and hydraulic filters for diverse automotive applications.
              </p>
              <div className="flex items-center gap-4">
                <Link href="#" className="hover:opacity-75 transition-opacity">
                  <img src="/moto/tecneco/in.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
                </Link>
                <Link href="#" className="hover:opacity-75 transition-opacity">
                  <img src="/moto/tecneco/x.png" alt="X (Twitter)" className="w-5 h-5 object-contain" />
                </Link>
                <Link href="#" className="hover:opacity-75 transition-opacity">
                  <img src="/moto/tecneco/ins.png" alt="Instagram" className="w-5 h-5 object-contain" />
                </Link>
                <Link href="#" className="hover:opacity-75 transition-opacity">
                  <img src="/moto/tecneco/u.png" alt="YouTube" className="w-5 h-5 object-contain" />
                </Link>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="xl:col-span-3 xl:pl-20">
              <h4 className="text-white sora font-normal card-title mb-6">Quick Links</h4>
              <ul className="space-y-4 lato font-normal section-text text-white">
                <li>
                  <Link href="#" >
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" >
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#" >
                    News
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="xl:col-span-3">
              <h4 className="text-white sora font-normal card-title mb-6">Contact Us</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <img src="/moto/tecneco/ph.png" alt="Phone" className="w-5 h-5 object-contain mt-0.5" />
                  <span className="text-white section-text font-normal lato leading-relaxed">
                    +39 (0)833 345304 / 346807
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/moto/tecneco/loc.png" alt="Location" className="w-5 h-5 object-contain mt-0.5" />
                  <span className="text-white section-text font-normal lato leading-relaxed">
                    Strada Provinciale 361, Km11<br />
                    73040 Collepasso (Lecce) - Italia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/moto/tecneco/mail.png" alt="Email" className="w-5 h-5 object-contain mt-0.5" />
                  <a href="mailto:tecneco@tecneco.com" className="text-white section-text font-normal lato leading-relaxed">
                    tecneco@tecneco.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="xl:col-span-3">
              <h4 className="text-white sora font-normal card-title mb-6">Subscribe to Newsletter :</h4>
              <p className="text-white section-text font-normal lato leading-relaxed mb-6">
                Be the first to know about new collections and exclusive offers.
              </p>
              
              <form className="flex w-full border-2 border-white bg-white rounded-sm overflow-hidden" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter Your E-Maild id" 
                  className="flex-grow w-full bg-white text-gray-800 px-2 lg:px-3 py-2.5 section-text font-normal lato focus:outline-none min-w-0"
                  required
                />
                <button 
                  type="submit"
                  className="shrink-0 bg-[#111111] text-white px-4 xl:px-6 2xl:px-8 py-2.5 section-text font-normal sora hover:bg-gray-900 transition-colors border-l-2 border-white m-0.5"
                >
                  Subscribe
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white py-5 border-t border-gray-200">
        <div className="custom-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 section-text text-primary-2 font-medium">
            <p>© 2026 TECNECOFILTRATION</p>
            <div className="flex items-center gap-8">
              <Link href="#" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
