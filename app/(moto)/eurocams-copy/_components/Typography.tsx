import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type Color = 'primary' | 'secondary' | 'dark' | 'white' | 'muted' | 'none';
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
  color = 'dark',
  weight,
  className = '',
  children,
}: TypographyProps) {
  const Component = variant;

  const isHeading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant);
  const fontClass = 'font-rajdhani';

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    dark: 'text-[#484848]',
    white: 'text-white',
    muted: 'text-gray-500',
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

  const finalClassName = `${fontClass} ${colorClasses[color]} ${weight ? weightClasses[weight] : ''} ${className}`.trim();

  return React.createElement(Component, { className: finalClassName }, children);
}
