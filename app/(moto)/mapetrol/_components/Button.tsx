"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

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
  const baseStyles = "relative inline-flex items-center justify-center font-orbitron transition-all duration-300 active:scale-95 select-none cursor-pointer ";

  let variantStyles = "";
  let iconStyles = "";
  let textColor: "primary" | "secondary" | "dark" | "white" | "muted" | "none" = "dark";

  if (variant === "primary") {
    variantStyles = "bg-[#F1F1F1] hover:bg-[#e2e2e2] button-responsive px-6 py-3 md:px-10 md:py-4 rounded-none";
    textColor = "primary";
    iconStyles = "text-[#272727] ";
  } else if (variant === "secondary") {
    variantStyles = "bg-transparent border border-white hover:bg-white/10 button-responsive px-6 py-2.5 md:px-8 md:py-3.5 rounded-[6px]";
    textColor = "white";
    iconStyles = "text-white border-white";
  } else if (variant === "outline") {
    variantStyles = "border border-white text-white hover:bg-white hover:text-[#272727] button-responsive rounded-full px-6 py-2.5 md:px-8 md:py-3.5";
    textColor = "white";
    iconStyles = "text-inherit group-hover:text-[#272727] border-white group-hover:border-[#272727]";
  } else if (variant === "iconOnly") {
    variantStyles = "bg-[#F1F1F1] hover:bg-[#e2e2e2] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full";
    textColor = "dark";
    iconStyles = "text-[#272727] border-[#272727]";
  }

  const content = (
    <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
      {variant !== "iconOnly" && (
        <Typography variant="span" color={textColor} weight="semibold" className="font-orbitron tracking-wide text-[15px] md:text-[16px]">
          {text}
        </Typography>
      )}
      {showIcon && (
        <div className={`flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform duration-300 w-6 h-6 rounded-full border-2 ${iconStyles}`}>
          <ArrowRight size={14} strokeWidth={2.5} />
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
