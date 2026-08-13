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
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true, 
  variant = 'primary'
}: ButtonProps) => {

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-white border border-primary';
      case 'secondary':
      case 'outline':
        return 'bg-transparent text-white border border-white';
      default:
        return 'bg-primary text-white border border-primary';
    }
  };

  const content = (
    <div className={`relative flex items-center justify-center px-8 py-3.5 min-[3800px]:px-16 min-[3800px]:py-6 transition-colors ${getVariantStyles()} ${className}`}>
      <span className="button whitespace-nowrap uppercase tracking-wider">{text}</span>
      {showIcon && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-[70%] aspect-square bg-secondary flex items-center justify-center transition-colors shadow-sm group-hover:bg-secondary-hover z-10">
          <ArrowUpRight className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2.5} />
        </div>
      )}
    </div>
  );

  // Added pr-4 (or mr-4) so the overflowing yellow box doesn't overlap adjacent elements
  const wrapperStyles = "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group mr-4";

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
