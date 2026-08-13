"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";


export default function Banner() {
  return (
   

       <section className="w-full pt-10  bg-[#008F33]">
          <div className="custom-container">
           
            {/* Banner Container */}
            <div className="relative overflow-hidden w-full h-[100dvh] xl:h-auto xl:aspect-video rounded-[12px] xl:rounded-[24px]" data-aos="zoom-in" data-aos-delay="100">
              
              {/* Background Video */}
              <div className="absolute inset-0 w-full h-full">
                 <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
              </div>
              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 md:p-16 lg:px-20 lg:pb-40 flex flex-col justify-end items-start">
                  <div className="max-w-4xl text-left" data-aos="fade-up" data-aos-duration="1000">
                <div className="flex items-center gap-4 lg:gap-5 mb-5">
                  <div className="w-1.5 h-10 lg:h-12 bg-[#F3DD01] rounded-full"></div>
                  <h1 className="banner-title font-bold text-white font-chakra  tracking-wide">
                    Make the Right Change
                  </h1>
                </div>
                <div className="ml-[22px] lg:ml-[26px]">
                  <Button href="#products" variant="primary" className="text-sm lg:text-base px-6 lg:px-8 py-3 rounded-lg">
                    Explore Product
                  </Button>
                </div>
              </div>
              </div>
           
           
            </div>
          </div>
        </section>
  );
}
