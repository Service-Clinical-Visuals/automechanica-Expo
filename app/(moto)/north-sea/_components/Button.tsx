"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  showIcon?: boolean;
}

const Button = ({
  text,
  href,
  onClick,
  variant = "primary",
  className = "",
  showIcon = false,
}: ButtonProps) => {
  const baseStyles = "btn-text! inline-flex items-center justify-center font-medium transition-colors duration-300 active:scale-95 select-none cursor-pointer px-8 py-3 text-md rounded-tl-[16px] rounded-br-[16px] rounded-tr-[4px] rounded-bl-[4px]";

  let variantStyles = "";

  if (variant === "primary") {
    // Red button
    variantStyles = "bg-secondary text-white hover:bg-secondary-hover";
  } else if (variant === "secondary") {
    // Dark blue button
    variantStyles = "bg-primary text-white hover:opacity-90";
  }

  const content = (
    <>
      <span>{text}</span>
      {showIcon && (
        <ArrowUpRight size={18} strokeWidth={2.5} className="ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </>
  );

  const finalStyles = `group ${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={finalStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={finalStyles}>
      {content}
    </button>
  );
};

export default Button;
