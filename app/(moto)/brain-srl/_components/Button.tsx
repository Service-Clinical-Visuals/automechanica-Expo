"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
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
  showIcon = true,
}: ButtonProps) => {

  const content = (
    <div
      className={`relative flex items-center justify-center px-4 py-2 md:px-5 md:py-3 bg-primary text-white transition-opacity hover:opacity-90 ${className}`}
      style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%)' }}
    >
      <Typography variant="button" color="white" className="whitespace-nowrap uppercase tracking-wide">
        {text}
      </Typography>

      {showIcon && (
        <div className="ml-3  flex items-center justify-center rounded-full border-2 border-white w-6 h-6 md:w-7 md:h-7 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight size={16} color="white" strokeWidth={2.7} className="w-3.5 h-3.5 md:w-4 md:h-4" />
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
