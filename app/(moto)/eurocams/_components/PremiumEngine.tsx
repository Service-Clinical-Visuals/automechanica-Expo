"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function PremiumEngine() {
  return (
    <section className="w-full py-16  bg-secondary">
      <div className="custom-container flex flex-col items-center justify-center text-center">
        
        {/* Title */}
        <Typography variant="h1" className="text-white mb-4" data-aos="fade-up">
          Precision Engine Components
        </Typography>

        {/* Description */}
        <Typography variant="p" color="white" className=" max-w-[70%] mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          Eurocams Ltd. manufactures premium engine components engineered to deliver exceptional performance, durability, and reliability. From camshafts and cylinder head components to valves and tappets, every product is precision-manufactured to meet the highest industry standards for modern automotive applications.
        </Typography>

        {/* Video Player Placeholder */}
        <div className="w-full max-w-[80%] aspect-video rounded-xl overflow-hidden shadow-2xl relative bg-white flex items-center justify-center" data-aos="fade-up" data-aos-delay="200">
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
}
