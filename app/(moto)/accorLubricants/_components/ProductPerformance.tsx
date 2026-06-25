import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ProductPerformance() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-center mb-16">
          
          {/* Left Column - Content */}
          <div className="flex flex-col" data-aos="fade-right">
            <h2 className="text-[#484848] text-3xl md:text-4xl lg:text-[36px]  font-bold oxanium mb-6 tracking-wide">
              Product Performance Overview
            </h2>
            
            <div className="w-full h-[1px] bg-gray-200 mb-8"></div>
            
            <p className="text-[#484848] exo2 text-[16px] md:text-[18px]   leading-relaxed mb-6">
              ACCOR Lubrifiants offers a comprehensive portfolio of high-performance lubricants developed to meet the needs of passenger vehicles, commercial transport, industrial machinery, agricultural equipment, and specialized applications. Formulated using advanced base oils and additive technologies, our products deliver outstanding protection against wear, corrosion, and oxidation while enhancing operational efficiency and equipment reliability.
            </p>

            <p className="text-[#484848] exo2 text-[16px] md:text-[18px]   leading-relaxed mb-10">
              With a strong commitment to quality, innovation, and technical excellence, ACCOR Lubrifiants provides solutions that help extend service life, reduce maintenance costs, and optimize performance across a wide range of operating conditions. Our lubricants are engineered to meet the evolving demands of modern engines and machinery, ensuring consistent results and long-term value for customers worldwide.
            </p>

            <div>
              <Button href="#">Explore Our Product</Button>
            </div>
          </div>

          {/* Right Column - Video Player */}
              <div className="w-full aspect-video" data-aos="fade-left"> 
                 <DynamicVideoPlayer
                    type="short-1"
                    className="w-full h-full object-cover"
                 />
              </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 mb-12"></div>

        {/* Bottom Section - Feature Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
          
          {/* Card 1 */}
          <div className=" border border-gray-100 shadow-[0_8px_75px_rgba(0,0,0,0.12)] p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-[#1b1537] font-bold text-[16px] md:text-lg lg:text-[22px]   oxanium mb-4">
             
              Enhanced Engine & Equipment Protection
            </h3>
            <p className="text-[#484848] exo2 text-[16px] md:text-[18px]   leading-relaxed ">
              Reduces friction and component wear while protecting critical parts, helping extend equipment life and maintain reliable performance.
            </p>
          </div>

          {/* Card 2 */}
           <div className="border border-gray-100 shadow-[0_8px_75px_rgba(0,0,0,0.12)] p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-[#1b1537] font-bold text-[16px] md:text-lg lg:text-[22px]   oxanium mb-4">
              Excellent Thermal & Oxidation Stability
            </h3>
            <p className="text-[#484848] exo2 text-[16px] md:text-[18px]   leading-relaxed ">
              Resists heat and oxidation to maintain performance and ensure reliable operation in demanding conditions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
