"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const Smart = () => {
  return (
    <section id="smart" className="w-full py-10 xl:py-16 min-[3800px]:pt-25 bg-[#F9F9F9] overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10  items-center">

        {/* Content Wrapper */}
        <div className="contents xl:flex xl:flex-col xl:col-start-9 xl:col-span-4 xl:row-start-1 xl:gap-8">
          
          {/* Heading Group - Mobile Order 1 */}
          <div className="order-1 flex flex-col gap-2 w-full" data-aos="fade-left">
            <div className="inline-flex flex-col self-start">
              <Typography variant="span" color="secondary" className="font-bold tracking-wide">
                Practical everyday usability
              </Typography>
              <span className="w-1/2 h-[2px] bg-secondary self-end mt-1"></span>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight mt-1">
              Smart Solutions for Everyday Driving Needs
            </Typography>
          </div>

          {/* Body and Action (Mobile Order 3) */}
          <div className="order-3 flex flex-col gap-6 w-full" data-aos="fade-left" data-aos-delay="100">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Explore a comprehensive range of automotive accessories and car care solutions thoughtfully designed to meet the demands of modern drivers. With a strong focus on quality, functionality, and durability, each product is engineered to deliver reliable performance, enhanced safety, and long-lasting usability across a wide variety of vehicle types and driving conditions.
            </Typography>

            <ul className="flex flex-col gap-4 mt-1">
              {[
                "Extensive portfolio of car care products & automotive accessory solutions for diverse needs",
                "High-quality materials ensuring durability, reliability & long-term consistent performance",
                "Designed to improve driving safety, comfort, convenience, & overall vehicle efficiency"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 min-[2100px]:gap-4 min-[3800px]:gap-6">
                  <ArrowRight className="w-5 h-5 min-[2100px]:w-7 min-[2100px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                  <Typography variant="p" color="muted" className="leading-relaxed">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
            
            <div className="pt-2">
               <Button text="Explore Products" href="#products" />
            </div>
          </div>
        </div>

        {/* Video - Mobile Order 2, Desktop Left */}
        <div className="order-2 xl:col-start-1 xl:col-span-8 xl:row-start-1 w-full h-full flex items-center justify-center min-h-[300px] xl:min-h-[400px]" data-aos="fade-right">
          <div className="w-full aspect-video relative overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-gray-100 flex items-center justify-center">
            {/* Using short-2 type as requested */}
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Smart;
