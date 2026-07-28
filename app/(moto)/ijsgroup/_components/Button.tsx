import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
}

export default function Button({ children, href, className = '', variant = 'primary', onClick }: ButtonProps) {
  // Base classes include the open-sans font, standard sizing, and the btn-contact clip-path class for the chamfered corner
  const baseClasses = "inline-flex items-center justify-center px-8 py-3.5 open-sans-font btn-text font-semibold transition-colors btn-contact";
  
  const variants = {
    primary: "bg-[#247EA3] text-white hover:bg-[#1a5b75] border-1 border-white ",
    outline: "border border-white text-white hover:bg-white hover:text-[#004D73]"
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
