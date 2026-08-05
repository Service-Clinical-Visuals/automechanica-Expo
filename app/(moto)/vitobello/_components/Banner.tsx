import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full pt-[80px] md:pt-[100px] lg:pt-[110px] pb-8 lg:pb-12 bg-[#1E1E1E]" data-aos="fade-up">
      {/* Extended Video Background */}
      <div className="custom-container relative">
        <div className="relative overflow-hidden w-full h-screen rounded-2xl md:rounded-[2rem] shadow-xl" data-aos="zoom-in" data-aos-delay="100">

          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

          {/* Text Content */}
          <div className="absolute inset-0 z-20 pointer-events-none pl-6 md:pl-12 xl:pl-16 pb-25 flex flex-col justify-end">
            <div className="text-left  pointer-events-auto" data-aos="fade-up" data-aos-delay="200">
              <Typography variant="h1" color="white" className="leading-tight mb-4">
                Driving Engine Performance With Confidence
              </Typography>
              <Typography variant="p" color="white" className=" mb-8 max-w-[70%] xl:max-w-[50%] leading-relaxed">
                Premium engines, gearboxes, and automotive components engineered for quality, reliability, and professional performance across the global aftermarket.
              </Typography>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
