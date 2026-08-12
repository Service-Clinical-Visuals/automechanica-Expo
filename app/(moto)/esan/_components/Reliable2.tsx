"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Reliable2 = () => {
  return (
    <section 
      id="reliable2" 
      className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-[#F3F3F3]/50 overflow-hidden"
    >
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 min-[3800px]:gap-32 items-center">
        
        {/* Content Wrapper - Mobile Order 4/5, Desktop Left */}
        <div className="contents xl:flex xl:flex-col xl:col-start-1 xl:col-span-6 xl:gap-8 min-[2100px]:xl:gap-12 min-[3800px]:xl:gap-16">
          {/* Heading Group - Mobile Order 1/2 */}
          <div className="order-1 xl:order-none flex flex-col gap-4 w-full" data-aos="fade-right">
            <Typography variant="h4" color="primary" className="font-bold tracking-wide">
              Our Product Lineup
            </Typography>
          </div>
          
          <div className="order-2 xl:order-none flex flex-col gap-4 w-full" data-aos="fade-right">
            <Typography variant="h2" color="dark" className="font-bold leading-snug">
              Reliable Battery Solutions for Every Application
            </Typography>
          </div>

          {/* Body - Mobile Order 4 */}
          <div className="order-4 xl:order-none flex flex-col gap-6 w-full" data-aos="fade-right">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="dark" className="leading-relaxed">
                We provide a diverse portfolio of high-performance batteries designed to meet the energy demands of modern vehicles and industrial systems. Our range includes starter batteries, maintenance-free solutions, and advanced energy storage options developed to ensure consistent power delivery, safety, and long service life.
              </Typography>
              
              <Typography variant="p" color="dark" className="leading-relaxed">
                Engineered with modern production technologies and strict quality standards, our batteries support reliable operation across automotive, commercial, and industrial applications worldwide.
              </Typography>

              <ul className="list-none mt-2 flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    Maintenance-free options ensuring convenience and long service life
                  </Typography>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    Wide battery range supporting automotive, industrial, and energy applications
                  </Typography>
                </li>
              </ul>
            </div>
          </div>

          {/* Button - Mobile Order 5 */}
          <div className="order-5 xl:order-none pt-2 min-[2100px]:pt-6 min-[3800px]:pt-10" data-aos="fade-up" data-aos-delay="100">
            <Button text="Explore AGM Batteries" href="#reliable2" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Video - Mobile Order 3, Desktop Right */}
        <div className="order-3 xl:order-none xl:col-start-7 xl:col-span-6 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-left">
          <div className="w-full aspect-[16/9] relative overflow-hidden rounded-md min-[2100px]:rounded-xl min-[3800px]:rounded-2xl">
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

export default Reliable2;
