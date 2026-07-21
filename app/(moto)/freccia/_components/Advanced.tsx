"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Advanced = () => {
  return (
    <section id="advanced" className="w-full py-16  bg-[#F9F9F9] overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:gap-18 items-center">
        
        {/* Mobile: Content is top (order-1), Desktop: Content is Left (col-span-5) */}
        <div className="flex flex-col gap-6 order-1 xl:col-start-1 xl:col-span-5 w-full" data-aos="fade-right">
          
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Advanced Automotive Components
          </Typography>

          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              We provide a complete range of high-performance components designed to support modern engines and vehicle systems. Built with advanced engineering and OEM-level standards, our products deliver reliability, durability, and consistent performance across every application.
            </Typography>
            
            <Typography variant="p" color="muted" className="leading-relaxed">
              From filtration systems to core engine, mechanical, and electrical components, our portfolio ensures seamless integration and long-term efficiency for passenger cars, commercial vehicles, and industrial applications worldwide.
            </Typography>
          </div>

          <div className="mt-2" data-aos="fade-right" data-aos-delay="100">
            <Button text="Explore Products" href="#products" />
          </div>
        </div>

        {/* Mobile: Video is bottom (order-2), Desktop: Video is Right (col-span-7) */}
        <div className="w-full order-2 xl:col-start-6 xl:col-span-7 h-full flex items-center justify-center" data-aos="fade-left">
           <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-sm bg-gray-200">
             <DynamicVideoPlayer
               className="absolute inset-0 w-full h-full object-cover"
               type="short-1"
             />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Advanced;
