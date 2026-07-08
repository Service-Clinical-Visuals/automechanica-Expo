"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
  showIcon = true,
}: ButtonProps) => {

  const content = (
    <div className={`relative z-10 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white hover:bg-primary-hover transition-colors rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none button ${className}`}>
      <div className="button whitespace-nowrap font-primary leading-none tracking-wide">{text}</div>
      {showIcon && (
        <ArrowUpRight className="w-5 h-5 shrink-0" strokeWidth={2} />
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
