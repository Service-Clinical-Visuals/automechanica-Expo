"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

const Difference = () => {
  return (
    <section className="w-full py-12 lg:py-15 bg-white">
      <div className="custom-container flex flex-col gap-6 lg:gap-8">

        {/* Top Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-gray-400 pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 max-w-[50%]">
            <Typography variant="h2" color="primary" className="font-bold">
              The Eurogielle Difference
            </Typography>
            <Typography variant="p" className="text-gray-600 leading-relaxed text-sm lg:text-base max-w-full">
              For over 30 years, Eurogielle has combined Italian expertise, advanced manufacturing, and family-driven values to create premium cabin filtration solutions trusted by customers around the world.
            </Typography>
          </div>
          <div className="shrink-0 mt-1 lg:mt-0">
            <Button text="Learn More" href="#" />
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">

          {/* Card 1 */}
          <div className="flex flex-col gap-6 group" data-aos="fade-up" data-aos-delay="100">
            <div className="relative w-full h-[70%] rounded-[24px] lg:rounded-[32px] overflow-hidden ">
              <img
                src="/moto/eurogielle/section3.png"
                alt="An Italian company"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 right-6 w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-primary-hover transition-colors">
                <ArrowUpRight size={28} strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col gap-3 text-center lg:px-2">
              <Typography variant="h4" color="primary" className="font-bold">
                An Italian company
              </Typography>
              <Typography variant="p" className="text-gray-600 text-sm lg:text-base leading-relaxed">
                In a market focused on quantity, authenticity and uniqueness define our philosophy, reflected in every filter. Blending quality, innovation, and tradition, our products embody Made in Italy.
              </Typography>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-6 group" data-aos="fade-up" data-aos-delay="200">
            <div className="relative w-full h-[70%]   rounded-[24px] lg:rounded-[32px] overflow-hidden ">
              <img
                src="/moto/eurogielle/section32.png"
                alt="One Family. One tradition"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 right-6 w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white group-hover:bg-primary-hover transition-colors">
                <ArrowUpRight size={28} strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col gap-3 text-center lg:px-2">
              <Typography variant="h4" color="primary" className="font-bold">
                One Family. One tradition
              </Typography>
              <Typography variant="p" className="text-gray-600 text-sm lg:text-base leading-relaxed">
                For over 30 years, we've designed innovative cabin filtration solutions built on trust, quality, and lasting relationships. Guided by strong family values, we prioritize health, safety, and the well-being of every customer.
              </Typography>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Difference;
