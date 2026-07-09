"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Choose = () => {
  return (
    <section id="choose" className="w-full py-16  bg-primary text-white">
      <div className="custom-container flex flex-col items-center justify-center text-center">

        {/* Mobile: Order 1, Desktop: Order 1 */}
        <div className="order-1 w-full max-w-[90%] mb-4" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            Why Choose Eurogielle Cabin Air Filters?
          </Typography>
        </div>

        {/* Mobile: Order 2, Desktop: Order 2 */}
        <div className="order-2 w-full max-w-[85%] lg:max-w-[70%] mb-12" data-aos="fade-up" data-aos-delay="100">
          <Typography variant="p" color="white" className="leading-relaxed  text-sm md:text-base">
            Eurogielle cabin air filters ensure maximum protection against dust, pollen, and pollutants. Engineered with advanced filtration media, our products improve air quality inside the vehicle, providing a safe, comfortable, and healthy driving environment for all passengers.
          </Typography>
        </div>

        {/* Mobile: Order 3, Desktop: Order 3 */}
        <div className="order-3 w-full max-w-[85%] lg:max-w-[75%] aspect-video relative shadow-2xl overflow-hidden  bg-white/5 border border-white/10" data-aos="zoom-in" data-aos-delay="200">
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Choose;
