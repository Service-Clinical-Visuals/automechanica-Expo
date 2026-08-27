"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import HexagonButton from "./HexagonButton";

export default function PremiumIgnitionCoils() {
  return (
    <section className="pt-20 xl:pt-20 relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-[#f9f9f9] -z-10"></div>

      {/* Container */}
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center xl:items-start 2xl:items-center">
          {/* Left Column (Video) */}
          <div
            className="xl:col-span-8 aspect-video xl:mt-4 2xl:mt-0"
            data-aos="fade-right">
            {/* 360 Deg Video Placeholder / Player */}
            <DynamicVideoPlayer
              type="short-1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column (Text) */}
          <div
            className="xl:col-span-4 mt-10 lg:mt-30 xl:mt-32 2xl:mt-30 pl-1 lg:pl-4"
            data-aos="fade-left"
            data-aos-delay="100">
            <h2 className="section-title text-[#E72E39] font-bold mb-6 lg:mb-4 underline">
              Premium Ignition Coils
            </h2>

            <div className="flex flex-col gap-6 text-gray-700 mt-2 mb-2">
              <p className="section-text text-[#4c4c4c] font-normal leading-[1.6]">
                The Ignition Coil From BREMI Is Responsible For Converting The
                Low Battery Voltage Into The High Voltage Required To Ignite The
                Fuel-Air Mixture In The Cylinders. Our Products Are
                Characterised By High Efficiency And Durability, Resulting In
                Improved Engine Performance And Reliability. With BREMI, You Can
                Rely On First-Class Quality And Perfect Ignition Performance.
              </p>
              <p className="section-text text-[#4c4c4c] font-normal leading-[1.6] xl:hidden 2xl:block">
                Our Products Impress With Excellent Data Quality And Precise
                Vehicle Assignments, So You Always Get The Right Product For
                Your Vehicle. The Coil Works By Amplifying The Voltage From The
                Battery And Transmitting It To The Spark Plugs, Enabling
                Efficient Combustion. It Is Installed In The Engine's Ignition
                System.
              </p>
            </div>

            <div className="mt-6 xl:hidden 2xl:block">
              <HexagonButton text="Watch Product Video" href="#" />
            </div>
          </div>

          {/* Full Width Paragraph & Button (Only visible on xl / 1440px) */}
          <div
            className="hidden xl:flex 2xl:hidden xl:col-span-12 xl:mt-4 flex-col gap-6"
            data-aos="fade-up">
            <p className="section-text text-[#4c4c4c] font-normal leading-[1.6]">
              Our Products Impress With Excellent Data Quality And Precise
              Vehicle Assignments, So You Always Get The Right Product For Your
              Vehicle. The Coil Works By Amplifying The Voltage From The Battery
              And Transmitting It To The Spark Plugs, Enabling Efficient
              Combustion. It Is Installed In The Engine's Ignition System.
            </p>
            <div>
              <HexagonButton text="Watch Product Video" href="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
