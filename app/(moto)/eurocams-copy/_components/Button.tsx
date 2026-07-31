"use client";

import React from "react";
import Link from "next/link";

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
  const baseStyles = "relative inline-flex items-center justify-center font-outfit transition-all duration-300 active:scale-95 select-none cursor-pointer ";

  let variantStyles = "";
  let iconStyles = "";

  if (variant === "primary") {
    variantStyles = "bg-primary text-white hover:bg-primary-hover button-responsive";
    iconStyles = "bg-white text-primary";
  } else if (variant === "secondary") {
    variantStyles = "bg-white text-primary hover:bg-gray-50 button-responsive shadow-sm";
    iconStyles = "bg-primary text-white";
  } else if (variant === "outline") {
    variantStyles = "border-2 border-primary text-primary hover:bg-primary hover:text-white button-responsive";
    iconStyles = "bg-primary text-white group-hover:bg-white group-hover:text-primary";
  } else if (variant === "iconOnly") {
    variantStyles = "bg-primary text-white hover:bg-primary-hover w-10 h-10 md:w-12 md:h-12 flex items-center justify-center";
    iconStyles = "text-white";
  }

  const content = (
    <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
      {variant !== "iconOnly" && <div>{text}</div>}
      {showIcon && (
        <div className={`${iconStyles} p-1 md:p-1.5 flex items-center justify-center shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-colors duration-300 transform`}>
          <div
            className="w-4 h-4 md:w-5 md:h-5 bg-current"
            style={{
              WebkitMaskImage: 'url(/moto/exol/arrow1.png)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: 'url(/moto/exol/arrow1.png)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          />
        </div>
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
