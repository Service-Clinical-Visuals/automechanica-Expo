"use client";
import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen flex items-end">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#111111]">
        <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="custom-container relative z-20 pb-24 md:pb-32 lg:pb-40 w-full">
        <div className="max-w-3xl flex flex-col items-start gap-8" data-aos="fade-up" data-aos-delay="200">
          <h1 className="arial-rounded banner-title text-white leading-snug">
            Precision ADAS Calibration for the Next Generation of Vehicle Safety
          </h1>
          <Button href="#demo" className="px-8 py-3.5">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
