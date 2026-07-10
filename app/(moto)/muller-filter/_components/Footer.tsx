import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className='bg-[#008F33]'>
    <footer className="w-full  pt-12 lg:pt-16">
      <div className="custom-container">
        <div className="bg-[#f8f9fa] rounded-2xl  p-8 lg:p-14 relative overflow-hidden shadow-xl mb-4 lg:mb-6 px-6 lg:px-20 border-2 border-[#F3DD01]" data-aos="fade-up">
          {/* Mirrored Background Image */}
          <div className="absolute inset-0 pointer-events-none footerbg" style={{ transform: 'scaleY(-1) scaleX(-1)' }}></div>
        
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-4 md:gap-x-12 lg:gap-8">
          
          {/* Column 1: Logo & Newsletter */}
          <div className="flex flex-col gap-6 col-span-2 md:col-span-7 xl:col-span-5 xl:pr-10">
            <Link href="#">
              <img src="/moto/muller-filter/logo1.png" alt="Muller Filter Logo" className="w-[100px] h-auto object-contain" />
            </Link>
            <p className="text-[#333333] section-text font-chakra  max-w-lg font-semibold">
              All the production processes follow the international operating procedures.
            </p>
            <div className="flex w-[100%] md:w-[90%] mt-2 shadow-sm  overflow-hidden gap-2">
              <input 
                type="email" 
                placeholder="Please Enter Email" 
                className="w-[60%] bg-[#008F33] text-white placeholder-white/80 px-4 py-3 header-link focus:outline-none font-chakra rounded-md font-semibold"
              />
              <Link href="#" className="w-[40%] bg-[#F3DD01] hover:bg-[#e5b800] text-gray-900 font-semibold px-2 py-3 header-link transition-colors whitespace-nowrap text-center font-chakra rounded-md">
                Subscribe
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 col-span-1 md:col-span-5 xl:col-span-2 md:pl-16 xl:pl-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-10 lg:h-12 bg-[#F3DD01] rounded-full"></div>
              <h4 className="font-bold font-chakra text-[#1e1e1e] sub-title">Quick Links</h4>
            </div>
            <ul className="flex flex-col gap-4 header-link font-mulish font-semibold">
              <li><Link href="#" className="text-[#008F33]">Home</Link></li>
              <li><Link href="#" className="text-[#333333] hover:text-[#008F33] transition-colors">Company</Link></li>
              <li><Link href="#" className="text-[#333333] hover:text-[#008F33] transition-colors">Products</Link></li>
              <li><Link href="#" className="text-[#333333] hover:text-[#008F33] transition-colors">Online Catalog</Link></li>
              <li><Link href="#" className="text-[#333333] hover:text-[#008F33] transition-colors">Quality</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Company */}
          <div className="flex flex-col gap-6 col-span-1 md:col-span-5 xl:col-span-2 xl:pl-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-10 lg:h-12 bg-[#F3DD01] rounded-full"></div>
              <h4 className="font-bold font-chakra text-[#1e1e1e] sub-title">Our Company</h4>
            </div>
            <ul className="flex flex-col gap-4 header-link font-mulish font-semibold">
              <li><Link href="#" className="text-[#333333] hover:text-[#008F33] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-[#333333] hover:text-[#008F33] transition-colors">CGV Italia</Link></li>
              <li><Link href="#" className="text-[#333333] hover:text-[#008F33] transition-colors">CGV International</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-6 col-span-2 md:col-span-7 xl:col-span-3">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-10 lg:h-12 bg-[#F3DD01] rounded-full"></div>
              <h4 className="font-bold font-chakra text-[#1e1e1e] sub-title">Contact Info</h4>
            </div>
            <ul className="flex flex-col gap-5 header-link font-mulish font-semibold text-[#333333]">
              <li className="flex items-start gap-4">
                <img src="/moto/muller-filter/map.png" alt="Address" className="w-[20px] h-[20px] object-contain mt-0.5" />
                <span className="leading-[1.4]">Stradale Circonvallazione 16<br/>10060 Bricherasio (TO) – Italy</span>
              </li>
              <li className="flex items-center gap-4">
                <img src="/moto/muller-filter/phone.png" alt="Phone" className="w-[20px] h-[20px] object-contain" />
                <span>+39 0121 598089</span>
              </li>
              <li className="flex items-center gap-4">
                <img src="/moto/muller-filter/printer.png" alt="Fax" className="w-[20px] h-[20px] object-contain" />
                <span>+39 0121 598551</span>
              </li>
              <li className="flex items-center gap-4">
                <img src="/moto/muller-filter/mail.png" alt="Email" className="w-[20px] h-[20px] object-contain" />
                <span>info@mullerfilter.com</span>
              </li>
            </ul>
          </div>

        </div>
        </div>
      </div>
      
      {/* Copyrights */}
      <div className="text-center pb-4 text-white section-text font-mulish font-bold">
        &copy; Copyrights 2026 <span className="text-[#F3DD01] font-bold">Muller Filter</span>. All rights Reserved
      </div>
    </footer>
    </section>
  );
}
