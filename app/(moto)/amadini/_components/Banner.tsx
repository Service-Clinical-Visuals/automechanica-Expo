"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
   
     <section className="w-full pt-24 md:pt-26 pb-8 flex flex-col">
              <div className="custom-container">
                {/* Banner Container */}
                <div
                  className="relative overflow-hidden w-full h-[85vh] min-h-[500px] xl:h-auto xl:aspect-[16/8] rounded-[20px] md:rounded-[24px]  shadow-xl"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
        {/* Background Video */}
        <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover " />
        
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 xl:p-16 ">
          <div className="max-w-4xl">
            <h1 className="text-white banner-title font-semibold mb-4  leading-tight">
              Driving Automotive Excellence Since 1961
            </h1>
            <p className="text-white section-text max-w-4xl leading-relaxed">
              Amadini combines decades of industry experience with advanced engineering to provide premium automotive parts that deliver exceptional quality, reliable performance, and trusted solutions for customers worldwide.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
