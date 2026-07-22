import React from "react";
import Link from "next/link";

export default function Footer() {
  const products = [
    "Crankshaft pulleys",
    "Alternator pulleys",
    "Camshaft pulleys",
    "Wheel hubs",
    "Wheel bearings kit"
  ];

  const downloads = [
    "Catalogues",
    "Technical information",
    "Instructions"
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-[#2F9CCC] to-[#004D73] pt-16 pb-6 text-white overflow-hidden">
      <div className="custom-container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1: About & Newsletter */}
          <div className="flex flex-col xl:col-span-4" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
            <img 
              src="/moto/ijsgroup/footerlogo.png" 
              alt="I.J.S. Group Original Parts" 
              className="w-48 mb-6"
              onError={(e) => {
                e.currentTarget.src = "/moto/ijsgroup/logo.png"; // fallback
              }}
            />
            <p className="sora-font text-white section-text font-normal leading-relaxed mb-6">
              We are actually prepared for any type of exigency requested by our client. Our production media allow us to manufacture more than 1.000.000 units annually, of which 80% are destined for export.
            </p>
            <form className="flex w-full bg-white p-1 max-w-[280px]">
              <input 
                type="email" 
                placeholder="Please enter email" 
                className="w-full bg-transparent px-3 text-gray-700 outline-none text-[13px] sora-font"
                required
              />
              <button 
                type="submit"
                className="bg-[#00608C] hover:bg-[#004D73] text-white px-5 py-2 header-link oswald-font font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 2: Products */}
          <div className="flex flex-col xl:col-span-3 xl:pl-6" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
            <h3 className="oswald-font font-semibold card-text mb-4 border-b border-white/70 pb-2 inline-block w-full max-w-[240px]">
              Products
            </h3>
            <ul className="flex flex-col gap-5">
              {products.map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="sora-font section-text text-white hover:text-white flex items-center justify-between w-full max-w-[220px] group transition-colors"
                  >
                    <span>{item}</span>
                    <img src="/moto/ijsgroup/dblarw.png" alt="Arrow Right" className="w-6 h-auto" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Downloads */}
          <div className="flex flex-col xl:col-span-2" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">
            <h3 className="oswald-font font-semibold card-text mb-4 border-b border-white/70 pb-2 inline-block w-full max-w-[240px]">
              Downloads
            </h3>
            <ul className="flex flex-col gap-5">
              {downloads.map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="sora-font section-text text-white hover:text-white flex items-center justify-between w-full max-w-[220px] group transition-colors"
                  >
                    <span>{item}</span>
                    <img src="/moto/ijsgroup/dblarw.png" alt="Arrow Right" className="w-6 h-auto" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col xl:col-span-3 xl:pl-8" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            <h3 className="oswald-font font-semibold card-text mb-4 border-b border-white/70 pb-2 inline-block w-full max-w-[240px]">
              Contact
            </h3>
            <div className="sora-font section-text text-white flex flex-col gap-1 leading-relaxed">
              <p>Pol. Ind. Camp Llarg, Nave 7 - 8</p>
              <p>08740 Sant Andreu de la Barca</p>
              <p className="mb-3">Barcelona, SPAIN</p>
              <p>Tel.: +34 93 6821718</p>
              <p className="mt-1">Email: ijsgroup@ijsgroup.es</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <hr className="border-t border-white/70 mb-6" />
        <div className="text-center oswald-font btn-text text-white  font-medium"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          2026 © All rights reserved. INDUSTRIAS SARDAÑES, S.L.U.
        </div>
        
      </div>
    </footer>
  );
}
