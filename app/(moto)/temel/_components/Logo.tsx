import React from "react";

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export default function Logo({ className = "h-10 md:h-12 w-auto", isDark = false }: LogoProps) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/moto/temel/temel-logo.png"
        alt="Temel Conta Logo"
        className={`h-full w-auto object-contain max-h-12 ${isDark ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}
