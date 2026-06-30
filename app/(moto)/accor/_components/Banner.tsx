import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-[100dvh] pt-[80px] md:pt-[90px] lg:pt-[110px] pb-8" data-aos="fade-up">
      {/* Extended Video Background */}
      <div className="w-[96%] mx-auto h-full relative">
        <div className="relative overflow-hidden w-full h-full shadow-xl" data-aos="zoom-in" data-aos-delay="100">
          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
          
          
        </div>
      </div>

      {/* Constrained Text Overlay aligned with Header Logo */}
      <div className="absolute inset-0 z-10 pointer-events-none pt-[80px] md:pt-[90px] lg:pt-[100px] pb-8">
        <div className="custom-container h-full relative">
          <div className="absolute bottom-0 left-0 mb-12 md:mb-16 text-left max-w-xl  pointer-events-auto" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-white text-xl md:text-3xl lg:text-4xl  font-bold oxanium leading-tight drop-shadow-lg">
              The Expertise Of ACCOR Lubricants Around The World.
            </h1>        
          </div>
        </div>
      </div>
    </section>
  );
}
