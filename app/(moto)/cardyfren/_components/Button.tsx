"use client"

import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  // Base styling for the Cardyfren brand
  const baseClasses = "bg-[#28b7ff] hover:bg-[#1fa1e6] text-white transition-colors font-bold font-heading shadow-sm btn-text inline-flex items-center justify-center whitespace-nowrap";
  
  // Apply default padding and border-radius if the user hasn't provided their own overrides in className
  const defaultPadding = className.includes("px-") || className.includes("py-") || className.includes("p-") ? "" : "px-8 py-3";
  const defaultRounded = className.includes("rounded") ? "" : "rounded-md";

  return (
    <button
      className={`${baseClasses} ${defaultPadding} ${defaultRounded} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
