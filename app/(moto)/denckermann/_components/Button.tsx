"use client";
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ text, onClick, className = "" }: ButtonProps) {
  return (
    <div 
      onClick={onClick}
      className="inline-flex items-center cursor-pointer group"
    >
      <div className={`px-6 h-[40px] md:h-[46px] bg-[var(--color-primary)] border-2 border-white flex items-center justify-center rounded-l-md relative z-0 ${className}`}>
        <span className="btn-text text-white font-normal oswald">{text}</span>
      </div>
      <div className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] bg-[var(--color-secondary)]  flex items-center justify-center rounded-md -ml-2 relative z-10 group-hover:bg-[#e59e15] transition-colors shadow-sm">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="19" x2="19" y2="5"></line>
          <polyline points="9 5 19 5 19 15"></polyline>
        </svg>
      </div>
    </div>
  );
}
