import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#28282b] pt-16 pb-6 mt-auto">
      <div className="custom-container">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-8 xl:gap-0 justify-between mb-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="w-full md:w-[25%] lg:w-[28%] xl:w-[30%] flex flex-col">
            <img src="/moto/ardeca/logo.png" alt="Ardeca Lubricants" className="w-[180px] md:w-[200px] lg:w-[220px] mb-6 object-contain" />
            <p className="text-[#ffffff] text-sm md:text-[16px] oxanium leading-[1.8] mb-6">
              By carrying out this strategy successfully the company managed to increase its production volume significantly over the last years and became an important player in the worldwide market with local distributors in more than 65 countries.
            </p>
            <h4 className="text-white font-semibold text-lg chakra-petch mb-4">Socials</h4>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:opacity-80 transition-opacity hover:bg-[#CE0E2D] rounded-sm p-1"><img src="/moto/ardeca/in.png" alt="LinkedIn" className="w-5 h-5 object-contain" /></Link>
              <Link href="#" className="hover:opacity-80 transition-opacity hover:bg-[#CE0E2D] rounded-sm p-1"><img src="/moto/ardeca/you.png" alt="YouTube" className="w-5 h-5 object-contain" /></Link>
              <Link href="#" className="hover:opacity-80 transition-opacity hover:bg-[#CE0E2D] rounded-sm p-1"><img src="/moto/ardeca/insta.png" alt="Instagram" className="w-5 h-5 object-contain" /></Link>
              <Link href="#" className="hover:opacity-80 transition-opacity hover:bg-[#CE0E2D] rounded-sm p-1"><img src="/moto/ardeca/fb.png" alt="Facebook" className="w-5 h-5 object-contain" /></Link>
            </div>
          </div>

          {/* Right Columns Container (Links & Contact) */}
          <div className="w-full md:w-[60%] lg:w-[70%] xl:w-[65%] grid grid-cols-2 xl:grid-cols-12 gap-x-4 gap-y-8 xl:gap-8">
            
            {/* Column 2: Quick links */}
            <div className="col-span-1 xl:col-span-2 flex flex-col">
              <h4 className="text-white font-semibold text-lg chakra-petch mb-4">Quick links</h4>
              <ul className="flex flex-col gap-4">
                {['Home', 'About Us', 'Products', 'Academy', 'News'].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-white hover:text-[#CE0E2D] text-sm md:text-[16px] oxanium leading-[1.8]">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="col-span-1 xl:col-span-3 flex flex-col">
              <h4 className="text-white font-semibold text-lg chakra-petch mb-4">Products</h4>
              <ul className="flex flex-col gap-4">
                {[
                  'Passenger car engine oil', 
                  'Heavy duty engine oil', 
                  'Automatic transmission', 
                  'Manual transmission'
                ].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-white hover:text-[#CE0E2D] text-sm md:text-[16px] oxanium leading-[1.8]">{link}</Link>
                  </li>
                ))}
                <li>
                  <Link href="#" className="text-[#CE0E2D] hover:text-[#a50b24] text-sm md:text-[16px] oxanium leading-[1.8] font-semibold">See More ...</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="col-span-2 sm:col-span-1 xl:col-span-3 flex flex-col">
              <h4 className="text-white font-semibold text-lg chakra-petch mb-4">Contact</h4>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-4 h-4 mt-1.5 shrink-0 bg-white group-hover:bg-[#CE0E2D] transition-colors duration-300" style={{ WebkitMaskImage: 'url(/moto/ardeca/location.png)', maskImage: 'url(/moto/ardeca/location.png)', WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }}></div>
                  <span className="text-white group-hover:text-[#CE0E2D] transition-colors duration-300 text-sm md:text-[16px] oxanium leading-[1.8]">Oudenaardestraat 49<br/>8570 Vichte, Belgium</span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-4 h-4 shrink-0 bg-white group-hover:bg-[#CE0E2D] transition-colors duration-300" style={{ WebkitMaskImage: 'url(/moto/ardeca/phone.png)', maskImage: 'url(/moto/ardeca/phone.png)', WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }}></div>
                  <span className="text-white group-hover:text-[#CE0E2D] transition-colors duration-300 text-sm md:text-[16px] oxanium leading-[1.8]">+3256726229</span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-4 h-4 shrink-0 bg-white group-hover:bg-[#CE0E2D] transition-colors duration-300" style={{ WebkitMaskImage: 'url(/moto/ardeca/fax.png)', maskImage: 'url(/moto/ardeca/fax.png)', WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }}></div>
                  <span className="text-white group-hover:text-[#CE0E2D] transition-colors duration-300 text-sm md:text-[16px] oxanium leading-[1.8]">+3256726737</span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-4 h-4 shrink-0 bg-white group-hover:bg-[#CE0E2D] transition-colors duration-300" style={{ WebkitMaskImage: 'url(/moto/ardeca/mail.png)', maskImage: 'url(/moto/ardeca/mail.png)', WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }}></div>
                  <span className="text-white group-hover:text-[#CE0E2D] transition-colors duration-300 text-sm md:text-[16px] oxanium leading-[1.8]">info@ardeca-lubricants.be</span>
                </li>
              </ul>
            </div>

            {/* Column 5: Get in touch */}
            <div className="col-span-2 sm:col-span-1 xl:col-span-4 flex flex-col xl:pl-4">
              <h4 className="text-white font-semibold text-lg chakra-petch mb-6">Get in touch</h4>
              <div className="flex items-center w-full bg-white p-1.5 shadow-sm">
                <input 
                  type="email" 
                  placeholder="Enter Your Email id" 
                  className="bg-transparent text-black px-4 py-2 text-[15px] outline-none w-full oxanium placeholder:text-[#b0b0b0]"
                />
                <button className="bg-[#CE0E2D] hover:bg-[#a50b24] transition-colors w-[42px] h-[42px] flex items-center justify-center shrink-0">
                  <img src="/moto/ardeca/Arrow 2.png" alt="arrow icon" className="w-5 h-5 object-contain" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 border-t border-[#ffffff]/40 flex flex-col  lg:flex-row justify-between items-center gap-4">
           <p className="text-[#ffffff] text-sm md:text-[16px] oxanium leading-[1.8]">
            Copyrights@2026 Ardeca .All rights Reserved
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="#" className="text-white hover:text-[#CE0E2D] text-sm md:text-[16px] oxanium leading-[1.8] transition-colors">Privacy Statement</Link>
            <Link href="#" className="text-white hover:text-[#CE0E2D] text-sm md:text-[16px] oxanium leading-[1.8] transition-colors">Cookies Policy</Link>
            <Link href="#" className="text-white hover:text-[#CE0E2D] text-sm md:text-[16px] oxanium leading-[1.8] transition-colors">Cookies settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
