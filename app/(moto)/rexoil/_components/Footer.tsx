import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#11121B] pt-12 md:pt-16 pb-6 border-t border-gray-800">
      <div className="custom-container">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 mb-12">
          
          {/* Column 1: Logo, Address, Socials */}
          <div className="flex flex-col gap-6 col-span-2 md:col-span-3 xl:col-span-3 lg:pr-4" data-aos="fade-up" data-aos-delay="100">
            <div className="flex-shrink-0 flex items-center">
              <img src="/moto/rexoil/logo.png" alt="logo.png" className="w-[170px] md:w-[200px] h-auto object-contain" />
            </div>
            <p className="section-text text-[#ffffff] niramit leading-[1.8]">
              İçerenköy Mh. Erkut Sk. Üner Plaza A Blok Apt. 4/1/16 34752 Kozyatağı - Ataşehir / İSTANBUL
            </p>
            <div>
              <h4 className="text-white font-semibold mb-3 exo-2 card-title">Social</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src="/moto/rexoil/fb.png" alt="Facebook" className="w-auto h-6 object-contain" />
                </a>
                <a href="#" className="rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src="/moto/rexoil/insta.png" alt="Instagram" className="w-auto h-6 object-contain" />
                </a>
                <a href="#" className="rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src="/moto/rexoil/linkedin.png" alt="LinkedIn" className="w-auto h-6 object-contain" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col col-span-1 md:col-span-1 xl:col-span-2 xl:pl-12" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-semibold mb-6 exo-2 card-title">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'Products', 'Gallery', 'Instruments', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="section-text text-[#ffffff] hover:text-[#A27F41] transition-colors niramit">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="flex flex-col col-span-1 md:col-span-1 xl:col-span-2 xl:pl-4" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-white font-semibold mb-6 exo-2 card-title">Our Products</h4>
            <ul className="flex flex-col gap-4">
              {['Automotive Lubricants', 'Industrial Lubricants', 'Process Oils', 'Greases', 'Marine Oils', 'Other Products'].map((item) => (
                <li key={item}>
                  <Link href="#" className="section-text text-[#ffffff] hover:text-[#A27F41] transition-colors niramit">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col col-span-2 md:col-span-1 xl:col-span-2" data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-white font-semibold mb-6 exo-2 card-title">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+902165774300" className="section-text text-[#ffffff] hover:text-[#A27F41] transition-colors niramit underline underline-offset-4 decoration-[#d1d5db]/30">
                  Ph : +90 216 577 43 00
                </a>
              </li>
              <li>
                <a href="tel:+902165774308" className="section-text text-[#ffffff] hover:text-[#A27F41] transition-colors niramit underline underline-offset-4 decoration-[#d1d5db]/30">
                  Ph : +90 216 577 43 08
                </a>
              </li>
              <li>
                <a href="mailto:info@rexoil.com.tr" className="section-text text-[#ffffff] hover:text-[#A27F41] transition-colors niramit">
                  info@rexoil.com.tr
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="flex flex-col col-span-2 md:col-span-3 xl:col-span-3" data-aos="fade-up" data-aos-delay="500">
            <h4 className="text-white font-semibold mb-6 exo-2 card-title">Subscribe to Our Newsletter</h4>
            <form className="flex flex-col xl:flex-row w-full bg-white rounded-md overflow-hidden p-1 shadow-sm h-auto xl:h-[48px]">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-2 xl:px-3 py-2 text-black outline-none niramit min-w-0 bg-transparent text-[13px] 2xl:text-base"
                required
              />
              <button 
                type="submit" 
                className="bg-[#A27F41] hover:bg-[#8b6b37] text-white px-3 2xl:px-6 transition-colors niramit font-semibold text-[13px] 2xl:text-base whitespace-nowrap rounded-md"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          
        </div>

        {/* Horizontal Divider */}
        <hr className="border-t border-white/80 my-6 md:my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-center lg:text-left" data-aos="fade-up" data-aos-delay="600">
          <p className="text-[#ffffff] section-text niramit text-sm">
            Protection of Personal Data Law Clarification Text | Explicit Consent Text | Explicit Consent Text
          </p>
          <p className="text-[#ffffff] section-text niramit text-sm">
            Copyright © <span className="underline underline-offset-2">rexoil</span> Ltd. 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
