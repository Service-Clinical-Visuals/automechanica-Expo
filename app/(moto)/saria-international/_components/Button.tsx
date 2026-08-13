"use client";
import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({ href, children, className = "", onClick, type = "button" }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center bg-[#F4B824] hover:bg-[#FDBB2D] text-[#111827] font-semibold oswald-font btn-text px-8 py-3 rounded-lg transition-colors duration-300 whitespace-nowrap";
  
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
