"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function RepairServices() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/moto/autocam/bg.png" alt="Services Background" className="w-full h-full object-cover" />
        {/* Overlay with 55% opacity of secondary color #0A326B */}
        <div className="absolute inset-0 bg-[#0A326B]/55"></div>
      </div>

      <div className="custom-container relative z-10 flex flex-col items-center text-center gap-6" data-aos="fade-up">
        <Typography variant="h2" color="white" className="font-semibold leading-tight">
          Autocom Repair Services
        </Typography>
        <Typography variant="p" color="white" className="leading-relaxed w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%]">
          Get expert support from a brand-specific master technician, helping you complete every repair and diagnostic job confidently in your own workshop.
        </Typography>
        <div className="mt-4">
          <Button text="View More" href="#" showIcon={true} />
        </div>
      </div>
    </section>
  );
}
