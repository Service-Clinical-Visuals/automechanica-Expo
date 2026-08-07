"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section
      id="choose"
      className="w-full py-20 min-[3800px]:py-40 bg-[#111111] overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-10">

        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6" data-aos="fade-up">
          <div className="flex items-center gap-4">
            <div className="w-8 h-1 bg-secondary shrink-0"></div>
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Explore HVAC Components in 360°
            </Typography>
          </div>
          <Button text="View Product Details" variant="secondary" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">

          {/* Video (Mobile order: 3, Desktop: col 1-7) */}
          <div className="order-3 xl:order-1 xl:col-span-7 w-full aspect-video relative rounded-2xl overflow-hidden shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text & Right Cards (Mobile order: 2, Desktop: col 8-12) */}
          <div className="order-2 xl:order-2 xl:col-span-5 flex flex-col gap-6" data-aos="fade-left" data-aos-delay="200">
            <Typography variant="p" color="white" className="leading-relaxed block ">
              Take a closer look at our premium HVAC components with an immersive 360° product view. Rotate, zoom, and inspect every detail to understand the quality, precision engineering, and durability behind every component. Designed for automotive, industrial, agricultural, and transport refrigeration applications, our products deliver reliable performance in the most demanding environments.
            </Typography>

            {/* Card 1 */}
            <div className="flex flex-col gap-3 bg-[#1E94D259] border border-secondary/30 rounded-xl p-5 min-[3800px]:p-10">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 text-white shrink-0"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                <Typography variant="h3" color="white" className="font-bold">Advanced HVAC Solutions</Typography>
              </div>
              <Typography variant="p" color="white" className="block">
                Our comprehensive HVAC product range is engineered to deliver superior cooling, heating, and ventilation performance for passenger vehicles, commercial fleets, agricultural machinery, industrial equipment, and transport refrigeration systems.
              </Typography>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-3 bg-[#1E94D259] border border-secondary/30 rounded-xl p-5 min-[3800px]:p-10">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 text-white shrink-0"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                <Typography variant="h3" color="white" className="font-bold">High-Performance Climate Control</Typography>
              </div>
              <Typography variant="p" color="white" className=" block">
                Designed with precision engineering, our HVAC components ensure optimal temperature regulation, improved airflow, and consistent comfort in every driving condition. Built for long-lasting performance.
              </Typography>
            </div>
          </div>
        </div>

        {/* Bottom Cards Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="300">
          {/* Card 3 */}
          <div className="flex flex-col gap-3 bg-[#1E94D259] border border-secondary/30 rounded-xl p-6 min-[3800px]:p-12">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 text-white shrink-0"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              <Typography variant="h3" color="white" className="font-bold">Comprehensive Product Portfolio</Typography>
            </div>
            <Typography variant="p" color="white" className="block">
              We offer a complete range of automotive climate control solutions, including compressors, condensers, evaporators, blower motors, expansion valves, receiver driers, hoses, fittings, refrigerants, and essential HVAC accessories to support every repair and replacement need.
            </Typography>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-3 bg-[#1E94D259] border border-secondary/30 rounded-xl p-6 min-[3800px]:p-12">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 text-white shrink-0"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              <Typography variant="h3" color="white" className="font-bold">Built for Reliability</Typography>
            </div>
            <Typography variant="p" color="white" className="block">
              Manufactured using premium-grade materials and advanced production technologies, our products are tested for durability, corrosion resistance, and dependable performance under extreme operating conditions, ensuring long service life and customer satisfaction.
            </Typography>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Deg360;
