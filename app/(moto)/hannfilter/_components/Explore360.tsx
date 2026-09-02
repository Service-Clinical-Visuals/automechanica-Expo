"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Explore360 = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-[#111111] text-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-12">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Content Side (Span 6) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 order-2 lg:order-1 w-full" data-aos="fade-right">
            <h2 className="section-title font-primary font-medium text-white leading-tight">
              Clean Air For Every Drive
            </h2>

            <p className="section-text font-secondary font-normal text-white/80 leading-relaxed">
              Experience Fresher, Healthier Cabin Air With Our Premium Cabin Air Filters, Engineered To Capture Dust, Pollen, Smoke, And Airborne Contaminants Before They Enter Your Vehicle's Interior. Designed For Maximum Airflow And Superior Filtration Efficiency, Our Filters Help Improve HVAC Performance While Providing A More Comfortable Driving Experience.
            </p>

            <p className="section-text font-secondary font-normal text-white/80 leading-relaxed">
              Manufactured Using High-Quality Filtration Media And Built To Meet OEM Standards, They Ensure A Precise Fit, Long-Lasting Durability, And Reliable Protection For Both Passengers And Vehicle Ventilation Systems. Whether For Passenger Cars Or Commercial Vehicles, Our Cabin Air Filters Deliver Consistent Performance In Every Journey.
            </p>

            <div className="mt-4">
              <Button text="Explore Our Solutions" href="#explore-more" variant="primary" showIcon={false} />
            </div>
          </div>

          {/* Right Video Side (Span 6) */}
          <div className="lg:col-span-7 w-full order-1 lg:order-2 flex justify-center" data-aos="fade-left" data-aos-delay="100">
            <div className="w-full aspect-video max-h-[420px] md:max-h-[480px] lg:max-h-[520px] xl:max-h-[560px] 2xl:max-h-[720px] rounded-2xl md:rounded-[28px] overflow-hidden bg-white/10 relative shadow-2xl border border-white/10 flex items-center justify-center">
              <DynamicVideoPlayer type="360" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Explore360;
