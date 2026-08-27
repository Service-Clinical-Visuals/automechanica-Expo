"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Precision() {
  return (
    <section className="relative w-full py-16 bg-secondary overflow-hidden">


      <div className="custom-container relative z-10 flex flex-col">

        {/* Header Block */}
        <div className="flex justify-between items-start mb-6  border-b border-white/40 pb-6" data-aos="fade-up">
          <div className="flex flex-col gap-4 ">
            <Typography variant="h2" color="white" className="font-semibold leading-tight">
              Precision ADAS Calibration For Modern Vehicles
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed xl:max-w-[80%]">
              Modern vehicles rely on Advanced Driver Assistance Systems (ADAS) to improve driver awareness, reduce collision risks, and enhance overall road safety. After replacing windshields, repairing suspension components, performing wheel alignments, or replacing cameras and radar sensors, precise ADAS calibration is essential to restore system accuracy.
            </Typography>
          </div>

          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0 cursor-pointer hover:bg-white/30 transition-colors">
            <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>

        {/* Content Block */}
        <div className="grid grid-cols-1 min-[1501px]:grid-cols-12 gap-10 w-full items-center">

          {/* Video Player */}
          <div className="w-full aspect-video   min-[1501px]:col-span-9 overflow-hidden shadow-2xl relative  max-[1500px]:order-2" data-aos="zoom-in" data-aos-delay="200">
            <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>

          {/* Performance Highlights */}
          <div className="flex flex-col gap-6 min-[1501px]:col-span-3 max-[1500px]:order-1" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h3" color="white" className="font-semibold">
              Performance Highlights
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed">
              Autocom's ADAS Calibration solution provides workshops with a reliable, guided process that ensures every safety system performs according to manufacturer specifications.
            </Typography>

            <ul className="flex flex-col gap-5 mt-2">
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#171717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <Typography variant="p" color="white" className="leading-relaxed">
                  Precision Calibration – Accurately calibrates cameras, radar, lidar, and sensor systems for reliable ADAS performance.
                </Typography>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#171717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <Typography variant="p" color="white" className="leading-relaxed">
                  Static & Dynamic Support – Supports both calibration methods to meet manufacturer requirements.
                </Typography>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#171717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <Typography variant="p" color="white" className="leading-relaxed">
                  Enhanced Road Safety – Restores ADAS functionality for safer and more reliable driving.
                </Typography>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#171717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <Typography variant="p" color="white" className="leading-relaxed">
                  Guided Workflow – Step-by-step software guidance ensures fast and accurate calibration.
                </Typography>
              </li>
            </ul>

            <div className="mt-4">
              <Button text="View Product Details" href="#" showIcon={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
