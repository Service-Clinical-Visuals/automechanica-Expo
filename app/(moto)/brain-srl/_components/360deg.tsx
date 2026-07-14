"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Catalyst() {
  const features = [
    {
      heading: "Efficient Emission Reduction",
      text: "Converts harmful gases such as carbon monoxide, hydrocarbons, and nitrogen oxides into less harmful emissions for cleaner operation."
    },
    {
      heading: "Optimized Exhaust Performance",
      text: "Engineered to maintain smooth exhaust flow, helping improve engine efficiency while complying with environmental regulations."
    },
    {
      heading: "Durable Catalyst Technology",
      text: "Built with high-quality catalytic materials for long-lasting performance, reliable operation, and consistent emission control under demanding conditions."
    }
  ];

  return (
    <section className="w-full bg-white py-16  flex flex-col border-b border-gray-100">
      <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto w-full">

        {/* Top 360 Video and Info Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center mb-8">

          {/* Video Container (Left side on desktop, approx 55-60% width) */}
          <div className="w-full xl:col-span-7 order-2 xl:order-1" data-aos="fade-right" data-aos-duration="1000">
            <div className="w-full relative rounded-2xl overflow-hidden bg-gray-100 shadow-inner aspect-[16/10] flex items-center justify-center">
              {/* Subtle Grid Background Pattern */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#ccc_1px,transparent_1px),linear-gradient(to_bottom,#ccc_1px,transparent_1px)] bg-[size:20px_20px]"
              ></div>

              <div className="relative z-10 w-full h-full">
                <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Content Container (Right side on desktop, approx 40-45% width) */}
          <div className="w-full xl:col-span-5 flex flex-col gap-6 order-1 xl:order-2" data-aos="fade-left" data-aos-duration="1000">
            <Typography variant="h2" color="primary" font="bebas" className="uppercase tracking-wide">
              Catalysts and catalytic converters for the automotive sector
            </Typography>

            <div className="flex flex-col gap-5 text-[#5D5D5D]">
              <Typography variant="p" color="dark" font="lato" className="text-sm md:text-base leading-relaxed">
                Brain has patented a technique that allows for the reconditioning of 100% of existing catalysts on the market, even the most recent ones available, with significant price advantages.
              </Typography>

              <Typography variant="p" color="dark" font="lato" className="text-sm md:text-base leading-relaxed">
                Additionally, it regenerates catalytic converters for methane/LPG vehicles using special, ultra-high-strength refractory substrates. The same technique can also be used to create an original catalytic converter for sporting applications.
              </Typography>

              <Typography variant="p" color="dark" font="lato" className="text-sm md:text-base leading-relaxed">
                The catalytic converter is an antipollution key-device, being one of the most important components in the exhaust system, due to its influence in the emission's reduction and in the right operation of the other components.
              </Typography>
            </div>

            <div className="mt-4 flex justify-start">
              <Button text="Explore Our Product" showIcon={true} />
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-400 h-1 rounded-full mb-8 w-full" />

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-6 ">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col p-5 bg-white border border-primary shadow-sm hover:shadow-md transition-shadow duration-300 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr rounded-bl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="800"
            >
              <div className="flex items-center justify-center gap-4 w-full mb-6">
                <div className="w-12 h-12 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.3)] flex items-center justify-center border border-gray-50 flex-shrink-0">
                  <img src="/moto/brain-srl/settings2.png" alt="Settings Icon" className="w-5 h-5 object-contain" />
                </div>
                <Typography variant="h4" color="primary" font="bebas" className="uppercase  tracking-wide">
                  {feature.heading}
                </Typography>
              </div>

              <div className="text-center w-full  mb-2 ">
                <Typography variant="h4" color="primary" font="bebas" className="uppercase leading-snug tracking-wide">
                  {feature.text}
                </Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
