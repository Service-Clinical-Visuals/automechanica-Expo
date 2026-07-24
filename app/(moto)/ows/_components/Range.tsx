"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";

const Range = () => {
  return (
    <section id="range" className="w-full py-16 bg-[#131118]">
      <div className="custom-container flex flex-col 2xl:grid 2xl:grid-cols-12 gap-8 items-center">
        
        {/* Content (span-5) */}
        <div className="order-1 2xl:col-span-5 w-full flex flex-col gap-8" data-aos="fade-right">
          <div className="flex flex-col gap-4">
            <Typography variant="h2" color="white" className=" leading-tight">
              OWS Product Range Video
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed ">
              Explore the full OWS product range, developed to support vehicle performance, protect essential systems, and deliver dependable results in workshops and everyday driving. From engine care to maintenance solutions, OWS combines German engineering with practical innovation to meet the demands of modern vehicles.
            </Typography>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-sm flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="w-7 h-7 text-white fill-[#9C76A2] shrink-0 mt-0.5"  strokeWidth={1.5} />
              <Typography variant="p" color="dark" className="text-xs leading-relaxed">
                 <strong>Wide Product Range</strong> - Additives, lubricants, and technical sprays.
              </Typography>
            </div>
            
            <div className="bg-white p-4 rounded-sm flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="w-7 h-7 text-white fill-[#9C76A2] shrink-0 mt-0.5"  strokeWidth={1.5} />
              <Typography variant="p" color="dark" className="text-xs leading-relaxed">
                 <strong>Workshop Ready</strong> - Built for professional maintenance and repair.
              </Typography>
            </div>

            <div className="bg-white p-4 rounded-sm flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="w-7 h-7 text-white fill-[#9C76A2] shrink-0 mt-0.5"  strokeWidth={1.5} />
              <Typography variant="p" color="dark" className="text-xs leading-relaxed">
                 <strong>German Engineering</strong> - Precision, quality, and reliability.
              </Typography>
            </div>

            <div className="bg-white p-4 rounded-sm flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="w-7 h-7 text-white fill-[#9C76A2] shrink-0 mt-0.5"  strokeWidth={1.5} />
              <Typography variant="p" color="dark" className="text-xs leading-relaxed">
                 <strong>Versatile Use</strong> - Solutions for performance and routine care.
              </Typography>
            </div>
          </div>

          <div className="mt-2">
             <Button text="Explore Product" href="#" />
          </div>
        </div>

        {/* Video Block (span-7) */}
        <div className="order-2 2xl:col-span-7 w-full h-full relative aspect-[16/10] bg-white/5 rounded-sm overflow-hidden shadow-2xl ml-0 2xl:ml-4" data-aos="fade-left">
           <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Range;
