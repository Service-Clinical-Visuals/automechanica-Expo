"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Precision() {
  return (
    <section className="py-16  bg-[#F1F1F1] relative w-full overflow-hidden">
      <div className="custom-container px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-center">
          
          {/* Left: Content Block */}
          <div className="col-span-1 xl:col-span-5 order-1 xl:order-1 flex flex-col space-y-8">
            <div className="space-y-4">
              <Typography variant="h2" color="dark" className="font-bold leading-tight">
                Precision Manufacturing & Quality
              </Typography>
              
              <Typography variant="h4" color="dark" className="font-semibold !font-secondary italic  ">
                Quality Built into Every Component
              </Typography>

              <div className="space-y-4 pt-2">
                <Typography variant="p" color="dark" className="leading-relaxed ">
                  Take a closer look at the precision engineering, rigorous quality testing, and advanced manufacturing processes behind ATQ Germany products. Every component is designed to deliver OEM-quality fitment, exceptional durability, and long-lasting performance for dependable operation in demanding automotive applications.
                </Typography>
                
                <Typography variant="p" color="dark" className="leading-relaxed ">
                  Built with attention to every detail, ATQ Germany products combine advanced materials and strict production standards to ensure consistent quality from one part to the next. This commitment to excellence helps deliver reliable performance, reduced wear, and confidence on every drive.
                </Typography>
              </div>
            </div>

            <div className="pt-2" data-aos="fade-up">
              <Button text="Explore More" href="#about" showIcon={true} />
            </div>
          </div>

          {/* Right: Video Player */}
          <div className="col-span-1 xl:col-span-7 order-2 xl:order-2" data-aos="fade-left">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-white aspect-video">
              <DynamicVideoPlayer
                className="absolute inset-0 w-full h-full object-cover"
                type="short-2"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
