"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end ">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover aspect-video"
        />
      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 pl-4 md:pl-10 pb-20 md:pb-25 lg:pb-32">
        <div className="max-w-4xl text-left" data-aos="fade-up" data-aos-delay="200">
          <h1 className="banner-title font-semibold text-white leading-tight mb-8 roboto-font">
            Driving Sound Innovation with<br />Reliable Horn Solutions for Every Vehicle
          </h1>

          <div className="mt-8 flex">
            <Button href="#" variant="outline" className="flex items-center gap-3 btn-text">
              <span className="outfit-font">Explore Our Solutions</span> <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
