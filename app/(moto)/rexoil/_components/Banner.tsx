import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end ">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 select-none ">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-0 "></div>

      {/* Content Overlay */}
      <div className="custom-container relative z-10 pb-20 md:pb-32 lg:pb-40">
        <div className="max-w-4xl text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title font-bold text-white mb-6 md:mb-8 leading-[1.2] exo-2 drop-shadow-lg">
            Powering Performance with Premium Lubrication Solutions
          </h1>
          <Button variant="white-outline">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
}
