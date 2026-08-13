"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Settings, Lightbulb, Search } from "lucide-react";

const Innovation = () => {
  return (
    <section
      id="innovation"
      className="w-full py-16 bg-secondary text-white overflow-hidden"
    >
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 gap-10  items-center">

        {/* Left Side: Heading, Text & Cards (Order 1 on Mobile) */}
        <div className="flex flex-col gap-10 order-1 xl:col-start-1 xl:col-span-5 w-full" data-aos="fade-right">

          <div className="flex flex-col gap-4">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Driven by Innovation, Built for the Future
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed ">
              Innovation is at the core of every Dönmez product. By combining decades of manufacturing expertise with continuous research and advanced production technologies, we develop solutions that meet the evolving demands of the global commercial vehicle industry.
            </Typography>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mt-4">

            {/* Card 1 */}
            <div className="flex flex-col gap-4 bg-white/5 border border-white/10 px-4 py-8 rounded-md hover:bg-white/10 transition-colors relative">
              <div className="absolute -top-5 -left-3 bg-secondary rounded-full p-1.5">
                <div className="bg-[#D1D5DB] text-secondary p-1.5 rounded-full flex items-center justify-center">
                  <Settings className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14" />
                </div>
              </div>
              <Typography variant="h4" color="white" className="font-semibold text-center leading-tight">
                Advanced<br />Manufacturing
              </Typography>
              <Typography variant="span" color="white" className="text-gray-400 text-center leading-relaxed">
                Continuous investment in cutting-edge technologies to enhance precision, efficiency, and production excellence.
              </Typography>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-4 bg-white/5 border border-white/10 px-4 py-8 rounded-md hover:bg-white/10 transition-colors relative">
              <div className="absolute -top-5 -left-3 bg-secondary rounded-full p-1.5">
                <div className="bg-[#D1D5DB] text-secondary p-1.5 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14" />
                </div>
              </div>
              <Typography variant="h4" color="white" className="font-semibold text-center leading-tight">
                Innovative<br />Engineering
              </Typography>
              <Typography variant="span" color="white" className="text-gray-400 text-center leading-relaxed">
                Driven by decades of expertise to develop reliable, high-performance solutions for commercial vehicles.
              </Typography>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-4 bg-white/5 border border-white/10 px-4 py-8 rounded-md hover:bg-white/10 transition-colors relative">
              <div className="absolute -top-5 -left-3 bg-secondary rounded-full p-1.5">
                <div className="bg-[#D1D5DB] text-secondary p-1.5 rounded-full flex items-center justify-center">
                  <Search className="w-7 h-7 min-[3800px]:w-14 min-[3800px]:h-14" />
                </div>
              </div>
              <Typography variant="h4" color="white" className="font-semibold text-center leading-tight">
                Precision Quality<br />Control
              </Typography>
              <Typography variant="span" color="white" className="text-gray-400 text-center leading-relaxed">
                Every product undergoes rigorous inspections and testing to ensure consistent quality and dependable performance.
              </Typography>
            </div>

          </div>

          {/* Button */}
          <div className="w-full flex justify-start pt-1" data-aos="fade-up" data-aos-delay="100">
            <Button text="View Product" variant="primary" href="#products" />
          </div>
        </div>

        {/* Video (Order 2 on Mobile, Right Column on Desktop) */}
        <div className="order-2 xl:order-1 xl:col-start-6 xl:col-span-7 w-full relative h-full flex items-center" data-aos="fade-left">
          <div className="w-full aspect-video relative overflow-hidden  ">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Button (Order 3 on Mobile, Left Column Row 2 on Desktop) */}


      </div>
    </section>
  );
};

export default Innovation;
