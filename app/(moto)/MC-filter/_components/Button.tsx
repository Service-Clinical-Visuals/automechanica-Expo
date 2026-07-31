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

  const content = (
    <div className={`button flex items-center justify-center pl-[1.7em] pr-[0.4em] py-[0.4em] rounded-full transition-all duration-300 shadow-md ${isPrimary
      ? 'bg-primary text-white hover:bg-primary/95'
      : 'bg-white text-primary hover:bg-gray-50'
      } ${className}`}>
      <div className="whitespace-nowrap mr-[2em]">
        {text}
      </div>
      {showIcon && (
        <div className="flex items-center justify-center w-[3rem] h-[3rem] rounded-full bg-secondary group-hover:scale-105 transition-transform duration-300 shrink-0">
          <ArrowUpRight className="w-[1.6em] h-[1.6em] text-primary group-hover:translate-x-[0.4em] group-hover:-translate-y-[0.4em] transition-transform duration-300" strokeWidth={2.5} />
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
