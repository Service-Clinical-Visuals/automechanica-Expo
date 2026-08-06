import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ href, children, className = "px-8 py-3", onClick }: ButtonProps) {
  const baseClasses = "bg-[var(--primary-color)] text-white adlam-font btn-text rounded-full hover:bg-blue-600 transition-colors inline-block text-center";
  
  if (onClick || !href) {
    return (
      <button onClick={onClick} className={`${baseClasses} ${className}`}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${className}`}>
      {children}
    </Link>
  );
}
