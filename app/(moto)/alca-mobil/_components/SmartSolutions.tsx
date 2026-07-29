"use client";

import React from "react";
import Typography from "./Typography";

const SmartSolutions = () => {
  return (
    <section 
      id="smart-solutions" 
      className="w-full py-10 xl:py-16 min-[3800px]:pt-25"
    >
      <div className="custom-container">
        <div className="relative w-full min-h-[400px] xl:min-h-[650px] min-[3800px]:min-h-[2600px] flex items-end">
          {/* Background Image */}
          <img 
            src="/moto/alca-mobil/section4.png"
            alt="Smart Solutions for Everyday Driving Needs"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/10 z-10" />

          {/* Content Container */}
          <div className="relative z-20 w-full  px-6 md:px-12 py-12">
            <div 
              className="w-full xl:max-w-[55%] flex flex-col gap-4 text-left" 
              data-aos="fade-right"
            >
              <Typography variant="h2" color="white" className="font-bold leading-tight">
                Smart Solutions for Everyday Driving Needs
              </Typography>
              
              <Typography variant="p" color="white" className="leading-relaxed  xl:max-w-[73%] ">
                As a renowned vehicle accessories brand, alca® Germany proudly continues its support of Lithuanian driver Paulius Pleskovas, reflecting a strong commitment to performance, precision, and innovation. With the upcoming Baltic Rallycross Cup rounds in Poland this October, our involvement goes beyond racing—showcasing endurance, engineering excellence, and our dedication to pushing boundaries on a global stage.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSolutions;
