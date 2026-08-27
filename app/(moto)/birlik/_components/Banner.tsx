"use client";
import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden pt-[104px]">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DynamicVideoPlayer
          type="banner"
          className="w-full h-full object-cover"
        />
    
      </div>
    </section>
  );
}
