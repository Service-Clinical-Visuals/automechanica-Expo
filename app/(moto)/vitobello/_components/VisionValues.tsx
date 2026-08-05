"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Lightbulb, Target } from "lucide-react";

export default function VisionValues() {
  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#1E1E1E] overflow-hidden" id="vision">
      <div className="custom-container relative z-10 flex flex-col gap-10 lg:gap-14">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 pb-8 lg:pb-10 border-b border-white/20" data-aos="fade-up">
          <div className="flex flex-col gap-3 lg:max-w-7xl">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              What Has Always Distinguished Us
            </Typography>
            <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-sm md:text-base mt-2">
              At Vitobello Ricambi S.r.l., our vision and mission are centered on delivering premium automotive spare parts with exceptional quality, competitive value, and outstanding customer service. Through continuous growth, innovation, and a customer-first approach, we strive to provide reliable engine repair solutions while building long-term partnerships based on trust, performance, and excellence.
            </Typography>
          </div>

          <div className="flex-shrink-0 pb-10" data-aos="fade-left" data-aos-delay="100">
            <Button text="Why Choose Us" href="#why-choose-us" showIcon={true} />
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full" data-aos="fade-up" data-aos-delay="150">

          {/* Card 1: Our Vision */}
          <div className="bg-[#27292A] border border-white/50 p-8 lg:p-10 xl:p-12 rounded-sm flex flex-col gap-6 shadow-xl h-fit self-center justify-between">
            <div className="text-center gap-6 lg:gap-8">
              <div className="flex items-center gap-4 lg:gap-6 pb-10">
                <img src="/moto/vitobello/v1.png" alt="Vision Icon" className="w-25 h-25 xl:w-30 xl:h-30 shrink-0 object-contain" />
                <Typography variant="h2" color="white" className="font-semibold text-2xl xl:text-3xl">
                  Our Vision
                </Typography>
              </div>

              <Typography variant="p" color="white" className="text-white/80 text-sm md:text-base leading-relaxed">
                Vitobello Ricambi aims to become the leader in the market for the supply of spare parts for mechanical engine repair of private cars and light commercial vehicles, standing out for the quality of its products, top-level customer service and the cost-effectiveness of its prices. Our goal is to create a positive buying experience for customers, both during purchase and after sales, and to be regarded as the first choice for engine repair parts.
              </Typography>
            </div>

            <div className="mt-4 flex justify-center">
              <Button text="Read More" href="#vision-more" showIcon={true} />
            </div>
          </div>

          {/* Middle Image */}
          <div className="w-auto h-auto max-h-[700px] rounded-sm overflow-hidden border border-white/20 shadow-xl relative bg-[#111]">
            <img
              src="/moto/vitobello/vision.png"
              alt="Vitobello Ricambi Team"
              className="w-auto h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Card 3: Our Mission */}
          <div className="bg-[#27292A] border border-white/20 p-8 lg:p-10 xl:p-12 rounded-sm flex flex-col gap-6 shadow-xl h-fit self-center justify-between">
            <div className="text-center gap-6 lg:gap-8">
              <div className="flex items-center gap-4 lg:gap-6 pb-10">
                <img src="/moto/vitobello/v2.png" alt="Vision Icon" className="w-25 h-25 xl:w-30 xl:h-30 shrink-0 object-contain" />
                <Typography variant="h2" color="white" className="font-semibold text-2xl xl:text-3xl">
                  Our Mission
                </Typography>
              </div>


              <Typography variant="p" color="white" className="text-white/80 text-sm md:text-base leading-relaxed">
                For more than 50 years, Vitobello Ricambi has been providing its customers high quality controlled and certified spare parts at competitive prices, providing customer service that aims to offer the best buying experience by following the customer at every stage, from spare part search to shipping and after-sales. With an ever-expanding product selection, we are constantly striving to offer cost-effective and reliable solutions for engine repair.
              </Typography>
            </div>

            <div className="mt-4 flex justify-center">
              <Button text="Read More" href="#mission-more" showIcon={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
