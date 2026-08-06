"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Comprehensive = () => {
  return (
    <section
      id="comprehensive"
      className="w-full py-16 bg-[#F9F9F9] relative"
    >
      <div className="custom-container flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Video (Mobile: Order 3, Desktop: Left Column) */}
        <div className="w-full order-3 lg:order-1 lg:col-span-7 aspect-video relative rounded-lg overflow-hidden bg-white/5 border border-black/10" data-aos="zoom-in" data-aos-delay="200">
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content (Mobile: Order 1, Desktop: Right Column) */}
        <div className="flex flex-col gap-6 order-1 lg:order-2 lg:col-span-5 w-full" data-aos="fade-left">
          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <Typography variant="h4" color="primary" className="font-bold">
              Our Product Range
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Comprehensive Automotive Spare Parts Solutions
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="dark" className="leading-relaxed">
              We offer an extensive portfolio of high-quality automotive spare parts designed to meet the demands of modern vehicles. From engine and drivetrain components to suspension, steering, and electrical parts, our products are developed to ensure reliability, precision, and long-lasting performance.
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed">
              With a strong focus on quality, availability, and OE-matching standards, our solutions support a wide range of European vehicle brands, delivering consistent performance and dependable fitment across global markets.
            </Typography>

            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-start gap-3">
                <img src="/moto/jp-group/star.png" alt="star" className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 object-contain mt-1 shrink-0" />
                <Typography variant="p" color="dark">
                  Wide range of high-quality spare parts covering multiple vehicle systems & applications
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/jp-group/star.png" alt="star" className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 object-contain mt-1 shrink-0" />
                <Typography variant="p" color="dark">
                  OE-matching quality ensuring reliable fit, consistent performance, and long-term durability
                </Typography>
              </li>
            </ul>
          </div>

          <div className="mt-2" data-aos="fade-up" data-aos-delay="100">
            <Button text="Explore Brake Discs" variant="primary" href="#products" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Comprehensive;
