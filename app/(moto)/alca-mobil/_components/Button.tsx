"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
} 

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true, 
}: ButtonProps) => {

  const content = (
    <div className={`flex items-center justify-center px-4 py-2.25 bg-primary border-2 border-primary text-white hover:bg-transparent hover:text-primary transition-all duration-300 rounded-lg shadow-sm ${className}`}>
      <div className="button whitespace-nowrap mr-3 sm:mr-4">{text}</div>
      {showIcon && (
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300 shrink-0" strokeWidth={3} />
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
