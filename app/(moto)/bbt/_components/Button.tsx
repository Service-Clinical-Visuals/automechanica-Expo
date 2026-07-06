"use client";

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'outline-blue' | 'outline-white';
  onClick?: () => void;
}

export default function Button({ 
  href, 
  children, 
  className = "", 
  variant = 'outline-blue',
  onClick
}: ButtonProps) {
  
  const baseClasses = "group inline-flex items-center justify-center gap-3 px-4 py-1.5 font-medium btn-text transition-all oswald";
  
  let variantClasses = "";
  let iconFilter = "";
  
  if (variant === 'outline-blue') {
    variantClasses = "border-2 border-[#0c3274] text-[#333333] hover:bg-[#0c3274] hover:text-white";
    // Blue arrow default, white on hover
    iconFilter = "filter invert-36 sepia-59 saturate-2735 hue-rotate-203 brightness-41 contrast-102 group-hover:filter-none group-hover:brightness-0 group-hover:invert";
  } else if (variant === 'outline-white') {
    variantClasses = "border-2 border-white text-white hover:bg-white hover:text-[#0c3274]";
    // White arrow default, blue on hover
    iconFilter = "brightness-0 invert group-hover:filter-none group-hover:invert-36 group-hover:sepia-59 group-hover:saturate-2735 group-hover:hue-rotate-203 group-hover:brightness-41 group-hover:contrast-102";
  }

  const content = (
    <>
      <span>{children}</span>
      <img 
        src="/moto/bbt/btnarrow.png" 
        alt="Arrow" 
        className={`w-4 h-4 object-contain transition-all ${iconFilter}`} 
        style={variant === 'outline-blue' ? { filter: "brightness(0) saturate(100%) invert(18%) sepia(85%) saturate(2222%) hue-rotate(208deg) brightness(88%) contrast(97%)" } : {}}
      />
    </>
  );



  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
        {/* We use a span for the text to apply font, but it's applied to the link */}
        <span className="flex-1 oswald font-medium btn-text">{children}</span>
       
        {variant === 'outline-blue' ? (
          <span className="relative w-5 h-5 flex items-center justify-center">
            {/* Blue arrow (default) */}
            <img src="/moto/bbt/btnarrow.png" alt="Arrow" className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0" style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(85%) saturate(2222%) hue-rotate(208deg) brightness(88%) contrast(97%)" }} />
            {/* White arrow (hover) */}
            <img src="/moto/bbt/btnarrow.png" alt="Arrow" className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 brightness-0 invert" />
          </span>
        ) : (
          <span className="relative w-5 h-5 flex items-center justify-center">
             {/* White arrow (default) */}
             <img src="/moto/bbt/btnarrow.png" alt="Arrow" className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0 brightness-0 invert" />
             {/* Blue arrow (hover) */}
             <img src="/moto/bbt/btnarrow.png" alt="Arrow" className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(85%) saturate(2222%) hue-rotate(208deg) brightness(88%) contrast(97%)" }} />
          </span>
        )}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
      <span className="flex-1">{children}</span>
      {variant === 'outline-blue' ? (
        <span className="relative w-4 h-4 flex items-center justify-center">
          <img src="/moto/bbt/btnarrow.png" alt="Arrow" className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0" style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(85%) saturate(2222%) hue-rotate(208deg) brightness(88%) contrast(97%)" }} />
          <img src="/moto/bbt/btnarrow.png" alt="Arrow" className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 brightness-0 invert" />
        </span>
      ) : (
        <span className="relative w-4 h-4 flex items-center justify-center">
           <img src="/moto/bbt/btnarrow.png" alt="Arrow" className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0 brightness-0 invert" />
           <img src="/moto/bbt/btnarrow.png" alt="Arrow" className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ filter: "brightness(0) saturate(100%) invert(18%) sepia(85%) saturate(2222%) hue-rotate(208deg) brightness(88%) contrast(97%)" }} />
        </span>
      )}
    </button>
  );
}
