"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "iconOnly";
  className?: string;
  showIcon?: boolean;
}

const Button = ({
  text,
  href,
  onClick,
  variant = "primary",
  className = "",
  showIcon = true,
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center transition-all duration-300 active:scale-95 select-none cursor-pointer rounded-tr-[32px] rounded-bl-[32px] rounded-tl-none rounded-br-none button";

  let variantStyles = "";

  if (variant === "primary") {
    variantStyles = "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] py-1.5 px-4 md:py-2.5 md:px-7.5";
  } else if (variant === "secondary") {
    variantStyles = "bg-white text-[var(--color-primary)] hover:bg-gray-50 py-1.5 px-4 md:py-2.5 md:px-7.5 shadow-sm";
  } else if (variant === "outline") {
    variantStyles = "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white py-1.5 px-4 md:py-2.5 md:px-10";
  } else if (variant === "iconOnly") {
    variantStyles = "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full";
  }

  const content = (
    <div className="relative z-10 flex items-center justify-center gap-2">
      {variant !== "iconOnly" && text}
      {showIcon && (
        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </div>
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
