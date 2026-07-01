import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-outline" | "white-outline";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary-outline",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "font-semibold px-8 py-2 transition-colors exo2  btn-text rounded-xs shrink-0 inline-flex items-center justify-center cursor-pointer ";
  
  const variantStyles = {
    "primary-outline": "border-2 border-[#F1AA1D] text-black hover:bg-[#A27F41] hover:text-white",
    "white-outline": "border-2 border-white text-white hover:bg-white hover:text-black exo2",
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
