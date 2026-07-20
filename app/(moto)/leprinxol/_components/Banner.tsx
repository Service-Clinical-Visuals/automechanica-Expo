"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end pt-32">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover "
        />
       </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-10 pb-20 md:pb-32 lg:pb-40">
        <div className="max-w-lg 3xl:max-w-2xl text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title text-white leading-[1.4] sora-font mb-6 font-semibold">
           Leprinxol Lubricants. Global expertise – universal solutions.
          </h1>
          <Button href="#" variant="outline-white" size="large" className="font-small">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
}
