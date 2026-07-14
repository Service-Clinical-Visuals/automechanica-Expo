"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
  variant?: "primary" | "white";
}

export default function Button({ text, href = "#", className = "", variant = "primary" }: ButtonProps) {
  const isWhite = variant === "white";
  
  return (
    <div className={`flex items-center group cursor-pointer relative w-fit pr-4 ${className}`}>
      {/* Main Button Body */}
      <Link 
        href={href} 
        className={`${
          isWhite ? "bg-white text-[#212121]" : "bg-[#1a1a1a] text-white"
        } rounded-lg pl-6 pr-10 h-[42px] xl:h-[48px] flex items-center justify-center btn-text oswald-font font-semibold tracking-wide whitespace-nowrap shadow-sm`}
      >
        {text}
      </Link>
       <img src="/moto/ahg/btnarrow.png" alt="arrow" />
    </div>
  );
}
