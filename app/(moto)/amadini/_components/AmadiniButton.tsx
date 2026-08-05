import React from "react";
import Link from "next/link";

interface AmadiniButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function AmadiniButton({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: AmadiniButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-2.5 font-normal btn-text transition-colors rounded-none rounded-tr-[24px] border";

  const variants = {
    primary: "bg-[#005484] text-white border-[#005484] hover:bg-[#003d61] hover:border-[#003d61]",
    secondary: "bg-white text-[#005484] border-white hover:bg-gray-50",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
