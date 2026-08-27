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
  const baseStyles = "relative inline-flex items-center justify-center font-oswald transition-all duration-300 active:scale-95 select-none cursor-pointer button py-1.5 px-3 rounded-none ";

  let variantStyles = "";

  if (variant === "primary") {
    variantStyles = "bg-primary text-white hover:bg-red-700 shadow-md";
  } else if (variant === "secondary") {
    variantStyles = "bg-white text-primary hover:bg-gray-50 shadow-sm border border-gray-200";
  } else if (variant === "outline") {
    variantStyles = "border-2 border-primary text-primary hover:bg-primary hover:text-white";
  } else if (variant === "iconOnly") {
    variantStyles = "bg-primary text-white hover:bg-red-700 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center";
  }

  const content = (
    <div className="relative z-10 flex items-center justify-center gap-2">
      {variant !== "iconOnly" && text}
      {showIcon && (
        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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
