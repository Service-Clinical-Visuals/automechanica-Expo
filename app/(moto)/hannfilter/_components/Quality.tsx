"use client";

import React from "react";
import Button from "./Button";
import { Wrench } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const Quality = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-[#F9F9F9] overflow-hidden">
      <div className="custom-container flex flex-col gap-8 md:gap-10">

        {/* Top Grid: Video on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Video Clip 02 (Span 6) */}
          <div className="lg:col-span-6 w-full flex justify-center order-2 lg:order-1" data-aos="fade-right">
            <div className="w-full aspect-video max-h-[420px] md:max-h-[480px] lg:max-h-[520px] xl:max-h-[560px] 2xl:max-h-[720px] rounded-2xl md:rounded-[28px] overflow-hidden bg-gray-200 relative shadow-lg flex items-center justify-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }}></div>
              <span className="font-primary font-bold text-xl relative z-10 text-gray-800">Video Clip 02</span>
              <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-5 w-full order-1 lg:order-2" data-aos="fade-left">
            <h2 className="section-title font-primary font-medium text-[#111111] leading-tight">
              Cleaner Air, Healthier Journeys
            </h2>

            <div className="flex flex-col gap-4">
              <p className="section-text font-secondary font-normal text-[#484848] leading-relaxed">
                A Premium Cabin Air Filter Is Essential For Maintaining A Clean, Healthy, And Comfortable Vehicle Interior. It Effectively Captures Dust, Pollen, Smoke, Bacteria, And Other Airborne Contaminants Before They Enter The Cabin Through The Ventilation System. By Providing Cleaner Air, It Helps Reduce Allergens And Unpleasant Odors, Ensuring A More Enjoyable Driving Experience For Both Drivers And Passengers.
              </p>
              
              <p className="section-text font-secondary font-normal text-[#484848] leading-relaxed">
                Engineered With High-Performance Filtration Media And Manufactured To Meet OEM Standards, Our Cabin Air Filters Deliver Excellent Airflow Without Compromising Filtration Efficiency. Designed For Durability And A Precise Fit, They Support The Optimal Performance Of Your Vehicle's Heating, Ventilation, And Air Conditioning (HVAC) System While Providing Long-Lasting Protection And Reliable Performance In All Driving Conditions.
              </p>
            </div>

          </div>

        </div>



      </div>
    </section>
  );
};

export default Quality;
