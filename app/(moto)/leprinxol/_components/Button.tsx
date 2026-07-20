import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'outline-white' | 'solid-white' | 'red' | 'blue';
  size?: 'normal' | 'large';
  rounded?: 'md' | 'full';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'normal',
  rounded = 'md',
  className = '',
  type = 'button',
}: ButtonProps) {
  const paddingClass = size === 'large' ? 'px-10 btn-text' : 'px-8 btn-text';
  const roundedClass = rounded === 'full' ? 'rounded-full' : 'rounded-md';
  const baseClasses = `inline-flex items-center justify-center font-normal transition-all duration-300 sora-font ${paddingClass}btn-text  py-2.5 `;
  
  const variants = {
    'primary': "bg-[#0D3374] text-white hover:bg-[#092556] shadow-[3px_4px_8px_rgba(0,0,0,0.35)]",
    'outline-white': "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0D3374]",
    'solid-white': "bg-white text-[#0D3374] hover:bg-gray-100 shadow-[3px_4px_8px_rgba(0,0,0,0.2)]",
    'red': "bg-[#D82222] text-white hover:bg-red-700 shadow-sm",
    'blue': "bg-[#004F9F] text-white hover:bg-[#003d7a] shadow-[3px_4px_8px_rgba(0,0,0,0.35)]",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
