"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end pt-32">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 bg-[#05051a]">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover "
        />
       
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-10 pb-20 md:pb-32 lg:pb-40">
        <div className="max-w-4xl text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title mb-4 leading-tight font-medium text-white  tracking-wide">
            Leading the Future of Lubrication
          </h1>
          <p className="section-text max-w-3xl font-medium text-white">
            Delivering premium lubricant solutions to over 40 countries with advanced technology, exceptional quality, and reliable performance for automotive and industrial applications.
          </p>
        </div>
      </div>
    </section>
  );
}
