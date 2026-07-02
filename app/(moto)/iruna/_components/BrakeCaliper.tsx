"use client";

import React from 'react';
import DynamicVideoPlayer from '../../../_components/DynamicVideoPlayer';

export default function BrakeCaliper() {
  return (
    <section className="relative w-full bg-[#2b2b2b] overflow-hidden">
      
      {/* Absolute Video Background for Desktop (Spans exact right half of the viewport) */}
      <div className="absolute top-0 right-0 w-[50vw] h-full hidden xl:block z-0">
        <DynamicVideoPlayer 
          type="360" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full h-full ">
          
          {/* Left Side: Content */}
          <div className="flex flex-col justify-center py-12 md:py-24 gap-6 lg:gap-8 lg:pr-6 xl:pr-8" data-aos="fade-right">
            <div className="relative inline-block self-start">
              <h2 className="section-title font-bold oxanium text-white relative z-10 leading-tight">
                Brake Caliper <span className="text-[#CF0A2C] oxanium section-title">02</span>
              </h2>
              {/* The maroon/red stripe behind the text */}
              <div className="absolute left-0 top-[55%] -translate-y-1/2 h-[4px] w-[85%] bg-[#CF0A2C] z-0"></div>
            </div>
            
            <div className="space-y-6 leading-[1.8]">
              <p className="sora text-[#ffffff] section-text leading-[1.8]">
                Our Brake Calipers are engineered to deliver reliable braking performance for both OEM and
                aftermarket applications. Designed and manufactured entirely in-house, they ensure high quality,
                precision, and consistency across every stage of production.
              </p>
              <p className="sora text-[#ffffff] section-text leading-[1.8]">
                The system supports integrated parking brake functionality and can be equipped with an
                automatic pad wear adjustment mechanism when required, improving operational efficiency and
                reducing maintenance requirements.
              </p>
              <p className="sora text-[#ffffff] section-text leading-[1.8]">
                Advanced SAHR (Spring Applied Hydraulic Release) brake design capabilities further enhance
                performance and safety across different vehicle conditions. With dedicated testing facilities,
                complete in-house production control, and thorough product validation processes, every
                component is developed to meet demanding industry standards.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side: Mobile Video (Full Width) */}
      <div className="w-full aspect-video flex items-center justify-center xl:hidden relative z-10" data-aos="fade-up">
        <DynamicVideoPlayer 
          type="360" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
