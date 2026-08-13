"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Typography from "./Typography";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  color?: "primary" | "secondary";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  color = "secondary",
}: ButtonProps) => {
  const isPrimary = color === "primary";
  
  const finalStyles = `group relative inline-flex items-center justify-center transition-all duration-300 active:scale-95 select-none cursor-pointer overflow-hidden ${
    isPrimary ? "bg-[var(--color-primary)] text-white hover:bg-[#003662]" : "bg-white text-[var(--color-primary)] hover:bg-gray-100"
  } px-8 py-3.5 ${className}`;

  const content = (
    <div className="relative z-10 flex items-center justify-center gap-2">
      <Typography variant="span" color={isPrimary ? "white" : "primary"} weight="semibold" className="font-oswald tracking-wide  leading-none ">{text}</Typography>
      {showIcon &&
        <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.7071 8.07112C28.0976 7.6806 28.0976 7.04743 27.7071 6.65691L21.3431 0.292946C20.9526 -0.0975785 20.3195 -0.0975785 19.9289 0.292946C19.5384 0.68347 19.5384 1.31664 19.9289 1.70716L25.5858 7.36401L19.9289 13.0209C19.5384 13.4114 19.5384 14.0446 19.9289 14.4351C20.3195 14.8256 20.9526 14.8256 21.3431 14.4351L27.7071 8.07112ZM0 7.36401V8.36401H27V7.36401V6.36401H0V7.36401Z" fill={isPrimary ? "#FFFFFF" : "#00467C"} />
        </svg>}
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
