import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const SteeringWheelIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="12" y1="15" x2="12" y2="22"></line>
    <line x1="14.6" y1="10.5" x2="20.6" y2="7"></line>
    <line x1="9.4" y1="10.5" x2="3.4" y2="7"></line>
  </svg>
);

export default function EngineCompatibility() {
  const listItems = [
    {
      title: "ACEA A3/B4-08",
      desc: "Ensures high engine cleanliness, wear protection, and stable performance for both petrol and diesel engines under demanding driving conditions."
    },
    {
      title: "VW 502 00 / 505 00",
      desc: "Approved for selected Volkswagen petrol and diesel engines, supporting reliable lubrication and engine durability."
    },
    {
      title: "Opel GM-LL-B-025",
      desc: "Supports engine reliability and protection for selected Opel diesel engine requirements."
    },
    {
      title: "Renault RN 0700 / RN 0710",
      desc: "Suitable for selected Renault petrol and diesel engines requiring advanced lubrication performance."
    }
  ];

  return (
    <section className="w-full bg-[#f8faff] py-16 md:py-24 lg:py-32">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center xl:items-stretch">
          
          {/* Left Column - Content */}
          <div className="xl:col-span-5 flex flex-col justify-center order-2 xl:order-1 " data-aos="fade-right">
            <div className="flex items-center gap-3 mb-8">
              <Image 
                src="/moto/bluechem/arrow.png" 
                alt="Arrow Icon" 
                width={24} 
                height={24} 
                className="object-contain"
              />
              <h2 className="text-[#0E4194] oswald font-semibold text-3xl md:text-4xl lg:text-[32px] 4xl:text-[36px]">
                Engine Compatibility & Technical Approvals
              </h2>
            </div>

            <div className="flex flex-col gap-5 mb-10">
              {listItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <Image src="/moto/bluechem/wheel.png" alt="wheel" width={20} height={20} className="object-contain animate-spin [animation-duration:8s]" />
                  </div>
                  <p className="text-[#484848] group-hover:text-gray-200 text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-relaxed  transition-colors duration-300 oxanium">
                    {item.title} – {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <Button href="#explore-products" text="Explore Products" />
          </div>

          {/* Right Column - Video Placeholder */}
          <div className="xl:col-span-7 w-full aspect-[4/3] md:aspect-video xl:aspect-auto h-full min-h-[350px]  rounded-[20px] flex items-center justify-center shadow-xl overflow-hidden relative order-1 xl:order-2" data-aos="fade-left">
             <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover"
              />
          </div>
          
        </div>
      </div>
    </section>
  );
}
