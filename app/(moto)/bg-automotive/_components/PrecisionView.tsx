"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  const features = [
    {
      title: "Precision Fit",
      desc: "Engineered to exact specifications for seamless installation and dependable operation."
    },
    {
      title: "Superior Durability",
      desc: "Crafted from premium materials to resist corrosion and withstand demanding conditions."
    },
    {
      title: "Efficient Emissions Control",
      desc: "Designed to support cleaner exhaust flow and compliance with modern standards."
    },
    {
      title: "Assured Quality",
      desc: "Manufactured under rigorous quality processes to deliver consistent, long-lasting performance."
    }
  ];

  return (
    <section className="py-20 xl:py-20 bg-[#F5F5F5]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-center">

          {/* Left: 360 Video Player */}
          <div className="w-full aspect-video relative overflow-hidden bg-gray-200 flex items-center justify-center" data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />

          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-5 items-start" data-aos="fade-left">
            {/* Heading */}
            <div className="flex flex-col gap-2 items-start">
              <div className="inline-flex flex-col">
                <Typography variant="h4" className="text-[#185E2D] orbitron-font font-semibold tracking-widest text-[15px] uppercase  pb-0.5']">OUR PRODUCTS</Typography>
                <div className="w-1/2 h-[2px] bg-[#185E2D] self-end"></div>
              </div>
              <Typography variant="h2" className="section-title text-[#202020] orbitron-font font-semibold leading-tight]">
                Precision Engine Components
              </Typography>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 text-[#191919] dmsans-font section-text tracking-wider max-w-[680px]">
              <Typography variant="p">
                We deliver a complete range of high-performance engine components including camshafts, cylinder head parts, valves, and tappets—engineered to meet or exceed OEM standards. Designed with advanced materials and precision manufacturing, these components ensure accurate engine timing, efficient combustion, and long-lasting reliability.
              </Typography>
              <Typography variant="p">
                From controlling valve operation to maintaining optimal engine performance, our products are built to perform under extreme conditions while supporting a wide range of modern vehicles.
              </Typography>
            </div>

            {/* Button */}
            <div className="mt-2">
              <Button href="#" variant="primary" className="!bg-[#185E2D] hover:!bg-[#154620] !font-['Montserrat'] !font-medium !rounded-md !px-5 !py-2.5 flex items-center gap-2">
                Explore Product <img src="/moto/bg-automotive/tabler_arrow-right.png" alt="Right Arrow" className="w-5 h-5 object-contain" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
