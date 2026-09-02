"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Powering = () => {
  return (
    <section id="powering" className="w-full py-16 min-[3800px]:py-25 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-12 min-[2100px]:gap-16 min-[3800px]:gap-20 items-center xl:items-start">

        {/* Title */}
        <div className="w-full xl:col-span-5 flex flex-col gap-6 order-1 xl:order-none" data-aos="fade-right">
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            Powering Production with Renewable Energy
          </Typography>
        </div>

        {/* Video Player */}
        <div className="w-full xl:col-span-7 aspect-video order-2 xl:order-none xl:row-span-3 min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-left">
          <div className="w-full h-full rounded-xl overflow-hidden shadow-lg relative bg-white/5">
            <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full xl:col-span-5 flex flex-col gap-4 order-3 xl:order-none" data-aos="fade-right">
          <Typography variant="p" color="white" className=" leading-relaxed">
            LPR is committed to sustainable manufacturing through the use of renewable energy solutions. Since 2012, photovoltaic systems installed across its plants have helped reduce energy consumption, lower carbon emissions, and support environmentally responsible production.
          </Typography>
          <Typography variant="p" color="white" className=" leading-relaxed mt-2">
            LPR combines advanced technology with sustainable manufacturing practices to improve energy efficiency, reduce carbon emissions, and minimize environmental impact. Through renewable energy initiatives and responsible production, LPR continues to deliver high-quality automotive components while supporting a cleaner and more sustainable future.
          </Typography>
        </div>
        
        {/* Button */}
        <div className="w-full xl:col-span-5 mt-4 order-4 xl:order-none" data-aos="fade-right">
          <Button text="Explore" href="#powering" showIcon={false} />
        </div>

      </div>
    </section>
  );
};

export default Powering;
