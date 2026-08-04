import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "primary-outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-semibold poppins-font transition-all duration-300 inline-flex items-center justify-center rounded-[10px] gap-[10px] border";

  const variants = {
    primary: "bg-[#054279] text-white hover:bg-[#042e53] border-transparent px-4 py-1 md:px-4 md:py-2",
    secondary: "bg-white text-black hover:bg-gray-100 border-transparent px-4 py-1 md:px-4 md:py-2",
    outline: "border-white text-white hover:bg-white hover:text-[#054279] px-4 py-1 md:px-4 md:py-2",
    "primary-outline": "border-[#054279] text-[#054279] hover:bg-[#054279] hover:text-white px-4 py-1 md:px-4 md:py-2"
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
