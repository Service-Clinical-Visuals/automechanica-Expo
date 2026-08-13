
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

const Performance = () => {
  return (
    <section className="w-screen min-h-screen relative left-1/2 -translate-x-1/2 bg-[#011689] pl-15 pr-15 pt-16 pb-12 flex flex-col !rounded-none items-center justify-center">
      <div className="custom-container flex flex-col w-full px-4 lg:px-8 max-w-[1300px]">

        {/* Massive Video Placeholder */}
        <div className="w-full max-w-[1185px] mx-auto aspect-video md:aspect-[2.2] rounded-[24px] md:rounded-[32px] overflow-hidden relative flex items-center justify-center mb-10" data-aos="fade-up">
          {/* Figma transparency grid pattern matching the image */}
          <div className="absolute inset-0 opacity-10" ></div>

          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-white/20 mb-8" data-aos="fade-up" data-aos-delay="100"></div>

        {/* Text and Button row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col gap-3 max-w-3xl">
            <h2 className="font-primary font-bold section-title text-white tracking-wide">
              Trusted Lubrication for Every Vehicle
            </h2>
            <p className="font-secondary section-text text-white/80 leading-relaxed max-w-2xl">
              From passenger cars and motorcycles to commercial and agricultural vehicles, Racing Oil offers a comprehensive range of engine oils designed to meet the highest performance standards and ensure reliable protection in every application.
            </p>
          </div>
          <div className="shrink-0 mt-4 md:mt-0">
            <button className="btn-text bg-white text-[#011689] px-6 py-2.5 font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap">
              See Specifications <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Performance;