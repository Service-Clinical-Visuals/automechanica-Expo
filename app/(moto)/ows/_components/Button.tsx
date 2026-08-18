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
  showIcon = false, 
}: ButtonProps) => {

  const content = (
    <div className={`relative inline-flex items-center justify-center px-8 py-2.5 group ${className}`}>
      {/* SVG Background for rounded polygon */}
      <svg 
        className="absolute inset-0 w-full h-full text-primary group-hover:text-[#85638a] transition-colors overflow-visible"
        preserveAspectRatio="none" 
        viewBox="0 0 100 100"
      >
        <polygon 
          points="12,0 88,0 100,50 88,100 12,100 0,50" 
          fill="currentColor" 
          stroke="currentColor" 
          strokeWidth="6" 
          strokeLinejoin="round" 
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      
      <div className={`relative z-10 button whitespace-nowrap text-white ${showIcon ? 'mr-3 sm:mr-4' : ''}`}>
        {text}
      </div>
      {showIcon && (
        <ArrowRight className="relative z-10 w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300 shrink-0" strokeWidth={2} />
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
