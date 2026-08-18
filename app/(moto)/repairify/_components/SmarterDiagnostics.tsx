"use client";
import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function SmarterDiagnostics() {
  const points = [
    "Innovative and Advanced Real-Time Vehicle Intelligence Solutions for Enhanced Performance and Safety",
    "Get expert help from the comfort of your home with our Remote Expert Assistance service.",
    "Boosting productivity in workshops can lead to more efficient processes and better outcomes.",
    "Discover dependable Original Equipment Manufacturer (OEM) solutions that cater to your specific needs."
  ];

  return (
    <section className="py-20 md:py-28 bg-[#111111]">
      <div className="custom-container">
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Column - Content */}
          <div className="w-full flex flex-col items-start gap-8" data-aos="fade-right">
             <h2 className="adlam-font section-title text-white">Smarter Diagnostics. Better Repairs</h2>
            
            <p className="inter-font section-text text-white leading-relaxed">
              Discover how Repairify combines advanced diagnostics, remote expert support, and OEM technology to help workshops identify faults, program vehicle systems, and perform accurate repairs without unnecessary delays. Every solution is designed to increase productivity, reduce downtime, and keep vehicles operating safely.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img src="/moto/repairify/tick.png" alt="Tick" className="w-6 h-6 mt-0.5 flex-shrink-0" />
                  <p className="inter-font section-text text-white leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Video */} 
          <div className="w-full" data-aos="fade-left">
            <div className="w-full aspect-[4/3] xl:aspect-[16/10] relative rounded-xl overflow-hidden bg-white/5 shadow-xl">
              <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
