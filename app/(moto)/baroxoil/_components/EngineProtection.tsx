import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function EngineProtection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center" data-aos="fade-up">
          
          {/* Content Side */}
          <div className="xl:col-span-5 flex flex-col gap-6">
            <div>
              <span className="odibee-sans-font text-[#EB2226] section-subtitle font-normal flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#EB2226]"></span> Engine Protection
              </span>
              <h2 className="odibee-sans-font section-title text-[#212121] font-normal mt-2 leading-tight">
                Advanced Engine Oils That Deliver Maximum Protection in Every Driving Condition
              </h2>
            </div>
            
            <p className="text-[#333333] instrument-sans-font section-text font-normal  leading-relaxed">
              Our engine oils are engineered to maintain consistent lubrication and performance in both high and low temperature conditions while helping prevent sludge and harmful deposits for cleaner engine operation. Designed for long-lasting protection, they extend engine life through dependable lubrication and meet leading OEM and international industry standards for quality, reliability, and performance.
            </p>

            <div className="mt-2">
              <Button href="#">
                Explore Our Solutions
              </Button>
            </div>
          </div>

          {/* Video Side */}
          <div className="xl:col-span-7 w-full h-full relative aspect-video rounded-3xl overflow-hidden bg-gray-100 shadow-sm flex items-center justify-center">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
