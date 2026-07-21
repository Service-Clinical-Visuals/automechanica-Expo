import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline-white' | 'solid-white';
  size?: 'normal' | 'large';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  showArrow?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'normal',
  className = '',
  type = 'button',
  icon,
  showArrow = false,
}: ButtonProps) {
  const paddingClass = size === 'large' ? 'px-8 py-3' : 'px-6 py-2 btn-text';
  const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-300 exo-font rounded-md font-semibold gap-3 ${paddingClass}`;
  
  const variants = {
    'primary': "bg-[var(--color-primary)] text-white hover:bg-blue-800 shadow-md",
    'secondary': "bg-[var(--color-secondary)] text-white hover:bg-[#b01c13] shadow-md", // Adjusted red hover
    'outline-white': "bg-transparent border border-white text-white hover:bg-white hover:text-[var(--color-primary)]",
    'solid-white': "bg-white text-[var(--color-primary)] hover:bg-gray-100 shadow-md",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const renderContent = () => (
    <>
      {children}
      {icon && <img src={icon} alt="" className="w-4 h-4 object-contain" />}
      {showArrow && !icon && (
        <img src="/moto/liqui-moly/btnarrow.png" alt="" className="w-3.5 h-3.5 object-contain" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {renderContent()}
    </button>
  );
}
