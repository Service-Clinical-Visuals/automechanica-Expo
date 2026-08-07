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

  const isPrimary = variant === "primary";
  const bgClass = isPrimary ? "bg-primary hover:bg-primary-hover" : "bg-white hover:bg-gray-100";
  const textClass = isPrimary ? "text-white" : "text-primary";

  const content = (
    <div className={`flex items-center justify-center px-8 py-3 min-[3800px]:px-16 min-[3800px]:py-6 transition-colors rounded-lg min-[3800px]:rounded-2xl shadow-sm ${bgClass} ${className}`}>
      <div className={`button whitespace-nowrap ${textClass} ${showIcon ? 'mr-3 sm:mr-4 min-[3800px]:mr-8' : ''}`}>{text}</div>
      {showIcon && (
        <ArrowRight className={`w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 group-hover:translate-x-1 transition-transform duration-300 shrink-0 ${textClass}`} strokeWidth={2} />
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
