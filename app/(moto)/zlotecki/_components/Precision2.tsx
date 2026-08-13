"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Optimized Combustion Performance",
    desc: "Supports efficient fuel combustion for enhanced power and reduced emissions.",
  },
  {
    title: "Reduced Friction & Wear",
    desc: "Advanced surface finishing minimizes friction, extending engine component life.",
  },
  {
    title: "Wide Vehicle Compatibility",
    desc: "Suitable for a broad range of automotive, commercial, and industrial engine applications.",
  }
];

const Precision2 = () => {
  return (
    <section id="precision2" className="w-full py-16 md:py-24 bg-[#F7F7F7] relative">
      <div className="custom-container relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 min-[3800px]:gap-24 items-center">
        
        {/* Video (Mobile: Order 2) */}
        <div className="xl:col-span-7 order-2 xl:order-1 w-full aspect-[16/9] relative shadow-lg overflow-hidden rounded-md bg-white border border-gray-200" data-aos="fade-right">
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Text Content (Mobile: Order 1) */}
        <div className="xl:col-span-5 order-1 xl:order-2 flex flex-col gap-6 min-[3800px]:gap-12 w-full" data-aos="fade-left">
          
          <div className="flex flex-col gap-4">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Precision-Engineered Pistons for Superior Petrol Engine Performance
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Złotecki petrol engine pistons are manufactured to deliver exceptional strength, precision, and reliability for modern passenger vehicles. Produced using high-quality aluminum alloys and advanced machining processes, our pistons provide excellent heat resistance, reduced friction, and efficient combustion, ensuring smooth engine operation and long-lasting performance.
            </Typography>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-5 min-[3800px]:gap-10 mt-2 min-[3800px]:mt-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 min-[3800px]:gap-8">
                <div className="mt-1 min-[3800px]:mt-2 shrink-0">
                  <CheckCircle className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 text-primary" fill="currentColor" stroke="white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <Typography variant="span" color="dark" className="font-semibold text-[17px] min-[3800px]:text-[34px] leading-snug">
                    {feature.title} <span className="font-normal opacity-80 text-[#484848]">– {feature.desc}</span>
                  </Typography>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Precision2;
