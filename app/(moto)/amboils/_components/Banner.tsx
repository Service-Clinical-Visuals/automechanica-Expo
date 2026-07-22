"use client";
import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
   
       <section className="w-full pt-24 md:pt-28  flex flex-col">
          <div className="custom-container ">
           
            {/* Banner Container */}
            <div className="relative overflow-hidden w-full h-[100dvh] xl:h-auto xl:aspect-video rounded-[12px] xl:rounded-[24px]" data-aos="zoom-in" data-aos-delay="100">
              
              {/* Background Video */}
              <div className="absolute inset-0 w-full h-full">
                 <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
              </div>
              {/* Content */}
                 
           <div className="absolute inset-0 z-20 flex flex-col justify-end px-8 md:px-12 pb-30 ">
          <div className="max-w-3xl" data-aos="fade-up" data-aos-delay="200">
          <h1 className="teko-font font-semibold text-white banner-title leading-[1.1] mb-4 tracking-wide">
                 Engineered for Every Engine, Trusted in Every Drop
               </h1>
               <p className="oswald-font font-normal text-white section-text leading-relaxed opacity-90 max-w-2xl">
                 AMB Oils are produced from the highest quality raw materials with specially combined additives — delivering an outstanding lubricating film under any working temperature.
              </p>
             </div>
          </div>
           
            </div>
          </div>
        </section>
  );
}
