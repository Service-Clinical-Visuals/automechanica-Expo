"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section
      id="360"
      className="w-full py-16 min[3800px]:py-24 text-white relative bg-primary"
    >
      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-6 md:gap-8">

        {/* Heading Group (Mobile: Order 1) */}
        <div className="order-1 w-full max-w-[90%] flex flex-col items-center gap-4" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            360° Product Experience
          </Typography>
        </div>

        {/* Text Body (Mobile: Order 2) */}
        <div className="order-2 w-full lg:max-w-[70%] xl:max-w-[60%] mb-4" data-aos="fade-up" data-aos-delay="100">
          <Typography variant="p" color="white" className="leading-relaxed">
            Explore WAI's premium aftermarket solutions from every angle with our interactive 360° product viewer. Examine key components, precision engineering, and OE-quality craftsmanship in detail, showcasing the durability, performance, and innovation behind every product.
          </Typography>
        </div>

        {/* Video (Mobile: Order 3) */}
        <div className="order-3 w-full xl:max-w-[65%] aspect-video relative shadow-2xl overflow-hidden bg-white/5 border border-white/10 rounded-2xl" data-aos="zoom-in" data-aos-delay="200">
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
