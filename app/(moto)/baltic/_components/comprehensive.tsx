"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const comprehensive = () => {
  return (
    <section id="choose" className="w-full py-16 min-[3200px]:py-[120px] bg-[#F9F9F9]">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 items-center">

        {/* Content (Heading + Text + Button) */}
        {/* Mobile: Order 1, Desktop: Col 1-6 */}
        <div className="flex flex-col gap-6 order-1 xl:col-start-1 xl:col-span-5 w-full" data-aos="fade-right">

          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <Typography variant="h4" color="secondary" className="font-bold">
              Cabin Filter
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Comprehensive Filtration Solutions for Every Application
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              We offer a wide and diverse range of filtration products designed for automotive, industrial, and ventilation systems. With thousands of filter types available, our portfolio is developed to ensure efficient operation, protect critical components, and maintain high performance across various environments
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              From engine protection to clean air solutions, our products are engineered using advanced materials and modern manufacturing technologies to deliver reliability, durability, and consistent filtration efficiency in all operating conditions.
            </Typography>




          </div>

          <div className="w-full mt-2" data-aos="fade-right" data-aos-delay="100">
            <Button text="Explore Cabin Filter" variant="secondary" href="#choose" />
          </div>
        </div>

        {/* Video */}
        {/* Mobile: Order 2, Desktop: Col 7-12 */}
        <div className="w-full order-2 xl:col-start-6 xl:col-span-7 aspect-video relative rounded-lg overflow-hidden shadow-sm" data-aos="zoom-in">
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default comprehensive;
