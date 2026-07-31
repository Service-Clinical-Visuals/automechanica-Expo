import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  showArrow?: boolean;
}

export default function Button({ 
  href, 
  children, 
  className = "", 
  onClick, 
  type = "button", 
  showArrow = true 
}: ButtonProps) {
  // Using Teko font for button (font-heading)
  const baseClasses = "inline-flex items-center justify-center gap-3 md:gap-6 bg-[#FF131C] text-white px-5 md:px-8 pt-[4px] md:pt-[6px] pb-[2px] md:pb-[4px] heading text-[18px] md:text-[24px] tracking-wider hover:bg-white hover:text-[#FF131C] hover:border hover:border-[#FF131C] transition-colors group font-medium";
  
  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
        {showArrow && (
          <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
      {showArrow && (
        <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      )}
    </button>
  );
}
