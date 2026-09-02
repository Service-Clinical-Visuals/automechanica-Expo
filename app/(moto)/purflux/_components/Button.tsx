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
  variant?: "solid" | "outline";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "solid",
}: ButtonProps) => {

  const baseStyles = "flex items-center justify-center px-7 py-2.25 shadow-sm -skew-x-[21deg] transition-colors";
  const variantStyles = variant === "solid"
    ? "bg-primary text-white hover:bg-primary-hover border border-transparent"
    : "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white";

  const content = (
    <div className={`${baseStyles} ${variantStyles} ${className}`}>
      <div className="flex items-center justify-center skew-x-[20deg]">
        <div className={`button whitespace-nowrap ${variant === "outline" ? "group-hover:text-white" : "text-white"} ${showIcon ? 'mr-3 sm:mr-4' : ''}`}>{text}</div>
        {showIcon && (
          <ArrowRight className={`w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 shrink-0 ${variant === "outline" ? "text-primary group-hover:text-white" : "text-white"}`} strokeWidth={2} />
        )}
      </div>
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
