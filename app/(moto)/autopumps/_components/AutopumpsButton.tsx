import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AutopumpsButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
}

export default function AutopumpsButton({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  showArrow = true,
}: AutopumpsButtonProps) {
  
  const variants = {
    primary: {
      bg: "bg-[#064da1]",
      text: "text-white",
      hoverBg: "group-hover:bg-[#053d82]",
      iconBg: "bg-[#00a3e0]",
      iconHoverBg: "group-hover:bg-[#0091c8]",
      iconColor: "text-white"
    },
    secondary: {
      bg: "bg-white",
      text: "text-[#064da1]",
      hoverBg: "group-hover:bg-gray-100",
      iconBg: "bg-[#00a3e0]",
      iconHoverBg: "group-hover:bg-[#0091c8]",
      iconColor: "text-white"
    }
  };

  const selectedVariant = variants[variant];

  const content = (
    <div className="inline-flex items-center group cursor-pointer pt-2 pb-2 pr-2">
      {/* Main text box */}
      <div className={`flex items-center justify-center h-[46px] pl-6 ${showArrow ? 'pr-5' : 'pr-6'} rounded-[8px] z-10 transition-colors shadow-sm ${selectedVariant.bg} ${selectedVariant.text} ${selectedVariant.hoverBg}`}>
        <span className="font-semibold tracking-wide btn-text ">{children}</span>
      </div>
      
      {/* Arrow Diamond */}
      {showArrow && (
        <div className="relative -ml-3 z-20 flex items-center justify-center">
          <div className={`w-10 h-10 rounded-[10px] rotate-45 flex items-center justify-center transition-colors shadow-md ${selectedVariant.iconBg} ${selectedVariant.iconHoverBg}`}>
            <ArrowRight size={22} strokeWidth={2.5} className={`-rotate-45 ${selectedVariant.iconColor}`} />
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={`inline-block ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`inline-block ${className}`}>
      {content}
    </button>
  );
}
