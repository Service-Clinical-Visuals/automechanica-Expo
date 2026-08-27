"use client";

import React from "react";
import Button from "./Button";

export default function Partners() {
  return (
    <section className="py-16 xl:py-20 bg-white relative">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:col-span-7" data-aos="fade-right">
            <h2 className="section-title text-[#272727] oswald-font font-semibold leading-tight">
              Advanced Technologies & Services
            </h2>

            <div className="flex flex-col gap-3 text-[#4B5563] rubik-font section-text font-regular leading-relaxed">
              <p>
                <strong className="text-[#272727]">CEVAM</strong> offers a comprehensive range of alternators, starters, transmissions, steering systems, and air conditioning compressors designed for passenger vehicles, commercial vehicles, agricultural machinery, and industrial applications. With extensive expertise across both European and Asian vehicle markets, the company provides high-quality, reliable solutions that meet the diverse needs of the automotive industry, delivering dependable performance across a wide range of applications.
              </p>
              <p>
                Maintaining product availability of over 98%, CEVAM combines a well-managed inventory with an efficient distribution network to ensure fast and dependable deliveries. Regional depots enable H+4 delivery, while the central warehouse supports next-day dispatch, helping customers receive the right components when they need them.
              </p>
              <p>
                Supported by qualified professionals and a dedicated technical support team, CEVAM provides expert guidance to customers throughout the purchasing process. Its products are also listed in leading automotive catalogues such as TecDoc, Autossimo, Cicerone, and ETAI, making component identification and selection simple, accurate, and efficient.
              </p>
            </div>

            <div className="mt-2">
              <Button href="#" variant="outline" >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 w-full h-full rounded-[16px] overflow-hidden" data-aos="fade-left">
            <img
              src="/moto/cevam/partner.png"
              alt="Advanced Technologies & Services"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-[16px]">Image</div>' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
