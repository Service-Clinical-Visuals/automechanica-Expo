"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end pt-32">
      <div className="absolute inset-0 z-0 ">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover "
        />
        
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-10 pb-20 md:pb-32 lg:pb-40">
        <div className=" text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title text-white leading-tight font-bold mb-2 drop-shadow-md">
            LIQUI MOLY Enhanced Performance
          </h1>
          <p className="btn-text text-white mb-5 font-normal drop-shadow-md">
            Enhancing engine performance with advanced, trusted solutions.
          </p>
          <Button variant="secondary" icon="/moto/liqui-moly/drop.png">
            Oil guide
          </Button>
        </div>
      </div>
    </section>
  );
}
