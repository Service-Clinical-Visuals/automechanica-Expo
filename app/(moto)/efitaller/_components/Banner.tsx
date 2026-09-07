"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end ">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover md:object-fill aspect-video"
        />

      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 pl-15 pb-20 md:pb-25 lg:pb-25">
        <div className="max-w-full text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title font-semibold text-white leading-tight mb-8 sora-font">
            Smarter, More <br /> Efficient Workshops
          </h1>
          <Button href="#" variant="outline" className="btn-text font-semibold" >
            Explore Our Catalogue
          </Button>
        </div>
      </div>
    </section>
  );
}

