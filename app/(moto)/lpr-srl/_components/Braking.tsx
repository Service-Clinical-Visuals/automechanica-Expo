"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Braking = () => {
  return (
    <section id="braking" className="w-full py-16 min-[3800px]:py-25 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col gap-8 items-center text-center">

        {/* Header */}
        <div className="flex flex-col gap-2  items-center w-full " data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            Braking Excellence Through Innovation & Reliability
          </Typography>
          <Typography variant="p" color="white" className=" leading-relaxed xl:max-w-[60%] mt-2 text-sm">
            LPR delivers high-quality braking solutions engineered for safety, durability, and reliable performance through advanced technology and strict quality standards.
          </Typography>
        </div>

        {/* Video Player */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full xl:max-w-[70%] mx-auto  h-full aspect-video rounded-xl overflow-hidden shadow-lg relative ">
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Braking;
