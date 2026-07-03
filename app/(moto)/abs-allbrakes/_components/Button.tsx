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
  showIcon = false,
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center font-oswald transition-all duration-300 active:scale-95 select-none cursor-pointer px-6 py-2.5 md:px-8 md:py-3.5";
  const variantStyles = "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-normal";

  // We skew the outer button and un-skew the inner content
  const finalStyles = `group transform -skew-x-[20deg] ${baseStyles} ${variantStyles} ${className}`;

  const content = (
    <div className="relative z-10 flex items-center justify-center gap-2 transform skew-x-[20deg]">
      <span className="font-oswald tracking-wide leading-none text-base font-semibold md:text-lg">{text}</span>
      {showIcon && <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform" />}
    </div>
  );

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
