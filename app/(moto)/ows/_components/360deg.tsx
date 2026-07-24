"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section 
      id="360view" 
      className="w-full py-16 text-white relative bg-[#131118]"
    >
      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-8">

        {/* Heading and Text Block (Mobile: Order 1) */}
        <div className="order-1 w-full max-w-[90%] 2xl:max-w-[65%] flex flex-col items-center gap-4" data-aos="fade-up">
          <Typography variant="h2" color="white" className="leading-tight">
            See OWS Products from Every Angle
          </Typography>
          
          <Typography variant="p" color="white" className="leading-relaxed ">
            Experience OWS products from every angle with an interactive 360° view. Explore premium packaging, product details, and quality craftsmanship that reflect the precision, performance, and reliability behind every OWS automotive solution.
          </Typography>
        </div>

        {/* Horizontal Divider (Mobile: Order 2) */}
        <hr className="order-2 w-full h-[1px] bg-white/70 border-none my-2" data-aos="fade-up" data-aos-delay="100" />

        {/* Video Block (Mobile: Order 3) */}
        <div className="order-3 w-full 2xl:w-[70%] aspect-[16/9] relative shadow-2xl overflow-hidden bg-white/5 border border-white/10 rounded-2xl" data-aos="zoom-in" data-aos-delay="200">
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
