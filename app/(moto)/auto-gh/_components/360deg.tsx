"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section 
      id="converter" 
      className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-25 bg-[#F2F2F2]/50 overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 min-[2100px]:gap-16 min-[3800px]:gap-24 items-center">
        
        {/* Video - Mobile Order 3, Desktop Left */}
        <div className="order-3 xl:col-start-1 xl:col-span-7 xl:row-start-1 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-right">
          <div className="w-full aspect-video relative overflow-hidden rounded-sm min-[2100px]:rounded-xl min-[3800px]:rounded-2xl">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="contents xl:flex xl:flex-col xl:col-start-8 xl:col-span-5 xl:row-start-1 xl:gap-8 min-[2100px]:xl:gap-12 min-[3800px]:xl:gap-16">
          {/* Heading Group - Mobile Order 1 */}
          <div className="order-1 flex flex-col gap-4 w-full" data-aos="fade-left">
            <Typography variant="h4" color="primary" className="font-bold tracking-wide">
              Brake Pads
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-snug">
              Reliable Brake Pads for Safe Driving Performance
            </Typography>
          </div>

          {/* Text Content - Mobile Order 2 */}
          <div className="order-2 flex flex-col gap-6 w-full" data-aos="fade-left">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="dark" className="leading-relaxed">
                Our brake pads are designed to deliver consistent stopping power, enhanced durability, and smooth braking performance across all driving conditions. Manufactured using high-quality friction materials and advanced production techniques, they ensure safety, reduced wear, and long service life.
              </Typography>
              
              <Typography variant="p" color="dark" className="leading-relaxed">
                Developed to meet international quality standards, our brake pads provide dependable performance for a wide range of passenger and light commercial vehicles.
              </Typography>

              <ul className="list-disc pl-5 mt-2 flex flex-col gap-3">
                <li>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    High-quality friction materials ensure consistent braking performance and enhanced safety
                  </Typography>
                </li>
                <li>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    Designed to reduce noise, vibration, and uneven wear during braking
                  </Typography>
                </li>
                <li>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    Suitable for passenger and light commercial vehicles in global markets
                  </Typography>
                </li>
              </ul>
            </div>

            <div className="pt-2 min-[2100px]:pt-6 min-[3800px]:pt-10" data-aos="fade-up" data-aos-delay="100">
               <Button text="Explore Brake Pads" href="#converter" variant="primary" showIcon={false} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Deg360;
