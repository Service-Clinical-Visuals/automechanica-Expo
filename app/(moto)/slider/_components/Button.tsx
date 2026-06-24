"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "chevron" | "secondary" | "dark";
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
  let baseStyles = "inline-flex items-center justify-center transition-colors duration-300 active:scale-95 select-none cursor-pointer";
  let variantStyles = "";
  let iconElement = null;

  if (variant === "primary") {
    // Solid Orange button
    baseStyles += " font-bebas text-xl px-8 py-3 rounded-sm";
    variantStyles = "bg-primary text-white hover:bg-primary-hover";
    if (showIcon) {
      iconElement = <ArrowRight size={18} strokeWidth={2.5} className="ml-2 transition-transform group-hover:translate-x-1" />;
    }
  } else if (variant === "chevron") {
    // White background, chevron point on the right
    baseStyles += " font-bebas text-xl px-6 py-2 md:px-8 md:py-3 pr-10 md:pr-8";
    variantStyles = "bg-white text-dark hover:bg-gray-100";
    if (showIcon) {
      iconElement = <ArrowRight size={20} strokeWidth={3} className="ml-3 text-primary transition-transform group-hover:translate-x-1" />;
    }
  } else if (variant === "secondary" || variant === "dark") {
    // Dark #28282B background, chevron point on the right
    baseStyles += " font-bebas text-xl px-6 py-2 md:px-8 md:py-3 pr-10 md:pr-8";
    variantStyles = "bg-[#28282B] text-white hover:bg-black";
    if (showIcon) {
      iconElement = <ArrowRight size={20} strokeWidth={3} className="ml-3 text-primary transition-transform group-hover:translate-x-1" />;
    }
  }

  const content = (
    <>
      <span>{text}</span>
      {iconElement}
    </>
  );

  const finalStyles = `group ${baseStyles} ${variantStyles} ${className}`;

  // Apply clip-path for chevron variants
  const isChevron = variant === "chevron" || variant === "secondary" || variant === "dark";
  const styleObj = isChevron ? { clipPath: "polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%)" } : {};

  if (href) {
    return (
      <Link href={href} className={finalStyles} style={styleObj}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={finalStyles} style={styleObj}>
      {content}
    </button>
  );
};

export default Button;
