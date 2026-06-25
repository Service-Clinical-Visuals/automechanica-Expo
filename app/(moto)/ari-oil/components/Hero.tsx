"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-end pb-20 md:pb-32 mt-[80px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer type="banner" />
      </div>

      {/* Content */}
      <div className="custom-container relative z-10">
        <div className=" max-w-[80%] sm:max-w-[80%] lg:max-w-[80%] md:max-w-[60%] ">
          <div data-aos="fade-up">
            <Typography variant="h1" color="white" weight="semibold" className="!font-exo2 mb-8">
              Produce high-quality products, very competitive prices and export them to all countries around the world.
            </Typography>
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <Button text="Schedule Eval" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
