import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function EngineOil() {
  return (
    <section className="w-full bg-[#f8faff] py-16 md:py-24 lg:py-32">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center xl:items-stretch">
          
          {/* Left Column - Video Placeholder (Span 7) */}
          <div className="xl:col-span-7 w-full aspect-video md:aspect-video  rounded-[20px] flex items-center justify-center shadow-xl overflow-hidden relative xl:pr-4" data-aos="fade-right">
            <DynamicVideoPlayer
                     type="360"
                     className="absolute inset-0 w-full h-full object-cover"
                   />
          </div>

          {/* Right Column - Content (Span 5) */}
          <div className="xl:col-span-5 flex flex-col justify-center" data-aos="fade-left">
            <div className="flex items-center gap-3 mb-8">
              <Image 
                src="/moto/bluechem/arrow.png" 
                alt="Arrow Icon" 
                width={24} 
                height={24} 
                className="object-contain"
              />
              <h2 className="text-[#0E4194] oswald font-semibold text-3xl md:text-4xl lg:text-[32px] 4xl:text-[36px]">
                Engine Oil
              </h2>
            </div>

           
            <p className="text-[#484848] mb-6 text-[15px] sm:text-[16px] lg:text-[18px]  leading-relaxed font-medium oxanium text-justify">
              Fully synthetic engine oil (DPF, LPG, bi-fuel). For all vehicles equipped with petrol and diesel engines, bi-fuel and natural gas / LPG. Ideally suitable for engines with exhaust gas treatment, DPF or catalyst.
            </p>

           
            <p className="text-[#484848] mb-6  text-[15px] sm:text-[16px] lg:text-[18px]  leading-relaxed font-medium oxanium text-justify">
              After use this oil must be taken to a waste oil collection point! Improper disposal of waste oil is a danger to the environment! Any addition of other substances, such as solvents, brake fluid or coolants, is prohibited. Dispose of this material and container at hazardous waste collection point.
            </p>

         
            <p className="text-[#484848] mb-10  text-[15px] sm:text-[16px] lg:text-[18px]  leading-relaxed font-medium oxanium text-justify">
              Designed to deliver reliable engine performance and long-lasting protection, this fully synthetic engine oil helps reduce wear, improve fuel efficiency, and maintain engine cleanliness under varying driving conditions.
            </p>

            <Button href="#learn-more" text="Learn More" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
