"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Factory, Globe } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

          {/* Left Image */}
          <div className="w-full h-full lg:col-span-6" data-aos="fade-right">
            <img
              src="/moto/orijin/abt.png"
              alt="Orjin Automotive Facility"
              className="w-full h-full object-cover rounded-xl shadow-sm"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-xl">Facility Image</div>' }}
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6 lg:col-span-6" data-aos="fade-left">
            <h2 className="section-title oswald-font font-semibold text-[#272727] leading-tight mb-2">
              Trusted Excellence in Automotive Manufacturing
            </h2>

            <div className="flex flex-col gap-4 text-[#4B5563] font-regular rubik-font section-text leading-relaxed">
              <p>
                <strong>Orjin Automotive</strong> specializes in manufacturing premium steering and suspension components through advanced engineering, precision manufacturing, and continuous innovation. Operating from its modern 15,000 m² production facility in Bursa, Turkey, the company delivers reliable automotive solutions that meet international quality standards.
              </p>
              <p>
                With a strong commitment to quality, customer satisfaction, and technological advancement, Orjin serves customers in more than 40 countries across Europe, South America, North Africa, and the Middle East. Backed by a skilled workforce, advanced manufacturing capabilities, and an extensive product portfolio, the company continues to deliver durable, precision-engineered, and high-performance steering and suspension components trusted by the global automotive aftermarket.
              </p>
              <p>
                Committed to quality and innovation, Orjin serves customers in over 40 countries with reliable, precision-engineered steering and suspension solutions.
              </p>
            </div>

            <div className="mt-4">
              <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 border-[3px] border-[#F39200] text-[#272727] font-semibold btn-text rounded-[6px] hover:bg-[#F39200] hover:text-white transition-colors">
                Explore Now About Us
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="flex border border-[#F39200] rounded-[5px] overflow-hidden shadow-sm">
                <div className="bg-[#F39200] w-20 flex items-center justify-center flex-shrink-0 mr-3">
                  <img src="/moto/orijin/abt1.png" alt="Factory" className="w-auto h-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>' }} />
                </div>
                <div className="p-4 bg-white flex flex-col justify-center">
                  <h4 className="font-semibold oswald-font text-[#272727] card-title mb-1">Advanced Manufacturing</h4>
                  <p className="text-[#272727] card-text font-regular rubik-font">Precision-driven production.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex border border-[#F39200] rounded-[5px] overflow-hidden shadow-sm">
                <div className="bg-[#F39200] w-20 flex items-center justify-center flex-shrink-0 mr-3">
                  <img src="/moto/orijin/abt2.png" alt="Globe" className="w-auto h-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>' }} />
                </div>
                <div className="p-4 bg-white flex flex-col justify-center">
                  <h4 className="font-semibold oswald-font text-[#272727] card-title mb-1">Global Presence</h4>
                  <p className="text-[#272727] card-text font-regular rubik-font">Trusted worldwide.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
