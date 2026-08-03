import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type Color = 'primary' | 'secondary' | 'heading' | 'para' | 'dark' | 'white' | 'muted' | 'none';
type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';

interface TypographyProps {
  variant?: Variant;
  color?: Color;
  weight?: Weight;
  className?: string;
  children: React.ReactNode;
}

export default function Typography({
  variant = 'p',
  color = 'none',
  weight,
  className = '',
  children,
  outline = false,
  ...props
}: TypographyProps & { outline?: boolean } & React.HTMLAttributes<HTMLElement>) {
  const Component = variant;

  const colorClasses: Record<Color, string> = {
    primary: 'text-[var(--color-primary)]',
    secondary: 'text-[var(--color-secondary)]',
    heading: 'text-[var(--color-heading)]',
    para: 'text-[var(--color-para)]',
    dark: 'text-[var(--color-heading)]',
    white: '!text-white text-white',
    muted: 'text-[var(--color-para)]',
    none: '',
  };

  const weightClasses: Record<Weight, string> = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };

  const outlineClass = outline ? 'text-outline' : '';

  const finalClassName = `${colorClasses[color]} ${weight ? weightClasses[weight] : ''} ${outlineClass} ${className}`.trim();

  const dynamicStyle = {
    ...(color === 'white' ? { color: '#FFFFFF' } : {}),
    ...props.style,
  };

  return React.createElement(Component, { className: finalClassName, style: dynamicStyle, ...props }, children);
}
