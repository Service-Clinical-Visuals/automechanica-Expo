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
  variant = "primary",
}: ButtonProps) => {

  const isPrimary = variant === "primary";
  const bgClass = isPrimary
    ? "bg-primary hover:bg-primary-hover text-white"
    : "bg-white hover:bg-gray-50 text-primary";

  const content = (
    <div className={`flex items-center justify-center px-5 py-2.25 min-[3800px]:px-14 min-[3800px]:py-6 transition-colors shadow-sm  ${bgClass} ${className}`}>
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <svg 
          className="ml-2 min-[3800px]:ml-5 w-[15px] h-[11px] sm:w-[16px] sm:h-[12px] md:w-[18px] md:h-[13px] lg:w-[20px] lg:h-[15px] xl:w-[22px] xl:h-[16px] 2xl:w-[25px] 2xl:h-[18px] min-[3800px]:w-[42px] min-[3800px]:h-[31px]" 
          viewBox="0 0 15 11" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.6 4.7V6H14C12.9 6 11.9 6.5 11.1 7.2C10.3 8 9.9 9 9.9 10.1V10.7H8.6V10.1C8.6 8.7 9.2 7.4 10.2 6.4C10.3 6.3 10.5 6.2 10.6 6H0V4.7H10.6C10.5 4.6 10.3 4.5 10.2 4.3C9.2 3.3 8.6 2 8.6 0.6V0H9.9V0.6C9.9 1.7 10.4 2.7 11.1 3.5C11.9 4.3 12.9 4.7 14 4.7H14.6Z" fill="white" />
        </svg>
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
