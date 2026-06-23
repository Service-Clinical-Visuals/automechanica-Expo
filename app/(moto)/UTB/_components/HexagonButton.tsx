"use client";

import React from "react";
import Link from "next/link";

interface HexagonButtonProps {
  text: string;
  href: string;
  className?: string;
  bgColor?: string; // e.g. "bg-primary" or "bg-white"
  textColor?: string; // e.g. "text-white" or "text-primary"
}

export default function HexagonButton({
  text,
  href,
  className = "",
  bgColor = "bg-primary",
  textColor = "text-white"
}: HexagonButtonProps) {
  return (
    <Link href={href} className={`inline-flex items-center group relative ${className}`}>
      {/* Main button text area (rounded left, flat right) */}
      <div className={`${bgColor} ${textColor} font-instrument font-bold italic pl-6 pr-8 py-2 md:pl-8 md:pr-10 md:py-3 rounded-l-md flex items-center justify-center text-sm md:text-lg z-10 h-10 md:h-12 whitespace-nowrap`}>
        {text}
      </div>

      {/* Hexagon arrow area overlaying the right edge (taller than text area) */}
      <div
        className="bg-secondary flex items-center justify-center transition-colors group-hover:bg-secondary-hover z-20 shrink-0"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          marginLeft: "-20px",
          width: "52px",
          height: "60px"
        }}
      >
        <img src="/moto/UTB/vector.png" alt="Arrow" className="w-7 h-6  object-contain ml-[-2px]" />
      </div>
    </Link>
  );
}
