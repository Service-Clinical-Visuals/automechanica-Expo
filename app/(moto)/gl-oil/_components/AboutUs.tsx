"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-5 items-center ">

        {/* Content (Heading + Text + Button) */}
        <div className="flex flex-col mt-7 gap-6 order-1  xl:col-span-5  w-full">
          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Over 40 years of Innovation in Industrial and Automotive Lubrication.
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="white" className="leading-relaxed ">
              GL Oil SpA is a manufacturer of high-performance lubricants with over 40 years of experience in the chemical and mechanical industries.
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed ">
              Founded by entrepreneur Giuseppe Langella, the company specializes in the development and production of advanced lubricants. From our factory in Nola, we serve over 30 countries with products that exceed international specifications.
            </Typography>
          </div>

          <div className="w-full mt-4">
            <Button text="Learn More About Us" href="#about" />
          </div>
        </div>

        {/* Image */}
        <div className="w-full order-2  xl:col-span-7  flex justify-center xl:justify-start">
          <img
            src="/moto/gl-oil/section2.png"
            alt="Interior"
            className="w-full max-w-[897px] border border-white/30 min-[2500px]:max-w-[1345px] min-[3800px]:max-w-[1794px] aspect-[897/565] rounded-2xl object-cover shadow-lg xl:ml-3"
          />
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col md:flex-row gap-6 order-3 xl:col-start-1 xl:col-span-12 xl:row-start-2 mt-8">

          {/* Card 1 */}
          <div className="flex flex-col items-start gap-4 bg-transparent border border-white/30 shadow-sm p-6 flex-1">
            <div className="w-12 h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 bg-primary text-secondary rounded-lg min-[2500px]:rounded-xl min-[3800px]:rounded-2xl flex items-center justify-center shrink-0">
              <img src="/moto/gl-oil/vector.png" alt="Icon" className="w-6 h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 object-contain brightness-0" />
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="h3" color="white" className="font-bold leading-tight">
                Industrial Lubricants
              </Typography>
              <Typography variant="p" color="white" className="">
                High performance fluids for hydraulic systems, gears and turbines.
              </Typography>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start gap-4 bg-transparent border border-white/30 shadow-sm p-6 flex-1">
            <div className="w-12 h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 bg-primary text-secondary rounded-lg min-[2500px]:rounded-xl min-[3800px]:rounded-2xl flex items-center justify-center shrink-0">
              <img src="/moto/gl-oil/vector.png" alt="Icon" className="w-6 h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 object-contain brightness-0" />
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="h3" color="white" className="font-bold leading-tight">
                Automotive Lubricants
              </Typography>
              <Typography variant="p" color="white" className="">
                100% synthetic engine oils, transmission fluids and coolants.
              </Typography>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start gap-4 bg-transparent border border-white/30 shadow-sm p-6 flex-1">
            <div className="w-12 h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 bg-primary text-secondary rounded-lg min-[2500px]:rounded-xl min-[3800px]:rounded-2xl flex items-center justify-center shrink-0">
              <img src="/moto/gl-oil/vector.png" alt="Icon" className="w-6 h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 object-contain brightness-0" />
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="h3" color="white" className="font-bold leading-tight">
                Specialty Fats & Fluids
              </Typography>
              <Typography variant="p" color="white" className="">
                Specialty lubricants for mining, marine and industrial applications.
              </Typography>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
