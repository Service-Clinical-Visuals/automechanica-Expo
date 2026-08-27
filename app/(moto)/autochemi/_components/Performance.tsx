"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";

export default function Performance() {
  const features = [
    {
      title: "Premium Base Oil Technology",
      description: "Formulated with high-quality base oils to deliver stable lubrication, superior protection, and extended engine life."
    },
    {
      title: "Superior Oxidation Resistance",
      description: "Resists oxidation and thermal breakdown, maintaining consistent performance throughout extended service intervals."
    },
    {
      title: "Outstanding Cold & Hot Weather Performance",
      description: "Ensures fast engine protection during cold starts and reliable lubrication in high-temperature environments."
    },
    {
      title: "Extended Drain Performance",
      description: "Supports longer oil change intervals while maintaining excellent engine cleanliness, protection, and overall lubrication performance."
    }
  ];

  return (
    <section className="w-full py-16 bg-[#171717] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14">
        
        {/* Top Header Block */}
        <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6 xl:gap-8 xl:border-b border-white/20 pb-0 xl:pb-12" data-aos="fade-up">
          <div className="flex flex-col gap-3 xl:w-3/4 order-1">
            <Typography variant="h2" color="white" className="font-semibold leading-tight">
              Engineered For Maximum Performance
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed  max-w-full">
              At AutoChemie Bitterfeld GmbH, every engine oil is formulated with high-quality raw materials and carefully balanced additive packages to ensure superior lubrication, long service life, and dependable performance. Our products are designed to maximize engine efficiency while providing exceptional protection in both everyday and heavy-duty operating conditions.
            </Typography>
          </div>

          <div className="flex-shrink-0 flex max-xl:justify-end order-2 xl:order-2">
            <Button text="Explore Products" href="#" showIcon={true} />
          </div>
        </div>
        
        {/* Mobile border line */}
        <div className="w-full h-px bg-white/20 xl:hidden -mt-2"></div>

        {/* Bottom Block */}
        <div className="grid grid-cols-1 xl:grid-cols-8 gap-y-10 xl:gap-x-12">
          
          {/* Left: Video */}
          <div className="xl:col-span-5 aspect-video relative overflow-hidden rounded-3xl shadow-xl" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" />
          </div>

          {/* Right: Text and Features */}
          <div className="xl:col-span-3 flex flex-col" data-aos="fade-left">
            <Typography variant="p" color="white" className="leading-relaxed  mb-6 ">
              AutoChemie Bitterfeld GmbH develops premium engine oils with advanced German technology, delivering reliable engine protection, enhanced efficiency, and long-lasting performance.
            </Typography>
            
            <div className="w-full h-px bg-white/20 mb-6 "></div>

            <div className="flex flex-col gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-7 h-7 max-h-[2100px]:w-8 max-h-[2100px]:h-8   text-secondary shrink-0 mt-0.5" fill="#AD0F0F" strokeWidth={2} />
                  <div className="flex flex-col gap-1">
                    <Typography variant="h4" color="white" className="font-semibold">
                      {feature.title}
                    </Typography>
                    <Typography variant="p" color="white" className=" leading-relaxed">
                      {feature.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
