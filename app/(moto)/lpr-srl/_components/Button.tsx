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
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
}: ButtonProps) => {

  const content = (
    <div className={`flex items-center justify-center px-8 py-3 bg-primary text-white hover:bg-primary-hover transition-colors rounded-md shadow-sm ${className}`}>
      <div className="button whitespace-nowrap text-white">{text}</div>
      {showIcon && (
        <ArrowRight className="w-5 h-5 min-[2100px]:w-7 min-[2100px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-white ml-3 sm:ml-4 group-hover:translate-x-1 transition-transform duration-300 shrink-0" strokeWidth={2} />
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
