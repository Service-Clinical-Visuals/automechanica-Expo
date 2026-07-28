"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end ">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover "
        />

      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 pb-20 md:pb-25 lg:pb-25">
        <div className="max-w-3xl min-[2560px]:max-w-[1200px] min-[3800px]:max-w-[1800px] text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title text-white leading-tight mb-8 orbitron font-semibold">
            High-Performance Lubricants & Process Oils for Global Industries
          </h1>
          <Button href="#" variant="primary" className="orbitron" >
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
}
