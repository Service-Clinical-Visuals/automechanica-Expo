import React from "react";
import Link from "next/link";

export interface ButtonProps {
  href: string;
  variant?: "outline-primary" | "outline-white";
  className?: string;
  children: React.ReactNode;
}

export default function Button({ href, variant = "outline-primary", className = "", children }: ButtonProps) {
  const baseStyles = "inline-block sora rounded-sm font-semibold header-link transition-all duration-300 w-fit text-center";
  
  const variants = {
    "outline-primary": "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-6 py-2",
    "outline-white": "border border-white text-white hover:bg-white hover:text-black px-8 py-2"
  };

  return (
    <Link 
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
