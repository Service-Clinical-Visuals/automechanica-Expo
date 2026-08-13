"use client";

import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "body" | "lead" | "small";
  as?: React.ElementType;
  className?: string;
  color?: "primary" | "dark" | "body" | "white" | "muted" | "none";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  align?: "left" | "center" | "right" | "justify";
}

export default function Typography({
  children,
  variant = "body",
  as,
  className = "",
  color = "body",
  weight,
  align,
  ...rest
}: TypographyProps) {
  const defaultTags: Record<string, React.ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    h7: "span",
    body: "p",
    lead: "p",
    small: "span",
  };

  const Component = as || defaultTags[variant] || "p";

  const variantStyles = {
    h1: "text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1] tracking-tight",
    h2: "text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[1.15] tracking-tight",
    h3: "text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[38px] leading-[1.2] tracking-tight",
    h4: "text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[1.3]",
    h5: "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22px] leading-[1.4]",
    h6: "text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] leading-[1.5]",
    h7: "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[15px] leading-[1.5]",
    body: "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.6]",
    lead: "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] xl:text-[22px] leading-[1.6]",
    small: "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[13px] leading-[1.5]",
  };

  const colorStyles = {
    primary: "text-primary",
    dark: "text-dark",
    body: "text-[#484848]",
    white: "text-white",
    muted: "text-gray-400",
    none: "",
  };

  const weightStyles = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  const isHeading = ["h1", "h2", "h3", "h4", "h5", "h6", "h7"].includes(variant);
  const fontClass = className.includes("font-") ? "" : (isHeading ? "font-montserrat" : "font-inter");

  const defaultWeights: Record<string, "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold"> = {
    h1: "semibold",
    h2: "semibold",
    h3: "semibold",
    h4: "semibold",
    h5: "semibold",
    h6: "semibold",
    h7: "semibold",
    body: "normal",
    lead: "normal",
    small: "normal",
  };

  const activeWeight = weight || defaultWeights[variant] || "normal";

  const combinedClasses = `
    ${fontClass}
    ${variantStyles[variant]}
    ${colorStyles[color]}
    ${weightStyles[activeWeight]}
    ${align ? alignStyles[align] : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <Component className={combinedClasses} {...rest}>
      {children}
    </Component>
  );
}
