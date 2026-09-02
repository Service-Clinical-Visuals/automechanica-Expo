"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16  overflow-hidden">
      <div className="custom-container flex flex-col gap-10 ">

        {/* Top Header Block */}
        <div className="flex flex-col items-center text-center gap-6" data-aos="fade-up">
          <Typography variant="h2" color="white" className=" leading-tight">
            About Autocom
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed  xl:w-[70%]">
            Autocom develops advanced vehicle diagnostic software and hardware that simplify the work of automotive professionals. By transforming complex vehicle data into intuitive solutions, we help workshops diagnose, repair, and maintain vehicles with greater speed, accuracy, and confidence. Our customer-focused innovation ensures reliable products that keep mechanics ahead of evolving vehicle technology and deliver safer vehicles to satisfied customers.
          </Typography>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 w-full">
          <div className="w-full aspect-[21/12] rounded-tl-[5rem] rounded-none overflow-hidden shadow-xl border border-white/20" data-aos="fade-up" data-aos-delay="100">
            <img
              src="/moto/autocam/section21.jpg"
              alt="Autocom Workshop Diagnostics"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full aspect-[21/12] rounded-tr-[5rem] rounded-none  overflow-hidden shadow-xl border border-white/20" data-aos="fade-up" data-aos-delay="200">
            <img
              src="/moto/autocam/section22.jpg"
              alt="Autocom Exhaust and Components"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Bottom Block */}
        <div className="flex flex-col max-[1500px]:flex-col min-[1501px]:flex-row min-[1501px]:items-center justify-between gap-6 xl:gap-8" data-aos="fade-up" data-aos-delay="300">
          <div className="w-full min-[1501px]:w-2/3">
            <Typography variant="p" color="white" className="leading-relaxed">
              Autocom develops advanced vehicle diagnostic software and hardware that simplify the work of automotive professionals. By transforming complex vehicle data into intuitive solutions, we help workshops diagnose, repair, and maintain vehicles with greater speed, accuracy, and confidence.
            </Typography>
          </div>
          <div className="flex-shrink-0">
            <Button text="Learn More" href="#about" showIcon={true} />
          </div>
        </div>

      </div>
    </section>
  );
}
