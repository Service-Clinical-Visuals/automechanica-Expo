"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e1e1e] pt-14 lg:pt-15 pb-6">
      <div className="custom-container">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12 lg:gap-16 mb-10">
          
          {/* Col 1: Logo & About */}
          <div className="col-span-2 md:col-span-6 xl:col-span-3 flex flex-col gap-6">
            <Link href="#">
              <img src="/moto/bremi/logo1.png" alt="Bremi Logo" className="w-[180px] lg:w-[220px] h-auto object-contain" />
            </Link>
            <p className="text-[#ffffff] leading-[1.8] font-normal mt-2 footer-links pr-2">
              We are your partner for high-quality ignition and<br className="hidden xl:block"/> 
              sensor technology! Since 1927, BREMI is the leading<br className="hidden xl:block"/>
              specialist in these fields, due to its constantly<br className="hidden xl:block"/>
              growing know-how.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-span-1 md:col-span-3 xl:col-span-2 flex flex-col">
            <h4 className="font-bold text-white mb-6 section-text tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-[#ffffff] hover:text-[#E72E39] transition-colors font-normal footer-links">Home</Link>
              <Link href="#" className="text-[#ffffff] hover:text-[#E72E39] transition-colors font-normal footer-links">Our Products</Link>
              <Link href="#" className="text-[#ffffff] hover:text-[#E72E39] transition-colors font-normal footer-links">Online catalog</Link>
              <Link href="#" className="text-[#ffffff] hover:text-[#E72E39] transition-colors font-normal footer-links">Contact</Link>
            </div>
          </div>

          {/* Col 3: Contact Us */}
          <div className="col-span-1 md:col-span-3 xl:col-span-2 flex flex-col">
            <h4 className="font-bold text-white mb-6 section-text tracking-wide">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+497032955300" className="flex items-center gap-2 group">
                <img src="/moto/bremi/phone.png" alt="Phone" className="w-4 h-4 lg:w-5 lg:h-5 object-contain" />
                <span className="text-[#ffffff] group-hover:text-[#E72E39] transition-colors font-normal footer-links uppercase">+49 7032 955 30 0</span>
              </a>
              <a href="mailto:Info@Bremi.De" className="flex items-center gap-2 group">
                <img src="/moto/bremi/mail.png" alt="Email" className="w-4 h-4 lg:w-5 lg:h-5 object-contain" />
                <span className="text-[#ffffff] group-hover:text-[#E72E39] transition-colors font-normal footer-links">Info@Bremi.De</span>
              </a>
            </div>
          </div>

          {/* Col 4: Legals */}
          <div className="col-span-1 md:col-span-6 xl:col-span-1 flex flex-col">
            <h4 className="font-bold text-white mb-6 section-text tracking-wide">Legals</h4>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-[#ffffff] hover:text-[#E72E39] transition-colors font-normal footer-links">Legal notice</Link>
              <Link href="#" className="text-[#ffffff] hover:text-[#E72E39] transition-colors font-normal footer-links">Privacy policy</Link>
              <Link href="#" className="text-[#ffffff] hover:text-[#E72E39] transition-colors font-normal footer-links">Terms and conditions</Link>
            </div>
          </div>

          {/* Col 5: Certificate */}
          <div className="col-span-1 md:col-span-6 xl:col-span-4 flex justify-start xl:justify-end xl:col-start-9 items-start">
             <div className="shadow-sm inline-block w-full">
               <img src="/moto/bremi/certificate.jpg" alt="TUV SUD ISO 9001 Certificate" className="w-full max-w-[260px] xl:max-w-[450px] h-auto object-contain" />
             </div>
          </div>

        </div>

        {/* Divider line & Copyright */}
        <div className="w-full h-[1px] bg-white/30 mb-5"></div>
        <div className="text-center">
          <p className="text-[#ffffff] font-normal tracking-wide footer-links">
            ©2021 bremi.de All Rights Reserved. | <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </p>
        </div>

      </div>
    </footer>
  );
}
