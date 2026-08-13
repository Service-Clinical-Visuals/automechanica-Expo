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
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  variant = 'primary'
}: ButtonProps) => {

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return "bg-primary text-white hover:bg-primary-hover border border-transparent";
      case 'secondary':
        return "bg-[#0D570A] text-white hover:bg-[#0a4608] border border-transparent";
      case 'outline':
        return "bg-transparent text-[#0D570A] border border-[#0D570A] hover:bg-[#0D570A] hover:text-white";
      default:
        return "bg-primary text-white hover:bg-primary-hover border border-transparent";
    }
  };

  const content = (
    <div className={`flex items-center justify-center px-7 py-2.25 transition-colors rounded-xl ${getVariantStyles()} ${className}`}>
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 shrink-0" strokeWidth={2} />
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
