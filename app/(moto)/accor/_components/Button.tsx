import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, children, className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`group relative inline-flex items-center ${className} text-[15px] xl:text-[16px] `}>
      {/* Main Rectangular Body */}
      <div className="bg-[#E41B13] text-white px-[2em] py-[0.85em] oxanium font-semibold tracking-wide transition-colors group-hover:bg-[#cc181f] pr-[2.5em] text-[inherit]">
        {children}
      </div>
      
      {/* Circular Arrow Overlapping Right Edge */}
      <div className="absolute right-0 translate-x-[40%] flex items-center justify-center w-[2.5em] h-[2.5em] rounded-full bg-[#E41B13] border-[1.5px] border-white shadow-sm transition-colors group-hover:bg-[#cc181f] z-10">
        <img 
          src="/moto/accorLubricants/arrow.png" 
          alt="Arrow" 
          className="w-[35%] h-[35%] object-contain"
        />
      </div>
    </Link>
  );
}
