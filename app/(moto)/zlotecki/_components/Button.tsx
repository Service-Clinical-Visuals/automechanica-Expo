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
  variant = "primary"
}: ButtonProps) => {

  const isPrimary = variant === "primary";

  const content = (
    <div 
      className={`flex items-center justify-center px-8 py-3.5 transition-colors shadow-sm 
      rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none
      ${isPrimary 
        ? 'bg-primary text-white hover:bg-primary-hover' 
        : 'bg-white text-primary hover:bg-gray-100'
      } ${className}`}
    >
      <div className={`button whitespace-nowrap ${showIcon ? 'mr-3 sm:mr-4' : ''}`}>
        {text}
      </div>
      {showIcon && (
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 shrink-0" strokeWidth={2.5} />
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
