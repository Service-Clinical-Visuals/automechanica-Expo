import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text text-[18px] font-semibold oswald transition-all duration-300 inline-flex w-fit items-center justify-center min-w-[214px] h-[50px] min-h-[50px] gap-[10px]";


  const variants = {
    primary: "bg-[#0F5AA6] text-white hover:bg-white hover:text-[#0F5AA6] border border-transparent hover:border-[#0F5AA6]",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "border border-[#0F5AA6] text-[#0F5AA6] hover:bg-[#0F5AA6] hover:text-white"
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
