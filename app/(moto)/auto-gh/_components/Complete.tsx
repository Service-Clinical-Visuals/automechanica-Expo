"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Complete = () => {
  return (
    <section 
      id="complete" 
      className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-25 bg-[#F2F2F2]/50 overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 min-[2100px]:gap-16 min-[3800px]:gap-24 items-center">
        
        {/* Content Wrapper - Mobile Order 1/2, Desktop Left */}
        <div className="contents xl:flex xl:flex-col xl:col-start-1 xl:col-span-5 xl:row-start-1 xl:gap-8 min-[2100px]:xl:gap-12 min-[3800px]:xl:gap-16">
          {/* Heading Group - Mobile Order 1 */}
          <div className="order-1 flex flex-col gap-4 w-full" data-aos="fade-right">
            <Typography variant="h4" color="primary" className="font-bold tracking-wide">
              Our Products
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-snug">
              Complete Range of Automotive Spare Parts Solution
            </Typography>
          </div>

          {/* Text Content - Mobile Order 2 */}
          <div className="order-2 flex flex-col gap-6 w-full" data-aos="fade-right">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="dark" className="leading-relaxed">
                We offer a comprehensive portfolio of high-quality spare parts for passenger and light commercial vehicles, designed to ensure reliability, durability, and consistent performance. From braking and steering components to engine and suspension parts, our products are developed to meet the demands of modern automotive applications.
              </Typography>
              
              <Typography variant="p" color="dark" className="leading-relaxed">
                With a strong focus on availability and efficient distribution, our solutions support workshops and distributors with reliable products that deliver long service life and dependable vehicle performance.
              </Typography>

              <ul className="list-disc pl-5 mt-2 flex flex-col gap-3">
                <li>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    Designed for passenger and light commercial vehicles across global markets
                  </Typography>
                </li>
                <li>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    Wide product range covering braking, steering, suspension, engine components
                  </Typography>
                </li>
                <li>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    High-quality materials ensure durability and long-lasting reliable performance
                  </Typography>
                </li>
              </ul>
            </div>

            <div className="pt-2 min-[2100px]:pt-6 min-[3800px]:pt-10" data-aos="fade-up" data-aos-delay="100">
               <Button text="Explore Products" href="#complete" variant="primary" showIcon={false} />
            </div>
          </div>
        </div>

        {/* Video - Mobile Order 3, Desktop Right */}
        <div className="order-3 xl:col-start-6 xl:col-span-7 xl:row-start-1 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-left">
          <div className="w-full aspect-video relative overflow-hidden rounded-sm min-[2100px]:rounded-xl min-[3800px]:rounded-2xl">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Complete;
