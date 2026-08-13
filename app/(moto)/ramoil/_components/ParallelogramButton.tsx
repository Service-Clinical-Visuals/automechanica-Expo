import React from "react";

type Size = "sm" | "md" | "lg";

const sizeConfig: Record<Size, { width: number; height: number; path: string; px: string }> = {
  sm: {
    width: 160,
    height: 40,
    path: "M10,0 L148,0 Q160,0 155,11 L140,40 L10,40 Q0,40 0,30 L0,10 Q0,0 10,0 Z",
    px: "px-6",
  },
  md: {
    width: 200,
    height: 44,
    path: "M10,0 L188,0 Q200,0 194,11 L176,44 L10,44 Q0,44 0,34 L0,10 Q0,0 10,0 Z",
    px: "px-7",
  },
  lg: {
    width: 240,
    height: 50,
    path: "M12,0 L228,0 Q240,0 234,11 L214,50 L12,50 Q0,50 0,38 L0,12 Q0,0 12,0 Z",
    px: "px-8",
  },
};

interface ParallelogramButtonProps {
  children: React.ReactNode;
  size?: Size;
  fill?: string;
  textClassName?: string;
  onClick?: () => void;
  className?: string;
}

export default function ParallelogramButton({
  children,
  size = "md",
  fill = "#00437A",
  textClassName = "heading-white text-[22px]! font-normal!",
  onClick,
  className = "",
}: ParallelogramButtonProps) {
  const { width, height, path, px } = sizeConfig[size];
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity ${className}`}
      style={{ minWidth: width, height }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill={fill} />
      </svg>
      <span className={`relative z-10 ${textClassName} ${px}`}>{children}</span>
    </button>
  );
}
