"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function Button({ text, href = "#", className = "", variant = "primary" }: ButtonProps) {
  if (variant === "secondary") {
    return (
      <Link href={href} className={`flex items-center group cursor-pointer w-fit ${className}`}>
        <span className="bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-all duration-300 rounded-full px-6 h-[46px] md:h-[50px] flex items-center justify-center text-white btn-text font-semibold oswald-font tracking-wide">
          {text}
        </span>
         <img 
          src="/moto/kroon-oil/btnarrow1.png" 
          alt="Arrow" 
          className="h-[46px] w-[46px] md:h-[50px] md:w-[50px] object-contain transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
        />
      </Link>
    );
  }

  return (
    <div className={`flex items-center group cursor-pointer ${className}`}>
      {/* White Pill */}
      <Link 
        href={href} 
        className="bg-white text-[#2f2f2f] hover:bg-gray-100 transition-colors rounded-full px-8 py-3 flex items-center justify-center btn-text oswald-font font-semibold whitespace-nowrap shadow-sm"
      >
        {text}
      </Link>
      
      {/* Yellow Circle Arrow */}     
      <img 
        src="/moto/kroon-oil/btnarrow.png" 
        alt="Arrow" 
        className="h-[46px] w-[46px] md:h-[50px] md:w-[50px] object-contain transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
      />
    </div>
  );
}
