"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";


export default function Banner() {
  return (
   <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end pt-32">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 ">
        <DynamicVideoPlayer type="banner" />
      </div>

       <div className="custom-container relative z-10 pb-20 md:pb-32 lg:pb-40">
        <div className="max-w-2xl" data-aos="fade-up">
          <h1 className="banner-title text-white font-normal mb-6">
            Precision CV Joints Engineered for Every Drive
          </h1>
          <Button className="btn-text mt-4">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
}
