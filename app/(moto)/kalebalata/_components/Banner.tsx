import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
     <section className="w-full pt-[100px]  ">
             <div className="custom-container ">
              
               {/* Banner Container */}
               <div className="relative overflow-hidden w-full h-[100dvh] xl:h-auto xl:aspect-video rounded-xl border border-[#ffffff]/30" data-aos="zoom-in" data-aos-delay="100">
                 
                 {/* Background Video */}
                 <div className="absolute inset-0 w-full h-full">
                    <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
                 </div>
                 {/* Content */}
                 <div className="absolute inset-0 z-20 p-6 pb-10 md:p-12 xl:pb-32 xl:pb-40 flex flex-col justify-end items-start">
                    <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 xl:gap-10">
                      <h1 className="!text-white banner-title font-normal anton-font tracking-wide max-w-3xl" data-aos="fade-right" data-aos-delay="300">
                        High Performance, Durability and Reliability               
                      </h1>
                      <p className="header-link font-normal oswald-font text-white xl:max-w-md xl:text-right" data-aos="fade-left" data-aos-delay="400">
                        Superior braking technology for every vehicle, backed by 50 years of experience.
                      </p>
                    </div>
                 </div>
              
               </div>
             </div>
           </section>
  );
}
