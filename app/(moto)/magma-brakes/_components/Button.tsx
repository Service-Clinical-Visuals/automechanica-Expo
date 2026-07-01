"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";

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
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bogle transition-all duration-300 active:scale-95 select-none cursor-pointer button-responsive";
  const variantStyles = "bg-[var(--color-primary)] hover:bg-[#e08314] text-white uppercase rounded-none font-bold";

  const content = (
    <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
      <div className="font-bogle tracking-tighter">
        {text}
      </div>
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
