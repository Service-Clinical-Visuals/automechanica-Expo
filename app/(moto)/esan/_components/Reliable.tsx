"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Reliable = () => {
  return (
    <section 
      id="reliable" 
      className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-[#212529] overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 min-[3800px]:gap-32 items-center">
        
        {/* Video - Mobile Order 3, Desktop Left */}
        <div className="order-3 xl:order-none xl:col-start-1 xl:col-span-6 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-right">
          <div className="w-full aspect-[16/9] relative overflow-hidden rounded-md min-[2100px]:rounded-xl min-[3800px]:rounded-2xl">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="contents xl:flex xl:flex-col xl:col-start-7 xl:col-span-6 xl:gap-8 min-[2100px]:xl:gap-12 min-[3800px]:xl:gap-16">
          {/* Heading Group - Mobile Order 1/2 */}
          <div className="order-1 xl:order-none flex flex-col gap-4 w-full" data-aos="fade-left">
            <Typography variant="h4" color="white" className="font-bold tracking-wide">
              Reliable Battery
            </Typography>
          </div>
          
          <div className="order-2 xl:order-none flex flex-col gap-4 w-full" data-aos="fade-left">
            <Typography variant="h2" color="white" className="font-bold leading-snug">
              Reliable Battery Solutions for Every Application
            </Typography>
          </div>

          {/* Body - Mobile Order 4 */}
          <div className="order-4 xl:order-none flex flex-col gap-6 w-full" data-aos="fade-left">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                We offer a comprehensive range of high-performance batteries designed for automotive, commercial, and industrial applications. From starter batteries to advanced energy storage solutions, our products are engineered using modern technologies to deliver consistent power, durability, and long service life.
              </Typography>
              
              <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                With a strong focus on quality and innovation, our battery solutions support a wide variety of vehicles and systems, ensuring dependable performance in all operating conditions.
              </Typography>

              <ul className="list-none mt-2 flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <span className="text-white opacity-90 mt-1">→</span>
                  <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                    Wide range of automotive, commercial, and industrial battery solutions available
                  </Typography>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white opacity-90 mt-1">→</span>
                  <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                    Suitable for modern energy demands with consistent power output
                  </Typography>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white opacity-90 mt-1">→</span>
                  <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                    Designed for reliable performance across diverse vehicle and application types
                  </Typography>
                </li>
              </ul>
            </div>
          </div>

          {/* Button - Mobile Order 5 */}
          <div className="order-5 xl:order-none pt-2 min-[2100px]:pt-6 min-[3800px]:pt-10" data-aos="fade-up" data-aos-delay="100">
            <Button text="Explore Batteries" href="#reliable" variant="secondary" showIcon={true} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reliable;
