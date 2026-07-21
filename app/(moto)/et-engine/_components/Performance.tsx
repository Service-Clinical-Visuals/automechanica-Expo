"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";

export default function Performance() {
  const features = [
    {
      title: "Optimized Engine Performance",
      description: "Maximizes engine efficiency, ensuring smooth operation, improved reliability, and consistent performance under demanding conditions."
    },
    {
      title: "Comprehensive Product Range",
      description: "Offers a wide selection of precision-engineered engine components for diverse passenger and commercial vehicle applications."
    },
    {
      title: "Strict Quality Control",
      description: "Every component undergoes rigorous inspection and testing to ensure exceptional quality, precision, and dependable performance."
    }
  ];

  return (
    <section className="w-full py-16 bg-[#171717] overflow-hidden">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 gap-y-10 xl:gap-x-10 xl:gap-y-14">
        
        {/* Heading & Body */}
        <div className="order-1 xl:order-1 xl:col-span-8 xl:pb-12 xl:border-b border-white/40 flex flex-col gap-4" data-aos="fade-up">
          <Typography variant="h1" color="white" className="font-semibold leading-tight">
            Engineered For Lasting Performance
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed max-w-[70%]">
            With advanced engineering expertise and rigorous quality control, ET ENGINETEAM provides engine components that deliver exceptional reliability and long service life. Our comprehensive product range is trusted by automotive professionals worldwide for its consistent quality and dependable performance.
          </Typography>
        </div>

        {/* Button */}
        <div className="order-5 xl:order-2 xl:col-span-4 xl:pb-12 xl:border-b border-white/40 flex justify-start xl:justify-end xl:items-end mt-4 xl:mt-0" data-aos="fade-up">
          <Button text="Explore Products" href="#" showIcon={true} />
        </div>

        {/* Left: Video */}
        <div className="order-3 xl:order-3 xl:col-span-7 aspect-video relative overflow-hidden flex items-center justify-center mt-2 xl:mt-0" data-aos="fade-right">
          <DynamicVideoPlayer type="short-1" />
        </div>

        {/* Right: Key Features */}
        <div className="order-4 xl:order-4 xl:col-span-5 flex flex-col justify-center mt-2 xl:mt-0" data-aos="fade-left">
          <Typography variant="h2" color="white" className="font-semibold mb-6">
            Key Features
          </Typography>

          <div className="flex flex-col gap-4">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="p-6 border border-white/40 bg-[#1a1a1a]/50 hover:bg-[#1a1a1a] transition-colors duration-300 flex flex-col gap-2"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" strokeWidth={2.5} />
                  <Typography variant="h3" color="white" className="font-semibold">
                    {feature.title}
                  </Typography>
                </div>
                <div className="pl-8">
                  <Typography variant="p" color="white" className="opacity-80 text-sm leading-relaxed">
                    {feature.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
