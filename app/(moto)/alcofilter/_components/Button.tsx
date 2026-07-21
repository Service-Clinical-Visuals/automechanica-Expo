import Link from "next/link";
import React from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "solid-white";
  size?: "small" | "medium" | "large";
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-300 oswald-font font-medium  gap-2 btn-text";
  
  const variants = {
    primary:
      "bg-[#E10600] text-white hover:bg-[#b30500] border border-[#E10600] hover:border-[#b30500] rounded-xl",
    outline:
      "bg-transparent text-[#E10600] border-2 border-[#E10600] hover:bg-[#E10600] hover:text-white",
    "solid-white":
      "bg-[#E10600] text-white hover:bg-white hover:text-[#E10600] border border-[#E10600] hover:border-white",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-2 md:px-8 md:py-3 btn-text",
    large: "px-8 py-3 md:px-10 md:py-4 btn-text",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
