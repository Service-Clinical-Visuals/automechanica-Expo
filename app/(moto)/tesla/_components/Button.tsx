"use client";

import React from "react";
import Link from "next/link";

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
  showIcon = true,
  variant = "primary",
}: ButtonProps) => {

  const content = (
    <div className={`relative z-10 flex items-center button group ${className}`}>
      {showIcon && (
        <div className="w-[2.8em] h-[2.8em] bg-white rounded-full border-[0.1em] border-primary flex items-center justify-center shrink-0 z-20 relative group-hover:scale-105 transition-transform duration-300">
          <img
            src="/moto/tesla/vector.png"
            alt="icon"
            className="w-[65%] h-[65%] object-contain 
           animate-[spin_4s_linear_infinite]"
          />
        </div>
      )}

      <div
        className={`flex items-center h-[2.2em] transition-colors
          ${variant === 'secondary'
            ? 'bg-white text-primary group-hover:bg-primary group-hover:text-white'
            : 'bg-primary text-white group-hover:bg-primary/90 '
          }
          ${showIcon ? '-ml-[1.4em] pl-[2em] pr-[1.2em] rounded-r-md' : 'rounded-full px-[1.2em]'}
        `}
      >
        <span className="whitespace-nowrap translate-y-[1px] leading-none tracking-wide" style={{ fontFamily: 'var(--font-iceland)' }}>{text}</span>
      </div>
    </div>
  );

  const wrapperStyles = "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none";

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
