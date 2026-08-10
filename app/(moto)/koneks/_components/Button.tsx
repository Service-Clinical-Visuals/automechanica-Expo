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
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
}: ButtonProps) => {

  const content = (
    <div className={`flex items-center w-max group ${className}`}>
      <div className={`flex items-center justify-center bg-primary hover:bg-primary-hover transition-colors rounded-full shadow-sm z-0 relative pl-5 py-2.5 pr-5 md:pl-6 md:py-3 md:pr-6 min-[2000px]:pl-8 min-[2000px]:py-4 min-[2000px]:pr-8 min-[3800px]:pl-16 min-[3800px]:py-8 min-[3800px]:pr-16`}>
        <div className="button whitespace-nowrap text-[#171717]">{text}</div>
      </div>
      {showIcon && (
        <div className="flex items-center justify-center bg-white rounded-full shrink-0 z-10 shadow-md relative group-hover:scale-105 transition-transform duration-300 w-10 h-10 md:w-12 md:h-12 min-[2000px]:w-16 min-[2000px]:h-16 min-[3800px]:w-28 min-[3800px]:h-28 ml-1 md:ml-2 min-[3800px]:ml-4">
          <ArrowUpRight className="text-[#171717] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 w-5 h-5 md:w-6 md:h-6 min-[2000px]:w-8 min-[2000px]:h-8 min-[3800px]:w-14 min-[3800px]:h-14" strokeWidth={2.5} />
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
