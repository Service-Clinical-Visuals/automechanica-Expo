"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
      {/* Background Video using DynamicVideoPlayer as requested */}
      <div className="absolute inset-0 z-0 bg-black">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover lg:object-fill"
        />
      </div>

      {/* Content Overlay */}
      <Container>
        <div className="relative z-10 pb-20 md:pb-32 lg:pb-40">
          <div
            className="max-w-4xl text-left"
            data-aos="fade-up"
            data-aos-delay="200">
            <h1 className="heading-white tracking-[0%] font-bold! text-[36px]! leading-[54px]! text-white mb-3">
              Discover the Perfect Match
            </h1>
            <h1 className="heading-white tracking-[0%] font-normal! text-[18px]! leading-[100%]! text-white mb-2">
              Use our Oil Finder to select the right oil for your vehicle.
            </h1>
          </div>
          <button className="heading flex gap-4 items-center rounded-lg text-white! mt-4 text-[16px]! uppercase  bg-primary px-5 py-4 hover:bg-primary/90 transition-colors">
            Find the Right Oil
            <img
              src="/moto/eurolub/engine.png"
              alt="engine Logo"
              className="h-5 w-auto object-contain"
            />
          </button>
        </div>
      </Container>
    </section>
  );
}
