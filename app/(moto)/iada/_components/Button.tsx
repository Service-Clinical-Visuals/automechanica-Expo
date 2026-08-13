"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ href, children, className = "", onClick }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 bg-[#C00027] hover:bg-[#a00020] text-white px-8 py-3  rounded-tl-[24px] rounded-br-[24px] transition-all duration-300 font-normal text-sm md:text-[16px] 4xl:text-[18px] shadow-sm group amaranth";
  
  const content = (
    <>
      {children}
      <TrendingUp size={20} strokeWidth={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {content}
    </button>
  );
}
