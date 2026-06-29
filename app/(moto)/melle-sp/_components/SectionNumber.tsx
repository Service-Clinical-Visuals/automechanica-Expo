"use client";

import React from "react";

interface SectionNumberProps {
  number: string;
  position: "left" | "right";
  delay?: number;
}

export default function SectionNumber({ number, position, delay = 300 }: SectionNumberProps) {
  const isLeft = position === "left";
  
  return (
    <div 
      className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none select-none aspect-[1/2] bg-[#FEEAE9] rounded-xl flex-col items-center justify-center p-4 border border-[#E52A2A]/12 inline-block ${
        isLeft 
          ? "left-0 rounded-l-none" 
          : "right-0 rounded-r-none"
      }`}
      data-aos={isLeft ? "fade-right" : "fade-left"}
      data-aos-delay={delay}
    >
      <span 
        className="text-[52px] md:text-[60px] font-montserrat font-black leading-none"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px rgba(0, 0, 0, 0.12)"
        }}
      >
        {number}
      </span>
    </div>
  );
}
