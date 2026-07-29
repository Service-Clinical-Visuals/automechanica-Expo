import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  iconType?: 'arrow' | 'arrowUpRight' | 'search' | 'none';
  variant?: 'primary' | 'outline' | 'white';
}

export default function Button({
  children,
  href,
  onClick,
  className = '',
  iconType = 'arrowUpRight',
  variant = 'primary'
}: ButtonProps) {
  const baseClasses = "group inline-flex items-center justify-center gap-2 px-7 py-3 transition-all duration-300 cursor-pointer  rounded-tr-[24px] rounded-bl-[24px]";
  
  const variantClasses = variant === 'primary'
    ? "bg-[var(--primary)] hover:bg-[#007a3a] text-white shadow-sm hover:shadow-md"
    : variant === 'white'
    ? "bg-white text-[var(--primary)] hover:bg-gray-100 shadow-sm hover:shadow-md"
    : "bg-transparent border border-gray-300 text-[#333] hover:border-[var(--primary)] hover:text-[var(--primary)]";

  const Content = (
    <>
      <span className="overpass-font btn-text tracking-wide font-normal">{children}</span>
      {iconType !== 'none' && (
        <span className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          {iconType === 'search' ? (
            <Search size={18} strokeWidth={2.5} />
          ) : (
            <ArrowUpRight size={18} strokeWidth={2.5} />
          )}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {Content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {Content}
    </button>
  );
}
