"use client";
import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden pt-20 ">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 w-full h-full z-0 ">
        <DynamicVideoPlayer
          type="banner"
          className="w-full h-full object-cover"
        />
      </div>
    

      {/* Container for Content */}
      <div className="custom-container relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 lg:pb-40" data-aos="fade-up">
        <div className="max-w-xl xl:max-w-xl" data-aos="fade-up" data-aos-delay="100">
          <h1 className="oswald-font font-semibold text-white banner-title leading-[1.2] mb-8">
            We are the first Spanish manufacturer of automobile alternator pulleys and crankshaft pulleys
          </h1>
          <Button href="#">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
}
