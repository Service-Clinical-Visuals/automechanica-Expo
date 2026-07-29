"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section 
      id="converter" 
      className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-25 bg-[#F2F2F2] overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 min-[2100px]:gap-16 min-[3800px]:gap-24 items-center">
        
        {/* Heading Group - Mobile Order 1, Desktop Row 1 Right */}
        <div className="order-1 xl:col-start-9 xl:col-span-4 xl:row-start-1 flex flex-col gap-4 w-full" data-aos="fade-left">
          <div className="inline-flex flex-col self-start">
            <span className="w-1/2 h-[2px] bg-primary mb-1 self-start min-[2100px]:h-[3px] min-[3800px]:h-[4px]"></span>
            <Typography variant="span" color="primary" className="font-bold tracking-wide">
              Catalytic Converter
            </Typography>
            <span className="w-1/2 h-[2px] bg-primary mt-1 self-end min-[2100px]:h-[3px] min-[3800px]:h-[4px]"></span>
          </div>
          <Typography variant="h2" color="dark" className="font-bold leading-snug">
            Reliable Catalytic Converter Systems
          </Typography>
        </div>

        {/* Video - Mobile Order 2, Desktop Span Rows 1-2 Left */}
        <div className="order-2 xl:col-start-1 xl:col-span-8 xl:row-start-1 xl:row-span-2 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-right">
          <div className="w-full aspect-video relative overflow-hidden rounded-sm min-[2100px]:rounded-xl min-[3800px]:rounded-2xl">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content - Mobile Order 3, Desktop Row 2 Right */}
        <div className="order-3 xl:col-start-9 xl:col-span-4 xl:row-start-2 flex flex-col gap-6 w-full" data-aos="fade-left">
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Catalytic converters are essential components designed to reduce harmful emissions and ensure cleaner air output. Operating at temperatures between 480-650°C, they convert toxic gases into less harmful substances, improving engine efficiency and supporting smoother performance.
            </Typography>
            
            <Typography variant="p" color="muted" className="leading-relaxed">
              At Çelik Egzoz, catalytic converters are manufactured to meet strict legal and environmental standards, complying with Euro 3, Euro 4, and Euro 5 requirements. Built using high-quality 409 and 304 grade materials, they deliver durability, reliability, and consistent performance for both domestic and international markets.
            </Typography>
          </div>

          <div className="pt-2 min-[2100px]:pt-6 min-[3800px]:pt-10" data-aos="fade-up" data-aos-delay="100">
             <Button text="Explore Catalytic Converter" href="#converter" showIcon={false} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Deg360;
