"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section 
      id="converter" 
      className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-[#F3F3F3]/50 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center justify-center gap-10 min-[3800px]:gap-20 text-center">
        
        {/* Heading Group */}
        <div className="flex flex-col gap-4 w-full max-w-[90%] md:max-w-[80%] mx-auto" data-aos="fade-up">
          <Typography variant="h4" color="primary" className="font-bold tracking-wide">
            AGM Battery Range
          </Typography>
          <Typography variant="h2" color="dark" className="font-bold leading-snug">
            Advanced AGM Batteries for High Energy Demands
          </Typography>
        </div>

        {/* Text Content */}
        <div className="w-full max-w-[95%] md:max-w-[80%] mx-auto" data-aos="fade-up" data-aos-delay="100">
          <Typography variant="p" color="dark" className="leading-relaxed text-center">
            Our AGM (Absorbent Glass Mat) batteries are engineered to deliver superior power, durability, and reliability for modern vehicles and energy systems. Designed with sealed, maintenance-free technology, they provide efficient energy distribution, fast charging capability, and consistent performance even under demanding conditions. Built to support start-stop systems and high electrical loads, AGM batteries ensure long service life, enhanced safety, and dependable operation across automotive and industrial applications.
          </Typography>
        </div>

        {/* Video */}
        <div className="w-full max-w-[95%] md:max-w-[80%] mx-auto flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-up" data-aos-delay="200">
          <div className="w-full aspect-[16/9] relative overflow-hidden rounded-md min-[2100px]:rounded-xl min-[3800px]:rounded-2xl">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Button */}
        <div className="pt-2 min-[2100px]:pt-6 min-[3800px]:pt-10" data-aos="fade-up" data-aos-delay="300">
          <Button text="Explore AGM Batteries" href="#converter" variant="primary" showIcon={true} />
        </div>

      </div>
    </section>
  );
};

export default Deg360;
