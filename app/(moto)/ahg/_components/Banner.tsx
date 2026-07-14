"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
     <section className="w-full pt-[100px] bg-white">
          <div className="custom-container">
            {/* Banner Container */}
            <div className="relative overflow-hidden w-full h-[100dvh] xl:h-auto xl:aspect-video rounded-b-3xl " data-aos="zoom-in" data-aos-delay="100">
              
              {/* Background Video */}
              <div className="absolute inset-0 w-full h-full mix-blend-screen">
                 <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 pb-10 px-4 xl:px-20 xl:pb-32 flex flex-col justify-end items-start">
                 <div className=" text-left flex flex-col gap-4">
                   <h1 className="!text-white banner-title font-normal oswald-font tracking-wide" data-aos="fade-right" data-aos-delay="300">
                     Specialists In Exhaust Technology
                   </h1>
                   <p className="section-text font-normal oswald-font text-[#ffffff] max-w-md" data-aos="fade-right" data-aos-delay="300">
                     Development, manufacturing and distribution of exhaust and exhaust gas purification systems for motor vehicles.
                   </p>
                 </div>
              </div>
            </div>
          </div>
        </section>
  );
}
