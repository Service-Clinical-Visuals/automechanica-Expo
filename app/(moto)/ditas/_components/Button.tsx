import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  bgColor = "#ED1C24",
  textColor = "#FFFFFF",
  hasArrow = true,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseClasses = `btn-shape btn-text inline-flex items-center justify-center gap-2 px-6 h-[50px] whitespace-nowrap transition-opacity duration-200 hover:opacity-90 ${className}`;
  const style = { backgroundColor: bgColor, color: textColor };

  const content = (
    <>
      {children}
      {hasArrow && <ArrowRight className="w-6 h-6" strokeWidth={2.5} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={baseClasses} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} style={style}>
      {content}
    </button>
  );
}