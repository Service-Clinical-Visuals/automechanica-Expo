import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 md:pt-20 border-t border-gray-100" id="footer">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 lg:gap-12 pb-16">
         
          {/* Column 1: Logo, Text, Newsletter */}
          <div className="flex flex-col h-full xl:col-span-2 xl:pr-12">
            <div className="flex-grow">
              <div className="flex-shrink-0 flex items-center gap-4 mb-6">
                <Link href="#">
                  <img src="/moto/durandProduction/icon.png" alt="Durand Production" className="h-[100px] xl:h-[120px] w-auto object-contain" />
                </Link>
                <div className="flex flex-col justify-center text-[#1a1a1a] font-semibold uppercase leading-[1.1] heading text-lg md:text-xl">
                  <span>The Expert Of</span>
                  <span>Automotive Fluids</span>
                </div>
              </div>
              <p className="text-[#484848] text-sm md:text-md paragraph leading-[1.8] font-normal mb-8">
                By Respecting The Prescriptive And Legal Requirements. By Choosing Ways To Act Morally. By Banning, Refusing, Denouncing Any Illegal Or Immoral Practice
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="mb-4">
                <h4 className="text-[#1a1a1a] text-xl heading tracking-wide underline font-medium underline-offset-[6px] decoration-[1.5px] decoration-[#1a1a1a]">
                  NewsLetter
                </h4>
              </div>
              <div className="flex w-full mt-2 gap-2 h-[48px]">
                <div className="flex-grow border-2 border-[#FF131C] bg-white h-full">
                  <input 
                    type="email" 
                    placeholder="Enter Your E-Mail Id" 
                    className="w-full h-full px-4 heading text-md text-[#4a4a4a] focus:outline-none placeholder-gray-300 font-medium bg-transparent"
                  />
                </div>
                <div className="flex-shrink-0 h-full"> 
                  <Button showArrow={false} className="h-full flex items-center justify-center whitespace-nowrap px-8 text-lg">
                    Sign Up
                  </Button>
                </div>
              </div>

             
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col h-full lg:pl-6 xl:pl-16">
            <div className="mb-6">
              <h4 className="text-[#1a1a1a] text-xl heading tracking-wide underline font-medium underline-offset-[6px] decoration-[1.5px] decoration-[#1a1a1a] inline-block">
                Quick Links
              </h4>
            </div>
            <ul className="flex flex-col space-y-4">
              {["Home", "About Us", "Our Brands", "News", "Contact"].map((link, i) => (
                <li key={i}>
                  <p className="text-[#4a4a4a] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal hover:text-[#FF131C] cursor-pointer"> {link}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <h4 className="text-[#1a1a1a] text-xl heading tracking-wide underline font-medium underline-offset-[6px] decoration-[1.5px] decoration-[#1a1a1a] inline-block">
                Our Products
              </h4>
            </div>
            <ul className="flex flex-col space-y-4">
              {["Lubricants And Engine Oils", "Coolants", "Hybrid Antifreeze", "Grease"].map((link, i) => (
                <li key={i}>
                  <p className="text-[#4a4a4a] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal hover:text-[#FF131C] cursor-pointer"> {link}</p>
                </li>
              ))}
              <li>
                <Link href="#" className="text-[#FF131C] text-sm md:text-[16px] heading font-semibold hover:text-red-700 transition-colors">
                  See More...
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Certifications */}
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <div className="mb-6">
                <h4 className="text-[#1a1a1a] text-xl heading tracking-wide underline font-medium underline-offset-[6px] decoration-[1.5px] decoration-[#1a1a1a] inline-block">
                  Contact
                </h4>
              </div>
              <ul className="flex flex-col space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <img src="/moto/durandProduction/send.png" alt="Address" className="w-6 h-6 object-contain mt-1" />
                  <p className="text-[#4a4a4a] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal hover:text-[#FF131C] cursor-pointer"> DURAND PRODUCTION ZI De La Motte<br />Du Bois 62440 HARNES - FRANCE</p>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/moto/durandProduction/phone.png" alt="Phone" className="w-6 h-6 object-contain" />
                  <p className="text-[#4a4a4a] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal hover:text-[#FF131C] cursor-pointer">
                    00 33 3 21 43 57 57
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/moto/durandProduction/fax.png" alt="Fax" className="w-6 h-6 object-contain" />
                  <p className="text-[#4a4a4a] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal hover:text-[#FF131C] cursor-pointer">
                    00 33 3 21 78 94 13
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-auto flex items-center justify-start gap-6">
              <img src="/moto/durandProduction/footer1.png" alt="EcoVadis Bronze Medal" className="h-16 md:h-[75px] w-auto object-contain" />
              <img src="/moto/durandProduction/footer2.png" alt="ISO 9001 ISO 14001 Bureau Veritas Certification" className="h-16 md:h-[75px] w-auto object-contain" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#000814] py-5">
        <div className="custom-container">
          <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm paragraph">
            <p className="text-[#ffffff] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal text-center md:text-left">Copyrights@2026 Durand Production. All Rights Reserved</p>
            <div className="flex items-center gap-8 mt-3 md:mt-0">
              <Link href="#" className="text-[#ffff] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal hover:text-white transition-colors">Legal Notice</Link>
              <Link href="#" className="text-[#ffff] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
