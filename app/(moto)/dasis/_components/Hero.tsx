"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
      {/* Background Video using DynamicVideoPlayer as requested */}
      <div className="absolute inset-0 z-0 bg-black mt-[130px]">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
    
      </div>

      {/* Content Overlay */}
      <Container>
        <div className="relative z-10 pb-20 md:pb-32 lg:pb-40">
          <div className="max-w-4xl text-left" data-aos="fade-up" data-aos-delay="200">
            <h1 className="heading-white tracking-[0%] font-normal! text-[48px]! leading-[130%]! text-white">
                We are your contact when it comes to <br/> cooling and air conditioning
            </h1>
          </div>
          <button
              className="heading rounded-tr-[16px] rounded-bl-[16px] mt-4 text-[24px]! uppercase  bg-white px-6 py-1.5 hover:bg-white/90 transition-colors"
          >
              Explore Products
          </button>
        </div>
      </Container>
    </section>
  );
}
