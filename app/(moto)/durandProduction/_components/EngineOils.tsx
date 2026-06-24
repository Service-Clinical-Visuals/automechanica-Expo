import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EngineOils() {
  return (
    <section className="w-full bg-[#FEF5F6] py-16 md:py-24" id="engine-oils">
      <div className="custom-container">
        <div className="flex flex-col items-center text-center w-full md:w-[90%] lg:max-w-5xl xl:max-w-[70%] 2xl:max-w-[60%] mx-auto mb-10 md:mb-14" data-aos="fade-up">
          {/* Heading with top red line */}
          <div className="inline-flex flex-col items-stretch mb-6">
            <div className="w-full h-1 bg-[#FF131C] mb-1 md:mb-2"></div>
            <h2 className="text-[#1a1a1a] text-2xl md:text-3xl lg:text-4xl heading font-medium tracking-wider leading-none">
              Engine Oils
            </h2>
          </div>
          
          {/* Description Paragraph */}
           <p className="text-[#4a4a4a] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal">
            ARECA F9510 Is Specially Dedicated To Recent PSA Engines Equipped With Blue HDi, PureTech, Hybrid Technologies, Engines With Stop &
            Start Systems, For Which PSA B71 2010 Standard Is Required. It Can Also Be Used When ACEA C5, C6 Or API SP Performance Level Is
            Recommended.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="w-full xl:w-[90%] 2xl:w-[85%] mx-auto aspect-video rounded-2xl md:rounded-[32px] overflow-hidden relative shadow-2xl" data-aos="fade-up" data-aos-delay="100">
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
         
        </div>
      </div>
    </section>
  );
}
