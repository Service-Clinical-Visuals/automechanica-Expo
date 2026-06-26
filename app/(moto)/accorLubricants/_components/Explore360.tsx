import React from "react";
import Link from "next/link";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Explore360() {
  return (
    <section className="w-full bg-[#1e1e1e] py-16 md:py-24">
      <div className="custom-container">

        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-14 items-center mb-20">

          {/* Left Column - 360 Viewer */}
          <div className="w-full aspect-video xl:col-span-8" data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="xl:col-span-4 flex flex-col" data-aos="fade-left">
    
            <h2 className="text-[#ffffff] text-3xl md:text-4xl lg:text-[36px]  font-bold oxanium mb-6 mb-6 leading-tight tracking-wide">
              Explore ACCOR Lubricants<br />In 360°
            </h2>

            <div className="w-full h-[1px] bg-white/80 mb-8"></div>

            <p className="text-white exo2 text-[16px] md:text-[18px]  leading-relaxed mb-6">
              Discover the quality and engineering behind ACCOR Lubrifiants products through an immersive 360° product experience. Explore every detail of our lubricant packaging, design, and product features from every angle, giving you a closer look at the solutions trusted by automotive professionals and industries worldwide.
            </p>

            <p className="text-white exo2 text-[16px] md:text-[18px]  leading-relaxed mb-10">
              Developed with advanced lubricant technology and stringent quality standards, ACCOR products are designed to enhance engine protection, improve operational efficiency, and deliver reliable performance across a wide range of applications. Our 360° view allows you to experience the precision and innovation built into every product.
            </p>

            <div>
              <Button href="#">Technical Specifications</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Feature Cards */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-14 ">

          {/* Card 1 */}
          <div className="flex-1 ml-[75px] md:ml-[85px] lg:ml-[95px] xl:ml-[105px] relative bg-white shadow-xl rounded-none flex flex-col justify-center h-[125px] md:h-[130px]  xl:h-[140px]" data-aos="fade-up" data-aos-delay="100">
            {/* The circle MUST be larger than the fixed height of the card at EVERY breakpoint to guarantee the sharp pointy tips at the top and bottom edges! */}
            <div className="absolute -left-[75px] md:-left-[75px]  xl:-left-[90px] top-1/2 -translate-y-1/2 w-[130px] h-[130px] md:w-[125px] md:h-[125px]  xl:w-[160px] xl:h-[160px] bg-[#E41B13] rounded-full border-[8px] md:border-[10px] lg:border-[10px] border-[rgb(30,30,30)] flex items-center justify-center z-10">
              <img src="/moto/accorLubricants/lubricant1.png" alt="icon" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain" />
            </div>
            
            <div className="pl-[75px] md:pl-[75px]  xl:pl-[110px] pr-4 md:pr-6 py-2">
              <h3 className="text-[#1b1537] font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]  exo2 mb-1 leading-tight">
                Premium Formulations
              </h3>
              <p className="text-[#484848] exo2 text-[14px] md:text-[15px] lg:text-[16px] leading-snug line-clamp-4 lg:line-clamp-3">
                Crafted with high-quality base oils and advanced additives for superior protection, performance, and durability.
              </p>
            </div>
          </div>

          {/* Card 2 */}
           <div className="flex-1 ml-[75px] md:ml-[85px] lg:ml-[95px] xl:ml-[105px] relative bg-white shadow-xl rounded-none flex flex-col justify-center h-[125px] md:h-[130px]  xl:h-[140px]" data-aos="fade-up" data-aos-delay="100">
            {/* The circle MUST be larger than the fixed height of the card at EVERY breakpoint to guarantee the sharp pointy tips at the top and bottom edges! */}
            <div className="absolute -left-[75px] md:-left-[75px]  xl:-left-[90px] top-1/2 -translate-y-1/2 w-[130px] h-[130px] md:w-[125px] md:h-[125px]  xl:w-[160px] xl:h-[160px] bg-[#E41B13] rounded-full border-[8px] md:border-[10px] lg:border-[10px] border-[rgb(30,30,30)] flex items-center justify-center z-10">
              <img src="/moto/accorLubricants/lubricant1.png" alt="icon" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain" />
            </div>
            
            <div className="pl-[75px] md:pl-[75px]  xl:pl-[110px] pr-4 md:pr-6 py-2">
              <h3 className="text-[#1b1537] font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]  exo2 mb-1 leading-tight">
                Advanced Lubrication Technology
              </h3>
              <p className="text-[#484848] exo2 text-[14px] md:text-[15px] lg:text-[16px] leading-snug line-clamp-4 lg:line-clamp-3">
                Developed to reduce wear, improve efficiency, and ensure reliable performance in demanding conditions.
              </p>
            </div>
          </div>
          {/* <div className="flex-1 ml-[75px] md:ml-[85px] lg:ml-[95px] xl:ml-[105px] relative bg-white shadow-xl mt-12 xl:mt-0 rounded-none flex flex-col justify-center h-[135px] md:h-[155px] lg:h-[175px] xl:h-[170px]" data-aos="fade-up" data-aos-delay="200">
           
            <div className="absolute -left-[75px] md:-left-[85px] lg:-left-[95px] xl:-left-[105px] top-1/2 -translate-y-1/2 w-[135px] h-[135px] md:w-[140px] md:h-[140px] lg:w-[190px] lg:h-[190px] xl:w-[180px] xl:h-[180px] bg-[#E41B13] rounded-full border-[8px] md:border-[10px] lg:border-[10px] border-[#1e1e1e] flex items-center justify-center z-10">
              <img src="/moto/accorLubricants/lubricant2.png" alt="icon" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain" />
            </div>
            
            <div className="pl-[85px] md:pl-[95px] lg:pl-[105px] xl:pl-[115px] pr-4 md:pr-6 py-2">
              <h3 className="text-[#1b1537] font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]   exo2 mb-1 leading-tight">
                Advanced Lubrication Technology
              </h3>
              <p className="text-[#484848] exo2 text-[14px] md:text-[15px] lg:text-[16px]  leading-snug line-clamp-4 lg:line-clamp-3">
                Developed to reduce wear, improve efficiency, and ensure reliable performance in demanding conditions.
              </p>
            </div>
          </div> */}

        </div>

      </div>
    </section>
  );
}
