import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const quickLinks1 = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'EU Projects', href: '#' },
    { name: 'Our Products', href: '#' },
  ];

  const quickLinks2 = [
    { name: 'ODMS', href: '#' },
    { name: 'Latest News', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Login', href: '#' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Sitemap', href: '#' },
  ];

  return (
    <footer className="w-full bg-white pt-20 pb-6 border-t border-gray-100">
      <div className="custom-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-8 mb-16">
          
          {/* Column 1: Logo and Text */}
          <div className="lg:col-span-2 flex flex-col items-start pr-4">
            <Link href="#" className="mb-4 block">
              <img src="/moto/amboils/logo.png" alt="AMB Oils Logo" className="w-[160px] h-auto object-contain" />
            </Link>
            <p className="oswald-font font-normal text-[#4e4e4e] section-text2 leading-[1.8]">
              Trusted worldwide for premium lubricants that deliver superior protection, efficiency, and consistent performance.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col lg:pl-6">
            <h4 className="teko-font font-semibold text-[#333333] card-title tracking-wide mb-2">Quick Links</h4>
            <hr className="border-t border-gray-200 mb-4 w-full" />
            <div className="grid grid-cols-2 gap-4">
              <ul className="flex flex-col gap-3">
                {quickLinks1.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="oswald-font font-normal text-[#333333] section-text hover:text-[#C99843] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {quickLinks2.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="oswald-font font-normal text-[#333333] section-text  hover:text-[#C99843] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Legal */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="teko-font font-semibold text-[#333333] card-title tracking-wide mb-2">Legal</h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="oswald-font font-normal text-[#333333] section-text hover:text-[#C99843] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-2 flex flex-col">
           <h4 className="teko-font font-semibold text-[#333333] card-title tracking-wide mb-2">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <img src="/moto/amboils/phone.png" alt="Phone" className="w-[16px] h-[16px] object-contain mt-1"  />
                <span className="oswald-font font-normal text-[#333333] section-text  leading-tight">+370 610 38717</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/amboils/mail.png" alt="Email" className="w-[16px] h-[16px] object-contain mt-1"  />
                <span className="oswald-font font-normal text-[#333333] section-text  leading-tight">info@amboils.eu</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/amboils/location.png" alt="Location" className="w-[16px] h-[16px] object-contain mt-1"  />
                <span className="oswald-font font-normal text-[#333333] section-text  leading-tight">
                  UAB "AMB Oils" - Ežero Str. 8,<br/>Vaitkūnų Village,<br/>LT-56278 Kaišiadorių District,<br/>Lithuania
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="teko-font font-semibold text-[#333333] card-title tracking-wide mb-2">Subscribe For More Information</h4>
            <p className="oswald-font font-normal text-[#333333] section-text leading-relaxed mb-6 pr-4">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from AMB OILS
            </p>
            <form className="relative w-full max-w-[320px] bg-white rounded border border-gray-100 p-1 flex shadow-[0_5px_20px_rgba(0,0,0,0.06)]">
              <input 
                type="email" 
                placeholder="Email Address...." 
                className="w-full bg-transparent px-3 text-[#555555] oswald-font font-normal text-[14px] outline-none placeholder:text-gray-400"
                required
              />
              <button 
                type="submit"
                className="w-10 h-8 bg-[#C99843] hover:bg-[#b08436] rounded text-white flex items-center justify-center transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <hr className="border-t border-gray-200 mb-6 w-full" />
        <div className="text-center oswald-font font-normal text-[#777777] section-text2">
          Copyright AMB Oils 2023-All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
