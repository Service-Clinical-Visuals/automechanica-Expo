"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section className="w-full relative pt-2 lg:z-50 md:pt-4 pb-3">
      <div className="custom-container">
        <div className="relative w-full h-screen flex items-end pb-12 md:pb-35 overflow-hidden pointer-events-none rounded-sm">

          {/* Background Video using DynamicVideoPlayer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              type="banner"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 mb-4 pointer-events-auto">
            <div className="max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]">
              <div data-aos="fade-up">
                <Typography variant="h1" color="white" weight="bold" className="font-rajdhani">
                  Exol manufactures a range of lubricants<br />and associated products
                </Typography>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
