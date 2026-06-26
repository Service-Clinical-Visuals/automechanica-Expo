import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, children, className = "" }: ButtonProps) {
  return (
    <Link 
      href={href}
      className={`inline-block bg-[#CE0E2D] hover:bg-[#a50b24] text-white px-8 py-2 font-semibold !oxanium text-base transition-colors [clip-path:polygon(0_0,100%_0,100%_calc(100%-22px),calc(100%-22px)_100%,0_100%)] shadow-lg tracking-wide ${className}`}
    >
      {children}
    </Link>
  );
}
