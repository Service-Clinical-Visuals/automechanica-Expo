import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "primary-outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-medium Roboto-font transition-all duration-300 inline-flex items-center justify-center pt-[8px] pr-[20px] pb-[8px] pl-[20px]";

  const variants = {
    primary: "bg-[#DF1222] text-white hover:bg-[#b00f1c] border-[#DF1222] rounded-[5px] border-[1px]",
    secondary: "bg-white text-[#DF1222] hover:bg-gray-100 border-[#DF1222] rounded-[5px] border-[1px]",
    outline: "border-white text-white hover:bg-white hover:text-black border-[1px] rounded-[5px]",
    "primary-outline": "border-[#DF1222] text-[#DF1222] hover:bg-[#DF1222] hover:text-white border-[1px] rounded-[5px]"
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
