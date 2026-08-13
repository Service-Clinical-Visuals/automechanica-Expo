"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section
      id="choose"
      className="w-full py-16 min-[3800px]:py-25 relative bg-[#F3F4F6]"
    >

      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-4 min-[2500px]:gap-8">

        {/* Heading Group (Mobile: Order 1) */}
        <div className="order-1 w-full max-w-[90%] flex flex-col items-center " data-aos="fade-up">
          <Typography variant="h2" className="font-bold leading-tight text-gray-900">
            Explore Every Detail in 360°
          </Typography>
        </div>

        {/* Text Body (Mobile: Order 2) */}
        <div className="order-2 w-full xl:max-w-[70%] mb-2" data-aos="fade-up" data-aos-delay="100">
          <Typography variant="p" className="leading-relaxed text-gray-600">
            Explore Gameroil's premium lubricants, antifreeze, and greases in an interactive 360° view. Engineered with advanced formulations, each product delivers reliable protection, efficiency, and long-lasting performance.
          </Typography>
        </div>

        {/* Video (Mobile: Order 3) */}
        <div className="order-3 w-full max-w-[95%] lg:max-w-[70%] aspect-video relative  overflow-hidden  rounded-2xl" data-aos="zoom-in" data-aos-delay="200">
          {/* Using 360 type as requested */}
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full "
          />
        </div>

      </div>
    </section>
  );
};

export default Deg360;
