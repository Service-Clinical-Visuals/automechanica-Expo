import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F0F4FF] pt-16 pb-4">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-12 gap-10 xl:gap-8 mb-8" data-aos="fade-up">
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col md:col-span-3 xl:col-span-5 xl:pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex flex-col">
               <img src="/moto/bluechem/icon.png" alt="Logo"  className="object-contain" />
              </div>
            </div>
            <p className="text-[#484848] font-normal text-[16px] md:text-[18px] oxanium leading-relaxed pr-4 xl:pr-12">
              Under the Thuringian state government&apos;s consulting guidelines, our company receives funding for consulting and process support.
            </p>
          </div>

          {/* Links & Products (Grouped for Mobile row) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-10 xl:gap-8 md:col-span-2 xl:col-span-4">
            {/* Column 2: Quick Links */}
            <div className="flex flex-col">
              <h3 className="text-[#0E4194] font-semibold oswald text-[18px] md:text-[20px] 4xl:text-[22px] mb-4 ">Quick links</h3>
              <ul className="flex flex-col gap-4 ">
                <li><Link href="#" className="text-[#484848] font-normal text-[16px] 4xl:text-[18px] hover:text-[#0E4194] transition-colors oxanium ">Home</Link></li>
                <li><Link href="#" className="text-[#484848] font-normal text-[16px] 4xl:text-[18px] hover:text-[#0E4194] transition-colors oxanium ">About Us</Link></li>
                <li><Link href="#" className="text-[#484848] font-normal text-[16px] 4xl:text-[18px] hover:text-[#0E4194] transition-colors oxanium ">Products</Link></li>
                <li><Link href="#" className="text-[#484848] font-normal text-[16px] 4xl:text-[18px] hover:text-[#0E4194] transition-colors oxanium ">News</Link></li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="flex flex-col">
              <h3 className="text-[#0E4194] font-semibold oswald text-[18px] md:text-[20px] 4xl:text-[22px] mb-4 ">Products</h3>
              <ul className="flex flex-col gap-4">
                <li><Link href="#" className="text-[#484848] font-normal text-[16px] 4xl:text-[18px] hover:text-[#0E4194] transition-colors oxanium ">Motor</Link></li>
                <li><Link href="#" className="text-[#484848] font-normal text-[16px] 4xl:text-[18px] hover:text-[#0E4194] transition-colors oxanium ">Exhaust System</Link></li>
                <li><Link href="#" className="text-[#484848] font-normal text-[16px] 4xl:text-[18px] hover:text-[#0E4194] transition-colors oxanium ">Diesel Fuel System</Link></li>
                <li><Link href="#" className="text-[#484848] font-normal text-[16px] 4xl:text-[18px] hover:text-[#0E4194] transition-colors oxanium ">Hybrid</Link></li>
                <li><Link href="#" className="text-[#0E4194] hover:text-[#0a3170] transition-colors oxanium font-semibold text-[16px] 4xl:text-[18px]">See All...</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col md:col-span-1 xl:col-span-3">
            <h3 className="text-[#0E4194] oswald font-bold text-lg mb-6">Contact Info</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <Image src="/moto/bluechem/location.png" alt="Location" width={18} height={18} className="mt-1 object-contain" />
                <p className="text-[#484848] font-normal !text-[16px] !4xl:text-[18px] hover:text-[#0E4194] transition-colors oxanium">
                  CTP GmbH Saalfelder Straße<br/>35h 07338 Leutenberg
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/moto/bluechem/phone.png" alt="Phone" width={18} height={18} className="object-contain" />
                <p className="text-[#484848] font-normal !text-[16px] !4xl:text-[18px] hover:text-[#0E4194] transition-colors oxanium">+49(0)36734/230-0</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/moto/bluechem/fax.png" alt="Fax" width={18} height={18} className="object-contain" />
                <p className="text-[#484848] font-normal !text-[16px] !4xl:text-[18px] hover:text-[#0E4194] transition-colors oxanium">+49(0)36734/230-22</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Socials & Newsletter */}
        <div className="border-t border-b border-[#0E4194] py-6 flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-6 xl:gap-0" data-aos="fade-up" data-aos-delay="100">
          {/* Socials */}
          <div className="flex flex-col items-center xl:items-start gap-2">
            <h4 className="text-[#0E4194] font-semibold oswald text-[18px] md:text-[20px] 4xl:text-[22px] text-center xl:text-left">Socials</h4>
            <div className="flex items-center justify-center xl:justify-start gap-5 md:gap-3">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src="/moto/bluechem/in.png" alt="LinkedIn" width={32} height={32} className="w-6 h-6 md:w-[22px] md:h-[22px] object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src="/moto/bluechem/you.png" alt="YouTube" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 md:w-[22px] md:h-[22px] object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src="/moto/bluechem/insta.png" alt="Instagram" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 md:w-[22px] md:h-[22px] object-contain" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image src="/moto/bluechem/fb.png" alt="Facebook" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 md:w-[22px] md:h-[22px] object-contain" />
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex items-center justify-center xl:justify-end gap-4 w-full xl:w-auto flex-col sm:flex-row">
            <h4 className="text-[#0E4194] font-semibold oswald text-[18px] md:text-[20px] 4xl:text-[22px] whitespace-nowrap text-center">Subscribe to Newsletter :</h4>
            <div className="flex items-center w-full sm:w-[350px] border-2 border-[#052c65] bg-white h-11 p-0.5">
              <input 
                type="email" 
                className="flex-1 h-full px-4 text-sm font-medium outline-none bg-transparent text-black" 
                placeholder=""
              />
              <button className="bg-[#052c65] hover:bg-[#0a3170] transition-colors text-white h-full px-8 oswald font-semibold text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 text-center" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
          <p className="text-[#0E4194] font-semibold text-xs md:text-sm">
            Copyrights@2026 Bluechem group .All rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
