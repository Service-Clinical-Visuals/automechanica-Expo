"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Check, ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Superior() {
  const features = [
    {
      title: "Superior Stopping Power",
      desc: "Delivers reliable and responsive braking for enhanced driver confidence.",
    },
    {
      title: "OE-Quality Performance",
      desc: "Designed to meet or exceed original equipment specifications for a precise fit.",
    },
    {
      title: "Low Noise Operation",
      desc: "Advanced friction compounds help minimize brake squeal and vibration.",
    },
    {
      title: "High Heat Resistance",
      desc: "Maintains consistent performance even during demanding driving conditions.",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[var(--color-primary)] overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col">
        {/* Top Header Section */}
        <div className="w-full flex flex-row justify-between items-center gap-6 lg:gap-12 text-left mb-8" data-aos="fade-up">
          <div className="flex flex-col gap-2 md:gap-4 max-w-[85%] xl:max-w-[70%]">
            <Typography variant="h2" color="white" weight="bold" className="font-oswald tracking-tight ">
              Superior Stopping Power
            </Typography>
            <Typography variant="p" color="white" className="font-lato leading-relaxed">
              MEYLE Brake Pads deliver reliable stopping power, enhanced safety, and long-lasting durability. Engineered with premium friction materials, they ensure quiet operation, reduced brake dust, and consistent performance that meets or exceeds OE standards.
            </Typography>
          </div>
          <a href="#" className="w-12 h-12 lg:h-15 lg:w-15 rounded-full bg-[#A6D8FFCF] flex items-center justify-center text-white hover:bg-white hover:text-[var(--color-primary)] transition-colors shrink-0">
            <ArrowUpRight size={28} strokeWidth={1.5} className="h-10 w-10 md:h-12 md:w-12" />
          </a>
        </div>

        {/* Separator Line */}
        <hr className="w-full border-t border-white/50 mb-10" />

        {/* Main Layout Grid - Stacks until 2xl (1536px) as requested */}
        <div className="w-full grid grid-cols-1 2xl:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Video Container (Content before features on mobile/tablet) */}
          <div className="w-full 2xl:col-span-8 relative rounded-md overflow-hidden shadow-2xl  aspect-video flex items-center justify-center" data-aos="fade-right">
            <DynamicVideoPlayer type="360" />
          </div>

          {/* Features and Button */}
          <div className="w-full 2xl:col-span-4 flex flex-col gap-4" data-aos="fade-left">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 border border-white/20 bg-transparent hover:bg-white/5 transition-colors"
              >
                <div className="mt-1 w-5 h-5 lg:w-6 lg:h-6 2xl:w-5 2xl:h-5 min-[1920px]:w-10 min-[1920px]:h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 2xl:w-4 2xl:h-4 min-[1920px]:w-6 min-[1920px]:h-6 min-[3800px]:w-10 min-[3800px]:h-10 text-[var(--color-primary)]" strokeWidth={3} />
                </div>
                <div>
                  <Typography variant="span" color="white" weight="bold" className="font-lato block mb-1">
                    {feature.title} <span className="font-normal opacity-90">- {feature.desc}</span>
                  </Typography>
                </div>
              </div>
            ))}

            <div className="mt-6">
              <Button
                text="Watch Product Video"
                href="#video"
                showIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
