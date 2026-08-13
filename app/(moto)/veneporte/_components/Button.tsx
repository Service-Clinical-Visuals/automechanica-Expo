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
  variant?: "primary" | "secondary" | "hero" | "dark";
}

import Typography from "./Typography";

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary"
}: ButtonProps) => {

  let containerStyles = "";
  let iconContainerStyles = "";
  let iconColor = "";
  let textColor = "";

  if (variant === "primary") {
    containerStyles = "bg-primary border border-primary hover:opacity-90";
    iconContainerStyles = "bg-white";
    iconColor = "text-secondary";
    textColor = "white";
  } else if (variant === "hero") {
    containerStyles = "bg-transparent border border-white hover:bg-white/10";
    iconContainerStyles = "bg-primary";
    iconColor = "text-white";
    textColor = "white";
  } else if (variant === "secondary") {
    containerStyles = "bg-transparent border border-white hover:bg-white/10";
    iconContainerStyles = "bg-white";
    iconColor = "text-primary";
    textColor = "white";
  } else if (variant === "dark") {
    containerStyles = "bg-[#1E1E1E] border border-[#1E1E1E] hover:bg-[#2A2A2A]";
    iconContainerStyles = "bg-primary";
    iconColor = "text-white";
    textColor = "white";
  }

  const content = (
    <div className={`relative flex items-stretch rounded overflow-hidden button shadow-sm ${containerStyles} ${className}`}>
      <div className="flex items-center justify-center px-4 md:px-6 py-2 md:py-2.5">
        <Typography variant="button" color={textColor as any} className="whitespace-nowrap tracking-wide font-bold">
          {text}
        </Typography>
      </div>
      {showIcon && (
        <div className={`flex items-center justify-center px-3 border-l border-white/20 ${iconContainerStyles}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 14L20 9L15 4" stroke={variant === "secondary" || variant === "primary" ? "#34414C" : "#FFFFFF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 20V13C4 11.9391 4.42143 10.9217 5.17157 10.1716C5.92172 9.42143 6.93913 9 8 9H20" stroke={variant === "secondary" || variant === "primary" ? "#34414C" : "#FFFFFF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
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
