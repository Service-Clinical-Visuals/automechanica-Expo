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
  variant?: "primary" | "secondary";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary"
}: ButtonProps) => {

  const variantStyles = variant === "primary"
    ? "bg-primary text-white hover:opacity-90"
    : "bg-white text-primary  hover:bg-gray-50";

  const content = (
    <div className={`relative z-10 flex items-center justify-center gap-2 px-6 py-3.5 transition-all rounded-tr-[24px] rounded-bl-[24px] rounded-tl-none rounded-br-none button ${variantStyles} ${className}`}>
      <span className="button whitespace-nowrap leading-none tracking-wide">{text}</span>
      {showIcon && (
        <svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <path d="M26.7735 5.77344L21 -6.34908e-05L15.2265 5.77344L21 11.5469L26.7735 5.77344ZM0 5.77344L-8.74228e-08 6.77344L21 6.77344L21 5.77344L21 4.77344L8.74228e-08 4.77344L0 5.77344Z" fill="currentColor" />
        </svg>
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
