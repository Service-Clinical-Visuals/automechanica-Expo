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
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
}: ButtonProps) => {

  const content = (
    <div className={`relative z-10 flex items-center justify-between pl-6 sm:pl-10 pr-[-2]  md:pr-[-5] py-[-1] bg-secondary text-white hover:bg-secondary-hover transition-colors rounded-l-none rounded-r-full button shadow-sm ${className}`}>
      <span className="button whitespace-nowrap font-primary leading-none tracking-wide text-white mr-4 sm:mr-6">{text}</span>
      {showIcon && (
        <div className="w-10 bg-primary h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-1 border-white shrink-0  group-hover:bg-white group-hover:text-secondary transition-colors duration-300">
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-secondary transition-colors duration-300" strokeWidth={2.5} />
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
