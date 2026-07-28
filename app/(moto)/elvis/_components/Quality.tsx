"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Quality() {
  const listItems = [
    "High-Performance Sealing Solutions Engineered for Modern Engine Applications and Long-Term Reliability",
    "Advanced Manufacturing Processes Backed by Rigorous Quality Assurance Standards and Precision Engineering",
    "Reliable OE-Equivalent Performance Across a Wide Range of Passenger and Commercial Vehicle Applications"
  ];

  return (
    <section className="w-full py-16 l bg-[#2B2B2B] overflow-hidden">
      <div className="custom-container flex flex-col gap-12">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 lg:w-2/3">
            <Typography variant="h2" color="white" className="font-semibold leading-tight">
              Built For Durability. Designed For Precision.
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed  ">
              Our comprehensive range of gaskets and oil seals is developed to withstand high temperatures, pressure, and demanding engine environments. Every product undergoes rigorous quality control to ensure exceptional sealing performance, extended service life, and dependable operation throughout the vehicle's lifecycle.
            </Typography>
          </div>
          <div className="shrink-0 pb-2">
            <Button text="View Collection" href="#collection" showIcon={true} />
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-white/40" data-aos="fade-up" data-aos-delay="100"></div>

        {/* Bottom Content Grid */}
        <div className="flex flex-col items-center lg:grid lg:grid-cols-12 gap-12 mt-2 " data-aos="fade-up" data-aos-delay="200">
          
          {/* Left: Video */}
          <div className="lg:col-span-8 w-full h-full">
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-4 w-full flex flex-col gap-6">
            
            <div className="flex flex-col gap-4">
              <Typography variant="h2" color="white" className="font-semibold leading-tight">
                Reliable Sealing Solutions For Every Application
              </Typography>
              <div className="w-full h-[1px] bg-white/40" data-aos="fade-up" data-aos-delay="100"></div>
              <Typography variant="p" color="white" className="leading-relaxed">
                Engineered for durability and precision, Elwis Royal's OEM-quality gaskets and oil seals deliver reliable sealing, long-lasting performance, and dependable protection for modern engine applications.
              </Typography>
            </div>

            <ul className="flex flex-col gap-6 mt-2">
              {listItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 bg-[#C21217] rounded-full w-5 h-5 flex items-center justify-center text-white">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <Typography variant="p" color="white" className="leading-tight">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
            
            <div className="mt-4">
              <Button text="View All Products" href="#products" showIcon={true} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
