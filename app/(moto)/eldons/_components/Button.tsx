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
  const bgClass = isPrimary 
    ? "bg-primary hover:bg-primary-hover text-white" 
    : "bg-white hover:bg-gray-50 text-primary";

  const content = (
    <div className={`flex items-center justify-center px-8 py-3.5 transition-colors shadow-sm ${bgClass} ${className}`}>
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <ArrowRight 
          className={`ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 shrink-0 ${isPrimary ? 'text-white' : 'text-primary'}`} 
          strokeWidth={1.5} 
        />
      )}
    </div>
  );

  const wrapperStyles = "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group";

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
