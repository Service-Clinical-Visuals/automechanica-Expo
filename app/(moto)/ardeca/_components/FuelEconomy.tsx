import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Link from "next/link";
import Button from "./Button";

export default function FuelEconomy() {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#111]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-[url('/moto/ardeca/fuelbg.png')] bg-cover bg-center bg-no-repeat"
      />

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Video Player (Span 7) */}
          <div className="relative w-full aspect-video lg:col-span-7" data-aos="fade-right" data-aos-duration="1000">
            <DynamicVideoPlayer
              type="short-1" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Text Content (Span 5) */}
          <div className="flex flex-col text-white lg:col-span-5" data-aos="fade-left" data-aos-duration="1000">
           <h2 className="text-3xl md:text-4xl lg:text-[32px] font-semibold mb-8 !text-white chakra-petch leading-tight">
              Fuel Economy & Engine Protection
            </h2>
            
            <div className="space-y-5 mb-8 ">
              <p className="text-[#ffffff] text-sm md:text-[16px] oxanium leading-[1.8]">
                SYNTH-BM 0W30 is designed with a fuel-economy focus, helping reduce internal engine resistance so the engine works more efficiently and consumes less fuel. By lowering friction between moving parts, the oil supports smoother acceleration and consistent engine operation.
              </p>
              <p className="text-[#ffffff] text-sm md:text-[16px] oxanium leading-[1.8]">
                The formulation also delivers a high and stable viscosity index, which means the oil can maintain reliable performance even when temperatures change significantly. Whether driving in cold weather, city traffic, or under higher engine loads, the oil continues to provide dependable lubrication.
              </p>
              <p className="text-[#ffffff] text-sm md:text-[16px] oxanium leading-[1.8]">
                Another important feature is its excellent shear stability. Engine oils are constantly exposed to pressure and mechanical stress inside the engine. SYNTH-BM 0W30 resists viscosity breakdown, helping maintain its protective layer and ensuring long-term performance throughout the oil service interval.
              </p>
            </div>

            <div className="self-start mt-2">
              <Button href="#">
                Learn More
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
