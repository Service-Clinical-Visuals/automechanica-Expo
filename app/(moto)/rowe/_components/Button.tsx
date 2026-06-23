"use client";

import React from "react";
import Link from "next/link";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ href, children, className = "", onClick }: ButtonProps) {
  // We use responsive padding and text size
  const baseClasses = "inline-flex items-center justify-center bg-[#e61919] text-white px-6 py-3 md:px-10 md:py-3.5 text-sm md:text-[15px] font-semibold hover:bg-[#cc1616] transition-all duration-300 active:scale-95";
  
  if (onClick && !href) {
    return (
      <button 
        onClick={onClick}
        className={`${baseClasses} ${orbitron.className} ${className}`}
        style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
      >
        {children}
      </button>
    );
  }

  return (
    <Link 
      href={href || "#"} 
      className={`${baseClasses} ${orbitron.className} ${className}`}
      style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
    >
      {children}
    </Link>
  );
}
