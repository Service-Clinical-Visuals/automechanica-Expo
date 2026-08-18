"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "hero" | "white";
  showIcon?: boolean;
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  variant = "outline",
  showIcon = true,
}: ButtonProps) => {
  const variantClasses = {
    outline:
      "bg-white text-[var(--color-primary)] border-1 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white shadow-sm",
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] border-1 border-[var(--color-primary)] shadow-md",
    hero:
      "bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-[var(--color-primary)] shadow-lg",
    white:
      "bg-white text-[var(--color-heading)] hover:bg-gray-100 border-1 border-white shadow-sm",
  };

  const content = (
    <div
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl transition-all duration-300 ${variantClasses[variant]} ${className}`}
    >
      <span className="font-primary font-bold text-base sm:text-lg whitespace-nowrap">
        {text}
      </span>
      {showIcon && (
        <ArrowRight
          className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      )}
    </div>
  );

  const wrapperStyles =
    "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group";

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
