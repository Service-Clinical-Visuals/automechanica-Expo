"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";

export default function AboutUs() {
  return (
    <section className="py-20 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-5" data-aos="fade-right">
            {/* Heading */}
            <div className="flex flex-col gap-2 items-start">
              <div className="inline-flex flex-col pb-2">
                <Typography variant="h4" className="text-[#185E2D] orbitron-font font-semibold tracking-widest text-[15px] uppercase  pb-0.5">ABOUT BGA</Typography>
                <div className="w-1/2 h-[2px] bg-[#185E2D] self-end mt-0.5"></div>
              </div>
              <Typography variant="h2" className="section-title text-[#202020] orbitron-font font-semibold leading-tight">
                A Heritage Of Quality. A Future Of Innovation
              </Typography>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5 text-[#191919] dmsans-font section-text tracking-wider">
              <Typography variant="p">
                Since 1929, BG Automotive (BGA) has been at the forefront of manufacturing high-quality engine and steering components for the automotive aftermarket. With a strong commitment to quality, innovation, and customer service, the company has built a reputation as a trusted global partner.
              </Typography>
              <Typography variant="p">
                Serving distributors in over 100 countries, BGA continues to deliver reliable, precision-engineered products that meet the evolving demands of the automotive industry while maintaining the highest standards of performance and consistency.
              </Typography>
            </div>

            {/* Button */}
            <div className="mt-2 mb-2">
              <Button href="#" variant="primary" className="!bg-[#1E5F2B] hover:!bg-[#154620] !font-sans !font-medium !rounded-md !px-5 !py-2 flex items-center gap-2">
                Know More <img src="/moto/bg-automotive/tabler_arrow-right.png" alt="Right Arrow" className="w-5 h-5 object-contain" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full h-full flex" data-aos="fade-left">
            <img
              src="/moto/bg-automotive/AbtCompanyImg.png"
              alt="BG Automotive Facility"
              className="w-auto h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
