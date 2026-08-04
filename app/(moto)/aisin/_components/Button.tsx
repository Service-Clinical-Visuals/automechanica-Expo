import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'outline-primary' | 'outline-white';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = 'outline-primary', className = '', onClick }: ButtonProps) {
  const baseClasses = "flex items-center justify-center border px-6 lg:px-8 py-2.5 lg:py-3 transition-colors w-fit rounded-[4px]";
  
  const variants = {
    'outline-primary': "border-primary text-primary ",
    'outline-white': "border-white text-white ",
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  
  const content = (
    <>
      <span className="btn-text font-manrope font-semibold mr-2">{children}</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
