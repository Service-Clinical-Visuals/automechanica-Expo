"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary" | "outline";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
}: ButtonProps) => {

  const baseStyles = "flex items-center justify-center px-6 py-2.5 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md group w-max";
  
  const variantStyles = 
    variant === "primary" ? "bg-[#0000AE] text-white hover:bg-[#00008B]" :
    variant === "outline" ? "bg-transparent text-white border border-white/60 hover:bg-white/10 hover:border-white" :
    "bg-white text-[#0000AE] hover:bg-gray-100";

  const content = (
    <div className={`${baseStyles} ${variantStyles} ${className}`}>
      <span className="btn-text whitespace-nowrap font-primary font-normal tracking-wide">
        {text}
      </span>
      {showIcon && (
        <ArrowRightCircle 
          className={`ml-3 w-5 h-5 min-[2000px]:w-6 min-[2000px]:h-6 group-hover:translate-x-1 transition-transform duration-300 ${variant === 'secondary' ? 'text-[#0000AE]' : 'text-white'}`} 
          strokeWidth={1.75} 
        />
      )}
    </div>
  );

  const wrapperStyles = "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none";

  if (href) {
    return (
      <Link href={href} className={wrapperStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={wrapperStyles}>
      {content}
    </button>
  );
};

export default Button;
