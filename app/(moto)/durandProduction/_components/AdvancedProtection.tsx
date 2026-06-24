import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";



export default function AdvancedProtection() {
  const features = [
    "ACEA C5 / C6 Performance Standard",
    "API SP Certification",
    "Superior Cold Start Performance",
    "PSA B71 2010 Approved",
    "Enhanced Thermal Stability",
    "Low-SAPS Technology"
  ];

  return (
    <section className="w-full bg-[#FEF5F6] py-16 md:py-24" id="advanced-protection">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col" data-aos="fade-right">
            {/* Heading with red line */}
            <div className="inline-flex flex-col items-stretch mb-6 self-start">
              <div className="w-full h-1 bg-[#FF131C] mb-1 md:mb-2"></div>
              <h2 className="text-[#1a1a1a] text-2xl md:text-3xl lg:text-4xl heading font-medium tracking-wider leading-none">
                Advanced Protection Technology
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-[#4a4a4a] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal mb-8">
              ARECA F9510 Synthetic Engine Oil 0W-20 Is Engineered To Deliver Exceptional Engine
              Protection, Efficiency, And Long-Term Performance For Modern Petrol And Hybrid Powertrains.
              Developed With Advanced Low-SAPS Technology, It Helps Reduce Exhaust System Deposits
              While Protecting Critical Engine Components Under High Thermal And Mechanical Stress.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                    <img src="/moto/durandProduction/advbullet.png" alt="Check" className="w-4 h-4 text-white" />
                  <p className="text-[#4a4a4a] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Button */}
            <div className="mt-2">
              <Button href="#">Learn More</Button>
            </div>
          </div>
          
          {/* Right Column: Video */}
          <div className="w-full aspect-video rounded-2xl md:rounded-[32px] overflow-hidden relative shadow-2xl bg-[#121212]" data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
          </div>

        </div>
      </div>
    </section>
  );
}
