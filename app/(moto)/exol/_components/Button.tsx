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
  const baseStyles = "relative inline-flex items-center justify-center font-outfit transition-all duration-300 active:scale-95 select-none cursor-pointer  font-medium";

  let variantStyles = "";

  if (variant === "primary") {
    variantStyles = "bg-primary text-white hover:bg-primary-hover py-2 px-2 xl:py-2 xl:px-3 text-[14px] md:text-[16px]";
  } else if (variant === "secondary") {
    variantStyles = "bg-white text-primary hover:bg-gray-50 py-2 px-3 xl:py-2 xl:px-3 text-[15px] md:text-[16px] shadow-sm";
  } else if (variant === "outline") {
    variantStyles = "border-2 border-primary text-primary hover:bg-primary hover:text-white py-2.5 px-6 md:py-2.5 md:px-8 text-[16px] md:text-[18px]";
  } else if (variant === "iconOnly") {
    variantStyles = "bg-primary text-white hover:bg-primary-hover w-10 h-10 md:w-12 md:h-12 flex items-center justify-center";
  }

  const content = (
    <div className="relative z-10 flex items-center justify-center gap-3">
      {variant !== "iconOnly" && <div>{text}</div>}
      {showIcon && (
        <div className="bg-white text-primary p-1.5 flex items-center justify-center shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
          <div
            className="w-5 h-5 bg-current"
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
