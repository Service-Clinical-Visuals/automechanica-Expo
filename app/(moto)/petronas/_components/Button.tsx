"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  icon?: React.ElementType;
  variant?: "solid" | "outline";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  icon: Icon = ArrowUpRight,
  variant = "solid",
}: ButtonProps) => {

  const isOutline = variant === "outline";
  const bgStyles = isOutline
    ? "bg-transparent border border-primary hover:border-white transition-colors"
    : "bg-primary hover:bg-primary-hover transition-colors";

  const content = (
    <div className={`flex items-center w-max group ${className}`}>
      <div className={`flex items-center justify-center ${bgStyles} rounded-tr-[1.5rem] rounded-bl-[1.5rem] shadow-sm relative px-6 py-2.25  min-[3800px]:px-24 min-[3800px]:py-10 gap-2 md:gap-3 min-[2000px]:gap-4 min-[3800px]:gap-6`}>
        <div className="button whitespace-nowrap text-white">{text}</div>
        {showIcon && (
          <Icon className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 w-5 h-5 md:w-6 md:h-6 min-[2000px]:w-8 min-[2000px]:h-8 min-[3800px]:w-14 min-[3800px]:h-14" strokeWidth={2.5} />
        )}
      </div>
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
