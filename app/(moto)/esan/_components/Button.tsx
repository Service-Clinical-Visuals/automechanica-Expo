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
  variant?: "primary" | "secondary" | "solid";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  variant = "primary",
}: ButtonProps) => {

  let variantStyles = "";
  let iconColor = "text-white";
  let textColor: "white" | "primary" | "dark" = "white";

  switch (variant) {
    case "primary":
      variantStyles = "bg-white text-white border border-primary hover:bg-primary hover:text-white group-hover:text-white";
      iconColor = "text-primary group-hover:text-white";
      textColor = "primary";
      break;
    case "secondary":
      variantStyles = "bg-transparent text-white border border-white hover:bg-white/10";
      iconColor = "text-white";
      textColor = "white";
      break;
    case "solid":
      variantStyles = "bg-primary text-white border border-primary hover:bg-primary-hover";
      break;
  }

  const content = (
    <div className={`flex items-center justify-center px-8 py-3.5 transition-colors rounded-md shadow-sm ${variantStyles} ${className} group`}>
      <Typography variant="p" color={textColor} className={`button tracking-wide whitespace-nowrap ${showIcon ? "mr-3 sm:mr-4" : ""} transition-colors duration-300 ${variant === 'primary' ? 'group-hover:text-white' : ''}`}>
        {text}
      </Typography>
      {showIcon && (
        <ArrowRight className={`w-5 h-5 ${iconColor} transition-all duration-300 shrink-0`} strokeWidth={2} />
      )}
    </div>
  );

  const wrapperStyles = "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group";

  if (href) {
    return (
      <Link href={href} className={wrapperStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={wrapperStyles}>
      {content}
    </button>
  );
};

export default Button;
