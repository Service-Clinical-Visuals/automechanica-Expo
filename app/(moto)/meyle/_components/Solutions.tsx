"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Check, ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Solutions() {
  const features = [
    {
      title: "Exceptional Braking Performance",
      desc: "Delivers powerful and consistent stopping power for maximum safety.",
    },
    {
      title: "OE-Quality Standards",
      desc: "Designed and manufactured to meet or exceed original equipment specifications.",
    },
    {
      title: "Perfect Fit & Easy Installation",
      desc: "Precision-engineered for seamless compatibility with a wide range of vehicle models.",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-30 bg-[var(--color-primary)] overflow-hidden" id="solutions">
      <div className="custom-container relative z-10 flex flex-col">

        {/* Main Layout Grid - Stacks until 2xl */}
        <div className="w-full grid grid-cols-1 2xl:grid-cols-12 gap-10 lg:gap-8 items-stretch">

          {/* Left: Content and Features */}
          <div className="w-full 2xl:col-span-5 flex flex-col gap-6" data-aos="fade-right">
            <Typography variant="h2" color="white" weight="bold" className="font-oswald tracking-tight mb-2">
              Premium Brake Pad Solutions
            </Typography>

            <Typography variant="p" color="white" className="font-lato leading-relaxed mb-5">
              MEYLE Brake Pads are engineered to deliver reliable stopping power, enhanced safety, and lasting performance. Manufactured with premium materials and precision engineering, they provide smooth, quiet braking with excellent durability. Designed to meet OE-quality standards, they ensure dependable performance and driving confidence in every journey.
            </Typography>

            <div className="flex flex-col gap-4 mb-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4   bg-transparent hover:bg-white/5 transition-colors"
                >
                  <div className="mt-1 w-5 h-5 lg:w-6 lg:h-6 2xl:w-5 2xl:h-5 min-[1920px]:w-10 min-[1920px]:h-10 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 2xl:w-4 2xl:h-4 min-[1920px]:w-6 min-[1920px]:h-6 min-[3800px]:w-10 min-[3800px]:h-10 text-[var(--color-primary)]" strokeWidth={3} />
                  </div>
                  <div>
                    <Typography variant="span" color="white" className="font-lato block mb-1">
                      {feature.title} <span className="font-normal ">- {feature.desc}</span>
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-block mt-2">
              <Button
                text="View All Products"
                href="#products"
                showIcon={true}
              />
            </div>
          </div>

          {/* Right: Video Container */}
          <div className="w-full 2xl:col-span-7 relative rounded-xl overflow-hidden shadow-2xl aspect-video  flex items-center justify-center" data-aos="fade-left">
            <DynamicVideoPlayer type="short-1" />
          </div>

        </div>

        {/* Bottom Text Section */}
        <hr className="w-full border-t border-white/40 mt-16 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography variant="p" color="white" className="font-lato  lg:max-w-[60%] leading-relaxed">
            MEYLE Brake Pads combine innovative engineering, premium materials, and strict quality control to provide dependable braking solutions that enhance vehicle safety, performance, and everyday driving comfort.
          </Typography>
          <a href="#" className="w-12 h-12 md:h-15 md:w-15 rounded-full bg-[#A6D8FFCF] flex items-center justify-center text-white hover:bg-white hover:text-[var(--color-primary)] transition-colors shrink-0">
            <ArrowUpRight size={27} strokeWidth={1.5} className="h-10 w-10 md:h-12 md:w-12" />
          </a>
        </div>

      </div>
    </section>
  );
}
