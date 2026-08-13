"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Excellence = () => {
  return (
    <section
      id="excellence"
      className="w-full py-16 min-[3800px]:py-32 bg-[#EDEDED]"
    >
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 gap-10  min-[3800px]:gap-32 items-center">

        {/* Left Side: Video (Order 2 on Mobile, 1 on Desktop) */}
        <div className="order-2 xl:order-1 xl:col-span-7 w-full relative h-full flex items-center" data-aos="fade-right">
          <div className="w-full aspect-video relative overflow-hidden bg-white/5 border border-black/5 min-[3800px]:rounded-[40px]">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Heading, Text & Bullets (Order 1 on Mobile, 2 on Desktop) */}
        <div className="flex flex-col gap-6 min-[3800px]:gap-12 order-1 xl:order-2 xl:col-span-5 w-full" data-aos="fade-left">

          <div className="flex flex-col gap-4 min-[3800px]:gap-8">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Engineering Excellence from Concept to Performance
            </Typography>
            <Typography variant="p" color="dark" className="leading-relaxed">
              Interact with our precision-engineered turbocharger in a fully immersive 360° view and explore its design from every angle. Rotate, zoom, and inspect every component to discover the engineering excellence behind its outstanding performance. From the compressor housing to the turbine assembly, every detail reflects our commitment to quality, durability, and precision manufacturing.
            </Typography>
          </div>

          {/* Bullet Points */}
          <div className="flex flex-col gap-4 min-[3800px]:gap-8 mt-2 min-[3800px]:mt-6">
            <div className="flex items-start gap-3 min-[3800px]:gap-6">
              <img src="/moto/donmez/Vector.png" alt="bullet" className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 object-contain shrink-0 mt-0.5" />
              <Typography variant="p" color="dark" className="leading-relaxed font-medium">
                Advanced manufacturing with precision CNC machining.
              </Typography>
            </div>
            <div className="flex items-start gap-3 min-[3800px]:gap-6">
              <img src="/moto/donmez/Vector.png" alt="bullet" className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 object-contain shrink-0 mt-0.5" />
              <Typography variant="p" color="dark" className="leading-relaxed font-medium">
                Dynamic balancing for smoother and more efficient operation.
              </Typography>
            </div>
            <div className="flex items-start gap-3 min-[3800px]:gap-6">
              <img src="/moto/donmez/Vector.png" alt="bullet" className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 object-contain shrink-0 mt-0.5" />
              <Typography variant="p" color="dark" className="leading-relaxed font-medium">
                Comprehensive quality inspections and performance testing.
              </Typography>
            </div>
          </div>

          {/* Button */}
          <div className="mt-4 min-[3800px]:mt-8 flex justify-start">
            <Button text="View Product" variant="primary" href="#products" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Excellence;
