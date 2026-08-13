"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111520] pt-16 pb-6 text-white border-t border-gray-800 mt-auto">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-0 pb-16 border-b border-gray-700" data-aos="fade-up" data-aos-delay="100">
          
          {/* Column 1 - Brand & About */}
          <div className="w-full xl:w-[25%] flex flex-col gap-6 xl:pr-12 xl:border-r border-gray-300">
            <Link href="#" className="flex-shrink-0">
              <img 
                src="/moto/saria-international/logo.png" 
                alt="LION COMPLETE AUTO CARE" 
                className="w-48 h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              
            </Link>
            <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
              LION Complete Auto care offers premium lubricants, automotive fluids, and car care products for reliable performance and lasting protection.
            </p>
          </div>

          {/* Columns 2, 3, 4 wrapper */}
          <div className="w-full xl:w-[75%] flex flex-col xl:flex-row justify-between gap-10 xl:pl-40">
            
            <div className="flex flex-row justify-between md:justify-start gap-8 md:gap-24 w-full xl:w-auto">
              {/* Column 2 - Links */}
              <div className="flex flex-col gap-6">
                <h3 className="oswald-font font-semibold text-white card-text">Links</h3>
                <ul className="flex flex-col gap-4">
                  {['Home', 'About', 'Products', 'News', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="lato-font text-[#ffffff] section-text font-normal transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Social Media */}
              <div className="flex flex-col gap-6 lg:pl-20">
                <h3 className="oswald-font font-semibold text-white card-text">Social Media</h3>
                <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
                  <Link href="#" className="hover:opacity-80 transition-opacity hover:-translate-y-1 transform duration-300">
                    <img src="/moto/saria-international/fb.png" alt="Facebook" className="w-8 h-8 object-contain" />
                  </Link>
                  <Link href="#" className="hover:opacity-80 transition-opacity hover:-translate-y-1 transform duration-300">
                    <img src="/moto/saria-international/twtr.png" alt="Twitter" className="w-8 h-8 object-contain" />
                  </Link>
                  <Link href="#" className="hover:opacity-80 transition-opacity hover:-translate-y-1 transform duration-300">
                    <img src="/moto/saria-international/insta.png" alt="Instagram" className="w-8 h-8 object-contain" />
                  </Link>
                  <Link href="#" className="hover:opacity-80 transition-opacity hover:-translate-y-1 transform duration-300">
                    <img src="/moto/saria-international/you.png" alt="YouTube" className="w-8 h-8 object-contain" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 4 - Newsletter */}
            <div className="flex flex-col gap-6 max-w-xs">
              <h3 className="oswald-font font-semibold text-white card-text">News letter</h3>
              <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
                Subscribe to our newsletter to receive updates on the latest news!
              </p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Subscribe with us..." 
                  className="w-full bg-[#F1F1F1] text-[#4B5563] px-4 py-3 rounded focus:outline-none oswald-font sectin-text"
                />
                <Button type="submit" className="w-full !px-4">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex items-center justify-center text-center" data-aos="fade-up" data-aos-delay="100">
          <p className="oswald-font text-[#ffffff] section-text font-normal leading-relaxed">
            © 2026 Saria international. All prices displayed in USD. Checkout in USD. Powered by shopify
          </p>
        </div>

      </div>
    </footer>
  );
}
