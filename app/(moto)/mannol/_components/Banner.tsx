"use client";
import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen  flex items-center  overflow-hidden pt-20">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DynamicVideoPlayer
          type="360"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Container for Content */}
      <div className="custom-container relative z-10 h-full flex flex-col justify-end pb-24 md:pb-28 lg:pb-30" data-aos="fade-up">
        <div className="max-w-xl xl:max-w-xl" data-aos="fade-up">
          <h1 className="sora-font font-bold text-white banner-title leading-tight mb-6 md:mb-8">
            Premium Lubricants Engineered for Maximum Performance
          </h1>
          <Button href="#">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
}
