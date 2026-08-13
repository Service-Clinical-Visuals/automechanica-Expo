import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] pt-10 pb-4">
      <div className="custom-container">
        
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-6">
          <h2 className="section-title text-[#212121] oswald-font font-medium">
            Subscribe to Our Newsletter
          </h2>
          <div className="flex flex-row w-full lg:w-auto gap-2 sm:gap-3">
            <input 
              type="email" 
              placeholder="Please Enter Email" 
              className="flex-1 bg-[#EAEAEA] border border-[#A4B4CB] rounded-md px-4 py-2.5 lg:w-80 text-[14px] text-gray-700 focus:outline-none focus:border-[#0D3374] focus:ring-1 focus:ring-[#0D3374] transition-all oswald-font section-text "
            />
           <Link 
                  href="#" 
                  className="bg-[#E40C19] flex-shrink-0 section-text font-medium text-white rounded-md w-auto px-6 lg:px-10 py-2.5 flex items-center justify-center text-center oswald-font hover:bg-[#D82222] transition-colors"
                >
                  Subscribe
                </Link>
           
          </div>
        </div>

        {/* Main Footer Box */}
        <div className="bg-[#0D3374] rounded-2xl p-8 md:p-12 text-white mb-4 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-10 xl:gap-8">
            
            {/* Column 1: Logo & Text */}
            <div className="flex flex-col gap-6 col-span-2 md:col-span-12 xl:col-span-5 xl:pr-6">
              <Link href="#">
                <img 
                  src="/moto/mistral/footericon.png" 
                  alt="Mistral Logo" 
                  className="w-[215px] lg:w-[320px] object-contain " 
                />
              </Link>
              <p className="text-[#ffffff] header-sublink leading-relaxed lato-font ">
                Company Campi always dealt with environment air filtering, being successful in the automotive and in
                the civil-industrial sector.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-4 col-span-1 md:col-span-3 xl:col-span-2">
              <h3 className="oswald-font font-medium number-text mb-2 tracking-wide">Quick Links</h3>
              <ul className="flex flex-col gap-3">
                <li><Link href="#" className="text-white header-sublink lato-font transition-colors">Home</Link></li>
                <li><Link href="#" className="text-white header-sublink lato-font transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-white header-sublink lato-font transition-colors">Products</Link></li>
                <li><Link href="#" className="text-white header-sublink lato-font transition-colors">Contacts</Link></li>
              </ul>
            </div>

            {/* Column 3: Our Company */}
            <div className="flex flex-col gap-4 col-span-1 md:col-span-3 xl:col-span-2">
              <h3 className="oswald-font font-medium number-text mb-2 tracking-wide">Our Company</h3>
              <ul className="flex flex-col gap-3">
                <li><Link href="#" className="text-white header-sublink lato-font transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-white header-sublink lato-font transition-colors">Terms of Use</Link></li>
                <li><Link href="#" className="text-white header-sublink lato-font transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col gap-4 col-span-2 md:col-span-6 xl:col-span-3">
              <h3 className="oswald-font font-medium number-text mb-2 tracking-wide">Contact</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <img src="/moto/mistral/map-pin.png" alt="location" className='w-[18px] h-[18px] object-contain flex-shrink-0 mt-0.5' />
                  <span className="text-white header-sublink  leading-relaxed lato-font">
                    Ditta Andrea Campi | P.IVA IT10548260156 | C.F.<br className="hidden xl:block" />
                    CMPNDR69M23E063W | R.I. MI 1996-1303998
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/moto/mistral/phone-call.png" alt="phone" className='w-[18px] h-[18px] object-contain flex-shrink-0 mt-0.5' />
                  <span className="text-white header-sublink  lato-font">+39 0331.534695</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/moto/mistral/mail.png" alt="mail" className='w-[18px] h-[18px] object-contain flex-shrink-0 mt-0.5' />
                  <span className="text-white header-sublink  lato-font">info@campi.eu</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="text-center ">
          <p className="text-[#0D3374] header-link oswald-font font-normal  ">
            Copyrights @ 2026 <span className="text-[#E40C19] underline underline-offset-4 decoration-[1px]">ANDREA CAMPI</span>. All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
