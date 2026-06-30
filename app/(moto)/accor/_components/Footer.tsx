import React from "react";
import Link from "next/link";
import { Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const brands = ["KENNOL", "ACCOR", "ROKKA", "MIRALUB", "FL'AUTO", "RENOX"];
  const ranges = ["CAR", "BIKE", "TRANSPORT", "INDUSTRY", "AGRICULTURAL", "MARINE"];
  const companyCol1 = ["NEWS", "THE FACTORY", "THE LAB", "OUR SERVICES", "TECHNICAL DATA SHEET"];
  const companyCol2 = ["SECURITY DATA SHEET", "TERMS OF SERVICE", "PRIVACY POLICY", "CHANGE PRIVACY SETTINGS"];

  return (
    <footer className="w-full bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="custom-container">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-6 mb-16">
          
          {/* Column 1: Logo & Contact */}
          <div className="xl:col-span-4 flex flex-col items-start pr-4">
            {/* Logo */}
            <div className="mb-6 flex items-start">
               <img src="/moto/accorLubricants/icon.png" alt="ACCOR Lubrifiants" className="w-[220px] lg:w-[300px] object-contain"/>
            </div>
            
            {/* Contact Info */}
            <address className="not-italic text-[#484848] exo2  text-[16px] md:text-[18px]  leading-relaxed mb-6 space-y-1.5">
              <p>8 rue du Mans</p>
              <p>49300 CHOLET - FRANCE</p>
              <a href="mailto:accor@accor-lubrifiants.com" className="block hover:text-[#E41B13] transition-colors">
                accor@accor-lubrifiants.com
              </a>
            </address>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="bg-black rounded-full p-2 transition-opacity">
                <img src="/moto/accorLubricants/linkedin.png" alt="linkedin" className="w-6 h-6 object-contain"/>
              </a>
              <a href="#" className="bg-black rounded-full p-2 transition-opacity">
                <img src="/moto/accorLubricants/fb.png" alt="facebook" className="w-6 h-6 object-contain"/>
              </a>
            </div>
          </div>

          {/* Middle Columns Wrapper for Mobile */}
          <div className="xl:col-span-4 grid grid-cols-2 gap-4 md:gap-10 xl:gap-6">
            {/* Column 2: Our Brands */}
            <div>
              <h3 className="text-[#1e1e1e] font-bold text-[20px] oxanium uppercase pb-3 mb-6  tracking-wide">
                OUR BRANDS
              </h3>
              <ul className="flex flex-col space-y-3">
                {brands.map((brand, idx) => (
                  <li key={idx}>
                    {/* <Link href="#" className="text-gray-500 hover:text-[#E41B13] font-[family-name:var(--font-exo2)] text-[12px] uppercase tracking-wider transition-colors"> */}
                    <p className="text-[#484848] exo2  text-[16px]  hover:text-[#E41B13] cursor-pointer uppercase tracking-wider">{brand}</p>

                      
                    {/* </Link> */}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: The Ranges */}
            <div>
               <h3 className="text-[#1e1e1e] font-bold text-[20px] oxanium uppercase pb-3 mb-6  tracking-wide">
                THE RANGES
              </h3>
              <ul className="flex flex-col space-y-3">
                {ranges.map((range, idx) => (
                  <li key={idx}>
                     <p className="text-[#484848] exo2  text-[16px]  hover:text-[#E41B13] cursor-pointer uppercase tracking-wider">
                      {range}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Our Company (Spans remaining space and has 2 sub-columns) */}
          <div className="md:col-span-2 xl:col-span-4">
          
              <h3 className="text-[#1e1e1e] font-bold text-[20px] oxanium uppercase tracking-wide pb-3 mb-6 border-b border-gray-200">
              Our Company
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <ul className="flex flex-col space-y-3">
                {companyCol1.map((link, idx) => (
                  <li key={idx}>
                   <p className="text-[#484848] exo2  text-[16px]  hover:text-[#E41B13] cursor-pointer uppercase tracking-wider">
                      {link}
                    </p>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col space-y-3">
                {companyCol2.map((link, idx) => (
                  <li key={idx}>
                    <p className="text-[#484848] exo2  text-[16px]  hover:text-[#E41B13] cursor-pointer uppercase tracking-wider font-normal">
                      {link}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="w-full border-t border-gray-200 pt-6 flex items-center justify-center text-center">
          <p className="text-[#484848] exo2  text-[16px]   tracking-wider font-normal">
            © 2026 - ACCOR Lubrifiants | French manufacturer of lubricants and fluids
          </p>
        </div>

      </div>
    </footer>
  );
}
