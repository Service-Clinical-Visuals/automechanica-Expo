"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function DrivingSolutions() {
  return (
    <section className="w-full py-16 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-40 bg-[#171717] overflow-hidden">
      <div className="custom-container flex flex-col gap-12 lg:gap-16 min-[2500px]:gap-24 min-[3800px]:gap-32">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mx-auto gap-6 min-[2500px]:gap-10 min-[3800px]:gap-12" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold leading-tight">
            Driving The Future Of Automotive Sealing Solutions
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed xl:max-w-[70%] px-4">
            Elwis Royal is committed to expanding its product portfolio to meet the evolving demands of the global automotive aftermarket. From passenger cars to heavy-duty trucks, we continuously develop innovative OEM-quality gasket and sealing solutions that provide broader vehicle coverage, reliable performance, and long-term value. By focusing on European and Asian applications, we ensure our customers have access to the products they need—today and in the future.
          </Typography>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-[2500px]:gap-16 min-[3800px]:gap-24 w-full" data-aos="fade-up" data-aos-delay="100">
          
          <div className="w-full flex flex-col gap-6">
            <div className="w-full h-[300px] md:h-[400px] 2xl:h-[519px] min-[3800px]:h-[800px] overflow-hidden">
              <img 
                src="/moto/elvis/section4.png" 
                alt="Passenger Car Solutions" 
                className="w-full h-full object-cover rounded-none" // or rounded depending on design, Image 2 shows sharp corners
              />
            </div>
            {/* The text below the images is only on the left in Image 2 but spans wide? */}
            {/* Wait, Image 2 shows text below the left image, and a button below the right image. */}
          </div>

          <div className="w-full flex flex-col gap-6">
            <div className="w-full h-[300px] md:h-[400px] 2xl:h-[519px] min-[3800px]:h-[800px] overflow-hidden">
              <img 
                src="/moto/elvis/section5.png" 
                alt="Heavy Duty Trucks" 
                className="w-full h-full object-cover rounded-none"
              />
            </div>
          </div>
          
        </div>

        {/* Footer Section below images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="200">
          <div className="flex">
            <Typography variant="p" color="white" className=" leading-relaxed text-sm">
              Elwis Royal continues to expand its OEM-quality gasket and sealing solutions for passenger cars and heavy-duty trucks, delivering broader vehicle coverage, reliable performance, and continuous innovation for the global automotive aftermarket.
            </Typography>
          </div>
          <div className="flex lg:justify-end mt-4 lg:mt-0">
            <Button text="Explore Our Vision" href="#vision" showIcon={true} />
          </div>
        </div>

      </div>
    </section>
  );
}
