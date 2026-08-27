"use client";

import React from "react";
import Typography from "./Typography";

export default function Choice() {
  return (
    <section className="w-full py-16 min-[2100px]:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        <div className="flex flex-col items-center text-center w-full mb-10  order-1" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-semibold leading-tight mb-4">
            The Choice Of Vehicle Manufacturers
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed  max-w-[95%] mx-auto">
            For many years, Mutlu Akü has consistently met the demanding technical and performance requirements of leading vehicle manufacturers. Recognized for its superior quality, advanced battery technology, and dependable reliability, Mutlu Akü is the preferred original equipment (OE) partner for many of the automotive industry's most respected brands, delivering exceptional performance, long service life, and trusted solutions for modern vehicle applications.
          </Typography>
        </div>

        <div className="w-full max-h-[650px] rounded-2xl md:rounded-[32px] overflow-hidden  order-3 mt-6 md:mt-0" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/moto/mutlu/section3.png"
            alt="Vehicle Manufacturers Choice"
            className="w-full h-full  object-cover"
          />
        </div>

      </div>
    </section>
  );
}
