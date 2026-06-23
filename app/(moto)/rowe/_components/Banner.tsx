"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-screen  overflow-hidden ">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 select-none">
        <DynamicVideoPlayer
          type="banner"
           className="absolute inset-0 w-full h-full object-cover object-center"
        />
       
      </div>
    
     
    </section>
  );
}
