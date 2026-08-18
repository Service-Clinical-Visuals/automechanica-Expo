"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const Explore360 = () => {
  return (
    <section className="w-full py-16  bg-primary text-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-4 ">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Explore Brake Pads In 360°
            </Typography>
            <Typography variant="p" color="white" className="text-gray-300 max-w-[80%] leading-relaxed ">
              Experience TOMEX BRAKES Sp. z o.o. Sp. K. Brake Pads from every angle through our interactive 360° view. Discover the precision engineering, premium materials, and exceptional quality behind every product.
            </Typography>
          </div>
          
          <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-white/30 items-center justify-center hover:bg-white/39 transition-colors cursor-pointer">
            <ArrowUpRight className="w-9 h-9 text-black/56" strokeWidth={2} />
          </div>
        </div>
        
        <div className="w-full h-px bg-white/20"></div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 items-center xl:grid-cols-12 gap-10 min-[2100px]:gap-16 ">
          
          {/* Content (Key Features) Side */}
          {/* Order 2 on mobile/tablet, Order 2 on desktop */}
          <div className="flex flex-col gap-8 order-2 xl:order-2 xl:col-span-4 w-full" data-aos="fade-left">
            <div className="flex flex-col gap-4">
              <Typography variant="h2" color="white" className="font-bold">
                Key Features
              </Typography>
              <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                Designed for passenger and light commercial vehicles, TOMEX BRAKES Sp. z o.o. Sp. K. brake pads provide the confidence professionals and drivers expect. Extensive testing guarantees dependable performance, durability, and safety in everyday and demanding applications.
              </Typography>
            </div>

            {/* Bullet Points */}
            <div className="flex flex-col gap-5">
              {[
                { title: "Wide Vehicle Coverage", desc: "Suitable for passenger and light commercial vehicles." },
                { title: "Maximum Reliability", desc: "Tested for consistent safety and performance." },
                { title: "High-Performance Braking", desc: "Responsive stopping power in all conditions." },
                { title: "Long-Lasting Durability", desc: "Built for extended service life and reduced wear." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 min-[2100px]:w-10 min-[2100px]:h-10 text-primary fill-white shrink-0 mt-0.5" strokeWidth={2} />
                  <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">{item.title}</span> – {item.desc}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Button text="View Product Details" href="#product-details" variant="secondary" showIcon={true} />
            </div>
          </div>

          {/* Video Side */}
          {/* Order 1 on mobile/tablet, Order 1 on desktop */}
          <div className="w-full order-1 xl:order-1 xl:col-span-8 flex justify-center" data-aos="fade-right" data-aos-delay="100">
            <div className="w-full aspect-video  rounded  overflow-hidden bg-white/5 relative shadow-2xl border border-white/10 flex items-center justify-center">
              {/* Dynamic Video Player */}
              <DynamicVideoPlayer type="360" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Explore360;
