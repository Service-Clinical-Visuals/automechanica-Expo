"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
 
     <section className="w-full pt-[100px]  ">
          <div className="custom-container ">
           
            {/* Banner Container */}
            <div className="relative overflow-hidden w-full h-[100dvh] xl:h-auto xl:aspect-video rounded-[12px] xl:rounded-[24px]" data-aos="zoom-in" data-aos-delay="100">
              
              {/* Background Video */}
              <div className="absolute inset-0 w-full h-full">
                 <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
              </div>
              {/* Content */}
              <div className="absolute inset-0 z-20 p-6 pb-10 md:p-12 xl:px-24 xl:pb-32 xl:px-32 xl:pb-40 flex flex-col justify-end items-start">
                 <div className="max-w-lg mx-auo text-left flex flex-col gap-4">
                   <h1 className="!text-white banner-title font-normal anton-font  tracking-wide " data-aos="fade-right" data-aos-delay="300">
                     THE EXPERTS’ CHOICE                      
                   </h1>
                   <p className="section-text font-normal oswald-font" data-aos="fade-right" data-aos-delay="300">Developing premium lubricants with Dutch expertise, innovative technology, and uncompromising quality for over a century.</p>
                   
                  
                 </div>
              </div>
           
            </div>
          </div>
        </section>
  );
}
