"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="w-full pt-4 xl:pt-4" data-aos="fade-up">
      <div className="custom-container">
       
        {/* Banner Container */}
        <div className="relative overflow-hidden w-full h-[100dvh] xl:h-auto xl:aspect-video rounded-[12px] xl:rounded-[24px]" data-aos="zoom-in" data-aos-delay="100">
          
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full">
             <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
          </div>
          {/* Content */}
          <div className="absolute inset-0 z-20 p-8 md:p-16 lg:px-20 lg:pb-24 flex flex-col justify-end items-start">
             <div className="max-w-4xl text-left flex flex-col gap-6">
               <h1 className="!text-white text-3xl md:text-4xl lg:text-[40px] font-normal amaranth leading-[1.25] tracking-wide">
                  More than 60 years manufacturing <br className="hidden md:block" />
                  chemicals for car maintenance and care.
               </h1>
               
               <div>
                  <Button href="#" className="border border-[#ffffff]">Explore Products</Button>
               </div>
             </div>
          </div>
       
        </div>
      </div>
    </section>
 
  );
}
