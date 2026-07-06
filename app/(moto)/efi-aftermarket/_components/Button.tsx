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
  variant?: "primary" | "secondary" | "hero" | (string & {});
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false, // leaving this in case they use it later, though not in the image
  variant = "primary",
}: ButtonProps) => {

  let bgClass = "";
  let textClass = "";
  let hoverClass = "";

  if (variant === "primary") {
    bgClass = "bg-[var(--color-primary)]";
    textClass = "text-white";
    hoverClass = "hover:bg-[#c62d35]";
  } else if (variant === "secondary") {
    bgClass = "bg-[var(--color-secondary)]";
    textClass = "text-white";
    hoverClass = "hover:bg-[#111111]";
  } else if (variant === "hero") {
    bgClass = "bg-white";
    textClass = "text-[var(--color-primary)]";
    hoverClass = "hover:bg-gray-100";
  }

  const finalStyles = `group relative inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 select-none cursor-pointer overflow-hidden ${bgClass} ${textClass} ${hoverClass} px-8 py-3.5 button ${className}`;

  const content = (
    <div className="relative z-10 flex items-center justify-center gap-2">
      <div className="buttonfont-poppins leading-none">{text}</div>

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
