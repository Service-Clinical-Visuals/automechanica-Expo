"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
}: ButtonProps) => {

  const isPrimary = variant === "primary";
  
  const baseStyles = "flex items-center justify-center px-8 py-3.5 transition-all duration-300 rounded-tl-[2rem] rounded-br-[2rem] shadow-md hover:shadow-lg group w-max";
  
  const variantStyles = isPrimary 
    ? "bg-primary text-white hover:bg-primary-hover"
    : "bg-white text-primary hover:bg-gray-100";

  const content = (
    <div className={`${baseStyles} ${variantStyles} ${className}`}>
      <span className="button whitespace-nowrap">
        {text}
      </span>
      {showIcon && (
        <ArrowRight 
          className={`ml-3 w-5 h-5 min-[2000px]:w-6 min-[2000px]:h-6 group-hover:translate-x-1.5 transition-transform duration-300 ${isPrimary ? 'text-white' : 'text-primary'}`} 
          strokeWidth={2} 
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
