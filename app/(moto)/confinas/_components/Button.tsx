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
  variant = "primary"
}: ButtonProps) => {

  const isPrimary = variant === "primary";
  const bgClass = isPrimary ? "bg-primary hover:bg-primary-hover border border-transparent" : "bg-white hover:bg-primary/5 border border-primary";
  const textClass = isPrimary ? "text-white" : "text-black";

  const content = (
    <div className={`flex items-center justify-center px-8 py-2.5 transition-colors rounded shadow-sm ${bgClass} ${className}`}>
      <div className={`button whitespace-nowrap mr-3 sm:mr-4 ${textClass}`}>{text}</div>
      {showIcon && (
        <ArrowRight className={`w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 shrink-0 ${textClass}`} strokeWidth={2} />
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
