"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  hasArrow?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  hasArrow = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-300 sora btn-text";

  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90 px-6 py-3",
    secondary: "bg-white text-primary hover:bg-gray-50 px-6 py-3",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {hasArrow && <ArrowRight className="ml-2 w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
}
