import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-semibold transition-all duration-300 inline-flex w-fit items-center justify-center rounded-md";
  
  const variants = {
    primary: "bg-[#FEC52E] text-white hover:bg-[#E0A800] px-4 py-1.5 md:px-6 md:py-2",
    secondary: "bg-white text-black hover:bg-gray-100 px-4 py-1.5 md:px-6 md:py-2",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black px-4 py-1.5 md:px-6 md:py-2"
  };

  return (
    <Link 
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
