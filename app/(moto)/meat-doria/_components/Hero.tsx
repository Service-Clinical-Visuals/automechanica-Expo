"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import { ArrowRightIcon } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
      {/* Background Video using DynamicVideoPlayer as requested */}
      <div className="absolute inset-0 z-0 bg-black mt-[127px]">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
    
      </div>

      {/* Content Overlay */}
      <Container>
        <div className="relative z-10 pb-20 md:pb-32 lg:pb-40">
          <div className="max-w-4xl text-left" data-aos="fade-up" data-aos-delay="200">
            <h1 className="heading-white tracking-[0%] font-medium! text-[38px]! leading-[100%]! text-white mb-5">
                First carburetor spare parts.
            </h1>
          </div>
          <button
              className="navlink gap-1 flex max-w-[200px] justify-between text-primary! rounded-tr-[16px] rounded-bl-[16px] bg-white px-4 py-3 transition-colors"
          >
              Explore products
              <ArrowRightIcon />
          </button>
        </div>
      </Container>
    </section>
  );
}
