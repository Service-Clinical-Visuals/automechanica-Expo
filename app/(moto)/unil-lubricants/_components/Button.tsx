"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  showIcon?: boolean;
}

export default function Button({ href, children, className = "", onClick, type = "button", showIcon = true }: ButtonProps) {
  const baseClasses = "inline-flex items-center gap-2 py-2.5 px-7 rounded-md transition-colors duration-300 oswald-font font-semibold tracking-wide btn-text whitespace-nowrap justify-center";
  
  // Apply default red background if no bg color is specified in className
  const defaultColor = className.includes('bg-') ? "" : "bg-[#ED3024] hover:bg-[#D0281E] text-white";
  const combinedClasses = `${baseClasses} ${defaultColor} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
        {showIcon && <ArrowRight size={18} />}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
      {showIcon && <ArrowRight size={18} />}
    </button>
  );
}
