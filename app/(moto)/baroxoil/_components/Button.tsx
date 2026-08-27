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
  const baseClasses = "inline-flex items-center justify-center bg-[#F79320] text-white font-normal odibee-sans-font btn-text px-8 py-0.5 rounded-md hover:bg-[#d97c11] transition-colors tracking-wide";
  
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
