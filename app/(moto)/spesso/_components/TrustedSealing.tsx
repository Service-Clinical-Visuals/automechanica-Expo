import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";


export default function TrustedSealing() {
  return (
    <section className="w-full py-16 md:py-24 bg-white px-4 lg:px-16">
      <div className="custom-container flex flex-col">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 md:mb-12">
          <div className="max-w-7xl" data-aos="fade-right">
            <h2 className="anton-font section-title text-[#2a2a2a] mb-4 tracking-wide">
              Comprehensive Coverage For Today's Vehicles
            </h2>
            <p className="overpass-font section-text text-[#5e5e5e] leading-relaxed max-w-7xl">
              With decades of manufacturing expertise, Spesso Gaskets S.r.l. delivers reliable engine, exhaust, and transmission gasket solutions, providing OEM-quality performance, dependable sealing, and long-lasting durability for the global automotive aftermarket.
            </p>
          </div>
          <div className="flex-shrink-0 self-start md:self-auto" data-aos="fade-left">
            <Button href="#">
              Discover More
            </Button>
          </div>
        </div>

        {/* Full width separator */}
        <hr className="w-full border-gray-200 mb-12 md:mb-16" />

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Video */}
          <div className="xl:col-span-8 w-full aspect-video rounded-3xl overflow-hidden border border-gray-100 relative bg-gray-50" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
          </div>

          {/* Right: Content */}
          <div className="xl:col-span-4 flex flex-col items-start" data-aos="fade-left">
            <h3 className="anton-font section-title1 text-[#2a2a2a] mb-5 tracking-wide">
              Trusted Sealing Technology
            </h3>
            
            {/* Column specific separator */}
            <hr className="w-full border-gray-200 mb-6" />

            <p className="overpass-font section-text text-[#5e5e5e] leading-relaxed mb-8">
              At AMB Oils UAB, every engine oil is carefully formulated to meet the evolving demands of modern engines. Combining innovative lubricant technology with rigorous quality control, our products provide exceptional protection, improved efficiency, and reliable performance, ensuring engines operate smoothly and
            </p>

            <ul className="flex flex-col gap-5">
              {[
                "Extensive Product Portfolio Covering Essential Engine, Exhaust, and Transmission Gasket Applications",
                "Continuous Product Development Supporting the Latest Automotive Technologies and Market Demands",
                "Reliable All-Season Performance - Delivers dependable lubrication and stable performance in both extreme heat and cold conditions.",
                "OEM-Equivalent Quality Manufactured with Precision Engineering and Strict Quality Standards"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[#da291c] flex items-center justify-center mt-1">
                    <Check size={14} strokeWidth={3.5} className="text-white" />
                  </div>
                  <span className="overpass-font section-text text-[#5e5e5e] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
