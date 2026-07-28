import React from "react";
import Link from "next/link";

export type ButtonVariant = "red" | "white" | "green" | "blue" | "primary" | "secondary";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
}

export default function Button({ 
  href, 
  children, 
  className = "", 
  onClick, 
  type = "button",
  variant = "red" 
}: ButtonProps) {
  // Base styles with sharp top-left corner and rounded top-right, bottom-right, bottom-left corners
  const baseClasses = "inline-flex items-center justify-center font-normal oswald-font btn-text px-8 py-3.5 rounded-2xl rounded-tl-none transition-all duration-300 tracking-wide active:scale-95 cursor-pointer select-none ";
  
  let variantClasses = "";
  switch (variant) {
    case "white":
      variantClasses = "bg-white text-[#E11938] hover:bg-gray-100 shadow-md hover:shadow-lg";
      break;
    case "green":
      variantClasses = "bg-[#4D881F] text-white hover:bg-[#387230] shadow-sm hover:shadow-md";
      break;
    case "blue":
    case "secondary":
      variantClasses = "bg-[#15468e] text-white hover:bg-[#113872] shadow-sm hover:shadow-md";
      break;
    case "red":
    case "primary":
    default:
      variantClasses = "bg-[#E11938] text-white hover:bg-[#d01d27] shadow-sm hover:shadow-md";
      break;
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
