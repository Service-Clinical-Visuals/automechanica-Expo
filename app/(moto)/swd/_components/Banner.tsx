import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden" data-aos="fade">
      <div className="relative w-full h-full">
        <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
       
        <div className="absolute inset-0 z-20 pointer-events-none px-6 sm:px-10 md:px-16 xl:px-24 pb-12 md:pb-16 xl:pb-20 flex flex-col justify-end">
          <div className="text-left pointer-events-auto max-w-3xl" data-aos="fade-up" data-aos-delay="200">
            <h1 className="font-primary font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight leading-tight mb-3 uppercase">
              RHEINOL
            </h1>
            <p className="font-secondary font-normal text-white/90 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-lg lg:max-w-xl">
              Automotive brand products made in Germany. Quality, reliability, flexibility and service from a single source.
            </p>
            <Button text="Explore Our Products" href="#products" showIcon={true} variant="outline" />
          </div>
        </div>
      </div>
    </section>
  );
}
