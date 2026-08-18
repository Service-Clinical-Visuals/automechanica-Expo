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
  showIcon = false,
  variant = "primary",
}: ButtonProps) => {
  const baseStyles = "flex items-center justify-center px-6 py-2.25 transition-colors rounded-xl";

  const variantStyles = {
    primary: "bg-white text-primary hover:bg-gray-50",
    secondary: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
  };

  const content = (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <ArrowRight
          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
          strokeWidth={2}
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
