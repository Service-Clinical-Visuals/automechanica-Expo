"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const Deg360 = () => {
  return (
    <section 
      id="360deg" 
      className="w-full py-10 xl:py-16 min-[3800px]:pt-25 bg-[#F9F9F9] overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10  items-center">

        {/* Content Wrapper */}
        <div className="contents xl:flex xl:flex-col  xl:col-span-5 xl:row-start-1 xl:gap-8">
          
          {/* Heading Group (Mobile Order 1) */}
          <div className="order-1 flex flex-col gap-2 w-full" data-aos="fade-right">
             <div className="inline-flex flex-col self-start">
                <Typography variant="span" color="secondary" className="font-bold tracking-wide">
                  HVAC Components
                </Typography>
                <span className="w-1/2 h-[2px] bg-secondary self-end mt-1"></span>
             </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight mt-1">
              High-Performance HVAC System Solutions
            </Typography>
          </div>

          {/* Body and Button (Mobile Order 3) */}
          <div className="order-3 flex flex-col gap-6 w-full" data-aos="fade-right" data-aos-delay="100">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Advanced thermal management components engineered to deliver optimal climate control performance across automotive and industrial applications. From compressing and circulating refrigerant to efficient heat exchange and cabin temperature regulation, these systems work together to ensure reliable cooling, heating, and air quality in all driving conditions. Each component is designed with precision manufacturing, durability, and high-efficiency standards to meet modern vehicle requirements.
            </Typography>

            <ul className="flex flex-col gap-4 mt-2">
              {[
                "Reliable heater cores for consistent cabin heating and defrosting",
                "Precision-built evaporators ensuring effective heat absorption and air cooling",
                "Engineered for long service life, corrosion resistance, and stable performance"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 min-[2100px]:gap-4 min-[3800px]:gap-6">
                  <ArrowRight className="w-5 h-5 min-[2100px]:w-7 min-[2100px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                  <Typography variant="p" color="muted" className="leading-relaxed">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button text="Explore HVAC Solutions" href="#products" />
            </div>
          </div>
        </div>

        {/* Video (Mobile Order 2, Desktop Right) */}
        <div className="order-2 xl:col-span-7 xl:row-start-1 w-full h-full flex items-center justify-center min-h-[300px] xl:min-h-[400px]" data-aos="fade-left">
          <div className="w-full aspect-video relative overflow-hidden shadow-lg  flex items-center justify-center">
            {/* Using 360 type as requested */}
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Deg360;
