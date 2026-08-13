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
            <h2 className="section-title font-primary font-medium text-[#111111] leading-tight">
              A Clean Environment Has Always Been Our Aim For 22 Years!
            </h2>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-6">
            <p className="section-text font-secondary font-normal text-[#484848] leading-relaxed">
              Hann Filter Is One Of The Leading Filter Manufacturer, Established In 1997 In Istanbul, Turkey. The Firm Has 22 Years Expertise In Filter Sector And Offers A Wide Range Of Products Including Air, Oil, Fuel And Cabin Filters For Passenger, Commercial And Industrial Vehicles.
            </p>
          </div>

          <div className="mt-2">
            <Button text="Learn More About Us" href="#about-more" variant="primary" showIcon={false} />
          </div>
        </div>

        {/* Image Side */}
        <div className="xl:col-span-7 w-full order-2 flex justify-center items-center" data-aos="fade-left" data-aos-delay="100">
          <img
            src="/moto/hannfilter/abt.png"
            alt="Swd Rheinol Branded Lubricants Production"
            className="w-full h-auto object-cover rounded-2xl md:rounded-[28px] shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
