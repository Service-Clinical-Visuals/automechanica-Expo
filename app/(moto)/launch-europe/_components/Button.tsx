import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "primary-green" | "outline-green";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg transition-all duration-300 btn-text px-[28px] py-[7px] font-heading font-normal";
  
  const variants = {
    primary: "bg-[#ed1c24] text-white hover:bg-[#c81017]",
    secondary: "bg-[#1a1a1a] text-white hover:bg-black",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a]",
    "primary-green": "bg-[#409e3f] text-white hover:bg-[#218838]",
    "outline-green": "border-2 border-[#409e3f] text-[#409e3f] hover:bg-[#409e3f] hover:text-white bg-transparent",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
