"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Offerings = () => {
  return (
    <section 
      id="offerings" 
      className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-25 bg-[#F2F2F2] overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 min-[2100px]:gap-20 min-[3800px]:gap-32 items-center">
        
        {/* Video - Mobile Order 2, Desktop Left */}
        <div className="order-2 xl:col-start-1 xl:col-span-7 xl:row-start-1 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-right">
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
            <div className="inline-flex flex-col self-start">
              <span className="w-1/2 h-[2px] bg-primary mb-1 self-start min-[2100px]:h-[3px] min-[3800px]:h-[4px]"></span>
              <Typography variant="span" color="primary" className="font-bold tracking-wide">
                Our Offerings
              </Typography>
              <span className="w-1/2 h-[2px] bg-primary mt-1 self-end min-[2100px]:h-[3px] min-[3800px]:h-[4px]"></span>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-snug">
              Engineering Quality Across Our Full Range of Products
            </Typography>
          </div>

          {/* Text Content - Mobile Order 3 */}
          <div className="order-3 flex flex-col gap-6 w-full" data-aos="fade-left">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="muted" className="leading-relaxed">
                Our product portfolio is thoughtfully developed to meet the evolving needs of the automotive industry. Each product is designed with a focus on performance, durability, and reliability, ensuring consistent results across a wide range of applications. With advanced engineering and strict quality standards, we deliver solutions that support efficiency and long-term value.
              </Typography>
              
              <ul className="flex flex-col gap-3 mt-2 min-[2100px]:gap-5 min-[3800px]:gap-8">
                {[
                  "Wide range of high-quality automotive components for various vehicle segment",
                  "Engineered with advanced technology and precision manufacturing standards",
                  "Suitable for diverse applications across automotive and industrial environments"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 min-[2100px]:gap-5">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2 min-[2100px]:w-3 min-[2100px]:h-3 min-[3800px]:w-4 min-[3800px]:h-4"></span>
                    <Typography variant="p" color="muted" className="leading-relaxed">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 min-[2100px]:pt-8 min-[3800px]:pt-12" data-aos="fade-up" data-aos-delay="100">
               <Button text="Explore Our Products" href="#products" showIcon={false} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Offerings;
