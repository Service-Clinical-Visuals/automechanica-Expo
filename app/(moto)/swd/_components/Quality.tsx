"use client";

import React from "react";
import Button from "./Button";
import { Wrench } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const Quality = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-[#F9F9F9] overflow-hidden">
      <div className="custom-container flex flex-col gap-8 md:gap-10">

        {/* Top Grid: Left Content, Right Video Clip 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-5 w-full" data-aos="fade-right">
            <h2 className="font-primary font-bold text-3xl md:text-4xl lg:text-[42px] text-[#2D3B6F] leading-tight">
              Power Every Journey with Confidence
            </h2>

            <p className="font-secondary font-normal text-[#222222] text-sm md:text-base lg:text-lg leading-relaxed">
              Every engine deserves lubrication that performs beyond expectations. Rheinol Engine Oil from SWD Lubricants is crafted to provide consistent protection, smoother engine operation, and enhanced efficiency throughout every drive. Its advanced formulation helps reduce mechanical stress, resist oil breakdown, and maintain optimal performance even under demanding conditions, ensuring your engine stays protected from start to finish.
            </p>

            {/* Bullet Points with Wrench Icon in Navy Circle */}
            <div className="flex flex-col gap-6 mt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2D3B6F] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Wrench className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-secondary font-bold text-[#222222] text-sm md:text-base">
                    Advanced Friction Control
                  </h4>
                  <p className="font-secondary text-sm md:text-base text-[#4B5563] leading-relaxed">
                    This innovation significantly decreases internal engine resistance, leading to a much smoother and more efficient performance overall.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2D3B6F] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Wrench className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-secondary font-bold text-[#222222] text-sm md:text-base">
                    Consistent Protection
                  </h4>
                  <p className="font-secondary text-sm md:text-base text-[#4B5563] leading-relaxed">
                    Maintains a durable lubricating film under varying loads.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Video Clip 02 (Span 6) */}
          <div className="lg:col-span-6 w-full flex justify-center" data-aos="fade-left" data-aos-delay="100">
            <div className="w-full aspect-video max-h-[420px] md:max-h-[480px] lg:max-h-[520px] xl:max-h-[560px] 2xl:max-h-[720px] rounded-2xl md:rounded-[28px] overflow-hidden bg-gray-900 relative shadow-lg flex items-center justify-center">
              <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-[#D9D9D9] mt-2"></div>

        {/* Bottom Banner Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full" data-aos="fade-up">
          <p className="font-secondary text-sm md:text-base lg:text-lg text-[#222222] leading-relaxed max-w-3xl">
            Designed for today&apos;s gasoline, diesel, turbocharged, and hybrid vehicles, Rheinol Engine Oil meets the performance demands of passenger cars, commercial fleets, and industrial equipment. Its versatile range ensures the right solution for every application.
          </p>
          <div className="shrink-0">
            <Button text="Explore Our Solutions" href="#explore" variant="primary" showIcon={true} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Quality;
