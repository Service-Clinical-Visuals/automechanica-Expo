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
          className="absolute inset-0 w-full h-full object-cover"
        />
    
      </div>

      {/* Content Overlay */}
      <Container>
        <div className="relative z-10 pb-20 md:pb-32 lg:pb-40">
          <div className="max-w-4xl text-left" data-aos="fade-up" data-aos-delay="200">
            <h1 className="heading-white tracking-[0%] font-semibold! text-[32px]! leading-[130%]! text-white">
                Primary European <br/>  manufacturing companies 
            </h1>
          </div>
          <button className="mt-10 text-[18px]! bg-transparent border-1 heading-white rounded-lg border-white text-white font-medium! px-6 py-1.5 hover:opacity-90 transition-opacity">
            Explore Services
          </button>
        </div>
      </Container>
    </section>
  );
}
