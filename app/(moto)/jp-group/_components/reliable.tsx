"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Reliable = () => {
  return (
    <section
      id="choose"
      className="w-full py-16 bg-[#F9F9F9] relative"
    >
      <div className="custom-container flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Content (Mobile: Order 1, Desktop: Left Column) */}
        <div className="flex flex-col gap-6 order-1 lg:col-span-5 w-full" data-aos="fade-right">
          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <Typography variant="h4" color="primary" className="font-bold">
              Our Product Portfolio
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Reliable Automotive Parts for Every System
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="dark" className="leading-relaxed">
              We provide a diverse range of high-quality automotive components designed to support multiple vehicle systems, from engine and transmission to steering, suspension, and electrical parts. Our products are developed with a strong focus on precision, durability, and compatibility, ensuring dependable performance across a wide range of applications.
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed">
              With extensive industry experience and a commitment to consistent quality, our solutions are tailored to meet the needs of distributors, workshops, and automotive professionals worldwide.
            </Typography>

            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-start gap-3">
                <img src="/moto/jp-group/star.png" alt="star" className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 object-contain mt-1 shrink-0" />
                <Typography variant="p" color="dark">
                  Broad portfolio covering engine, drivetrain, steering, and suspension components
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <img src="/moto/jp-group/star.png" alt="star" className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 object-contain mt-1 shrink-0" />
                <Typography variant="p" color="dark">
                  Designed for compatibility with a wide range of European vehicle models
                </Typography>
              </li>
            </ul>
          </div>

          <div className="mt-2" data-aos="fade-up" data-aos-delay="100">
            <Button text="Explore Brake Discs" variant="primary" href="#products" />
          </div>
        </div>

        {/* Video (Mobile: Order 3, Desktop: Right Column) */}
        <div className="w-full order-3 lg:order-2 lg:col-span-7 aspect-video relative rounded-lg overflow-hidden bg-white/5 border border-black/10" data-aos="zoom-in" data-aos-delay="200">
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Reliable;
