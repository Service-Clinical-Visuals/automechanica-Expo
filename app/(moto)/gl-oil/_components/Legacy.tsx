"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Legacy = () => {
  return (
    <section id="legacy" className="w-full py-16 overflow-hidden">
      <div className="custom-container flex flex-col gap-5 min-[2500px]:gap-10">

        {/* Header */}
        <div className="w-full text-center flex justify-center">
          <Typography variant="h2" color="white" className="font-bold leading-tight xl:max-w-[60%]">
            A legacy of chemical and mechanical<br className="hidden md:block" />excellence Solutions
          </Typography>
        </div>

        {/* Middle Content */}
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-10 xl:gap-12 items-stretch">

          {/* Left Image (Mobile: Order 2, Desktop: col-span-6) */}
          <div className="w-full order-2 xl:order-1 xl:col-span-7 flex items-center justify-center">
            <img
              src="/moto/gl-oil/section4.png"
              alt="Lab Technology"
              className="w-full h-full object-cover rounded-2xl aspect-[16/10] shadow-lg"
            />
          </div>

          {/* Right Text Content (Mobile: Order 1, Desktop: col-span-6) */}
          <div className="w-full order-1 xl:order-2 xl:col-span-5 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="white" className="leading-relaxed ">
                Our focus is innovation, reliability, and maximum performance. GL Oil SpA combines technical expertise with advanced research to create superior technologies.
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed ">
                Our focus is innovation, reliability, and maximum performance. GL Oil SpA combines technical expertise with advanced research to create superior technologies.
              </Typography>
            </div>

            {/* Mission Box */}
            <div className="w-full bg-secondary border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-md">
              <Typography variant="h3" color="white" className="font-bold">
                Our Mission
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed  xl:max-w-[80%]">
                Providing superior lubrication technologies that optimize processes and maximize performance.
              </Typography>
            </div>

            <div className="mt-2">
              <Button text="Discover Our Story" href="#about" />
            </div>
          </div>

        </div>

        {/* Bottom Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

          {/* Card 1 */}
          <div className="w-full bg-secondary border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center text-center gap-4 shadow-md">
            <Typography variant="h2" color="primary" className="font-bold">
              40+
            </Typography>
            <Typography variant="h4" color="white" className="font-bold">
              Years of Experience
            </Typography>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-secondary border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center text-center gap-4 shadow-md">
            <Typography variant="h2" color="primary" className="font-bold">
              30+
            </Typography>
            <Typography variant="h4" color="white" className="font-bold">
              Countries served
            </Typography>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-secondary border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center text-center gap-4 shadow-md">
            <Typography variant="h2" color="primary" className="font-bold">
              250+
            </Typography>
            <Typography variant="h4" color="white" className="font-bold">
              Distributors
            </Typography>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Legacy;
