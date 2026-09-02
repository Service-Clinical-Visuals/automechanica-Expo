import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "primary-outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-regular px-4 py-2 exo2-font transition-all duration-300 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-[#F05A28] text-white hover:bg-[#d95222] border-[#F05A28] rounded-[5px] border-[1px]",
    secondary: "bg-white text-[#F05A28] hover:bg-gray-100 border-[#F05A28] rounded-[5px] border-[1px]",
    outline: "border-[#F05A28] text-[#272727] hover:bg-[#F05A28] hover:text-white border-[3px] rounded-[6px] h-[64px] opacity-100",
    "primary-outline": "border-[#F05A28] text-[#272727] hover:bg-[#F05A28] hover:text-white border-[1px] rounded-[5px]"
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
