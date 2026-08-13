import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type Color = 'primary' | 'secondary' | 'dark' | 'white' | 'muted' | 'none';
type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';

type Font = 'oswald' | 'lato';

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
  const Component = variant;

  // Determine font family style
  let inlineStyle: React.CSSProperties = { ...props.style };
  
  if (font === 'oswald') {
    inlineStyle.fontFamily = "'Oswald', sans-serif";
  } else if (font === 'lato') {
    inlineStyle.fontFamily = "'Lato', sans-serif";
  } else {
    // Fallback defaults based on variant if no prop is provided
    inlineStyle.fontFamily = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'navbar'].includes(variant)
      ? "'Oswald', sans-serif"
      : "'Lato', sans-serif";
  }

  // Map variants to specific fonts (Oswald for headers, Lato for body)
  let fontClass = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'navbar'].includes(variant) 
    ? 'font-primary' 
    : 'font-secondary';

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

  const finalClassName = `${fontClass} ${colorClasses[color]} ${weight ? weightClasses[weight] : ''} ${outlineClass} ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, style: inlineStyle, ...props }, children);
}
