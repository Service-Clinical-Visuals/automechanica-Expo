import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center btn-text teko-font  transition-all duration-300 rounded-lg px-6 py-2 tracking-wide";

  const variants = {
    primary: "bg-[#cb1020] text-white hover:bg-[#a00c19]",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
