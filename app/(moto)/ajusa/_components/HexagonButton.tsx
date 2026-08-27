"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';

interface HexagonButtonProps {
  text?: string;
  href?: string;
  type?: 'button' | 'search';
  onClick?: () => void;
  className?: string;
  containerClassName?: string;
  icon?: React.ReactNode;
}

export default function HexagonButton({ 
  text = "Discover The Benefits", 
  href, 
  type = 'button',
  onClick,
  className = "",
  containerClassName = "",
  icon,
  transparentStroke = false
}: HexagonButtonProps & { transparentStroke?: boolean }) {
  const isSearch = type === 'search';
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  // Use a hexagon shape with points on top and bottom (rotated 90 degrees)
  const fillPath = "M12 2L22 7V17L12 22L2 17V7Z";
  // Apply stroke to the left half to separate from the rectangle
  const strokePath = "M12 2L2 7V17L12 22";

  // When transparentStroke is true, we physically cut the right edge of the red rectangle
  // to mirror the shape of the hexagon, creating a real CSS gap for the video to shine through.
  const cutClass = transparentStroke 
    ? "[--cut-depth:17.5px] [--cut-top:25.7%] [--cut-bottom:74.3%] lg:[--cut-depth:21px] lg:[--cut-top:25.2%] lg:[--cut-bottom:74.8%]" 
    : "";
  const clipStyle = transparentStroke 
    ? { clipPath: 'polygon(0 0, 100% 0, 100% 0%, calc(100% - var(--cut-depth)) var(--cut-top), calc(100% - var(--cut-depth)) var(--cut-bottom), 100% 100%, 100% 100%, 0 100%)' } 
    : {};

  if (isSearch) {
    const marginLeft = transparentStroke ? "-ml-[20px] lg:-ml-[23px]" : "-ml-[16px] lg:-ml-[25px]";
    return (
      <div className={`flex items-center relative ${containerClassName}`}>
         {/* Rectangle part */}
         <div className={`bg-[#E72E39] h-[36px] lg:h-[42px] flex items-center pl-4 pr-5 lg:pr-7 z-10 relative ${cutClass}`} style={clipStyle}>
            <input 
              type="text" 
              placeholder="Search Here....." 
              className={`bg-transparent text-white placeholder:text-white/90 border-none outline-none header-link ${className}`}
            />
         </div>
         {/* Hexagon part */}
         <div className={`relative flex items-center justify-center z-20 cursor-pointer hover:scale-105 transition-transform ${marginLeft}`}>
            <div className="relative w-[42px] h-[42px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full text-[#E72E39]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d={fillPath} />
                {!transparentStroke && (
                  <path d={strokePath} stroke="#000000" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="miter"/>
                )}
              </svg>
              <div className="relative z-10 text-white flex items-center justify-center">
                {icon || <Search size={18} strokeWidth={2.5} />}
              </div>
            </div>
         </div>
      </div>
    );
  }

  // Regular button
  const marginLeft = transparentStroke ? "-ml-[20px] lg:-ml-[23px]" : "-ml-[15px] lg:-ml-[25px]";
  const ButtonContent = (
    <div className={`flex items-center relative group cursor-pointer w-fit ${containerClassName}`}>
       {/* Rectangle part */}
       <div className={`bg-[#E72E39] h-[38px] lg:h-[44px] flex items-center pl-6 pr-5 lg:pr-7 z-10 relative transition-colors group-hover:bg-red-700 ${cutClass}`} style={clipStyle}>
          <span className={`btn-text text-white font-medium whitespace-nowrap tracking-wide ${className}`}>{text}</span>
       </div>
       {/* Hexagon part */}
       <div className={`relative flex items-center justify-center z-20 ${marginLeft}`}>
          <div className="relative w-[46px] h-[46px] lg:w-[50px] lg:h-[50px] flex items-center justify-center group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full text-[#E72E39] transition-colors group-hover:text-red-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d={fillPath} />
              {!transparentStroke && (
                <path d={strokePath} stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="miter"/>
              )}
            </svg>
            <div className="relative z-10 text-white group-hover:translate-x-1 transition-transform flex items-center justify-center">
              {icon || <ArrowRight size={20} strokeWidth={2.5} />}
            </div>
          </div>
       </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{ButtonContent}</Link>;
  }

  return <button onClick={onClick} className="border-none bg-transparent p-0 m-0 outline-none hover:opacity-100">{ButtonContent}</button>;
}
