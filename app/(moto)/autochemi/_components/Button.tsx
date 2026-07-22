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
}
 
const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true, 
}: ButtonProps) => {

  const content = (
    <div className={`flex items-center justify-center bg-primary hover:bg-primary-hover transition-colors rounded-tr-[1.5rem] rounded-bl-[1.5rem] px-6 py-2 w-max group shadow-sm ${className}`}>
      <span className="button whitespace-nowrap text-white">{text}</span>
      {showIcon && (
        <ArrowUpRight className="w-6 h-6 min-[2000px]:w-8 min-[2000px]:h-8 ml-3 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
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
