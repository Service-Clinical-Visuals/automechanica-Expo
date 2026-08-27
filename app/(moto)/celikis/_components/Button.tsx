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
  const baseStyles = "inline-flex items-center justify-center rounded-[5px] transition-all duration-300 font-cabin btn-text px-[30px] py-[12px] font-semibold ";
  
  const variants = {
    primary: "bg-[#005CA9] text-white hover:bg-blue-800",
    secondary: "bg-white text-[#005CA9] hover:bg-gray-100",
    outline: "border border-[#005CA9] text-[#005CA9] hover:bg-[#005CA9] hover:text-white",
    "solid-white": "bg-white text-gray-900 hover:bg-gray-100",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {hasArrow && (
        <img src="/moto/celikis/btnarow.png" alt="arrow-right" className="w-[18px] h-[18px] ml-4 transition-transform group-hover:translate-x-1" />
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
