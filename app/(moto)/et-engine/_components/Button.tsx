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
    <div className={`flex items-center w-max group ${className}`}>
      <div className={`flex items-center justify-center bg-primary hover:bg-primary-hover transition-colors rounded-full pl-6 py-2.5 shadow-sm z-0 relative ${showIcon ? 'pr-8 -mr-5' : 'pr-6'}`}>
        <div className="button whitespace-nowrap text-white">{text}</div>
      </div>
      {showIcon && (
        <div className="flex items-center justify-center bg-white rounded-full w-12 h-12 shrink-0 z-10 shadow-md relative group-hover:scale-105 transition-transform duration-300">
          <ArrowUpRight className="w-6 h-6 text-[#171717] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2.5} />
        </div>
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
