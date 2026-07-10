import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "white" | "yellow" | "outline-white";
  className?: string;
  onClick?: () => void;
}

export default function Button({ href, children, variant = "primary", className = "", onClick }: ButtonProps) {
  const baseClasses = "inline-block text-center font-semibold font-chakra transition-colors duration-300 rounded-xl shadow-md btn-text";
  
  const variantClasses = {
    primary: "bg-[#008F33] hover:bg-[#007229] text-white",
    dark: "bg-[#1C1C1C] hover:bg-black text-white",
    white: "bg-white text-gray-900 hover:bg-gray-100",
    yellow: "bg-[#F3DD01] hover:bg-[#e5b800] text-gray-900",
    "outline-white": "border-2 border-white text-white hover:bg-white hover:text-[#008F33] shadow-none",
  };

  return (
    <Link href={href} onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
}
