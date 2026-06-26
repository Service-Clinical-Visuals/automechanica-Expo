import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Link from "next/link";
import Button from "./Button";

export default function MotorOils() {
  return (
    <section className="w-full bg-[#28282b] py-20 lg:py-28 overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <div className="flex flex-col text-white lg:col-span-5" data-aos="fade-right" data-aos-duration="1000">
            <div className="inline-flex items-center border border-[#444] rounded-full px-4 py-1.5 mb-6 self-start">             
              <span className="text-[#ffffff] text-sm md:text-base font-semibold chakra-petch flex items-center">
                <span className="mr-2 text-[16px]  leading-none text-white">&bull;</span> Motor Oils
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[32px] font-semibold mb-8 !text-white chakra-petch leading-tight">
              Motor Oils
            </h2>
            
            <p className="text-[#ffffff] text-sm md:text-[16px] oxanium leading-[1.8]">
              SYNTH-BM 0W30 is a premium fully synthetic engine oil specially developed to deliver fuel efficiency, smooth engine performance, and long-lasting engine protection. Formulated using advanced synthetic base oils and high-performance additives, it provides excellent lubrication during both cold starts and high-temperature driving conditions.
            </p>
            
            <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-6 !text-white oxanium ">
              Key Performance
            </h3>
            
            <ul className="flex flex-col gap-4 mb-10">
              {[
                "Very good Detergency and Dispersion power",
                "Safe lubrication film at High Temperatures",
                "Very strong resistance against oxidation"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <img src="/moto/ardeca/wheel.png" alt="wheel icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                  <p className="text-[#ffffff] text-sm md:text-[16px] oxanium leading-[1.8]">{item}</p>
                </li>
              ))}
            </ul>

            <div className="self-start">
              <Button href="#">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Side: Video Player */}
          <div className="relative w-full aspect-video lg:col-span-7 border-8 border-[#CE0E2D] shadow-[0_0_20px_rgba(206,14,45,0.3)]" data-aos="fade-left" data-aos-duration="1000">
            <div className="border-3 border-[#484848]"> 
               <DynamicVideoPlayer
              type="360" // Placeholder type, maps to actual video or shows 360 text
              className="w-full h-full object-cover"
            /></div>
           
           
          </div>

        </div>
      </div>
    </section>
  );
}
