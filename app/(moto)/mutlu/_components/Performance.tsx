"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Performance() {
  const features = [
    {
      description: "Premium AGM Battery Technology Engineered to Deliver Long-Lasting Performance, Maximum Reliability, and Superior Energy Efficiency"
    },
    {
      description: "Excellent Power Delivery Supporting Advanced Vehicle Electronics, Intelligent Safety Systems, and Start-Stop Technologies"
    },
    {
      description: "Enhanced Durability with Outstanding Resistance to Heat, Vibration, Deep Discharge, and Harsh Operating Environments"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-primary overflow-hidden border-t border-white/20">
      <div className="custom-container flex flex-col">

        <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6 xl:gap-8 border-b border-white/40 pb-8 lg:pb-12 order-1 xl:order-1 mb-8 xl:mb-12" data-aos="fade-up">

          <div className="flex flex-col gap-4 xl:w-[70%] order-1 xl:order-1">
            <Typography variant="h2" color="white" className="font-semibold leading-tight mb-2">
              Built For Modern Mobility
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed max-w-full xl:max-w-[95%] order-2 xl:order-2 mt-2 xl:mt-0 ">
              Mutlu Akü ve Malzemeleri San. A.Ş. AGM batteries combine advanced engineering with premium materials to deliver consistent performance, extended battery life, and dependable power for passenger vehicles, commercial fleets, and demanding automotive applications.
            </Typography>
          </div>

          <div className="flex-shrink-0 order-3 xl:order-2 mt-4 xl:mt-0 flex justify-start xl:justify-end">
            <Button text="View Product Range" href="#" showIcon={true} variant="secondary" />
          </div>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5  w-full order-4 xl:order-2">

          <div className="w-full aspect-video xl:col-span-8 md:rounded-[32px] overflow-hidden bg-white/10 flex items-center justify-center order-3 xl:order-1 mt-6 xl:mt-0" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col xl:col-span-4 justify-center order-1 xl:order-2" data-aos="fade-left">
            <Typography variant="h2" color="white" className="font-semibold mb-6">
              Reliable Energy For Every Journey
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed  mb-8">
              Mutlu Akü ve Malzemeleri San. A.Ş. AGM batteries are engineered with advanced technology to provide dependable power, exceptional durability, and consistent performance for modern vehicles under demanding operating conditions.
            </Typography>

            <div className="flex flex-col gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-5 md:p-6 border border-white/40 bg-transparent hover:bg-white/5 transition-colors duration-300 flex items-start gap-4 rounded-bl-[4rem] rounded-tr-[4rem] rounded-tl-sm rounded-br-sm"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <Typography variant="p" color="white" className="leading-relaxed text-[14px] md:text-[16px] font-medium opacity-95">
                    {feature.description}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
