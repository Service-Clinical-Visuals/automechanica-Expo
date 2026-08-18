"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-10 pb-20 md:pb-32 lg:pb-40">
        <div className="max-w-3xl text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title oswald font-semibold leading-tight text-white mb-6">
            Strong Infrastructure,<br />
            Safe Performance
          </h1>
          <Button href="#" variant="outline" className="w-fit">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
}
