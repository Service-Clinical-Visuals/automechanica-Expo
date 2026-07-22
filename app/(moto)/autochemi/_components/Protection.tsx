"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";

export default function Protection() {
  const features = [
    {
      title: "Reliable All-Season Performance",
      description: "Delivers consistent lubrication and dependable engine protection in both extremely high and low operating temperatures."
    },
    {
      title: "Reduced Engine Wear",
      description: "Forms a durable lubricating film that minimizes friction and protects critical engine components from premature wear."
    }
  ];

  return (
    <section className="w-full py-16 bg-[#171717] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14">
        
        {/* Top Block: Video and Features */}
        <div className="grid grid-cols-1 xl:grid-cols-8 ">
          
          {/* Left: Video */}
          <div className="xl:col-span-5 aspect-video relative overflow-hidden rounded-[1.5rem] shadow-xl" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" />
          </div>

          {/* Right: Text and Features */}
          <div className="xl:col-span-3 p-3 xl:p-5 flex flex-col justify-center" data-aos="fade-left">
            <Typography variant="h2" color="white" className="font-semibold mb-6 leading-tight">
              Reliable Protection for Modern Engines
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed  mb-6 xl:mb-8">
              AutoChemie Bitterfeld GmbH provides high-performance engine oils designed to satisfy the evolving demands of modern automotive technology. Combining German engineering expertise with rigorous quality control, our lubricants ensure exceptional durability, reduced maintenance, and consistent engine performance throughout extended operating cycles.
            </Typography>
            
            <div className="flex flex-col gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-7 h-7 text-secondary shrink-0 mt-0.5" fill="#AD0F0F" strokeWidth={2} />
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

        {/* Separator */}
        <div className="w-full h-px bg-white/20"></div>

        {/* Bottom Block */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 xl:gap-8 pb-0" data-aos="fade-up">
          <div className="flex flex-col gap-3 xl:w-3/4 order-1">
            <Typography variant="p" color="white" className="leading-relaxed !text-white max-w-[90%]">
              At AutoChemie Bitterfeld GmbH, we combine German engineering with advanced lubricant technology to develop premium engine oils that deliver exceptional protection, reliable performance, and durability. Manufactured with selected base oils and high-performance additives, our products reduce engine wear, improve efficiency, and ensure smooth operation across various applications.
            </Typography>
          </div>

          <div className="flex-shrink-0 flex max-xl:justify-end order-2 xl:order-2">
            <Button text="Explore Products" href="#" showIcon={true} />
          </div>
        </div>
        
      </div>
    </section>
  );
}
