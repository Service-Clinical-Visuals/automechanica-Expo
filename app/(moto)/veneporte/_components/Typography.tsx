import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'p' | 'span' | 'button' | 'navbar' | 'footer-heading' | 'footer-body';
type Color = 'primary' | 'secondary' | 'dark' | 'white' | 'muted' | 'none';
type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';

type Font = 'oxanium' | 'poppins';

interface TypographyProps {
  variant?: Variant;
  color?: Color;
  weight?: Weight;
  font?: Font;
  className?: string;
  children: React.ReactNode;
}

export default function Typography({
  variant = 'p',
  color = 'dark',
  weight,
  font,
  className = '',
  children,
  outline = false,
  ...props
}: TypographyProps & { outline?: boolean; style?: React.CSSProperties } & React.HTMLAttributes<HTMLElement>) {
  
  // HTML tags to render for each variant
  const componentMap: Record<Variant, keyof React.JSX.IntrinsicElements> = {
    'h1': 'h1', 'h2': 'h2', 'h3': 'h3', 'h4': 'h4', 'h5': 'h5', 'h6': 'h6', 'h7': 'h6',
    'p': 'p', 'span': 'span', 'button': 'span', 'navbar': 'span', 'footer-heading': 'h4', 'footer-body': 'p'
  };
  
  const Component = componentMap[variant] || 'p';

  // Determine font family style
  let inlineStyle: React.CSSProperties = { ...props.style };
  
  if (font === 'oxanium') {
    inlineStyle.fontFamily = "'Oxanium', sans-serif";
  } else if (font === 'poppins') {
    inlineStyle.fontFamily = "'Poppins', sans-serif";
  } else {
    // Fallback defaults based on variant if no prop is provided
    inlineStyle.fontFamily = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'navbar', 'button', 'footer-heading'].includes(variant)
      ? "'Oxanium', sans-serif"
      : "'Poppins', sans-serif";
  }

  const colorClasses = {
    primary: 'text-[var(--color-primary)]',
    secondary: 'text-[var(--color-secondary)]',
    dark: 'text-[#1E1E1E]',
    white: 'text-white',
    muted: 'text-[#333333]',
    none: '',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };

  const outlineClass = outline ? (color === 'dark' || color === 'primary' ? 'text-outline-dark' : 'text-outline') : '';
  
  // Apply specific CSS class if variant requires it (like .button or .navbar)
  const variantCSSClass = ['button', 'navbar', 'footer-heading', 'footer-body'].includes(variant) ? variant : '';

  const finalClassName = `${variantCSSClass} ${colorClasses[color]} ${weight ? weightClasses[weight] : ''} ${outlineClass} ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, style: inlineStyle, ...props }, children);
}
