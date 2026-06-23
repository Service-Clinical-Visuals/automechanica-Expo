"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-[#000B29] mt-[70px] md:mt-[104px]">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 select-none">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
       
      </div>
    
     
    </section>
  );
}
