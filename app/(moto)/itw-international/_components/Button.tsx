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
  // Use btn-text which is globally defined for responsive sizing
  const baseStyles = "inline-flex items-center justify-center rounded-2xl transition-all duration-300 font-oswald btn-text px-[30px] py-[12px]  ";
  
  const variants = {
    primary: "bg-[#1a1a1a] text-white hover:bg-black",
    secondary: "bg-white text-[#1a1a1a] hover:bg-gray-100",
    outline: "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white",
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
