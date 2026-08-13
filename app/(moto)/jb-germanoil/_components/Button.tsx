"use client";
import React from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  showIcon?: boolean;
  iconType?: "search" | "arrowUpRight";
}

export default function Button({
  children,
  href,
  className = "",
  onClick,
  showIcon = true,
  iconType = "search",
}: ButtonProps) {
  const content = (
    <div
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-tl-[20px] rounded-br-[20px] rounded-tr-sm rounded-bl-sm transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md bg-[var(--primary)] hover:bg-[#c91d20] text-white ${className}`}
    >
      <span className="akshar-font btn-text tracking-wide font-normal">
        {children}
      </span>
      {showIcon && (
        <span className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 pl-2">
          {iconType === "search" ? (
            <Search size={18} strokeWidth={2.5} />
          ) : (
           <img src="/moto/jb-germanoil/btnarw.png" alt="arw" />
          )}
        </span>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="inline-block">{content}</Link>;
  }

  return content;
}
