"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Precision = () => {
  return (
    <section
      id="precision"
      className="w-full py-16 min[3800px]:py-24  relative bg-[url('/moto/hasting/bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* Optional overlay for text readability, adjust opacity if bg.png is already dark enough */}
      <div className="absolute inset-0 bg-primary/40 z-0"></div>

      <div className="custom-container max-w-[1920px] relative z-10 flex flex-col items-center justify-center text-center gap-8 xl:gap-12">

        {/* Heading Group */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3" data-aos="fade-up">
            {/* CSS clip-path for diamond shape avoiding inline styles */}
            <div className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 bg-secondary [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] shrink-0"></div>
            <Typography variant="h4" color="white" className="font-bold">
              Engineered for Reliable Performance
            </Typography>
          </div>
          <Typography variant="h2" color="white" className="font-bold leading-tight" data-aos="fade-up" data-aos-delay="100">
            Precision Manufacturing • Advanced Ring Technology
          </Typography>
        </div>

        {/* Video Container with percentage-based max-width as requested */}
        <div
          className="w-full  xl:max-w-[75%] aspect-video rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl relative mx-auto"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Precision;
