"use client";
import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden pt-20 ">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DynamicVideoPlayer
          type="banner"
          className="w-full h-full object-cover"
        />
        
      </div>

      {/* Container for Content */}
      <div className="custom-container relative z-10 h-full flex flex-col justify-end-safe 2xl:justify-end-safe pb-30 2xl:pb-30 ">
        <div className=" mt-[10%]">
          <h1 className="odibee-sans-font font-normal text-white banner-title leading-tight mb-2 drop-shadow-md">
            Power Up with Barox
          </h1>
          <p className="instrument-sans-font text-white section-text mb-6 drop-shadow">
            Our products are offering exceptional reliability and performance
          </p>
          <Button href="#">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}
