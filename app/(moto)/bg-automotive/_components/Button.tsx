import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text font-semibold orbitron-font transition-all duration-300 inline-flex w-fit items-center justify-center";

  const variants = {
    primary: "bg-[#1E5F2B] text-white hover:bg-green-700 px-6 py-2 md:px-8 md:py-3",
    secondary: "bg-white text-black hover:bg-gray-100 px-6 py-2 md:px-8 md:py-3",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black px-6 py-2 md:px-8 md:py-3"
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
