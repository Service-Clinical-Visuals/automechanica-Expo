"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Future() {
  return (
    <section className="w-full py-16 md:py-15 bg-[var(--color-background)] relative" id="sustainability">
      <div className="custom-container flex flex-col items-center">

        {/* Header Text */}
        <div className="text-center  mx-auto mb-12 md:mb-16" data-aos="fade-up">
          <Typography variant="h2" color="dark" weight="bold" className="font-oswald tracking-tight mb-6">
            At MEYLE, The Wheel Is Turning - For A Sustainable Future
          </Typography>
          <Typography variant="p" color="dark" className="font-lato leading-relaxed lg:max-w-[70%] mx-auto">
            For us, the circular economy is more than just a buzzword. We live it. This means that we design products that last longer and ensure that cars and vans can be repaired more efficiently. We use recycled materials and optimize our production processes to avoid waste. From development to disposal, we think in cycles - for a sustainable future for the automotive industry and a world in which resources are valued.
          </Typography>
        </div>

        {/* Images Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg relative group">
            <img
              src="/moto/meyle/section3.png"
              alt="Solar panels on roof"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg relative group">
            <img
              src="/moto/meyle/section4.png"
              alt="Warehouse logistics"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Button */}
        <div data-aos="fade-up" data-aos-delay="300">
          <Button
            text="Explore Sustainability"
            href="#sustainability-link"
            showIcon={true}
            color="primary"
          />
        </div>

      </div>
    </section>
  );
}
