"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
}

export default function Button({ children, href, onClick, className = "", variant = "primary" }: ButtonProps) {
  const baseClasses = "btn-text manrope-font font-semibold transition-all duration-300 inline-block text-center px-8 py-3 rounded-tl-[1.5rem] rounded-br-[1.5rem]";
  
  const variants = {
    primary: "bg-[#1f5dd2] text-white hover:bg-[#1546a3]",
    outline: "border-2 border-[#1f5dd2] text-[#1f5dd2] hover:bg-[#1f5dd2] hover:text-white"
  };

  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
