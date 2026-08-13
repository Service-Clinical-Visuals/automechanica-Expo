"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "k2" | "primary" | "outline" | "whiteOutline";
  className?: string;
}

const Button = ({
  text,
  href,
  onClick,
  variant = "k2",
  className = "",
}: ButtonProps) => {
  // Default K2 style — solid red, white Poppins text, white diamond with arrow on right
  if (variant === "k2") {
    const content = (
      <>
        <span className="pl-6 pr-2 py-2.5 text-white font-poppins font-semibold text-sm tracking-wide">
          {text}
        </span>
        <span className="pr-4 pl-2 flex items-center justify-center shrink-0">
          <span className="relative w-[26px] h-[26px] bg-white border border-gray-400 rotate-45 flex items-center justify-center transition-transform duration-300 group-hover:rotate-0">
            <span className="transition-transform duration-300 -rotate-45 group-hover:rotate-0 flex items-center justify-center text-dark">
              <ArrowRight size={13} strokeWidth={2.5} />
            </span>
          </span>
        </span>
      </>
    );

    const finalStyles = `group bg-primary hover:bg-primary-hover inline-flex items-center justify-between overflow-hidden rounded-none shadow-sm hover:shadow-md transition-all duration-300 active:scale-[0.98] cursor-pointer select-none h-[44px] ${className}`;

    if (href) {
      return (
        <Link href={href} className={finalStyles}>
          {content}
        </Link>
      );
    }

    return (
      <button type="button" onClick={onClick} className={finalStyles}>
        {content}
      </button>
    );
  }

  // Secondary variants
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg py-3 px-8 rounded-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 px-8 rounded-md",
    whiteOutline: "border-2 border-white text-white hover:bg-white hover:text-dark py-3 px-8 rounded-md",
  };

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      <span>{text}</span>
      <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  );

  const finalStyles = `group inline-flex items-center justify-center font-poppins font-semibold text-sm tracking-wide transition-all duration-300 active:scale-[0.98] select-none cursor-pointer ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={finalStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={finalStyles}>
      {content}
    </button>
  );
};

export default Button;
