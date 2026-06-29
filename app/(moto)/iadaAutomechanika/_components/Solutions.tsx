"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Solutions() {
  return (
    <section className="w-full py-16 bg-white" data-aos="fade-up">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-[38px] !font-normal text-[#1e1e1e] leading-tight amaranth">
            High-Performance Automotive Solutions
          </h2>
          <div className="flex-shrink-0 w-full md:w-auto flex justify-start md:justify-end">
             <Button href="#" className="whitespace-nowrap">Explore Products</Button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-12" />

        {/* Content Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-10 items-start">
          
          {/* Left side: Placeholder Image/Video */}
          <div className="w-full aspect-video rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden relative xl:col-span-7">
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>
          {/* Right side: Text Content */}
          <div className="flex flex-col gap-6 xl:col-span-5">
            
            <p className="text-[#5e676b] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
               IADA engine oils are engineered to meet the performance demands of modern gasoline and diesel engines, delivering exceptional lubrication, durability, and reliability in every driving condition. Formulated with premium-quality base oils and advanced additive technology, our engine oils help reduce friction, minimize engine wear, and maintain superior cleanliness for long-lasting performance.
            </p>
            
            <p className="text-[#5e676b] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
               They provide excellent resistance to heat, oxidation, and oil degradation, ensuring consistent lubrication during both cold starts and high-temperature operation. Whether used in passenger cars, commercial vehicles, or heavy-duty equipment.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              <div className="flex items-start gap-3">
                 <CheckCircle2 className="fill-[#C00027] text-white flex-shrink-0 mt-2" size={24} />
                 <p className="text-[#5e676b] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
                   <strong className="!text-[#353a3d] font-normal">Superior Engine Protection</strong> - Advanced lubrication technology forms a strong protective film that reduces friction, minimizes wear on critical engine components, and helps extend engine life while maintaining reliable performance under demanding operating conditions.
                 </p>
              </div>
              <div className="flex items-start gap-3">
                 <CheckCircle2 className="fill-[#C00027] text-white flex-shrink-0 mt-2" size={24} />
                 <p className="text-[#5e676b] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
                   <strong className="!text-[#353a3d] font-normal">Enhanced Engine Efficiency & Cleanliness </strong> -  High-performance additives resist oxidation, reduce sludge and deposit formation, maintain engine cleanliness, and support smoother operation with longer-lasting oil performance.
                 </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
