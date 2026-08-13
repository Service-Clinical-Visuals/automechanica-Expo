"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "white";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary"
}: ButtonProps) => {
  const isWhite = variant === "white";

  const containerClasses = isWhite
    ? "bg-white text-[var(--color-primary)] hover:bg-[#F5F5F5] shadow-sm"
    : "bg-primary text-white hover:bg-[#0d3520] shadow-lg";

  const iconColor = isWhite ? "text-[var(--color-primary)]" : "text-white";
  // Apply the .button typography style class globally to the text, but override colors based on variant
  const textClasses = `button whitespace-nowrap uppercase mr-3 sm:mr-4 ${isWhite ? "text-[var(--color-primary)] font-semibold" : "text-white font-semibold"}`;

  const content = (
    <div className={`flex items-center justify-center px-6 py-3 transition-colors rounded-none rounded-tr-[24px] ${containerClasses} ${className}`}>
      <div className={textClasses}>{text}</div>
      {showIcon && (
        <ArrowUpRight className={`w-5 h-5 ${iconColor} group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 shrink-0`} strokeWidth={2.5} />
      )}
    </div>
  );

  const wrapperStyles = "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group";

  if (href) {
    return (
      <Link href={href} className={wrapperStyles} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={wrapperStyles} type="button">
      {content}
    </button>
  );
};

export default Button;
