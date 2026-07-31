"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Explore360 = () => {
  return (
    <section className="w-screen min-h-screen flex flex-col justify-center relative left-1/2 -translate-x-1/2 py-16 md:py-16 bg-[#011689] text-white !rounded-none">
      <div className="flex flex-col items-center gap-8 md:gap-10 w-full">

        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-4xl gap-4 md:gap-6" data-aos="fade-up">
          <h2 className="section-title font-primary font-bold text-white tracking-wide">
            360° Product Experience
          </h2>
          <p className="section-text font-secondary text-white/90 leading-relaxed">
            Experience Racing Oil's premium Engine Oil from every angle with our interactive 360° product view. Discover the exceptional quality, advanced formulation, precision engineering, and premium packaging behind every lubricant, designed to deliver maximum engine protection, outstanding performance, enhanced efficiency, and long-lasting reliability in every driving condition.
          </p>
        </div>

        {/* Video Placeholder Container */}
        <div className="w-full max-w-[1200px] aspect-[16/9] md:aspect-[21/9] rounded-xl md:rounded-3xl overflow-hidden bg-[#F1F1F1] relative flex items-center justify-center" data-aos="fade-up" data-aos-delay="100">
          <div className="absolute "></div>
          <DynamicVideoPlayer type="360" className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500" />
        </div>

      </div>
    </section>
  );
};

export default Explore360;
