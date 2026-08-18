"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  hasArrow?: boolean;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  bgColor = "#003344",
  textColor = "#FFFFFF",
  hasArrow = false,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseClasses = `btn-shape btn-text inline-flex items-center justify-center gap-[10px] px-[39px] py-[13px] h-[46px] whitespace-nowrap transition-colors duration-200 ${className}`;
  const style = { backgroundColor: bgColor, color: textColor };

  const content = (
    <>
      {children}
      {hasArrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  const hoverAnimation = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2, ease: "easeOut" as const },
  };

  if (href) {
    return (
      <MotionLink href={href} onClick={onClick} className={baseClasses} style={style} {...hoverAnimation}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={baseClasses} style={style} {...hoverAnimation}>
      {content}
    </motion.button>
  );
}