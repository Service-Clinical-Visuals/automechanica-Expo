"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Explore360() {
  return (
    <section className="py-20 md:py-28 bg-[#f3f5f7] w-full overflow-hidden">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center mb-16">
          
          {/* Left Side: Content */}
          <div className="xl:col-span-5" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="section-title text-[#272727] font-semibold mb-6 oswald leading-tight">
              <span className="relative inline-block pb-2">
                Explore AMC Components
                <span className="absolute left-0 bottom-0 w-[90%] h-1 bg-primary"></span>
              </span>{" "}
              in 360°
            </h2>
            
            <div className="space-y-6">
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed mb-8">
                Discover the precision engineering and advanced manufacturing behind AMC's automotive components through an immersive 360° experience. Explore the detailed design, structure, and quality of our high-performance engine parts developed for demanding automotive applications.
              </p>
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed mb-8">
                AMC specializes in the manufacturing of high-performance engine components, including camshafts, cylinder heads, valves, and tappets. By combining advanced manufacturing technologies, precision machining processes, and more than six decades of automotive expertise, AMC delivers reliable, durable, and efficient solutions for global automotive applications.
              </p>
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed mb-8">
                From initial design and prototyping to casting and final production, every component is developed with strict quality standards to ensure durability, performance, and efficiency. The 360° view highlights the engineering excellence and attention to detail behind each AMC product.
              </p>
            </div>
          </div>

          {/* Right Side: 360 Video Player */}
          <div className="xl:col-span-7" data-aos="fade-left" data-aos-duration="1000">
            <div className="w-full aspect-video  bg-white rounded-xl overflow-hidden shadow-lg relative flex items-center justify-center">
               <DynamicVideoPlayer 
                type="360"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-10" data-aos="fade-up" />

        {/* Bottom Section */}
        <div 
          className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8"
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed  max-w-5xl">
            Experience the innovation, precision, and craftsmanship that have established AMC as a trusted partner in the global automotive industry. With advanced engineering expertise, modern manufacturing technologies, and a strong commitment to quality, AMC delivers high-performance component solutions for OEM, OES, and aftermarket markets worldwide, meeting the highest standards of reliability and efficiency.
          </p>
          
          <div className="flex-shrink-0">
            <Button href="#" variant="primary" showArrow={true}>
              Explore Now
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
