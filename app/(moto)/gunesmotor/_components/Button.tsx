"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, useState } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  showIcon?: boolean;
  className?: string;
}

export default function Button({
  label,
  href,
  bgColor = "transparent",
  textColor = "var(--color-text)",
  borderColor = "var(--color-accent)",
  showIcon = true,
  className = "",
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverTextColor = "#FFFFFF";
  const hoverArrowColor = "#FFFFFF";

  const currentBg = isHovered ? borderColor : bgColor;
  const currentText = isHovered ? hoverTextColor : textColor;
  const currentArrow = isHovered ? hoverArrowColor : borderColor;

  const content = (
    <motion.span
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        backgroundColor: currentBg,
        color: currentText,
        scale: isHovered ? 1.03 : 1,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        w-[150px]
        h-[48px]
        px-4
        rounded-[5px]
        border
        font-oswald
        font-semibold
        text-[16px]
        leading-[150%]
        whitespace-nowrap
        cursor-pointer

        sm:w-[160px]
        sm:h-[50px]
        sm:px-5
        sm:text-[17px]

        md:w-[168px]
        md:h-[52px]
        md:px-5
        md:text-[18px]

        xl:w-[176px]
        xl:h-[54px]
        xl:px-6
        xl:text-[18px]

        xl:w-[180px]
        xl:h-[56px]

        2xl:w-[185px]
        2xl:h-[58px]

        ${className}
      `}
      style={{
        borderColor,
      }}
    >
      <span className="whitespace-nowrap">{label}</span>

      {showIcon && (
        <motion.svg
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[12px] w-[15px] shrink-0 sm:h-[13px] sm:w-[16px] md:h-[13px] md:w-[17px] xl:h-[14px] xl:w-[18px]"
        >
          <motion.path
            animate={{ stroke: currentArrow }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            d="M1 7H16M16 7L10.5 1.5M16 7L10.5 12.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      )}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type="button" {...props}>
      {content}
    </button>
  );
}