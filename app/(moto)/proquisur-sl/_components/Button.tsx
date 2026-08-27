import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const baseClasses = "btn-text text-[18px] font-semibold nunito-font transition-all duration-300 inline-flex w-fit items-center justify-center min-w-[214px] h-[45px] gap-[10px]";


  const variants = {
    primary: "bg-[#6FB420] text-white hover:bg-white hover:text-[#6FB420] border-1 border-transparent hover:border-[#6FB420]",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "border- border-[#6FB420] text-[#6FB420] hover:bg-[#6FB420] hover:text-white"
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
