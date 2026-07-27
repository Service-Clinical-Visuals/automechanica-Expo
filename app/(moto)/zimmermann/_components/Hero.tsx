"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Link from "next/link";

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
            <h1 className="heading-white tracking-[2%] font-bold! text-[40px]! leading-[24px]! text-white mb-3">
               Precision Braking Technology for Every Journey
            </h1>
          </div>
          <div className="heading flex items-center shrink-0 mt-5">
            <Link
              href="#"
              className="bg-secondary hover:bg-secondary-hover text-white! text-[16px]! tracking-[0px]! leading-[24px]! uppercase px-6 py-2.5 rounded transition-colors whitespace-nowrap"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
