"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const ProductRange = () => {
  return (
    <section 
      id="product-range" 
      className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-25 bg-[#F2F2F2] overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 min-[2100px]:gap-20 min-[3800px]:gap-32 items-center">
        
        {/* Heading Group - Mobile Order 1, Desktop Row 1 Left */}
        <div className="order-1 xl:col-start-1 xl:col-span-5 xl:row-start-1 flex flex-col gap-4 w-full" data-aos="fade-right">
          <div className="inline-flex flex-col self-start">
            <span className="w-1/2 h-[2px] bg-primary mb-1 self-start min-[2100px]:h-[3px] min-[3800px]:h-[4px]"></span>
            <Typography variant="span" color="primary" className="font-bold tracking-wide">
              Our Product Range
            </Typography>
            <span className="w-1/2 h-[2px] bg-primary mt-1 self-end min-[2100px]:h-[3px] min-[3800px]:h-[4px]"></span>
          </div>
          <Typography variant="h2" color="dark" className="font-bold leading-snug">
            High-Quality Exhaust Systems for Every Vehicle
          </Typography>
        </div>

        {/* Video - Mobile Order 2, Desktop Span Rows 1-2 Right */}
        <div className="order-2 xl:col-start-6 xl:col-span-7 xl:row-start-1 xl:row-span-2 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-left">
          <div className="w-full aspect-video relative overflow-hidden rounded-sm min-[2100px]:rounded-xl min-[3800px]:rounded-2xl">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content - Mobile Order 3, Desktop Row 2 Left */}
        <div className="order-3 xl:col-start-1 xl:col-span-5 xl:row-start-2 flex flex-col gap-6 w-full" data-aos="fade-right">
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              We offer a wide range of standard and performance exhaust systems, including pipes, silencers, tailpipe finishers, and catalytic converters—engineered for durability, efficiency, and optimal airflow. Developed using high-grade materials such as stainless steel and advanced manufacturing technologies, our products are designed to meet diverse customer requirements across automotive, industrial, and heavy-duty applications.
            </Typography>
            
            <ul className="flex flex-col gap-3 mt-2 min-[2100px]:gap-5 min-[3800px]:gap-8">
              {[
                "Wide portfolio including exhaust pipes, silencers, and performance systems",
                "Manufactured using high-quality stainless steel and certified materials",
                "Custom design and complete solution capability from production to delivery"
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
             <Button text="Explore Products" href="#products" showIcon={false} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductRange;
