"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover aspect-video"
        />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 pl-10 pb-20 md:pb-25 lg:pb-30">
        <div className="max-w-7xl text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title oswald-font font-semibold text-white leading-tight mb-4">
            Innovative Steering Solutions
          </h1>
          <p className="section-text rubik-font text-white font-regular max-w-2xl leading-relaxed">
            Engineered for precision and durability, our steering components ensure reliable performance, stability, and long-lasting quality.
          </p>
        </div>
      </div>
    </section>
  );
}

