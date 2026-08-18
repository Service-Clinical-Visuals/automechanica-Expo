"use client";

import React from "react";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 md:py-20 bg-white overflow-hidden">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 min-[2100px]:gap-16 items-center">

        {/* Content Side */}
        <div className="xl:col-span-5 flex flex-col gap-6 order-1 w-full" data-aos="fade-right">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2 className="font-primary font-bold text-3xl md:text-4xl lg:text-[42px] text-[#2D3B6F] leading-tight">
              We produce branded lubricants
            </h2>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-6">
            <p className="font-secondary font-normal text-[#222222] text-sm md:text-base lg:text-lg leading-relaxed">
              Swd is an independent, medium-sized company that originated from the FINA lubricant plant in Duisburg. For over 50 years, we have been developing, producing, and distributing high-quality branded lubricants and specialty products under the protected brand name Swd Rheinol . With a production capacity of 80,000 tons of lubricants per year, we are one of the largest independent lubricant producers in Germany.
            </p>
          </div>

          <div className="mt-2">
            <Button text="Know More" href="#about-more" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Image Side */}
        <div className="xl:col-span-7 w-full order-2 flex justify-center items-center" data-aos="fade-left" data-aos-delay="100">
          <img
            src="/moto/swd/abt.png"
            alt="Swd Rheinol Branded Lubricants Production"
            className="w-full h-auto object-cover rounded-2xl md:rounded-[28px] shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
