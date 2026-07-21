"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 z-0 ">
        <DynamicVideoPlayer
          type="banner" 
          className="absolute inset-0 w-full h-full object-cover "
        />
       </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-10">
        <div className="max-w-2xl text-left   pt-60" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title text-white leading-tight oswald-font mb-6 font-medium">
            Engineered Filtration Excellence <br />
            Since 1973
          </h1>
          <Button href="#" variant="primary" >
            <span>View Catalogue</span>
            <img src="/moto/alcofilter/btnarrow.png" alt="Arrow" className="w-6 h-6 object-contain brightness-0 invert" />
          </Button>
        </div>
      </div>
    </section>
  );
}
