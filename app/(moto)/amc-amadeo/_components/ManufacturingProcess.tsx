"use client";

import React from "react";
import Link from "next/link";
import { PenTool, Flame, Settings, RefreshCw } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ManufacturingProcess() {
  const features = [
    {
      icon: <img src="/moto/amc-amadeo/i1.png" alt="" className="w-6 h-6 text-primary" />,
      text: "Advanced design, simulation, and tooling processes ensure precision components that meet customer requirements and industry standards."
    },
    {
      icon: <img src="/moto/amc-amadeo/i2.png" alt="" className="w-6 h-6 text-primary" />,
      text: "Using gravity casting, sand casting, and HPDC, AMC produces durable, high-quality automotive components."
    },
    {
      icon: <img src="/moto/amc-amadeo/i3.png" alt="" className="w-6 h-6 text-primary" />,
      text: "Advanced CNC machining ensures precise dimensions, superior finishing, and consistent component quality."
    },
    {
      icon: <img src="/moto/amc-amadeo/i4.png" alt="" className="w-6 h-6 text-primary" />,
      text: "Automated finishing removes excess material and prepares components for final production."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f3f5f7] w-full overflow-hidden">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="section-title text-[#272727] font-semibold mb-6 oswald leading-tight">
            <span className="relative inline-block pb-2">
              Manufacturing Process
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-1 bg-primary"></span>
            </span>
          </h2>
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed mb-2">
            AMC follows an integrated manufacturing process that combines advanced engineering, aluminum casting, precision machining, and quality control. From initial product development to final production, AMC ensures high-performance automotive components with accuracy, reliability, and consistency.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Side: Video Player */}
          <div data-aos="fade-right" className="xl:col-span-7">
            <div className="w-full aspectvideo  bg-white rounded-xl overflow-hidden shadow-lg relative flex items-center justify-center">
               <DynamicVideoPlayer 
                type="short-1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Features */}
          <div data-aos="fade-left" className="xl:col-span-5">
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed mb-8">
              AMC combines advanced technology, engineering expertise, and quality control to deliver reliable automotive components for OEM, OES, and Aftermarket applications worldwide, ensuring precision, performance, and consistent quality.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <p className="text-primary-3 rubik font-normal section-text leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <Button href="#" variant="primary" showArrow={true}>
              Explore
            </Button>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
