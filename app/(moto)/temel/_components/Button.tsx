"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
  showIcon = false,
}: ButtonProps) => {

  const variantClasses = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] border border-[var(--color-primary)]",
    outline: "bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
    hero: "bg-transparent text-white border border-white/60 hover:bg-white hover:text-[var(--color-heading)]",
    white: "bg-white text-[var(--color-heading)] hover:bg-gray-100 border border-white",
  };

  const content = (
    <div className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm transition-all duration-300 ${variantClasses[variant]} ${className}`}>
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
