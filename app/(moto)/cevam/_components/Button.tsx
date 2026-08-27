import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "primary-outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-semibold oswald-font transition-all duration-300 inline-flex items-center justify-center pt-[10px] pr-[35px] pb-[10px] pl-[35px]";

  const variants = {
    primary: "bg-[#0195DA] text-white hover:bg-[#017bb5] border-[#0195DA] rounded-[5px] border-[1px]",
    secondary: "bg-white text-[#0195DA] hover:bg-gray-100 border-[#0195DA] rounded-[5px] border-[1px]",
    outline: "border-[#0195DA] text-[#272727] hover:bg-[#0195DA] hover:text-white border-[3px] rounded-[6px] h-[64px] opacity-100",
    "primary-outline": "border-[#0195DA] text-[#272727] hover:bg-[#0195DA] hover:text-white border-[1px] rounded-[5px]"
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
