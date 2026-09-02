"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import AutopumpsButton from "./AutopumpsButton";

export default function Banner() {
  return (
      <section className="w-full pt-24 md:pt-26 flex flex-col">
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
             <div className="max-w-xl">
               <h1 className="text-white oswald banner-title font-semibold mb-4  leading-tight mb-2">
                 Advanced Lubrication Solutions
               </h1>
               <p className="text-white oswald section-text max-w-xl leading-relaxed mb-4">
                 Since 1975, ELDON'S has delivered premium lubricants and specialty fluids, trusted in 30+ countries for reliable performance.
               </p>
             </div>
             <AutopumpsButton href="/autopumps/products" variant="primary" className="w-full mb-6">
               Explore Products
             </AutopumpsButton>
           </div>
         </div>
         </div>
       </section>
  );
}
