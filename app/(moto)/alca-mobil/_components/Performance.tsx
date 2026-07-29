"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Performance = () => {
  return (
    <section id="performance" className="w-full py-10 xl:py-16 min-[3800px]:pt-25 bg-[#F9F9F9] overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10  items-center">

        {/* Content Wrapper */}
        <div className="contents xl:flex xl:flex-col xl:col-start-9 xl:col-span-4 xl:row-start-1 xl:gap-8">
          
          {/* Heading Group - Mobile Order 1 */}
          <div className="order-1 flex flex-col gap-2 w-full" data-aos="fade-left">
            <div className="inline-flex flex-col self-start">
              <Typography variant="span" color="secondary" className="font-bold tracking-wide">
                Complete Automotive Solutions
              </Typography>
              <span className="w-1/2 h-[2px] bg-secondary self-end mt-1"></span>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight mt-1">
              Performance Meets Reliability
            </Typography>
          </div>

          {/* Body and Action (Mobile Order 3) */}
          <div className="order-3 flex flex-col gap-6 w-full" data-aos="fade-left" data-aos-delay="100">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="muted" className="leading-relaxed">
                Explore a comprehensive range of automotive solutions designed to meet the demands of modern driving. From essential car accessories to advanced maintenance products, each item is developed with a focus on quality, durability, and performance. Engineered to enhance safety, comfort, and efficiency, our products support every journey with reliable functionality and long-lasting value.
              </Typography>
              
              <Typography variant="p" color="muted" className="leading-relaxed">
                With a strong focus on quality and innovation, these solutions enhance driving comfort, safety, and efficiency in every journey. Backed by reliable manufacturing standards and practical design, the product range supports both everyday use and professional requirements with confidence.
              </Typography>
            </div>
            
            <div className="pt-2">
               <Button text="Explore Products" href="#products" />
            </div>
          </div>
        </div>

        {/* Video - Mobile Order 2, Desktop Left */}
        <div className="order-2 xl:col-start-1 xl:col-span-8 xl:row-start-1 w-full h-full flex items-center justify-center min-h-[300px] xl:min-h-[400px]" data-aos="fade-right">
          <div className="w-full aspect-video relative overflow-hidden  shadow-lg 0 bg-gray-100 flex items-center justify-center">
            {/* Using short-1 type as requested */}
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

export default Performance;
