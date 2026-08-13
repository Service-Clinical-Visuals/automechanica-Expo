"use client";
import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ProductionFacilities() {
  const listItems = [
    "Modern production facilities equipped with advanced blending, filling, and packaging technology.",
    "ISO-certified laboratories ensure every product meets strict quality and performance standards.",
    "Reliable global logistics with efficient worldwide delivery"
  ];

  return (
    <section className="w-full bg-[#202020] py-16 md:py-24">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Column - Video */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg relative  flex items-center justify-center order-2 xl:order-1" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-6 order-1 xl:order-2" data-aos="fade-left">
            <h2 className="oswald-font font-semibold text-[#ffffff] section-title mb-3">
              Explore Our Production Facilities
            </h2>
            <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
              Our advanced production facilities in the USA combine modern technology, efficient manufacturing, and strict quality control to produce a wide range of automotive lubricants, fluids, and car care products. From research and development to packaging and global distribution, every stage is carefully monitored to ensure consistent quality and reliable performance. Supported by ISO-certified laboratories, automated production lines, and advanced logistics, we deliver dependable automotive solutions to customers worldwide.
            </p>
            
            <ul className="flex flex-col gap-4 mt-2">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-5 h-[3px] bg-[#FDBB2D] mt-2.5 rounded-sm flex-shrink-0"></span>
                  <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Button href="#">
                Explore More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
