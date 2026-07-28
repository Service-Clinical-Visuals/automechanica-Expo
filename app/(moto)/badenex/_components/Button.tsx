import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text oswald-font font-bold transition-all duration-300 inline-flex w-fit items-center justify-center rounded-md";
  
  const variants = {
    primary: "bg-[#D71A21] text-white hover:bg-[#B3151B] px-4 py-2 md:px-6 md:py-2.5 min-[2560px]:px-10 min-[2560px]:py-4 min-[3800px]:px-16 min-[3800px]:py-6",
    secondary: "bg-white text-black hover:bg-gray-100 px-4 py-2 md:px-6 md:py-2.5 min-[2560px]:px-10 min-[2560px]:py-4 min-[3800px]:px-16 min-[3800px]:py-6",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black px-4 py-2 md:px-6 md:py-2.5 min-[2560px]:px-10 min-[2560px]:py-4 min-[3800px]:px-16 min-[3800px]:py-6"
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
