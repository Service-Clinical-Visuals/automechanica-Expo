import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'tab-active' | 'tab-inactive';
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  showArrow = false,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-md oswald font-semibold transition-colors btn-text";
  
  const variantClasses = {
    primary: "bg-[#ed1c24] text-white hover:bg-red-700 px-6 py-2.5",
    'tab-active': "bg-[#ed1c24] text-white px-6 py-2.5",
    'tab-inactive': "bg-[#ffdfdf] text-[#4b5563] hover:bg-[#ffcfcf] px-6 py-2.5",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {content}
    </button>
  );
}
