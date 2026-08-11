"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Reliable = () => {
  return (
    <section 
      id="reliable" 
      className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-25 bg-[#F2F2F2]/50 overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 min-[2100px]:gap-16 min-[3800px]:gap-24 items-center">
        
        {/* Video - Mobile Order 3, Desktop Left */}
        <div className="order-3 xl:col-start-1 xl:col-span-7 xl:row-start-1 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-right">
          <div className="w-full aspect-video relative overflow-hidden rounded-sm min-[2100px]:rounded-xl min-[3800px]:rounded-2xl">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="contents xl:flex xl:flex-col xl:col-start-8 xl:col-span-5 xl:row-start-1 xl:gap-8 min-[2100px]:xl:gap-12 min-[3800px]:xl:gap-16">
          {/* Heading Group - Mobile Order 1 */}
          <div className="order-1 flex flex-col gap-4 w-full" data-aos="fade-left">
            <Typography variant="h4" color="primary" className="font-bold tracking-wide">
              Our Products Range
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-snug">
              Reliable Spare Parts for Every Automotive Need
            </Typography>
          </div>

          {/* Text Content - Mobile Order 2 */}
          <div className="order-2 flex flex-col gap-6 w-full" data-aos="fade-left">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="dark" className="leading-relaxed">
                We offer an extensive range of spare parts for passenger cars and light commercial vehicles, covering key vehicle systems with a strong focus on availability, quality, and fast delivery. Our products are carefully sourced and developed to ensure consistent performance, precise fitment, and dependable operation across various applications.
              </Typography>
              
              <Typography variant="p" color="dark" className="leading-relaxed">
                With a customer-focused approach and efficient logistics, we ensure that our partners receive the right parts at the right time, supporting smooth operations and reduced downtime.
              </Typography>

              <ul className="list-disc pl-5 mt-2 flex flex-col gap-3">
                <li>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    Wide range of spare parts covering multiple vehicle systems globally
                  </Typography>
                </li>
                <li>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    Ensures reliable performance, durability, and consistent product availability
                  </Typography>
                </li>
              </ul>
            </div>

            <div className="pt-2 min-[2100px]:pt-6 min-[3800px]:pt-10" data-aos="fade-up" data-aos-delay="100">
               <Button text="Explore Brake Pads" href="#reliable" variant="primary" showIcon={false} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reliable;
