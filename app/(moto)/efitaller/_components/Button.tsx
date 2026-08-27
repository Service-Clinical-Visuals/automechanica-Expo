import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "primary-outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-semibold sora-font transition-all duration-300 inline-flex items-center justify-center rounded-[5px] gap-[10px] border-[1px] opacity-100 pt-[10px] pr-[25px] pb-[10px] pl-[25px]";

  const variants = {
    primary: "bg-[#054279] text-[#C2D500] hover:bg-[#042e53] border-[#C2D500]",
    secondary: "bg-white text-[#C2D500] hover:bg-gray-100 border-[#C2D500]",
    outline: "border-[#C2D500] text-[#C2D500] hover:bg-[#C2D500] hover:text-[#054279]",
    "primary-outline": "border-[#C2D500] text-[#C2D500] hover:bg-[#C2D500] hover:text-white"
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
