"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section id="choose" className="w-full bg-[#F9F9F9] py-10 xl:py-16 min-[3800px]:py-24 overflow-hidden">
      <div className="custom-container max-w-[1920px] flex flex-col gap-10 min[3800px]:gap-20">

        {/* Top Row - Video and Content */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 min[3800px]:gap-20 items-center">
          {/* Left Column - Video (Span 7) */}
          <div className="xl:col-span-7 w-full aspect-video bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden relative" data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content (Span 5) */}
          <div className="xl:col-span-5 w-full flex flex-col gap-6 xl:pl-4" data-aos="fade-left">
            {/* Heading Group */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {/* CSS clip-path for diamond shape avoiding inline styles */}
                <div className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 bg-secondary [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] shrink-0"></div>
                <Typography variant="h4" color="primary" className="font-bold">
                  Precision Pistons & Piston Rings in 360°
                </Typography>
              </div>
              <Typography variant="h2" color="dark" className="font-bold leading-tight">
                Durable materials with wear-resistant coatings
              </Typography>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-5 mt-2">
              <Typography variant="p" color="muted" className="leading-relaxed">
                Explore the craftsmanship behind Hastings pistons and piston rings through an immersive 360-degree product experience. Rotate, zoom, and inspect every component to appreciate the precision machining, premium materials, and advanced engineering that contribute to reliable engine performance across automotive, commercial, industrial, agricultural, and performance applications. Hastings specializes exclusively in piston ring technology.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed">
                Designed to improve compression sealing, optimize oil control, reduce friction, and enhance engine durability, Hastings products are manufactured under rigorous quality standards using advanced production technologies and specialized coatings. Whether you're rebuilding an engine or maintaining OEM performance, the interactive 360° view helps you examine every feature with confidence before making your selection.
              </Typography>
            </div>

            <div className="mt-4">
              <Button text="Video Product Experience" href="#choose" variant="primary" />
            </div>
          </div>
        </div>

        {/* Bottom Row - Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-10 mt-4" data-aos="fade-up">
          {/* Card 1 */}
          <div className="bg-primary text-white p-8 xl:p-10 rounded-tl-[50px] rounded-br-[50px] flex items-center shadow-md hover:shadow-lg transition-shadow">
            <Typography variant="p" color="white" className="leading-relaxed">
              <strong className="font-bold">Complete Product View</strong> – Rotate the piston and piston ring assembly from every angle for a detailed inspection.
            </Typography>
          </div>

          {/* Card 2 */}
          <div className="bg-primary text-white p-8 xl:p-10 rounded-tl-[50px] rounded-br-[50px] flex items-center shadow-md hover:shadow-lg transition-shadow">
            <Typography variant="p" color="white" className="leading-relaxed">
              <strong className="font-bold">Precision Engineering</strong> – Discover accurately machined components designed for exceptional engine performance.
            </Typography>
          </div>

          {/* Card 3 */}
          <div className="bg-primary text-white p-8 xl:p-10 rounded-tl-[50px] rounded-br-[50px] flex items-center shadow-md hover:shadow-lg transition-shadow">
            <Typography variant="p" color="white" className="leading-relaxed">
              <strong className="font-bold">Superior Sealing</strong> – Engineered to provide optimal compression and reduce combustion gas leakage.
            </Typography>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Deg360;
