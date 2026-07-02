"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

export default function Banner() {
  return (
    <section
      id="home"
      className="w-full relative pt-2 z-10 md:pt-4 pb-3"
      data-aos="fade-in"
    >
      <div className="custom-container">
        {/* Boxed Hero Content */}
        <div className="relative w-full bg-white  h-screen flex items-end pb-10 md:pb-[8%] overflow-hidden pointer-events-none rounded-2xl shadow-lg mt-24 sm:mt-[100px]">

          {/* Background Video / Fallback Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-[#050B14]">
            {/* Using a pure dark blue background to perfectly match the EMKA reference image */}
            <div className="absolute inset-0  z-10 pointer-events-none">
              <DynamicVideoPlayer type="banner" />
            </div>
          </div>

          {/* Content inside the boxed hero */}
          <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 mb-1">
            <div
              className="max-w-3xl text-left space-y-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Main Title */}
              <Typography
                variant="h1"
                color="white"
                weight="bold"
                className="leading-[1.1] tracking-wide font-oswald uppercase"
              >
                DRIVEN BY EXPERTISE
              </Typography>

              {/* Action Button */}
              <div className="inline-flex pt-2 pointer-events-auto">
                <Button
                  text="Discover ABS"
                  href="#company"
                  showIcon={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
