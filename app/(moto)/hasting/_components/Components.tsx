"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Components = () => {
  return (
    <section id="components" className="w-full py-10 xl:py-16 min-[3800px]:py-24 overflow-hidden">
      <div className="custom-container max-w-[1920px] grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-0">

        {/* Left Content (Span 5) */}
        <div className="xl:col-span-5 flex flex-col justify-center xl:pr-12 gap-6" data-aos="fade-right">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 bg-secondary [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] shrink-0"></div>
            <Typography variant="h4" color="primary" className="font-bold">
              Engine Components
            </Typography>
          </div>

          <Typography variant="h2" color="dark" className="font-bold leading-tight xl:pr-4">
            Designed to deliver strength, efficiency, and long-lasting performance in demanding engine environments.
          </Typography>

          <div className="flex flex-col gap-5 mt-2">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Our precision-engineered pistons are manufactured using premium materials and advanced machining processes to ensure excellent durability, heat resistance, and dimensional accuracy. They are built to maximize engine efficiency while reducing wear and extending service life.
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Our piston rings are manufactured with exceptional precision to provide optimal sealing, efficient oil control, and reduced friction. Available in various materials and coatings, they are designed to meet the performance requirements of automotive, marine, industrial, and heavy-duty engines.
            </Typography>
          </div>

          <div className="mt-4">
            <Button text="Explore Solutions" href="#components" variant="primary" />
          </div>
        </div>

        {/* Right Content (Span 7) - Background #F9F9F9 instead of video */}
        <div className="xl:col-span-7 bg-[#F9F9F9] min-h-[400px] xl:min-h-[600px] w-full flex items-center justify-center relative shadow-inner" data-aos="fade-left">
          {/* Subtle placeholder text to represent the gray area in the design */}
          <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Components;
