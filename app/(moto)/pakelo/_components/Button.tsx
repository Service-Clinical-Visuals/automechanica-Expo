import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "white" | "red" | "white-outline" | "outline-black";
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  href, 
  children, 
  variant = "primary", 
  className = "",
  onClick 
}: ButtonProps) {
  
  let variantStyles = "";
  switch (variant) {
    case "primary":
      // A white button with skewed edges and black text
      variantStyles = "bg-white text-black oswald border border-white hover:bg-transparent hover:text-white transition-colors duration-300 transform skew-x-[-15deg] font-medium btn-text";
      break;
    case "outline":
      // A transparent button with white border
      variantStyles = "bg-transparent text-white border border-[#ffffff]/90 hover:border-white transition-colors duration-300 dm-sans header-btn  font-semibold tracking-wider";
      break;
    case "white":
      variantStyles = "bg-transparent text-white border border-white oswald  transition-colors duration-300 transform skew-x-[-15deg] font-medium";
      break;
    case "red":
      variantStyles = "bg-primary text-white  border border-primary hover:bg-transparent hover:text-primary transition-colors duration-300 transform skew-x-[-15deg] font-medium oswald btn-text tracking-wider";
      break;
   case "outline-black":
   variantStyles = "bg-transparent text-[#242424] border border-[#242424] hover:border-[#242424] hover:text-[#242424] transition-colors duration-300 font-dm-sans header-btn font-semibold tracking-wider";
      break;
  }

  const InnerContent = (
    <span className={`block ${variant === "primary" || variant === "red" || variant === "white" || variant === "white-outline" ? "skew-x-[15deg] px-8 py-3" : "px-12 py-2.5"} flex items-center justify-center uppercase`}>
      {children}
    </span>
  );

  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className={`inline-block ${variantStyles} ${className}`}
      >
        {InnerContent}
      </button>
    );
  }

  return (
    <Link 
      href={href} 
      className={`inline-block ${variantStyles} ${className}`}
    >
      {InnerContent}
    </Link>
  );
}
