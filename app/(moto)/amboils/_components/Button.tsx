import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'withArrow';
}

export default function Button({ children, href, className = '', onClick, variant = 'primary' }: ButtonProps) {
  
  if (variant === 'withArrow') {
    const content = (
      <div className={`flex items-center cursor-pointer group w-fit ${className}`} onClick={onClick}>
        <div className="bg-[#C99843] h-[50px] md:h-[60px] flex items-center px-8 z-10 relative ">
          <span className="teko-font text-white btn-text font-semibold tracking-wide pt-1">
            {children}
          </span>
        </div>
        <div className="w-[46px] md:w-[40px] h-[46px] md:h-[40px] bg-[#C99843] rounded-full border-[2px] border-white flex items-center justify-center -ml-[23px] md:-ml-[15px] z-20 transition-transform duration-300 group-hover:translate-x-1 relative">
          <img src="/moto/amboils/bt2.png" alt="arrow" className="w-[8px] md:w-[10px] h-auto object-contain ml-[2px]" />
        </div>
      </div>
    );

    if (href) {
      return <Link href={href}>{content}</Link>;
    }
    return content;
  }

  // Primary Button (Screenshot 2 style with rounded top-right)
  const content = (
    <div className={`flex items-center cursor-pointer group w-fit ${className}`} onClick={onClick}>
      <div className="bg-[#C99843] h-[46px] md:h-[48px] flex items-center px-6 md:px-8 rounded-tr-[22px] md:rounded-tr-[26px] hover:bg-[#b08436] transition-colors gap-3">
        <span className="teko-font text-white btn-text font-semibold tracking-wide pt-1">
          {children}
        </span>
        <img src="/moto/amboils/bt1.png" alt="arrow" className="w-[12px] md:w-[14px] h-auto object-contain transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
