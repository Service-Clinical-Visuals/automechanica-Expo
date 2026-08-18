import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "solid-white";
  className?: string;
  onClick?: () => void;
  hasArrow?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  hasArrow = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg transition-all duration-300 font-oswald btn-text font-medium px-[30px] py-[8px]";
  
  const variants = {
    primary: "bg-[var(--primary)] text-white hover:opacity-90",
    secondary: "bg-[#1a1a1a] text-white hover:bg-black",
    outline: "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
    "solid-white": "bg-white text-gray-900 hover:bg-gray-100",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {hasArrow && (
        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2} />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${combinedClassName} group`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${combinedClassName} group`}>
      {content}
    </button>
  );
}
