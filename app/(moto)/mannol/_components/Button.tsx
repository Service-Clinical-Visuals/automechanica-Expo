import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({ href, children, className = "", onClick, type = "button" }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center bg-[#FFC107] text-[#1F2A44] font-semibold sora-font btn-text px-8 py-3 hover:bg-[#e0a800] transition-colors ";
  
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
