import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button 
      className={`bg-[#CF0A2C] text-white px-10 py-2 font-semibold btn-text hover:bg-[#b30824] transition-colors sora-font ${className}`}
      style={{ 
        clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)' 
      }}
      {...props}
    >
      {children}
    </button>
  );
}
