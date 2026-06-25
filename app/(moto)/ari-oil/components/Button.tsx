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
  const baseStyles = "relative inline-flex items-center justify-center font-outfit transition-all duration-300 active:scale-95 select-none cursor-pointer rounded-tl-[36px] rounded-br-[36px] rounded-tr-none rounded-bl-none";

  let variantStyles = "";

  if (variant === "primary") {
    variantStyles = "bg-secondary text-white hover:bg-secondary-hover py-3 px-8 md:py-2.5 md:px-8 text-[16px] md:text-[20px]";
  } else if (variant === "secondary") {
    variantStyles = "bg-white text-secondary hover:bg-gray-50 py-3 px-8 md:py-2.5 md:px-8 text-[16px] md:text-[20px] shadow-sm";
  } else if (variant === "outline") {
    variantStyles = "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white py-2.5 px-8 md:py-3 md:px-10 text-[18px] md:text-[20px]";
  } else if (variant === "iconOnly") {
    variantStyles = "bg-secondary text-white hover:bg-secondary-hover w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full";
  }

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-3">
      {variant !== "iconOnly" && <span>{text}</span>}
      {showIcon && (
        <div
          className="w-5 h-5  bg-current transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          style={{
            WebkitMaskImage: 'url(/moto/ari-oil/arrow.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: 'url(/moto/ari-oil/arrow.png)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
          }}
        />
      )}
    </span>
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
