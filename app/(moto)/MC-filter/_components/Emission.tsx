"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Emission = () => {
  return (
    <section id="emission" className="w-full py-16 4xl:py-24  overflow-hidden" style={{ backgroundColor: "#F5FAFF" }}>
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 xl:gap-16 items-center">
        
        {/* Left: Content */}
        <div className="w-full xl:col-span-5 flex flex-col gap-6 order-1 xl:order-1">
          
          {/* Heading Group */}
          <div className="flex flex-col gap-2" data-aos="fade-up">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <Typography variant="h4" color="secondary" className="font-bold uppercase tracking-wider text-sm">
                EMISSION SOLUTIONS
              </Typography>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Innovative Emission Technologies
            </Typography>
          </div>

          {/* Text Paragraphs */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Advanced emission control technologies designed to reduce harmful exhaust gases, improve vehicle efficiency, and meet modern emission standards. Our reliable solutions combine precise monitoring, dosing, and exhaust aftertreatment technology to optimize SCR systems and support future automotive requirements.
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Innovative emission solutions engineered to enhance exhaust system performance and reduce environmental impact. Our technologies ensure accurate monitoring, efficient urea management, and reliable aftertreatment control for modern vehicles. Designed with advanced engineering and OE-level quality, our solutions support cleaner mobility and meet evolving automotive emission standards.
            </Typography>
          </div>

          {/* Bullet Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="300">
              <div className="w-4 h-4 bg-secondary shrink-0"></div>
              <Typography variant="h6" color="dark" className="font-semibold">
                Accurate NOx emission monitoring
              </Typography>
            </div>
            <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="400">
              <div className="w-4 h-4 bg-secondary shrink-0"></div>
              <Typography variant="h6" color="dark" className="font-semibold">
                OE-level quality and reliability
              </Typography>
            </div>
            <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="500">
              <div className="w-4 h-4 bg-secondary shrink-0"></div>
              <Typography variant="h6" color="dark" className="font-semibold">
                Reduced harmful emissions.
              </Typography>
            </div>
            <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="600">
              <div className="w-4 h-4 bg-secondary shrink-0"></div>
              <Typography variant="h6" color="dark" className="font-semibold">
                Long-term performance and durability
              </Typography>
            </div>
          </div>
          
        </div>

        {/* Right: Video */}
        <div className="w-full xl:col-span-7 order-2 xl:order-2 relative aspect-video  overflow-hidden rounded-xl shadow-xl" data-aos="fade-left">
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Emission;
