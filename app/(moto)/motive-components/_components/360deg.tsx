"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section 
      id="choose" 
      className="w-full py-16  text-white relative bg-primary bg-cover bg-center bg-no-repeat"
    >

      <div className="absolute inset-0 z-0"></div>

      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-6">

        {/* Heading Group (Mobile: Order 1) */}
        <div className="order-1 w-full max-w-[90%] flex justify-center" data-aos="fade-up">
           <div className="inline-flex items-center border-l-[3px] border-[#F05A28] pl-4">
            <Typography variant="h1" color="white" className="font-bold leading-tight text-left">
              Complete Engine Component Solution
            </Typography>
           </div>
        </div>

        {/* Text Body (Mobile: Order 2) */}
        <div className="order-2 w-full  lg:max-w-[70%] mb-4" data-aos="fade-up" data-aos-delay="100">
          <Typography variant="p" color="white" className="leading-relaxed ">
            Explore our comprehensive range of premium aftermarket engine components, engineered for quality, reliability,
            <br className="hidden md:block" /> and performance across a wide range of automotive applications.
          </Typography>
        </div>

        {/* Video (Mobile: Order 3) */}
        <div className="order-3 w-full max-w-[95%] xl:max-w-[70%] aspect-video relative shadow-2xl overflow-hidden bg-white/5 rounded-xl" data-aos="zoom-in" data-aos-delay="200">
          {/* Using 360 type as requested */}
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Deg360;
