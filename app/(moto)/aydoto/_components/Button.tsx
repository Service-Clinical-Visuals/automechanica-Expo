"use client";
import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
  variant?: "primary" | "white";
}

export default function Button({
  children,
  href,
  className = "",
  onClick,
  showArrow = true,
  variant = "primary",
}: ButtonProps) {
  const isWhite = variant === "white";

  const content = (
    <div
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-lg transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${
        isWhite
          ? "bg-white hover:bg-gray-100 text-[#01195d]"
          : "bg-[#01195d] hover:bg-[#022486] text-white"
      } ${className}`}
    >
      <span className="oswald-font btn-text font-medium tracking-wide">
        {children}
      </span>
      {showArrow && (
        <span className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
          <img
            src="/moto/aydoto/btnarw.png"
            alt="arrow"
            className={`w-5 h-auto object-contain ${
              isWhite ? "brightness-0" : "brightness-0 invert"
            }`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <svg
            className="w-4 h-4 ml-0.5 hidden group-hover:inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="inline-block">{content}</Link>;
  }

  return content;
}
