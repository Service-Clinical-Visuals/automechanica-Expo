import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  variant?: 'outline' | 'solid-gold' | 'solid-white';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ href, variant = 'outline', children, className = '', onClick }: ButtonProps) {
  let baseClass = "btn-text oswald font-semibold transition-colors flex items-center justify-center ";
  
  if (variant === 'outline') {
    baseClass += "px-6 py-2 border border-white text-white bg-transparent hover:bg-white hover:text-[var(--primary)]  rounded-xl";
  } else if (variant === 'solid-gold') {
    baseClass += "px-6 py-2 bg-[#d8a341] text-white hover:bg-[#c49136] rounded-tl-2xl rounded-br-2xl  ";
  } else if (variant === 'solid-white') {
    baseClass += "px-8 py-3 bg-white text-[var(--primary)] hover:bg-gray-200 rounded-tl-2xl rounded-br-2xl ";
  }

  const combinedClassName = `${baseClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
