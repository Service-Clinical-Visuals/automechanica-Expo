"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";

export default function PremiumEngine() {
  return (
    <section className="w-full bg-[#111111] py-16 md:py-24 text-white">
      <Container className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center w-full xl:w-[80%] mx-auto mb-16 md:mb-16" data-aos="fade-down">
          <Typography variant="h2" outline={true} color="white" weight="bold" className="leading-[1.2] w-full max-w-[90%] md:max-w-[80%]">
            Innovation At Every Step, From The Bottle To The Box.
          </Typography>
        </div>

        {/* Content Section */}
        <div className="flex flex-col xl:flex-row items-center gap-8 w-full">

          {/* Left Cards */}
          <div className="flex flex-col gap-6 xl:gap-8 w-full xl:w-[30%] order-1 xl:order-1" data-aos="fade-right">
            <div className="bg-[#1f1f1f] rounded-[16px] p-8 text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 min-[1920px]:w-16 min-[1920px]:h-16 min-[2500px]:w-24 min-[2500px]:h-24 min-[3800px]:w-32 min-[3800px]:h-32 p-1 rounded-full border border-gray-600 bg-[#5A5A5A] flex items-center justify-center">
                <Typography variant="p" className="font-orbitron leading-none text-white">01</Typography>
              </div>
              <Typography variant="h4" color="white" className="font-orbitron">
                Ergonomic Bottle Design
              </Typography>
              <Typography variant="p" className="text-white  leading-relaxed max-w-[80%]">
                Comfortable grip and precise pouring for a spill-free experience.
              </Typography>
            </div>

            <div className="bg-[#1f1f1f] rounded-[16px] p-8 text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 min-[1920px]:w-16 min-[1920px]:h-16 min-[2500px]:w-24 min-[2500px]:h-24 min-[3800px]:w-32 min-[3800px]:h-32 rounded-full border border-gray-600 bg-[#5A5A5A] flex items-center justify-center">
                <Typography variant="p" className="font-orbitron font-medium text-[15px] text-white">03</Typography>
              </div>
              <Typography variant="h4" color="white" className="font-orbitron">
                Leakproof Seals
              </Typography>
              <Typography variant="p" className="text-white leading-relaxed max-w-[80%">
                Comfortable grip and precise pouring for a spill-free experience.
              </Typography>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-full xl:w-[40%] flex justify-center py-5 xl:py-0 order-2 xl:order-2" data-aos="zoom-in" data-aos-delay="200">
            <div className="w-full max-w-md xl:max-w-full aspect-[1/1.1] bg-[#2a2a2a] rounded-[16px] overflow-hidden flex items-center justify-center p-5">
              <img
                src="/moto/mapetrol/section3.png"
                alt="Mapetrol Packaging Innovation"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 xl:gap-8 w-full xl:w-[30%] order-3 xl:order-3" data-aos="fade-left" data-aos-delay="400">
            <div className="bg-[#1f1f1f] rounded-[16px] p-8 text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 min-[1920px]:w-16 min-[1920px]:h-16 min-[2500px]:w-24 min-[2500px]:h-24 min-[3800px]:w-32 min-[3800px]:h-32 rounded-full border border-gray-600 bg-[#5A5A5A] flex items-center justify-center">
                <Typography variant="p" className="font-orbitron font-medium text-[15px] text-white">02</Typography>
              </div>
              <Typography variant="h4" color="white" className="font-orbitron">
                Premium Label
              </Typography>
              <Typography variant="p" className="text-white leading-relaxed max-w-[80%]">
                Durable and vibrant for clear product information and brand appeal.
              </Typography>
            </div>

            <div className="bg-[#1f1f1f] rounded-[16px] p-8 text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 min-[1920px]:w-16 min-[1920px]:h-16 min-[2500px]:w-24 min-[2500px]:h-24 min-[3800px]:w-32 min-[3800px]:h-32 rounded-full border border-gray-600 bg-[#5A5A5A] flex items-center justify-center">
                <Typography variant="p" className="font-orbitron text-white">04</Typography>
              </div>
              <Typography variant="h4" color="white" className="font-orbitron">
                Reinforced Delivery
              </Typography>
              <Typography variant="p" className="text-white leading-relaxed max-w-[80%]">
                Durable cardboard boxes for stability during transport and palletization.
              </Typography>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
